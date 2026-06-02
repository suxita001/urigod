/* ════════════════════════════════════════════════
   URIGOD.GE — Price Calculator
   calculator.js  — ჩასვით js/ ფოლდერში

   მუშაობს menu.html-ში.
   გამოყენება: RESTAURANT ობიექტი უნდა იყოს
   ჩატვირთული (data.js) ამ სკრიპტამდე.
   ════════════════════════════════════════════════ */

const UrigodCalc = (() => {
  /* ── State ──────────────────────────────────── */
  // items: Map<key, { name, price (number), qty }>
  // key = "catId::itemIndex"  (unique per restaurant page)
  const items = new Map();
  let isOpen = false;

  /* ── Helpers ────────────────────────────────── */
  const ka = () => (typeof LANG_GET === 'function' ? LANG_GET() : 'ka') === 'ka';

  // Parse ფასი — "34 ₾", "34.5₾", "34" → 34.5
  function parsePrice(str) {
    if (!str) return 0;
    const n = parseFloat(String(str).replace(/[^\d.]/g, ''));
    return isNaN(n) ? 0 : n;
  }

  // ფორმატერი: აშორებს ზედმეტ ნულებს ათწილადს, მაგ: 1.50 -> 1.5, 12.00 -> 12
  function formatPrice(num) {
    return Number(num.toFixed(2)).toString();
  }

  // სერვის საკომისიო — RESTAURANT.serviceCharge (0–100)
  function getCharge() {
    if (typeof RESTAURANT === 'undefined') return 0;
    return parseFloat(RESTAURANT.serviceCharge) || 0;
  }

  // Locale-aware სახელი
  function getName(item) {
    if (!item.name) return '—';
    if (typeof item.name === 'string') return item.name;
    return ka() ? (item.name.ka || item.name.en || '—') : (item.name.en || item.name.ka || '—');
  }

  /* ── DOM refs (created lazily) ──────────────── */
  let $panel, $list, $badge, $trigger, $subtotal, $charge, $chargeRow,
    $total, $serviceNote, $headSub, $emptyMsg;

  /* ── Build HTML once ────────────────────────── */
  function buildUI() {
    const isKa = ka();

    // Trigger button — მრგვალი
    $trigger = document.createElement('button');
    $trigger.className = 'calc-trigger';
    $trigger.setAttribute('aria-label', isKa ? 'ფასების კალკულატორი' : 'Price Calculator');
    $trigger.innerHTML = `<span class="calc-badge" id="calcBadge"></span>🧮`;
    $trigger.addEventListener('click', toggle);
    document.body.appendChild($trigger);

    // Panel
    $panel = document.createElement('div');
    $panel.className = 'calc-panel';
    $panel.innerHTML = `
      <div class="calc-head">
        <div class="calc-head-ico">🧮</div>
        <div class="calc-head-info">
          <div class="calc-head-title" id="calcHeadTitle">${isKa ? 'ფასის კალკულატორი' : 'Price Calculator'}</div>
          <div class="calc-head-sub" id="calcHeadSub">${isKa ? 'კერძი არ არის არჩეული' : 'No items selected'}</div>
        </div>
        <button class="calc-head-close" id="calcClose" aria-label="Close">✕</button>
      </div>
      <div class="calc-list" id="calcList">
        <div class="calc-empty" id="calcEmpty">
          <div class="calc-empty-ico">🍽️</div>
          <div id="calcEmptyTxt">${isKa ? 'კერძები ჯერ არ გაქვს არჩეული.\nდააჭირე "+ დამატება" ნებისმიერ კერძზე.' : 'No items yet.\nTap "+ Add" on any dish.'}</div>
        </div>
      </div>
      <div class="calc-foot" id="calcFoot" style="display:none">
        <div class="calc-service-note" id="calcServiceNote"></div>
        <div class="calc-row">
          <span id="calcSubLbl">${isKa ? 'ჯამი' : 'Subtotal'}</span>
          <span id="calcSubtotal">0 ₾</span>
        </div>
        <div class="calc-row" id="calcChargeRow" style="display:none">
          <span id="calcChargeLbl">${isKa ? 'მომსახ. საკომ.' : 'Service fee'}</span>
          <span id="calcCharge">0 ₾</span>
        </div>
        <div class="calc-row total">
          <span id="calcTotalLbl">${isKa ? 'სავარ. ჯამი' : 'Est. Total'}</span>
          <span class="calc-total-val" id="calcTotal">0 ₾</span>
        </div>
        <button class="calc-clear" id="calcClear">
          🗑️ <span id="calcClearTxt">${isKa ? 'გასუფთავება' : 'Clear all'}</span>
        </button>
      </div>`;
    document.body.appendChild($panel);

    // Cache refs
    $badge       = document.getElementById('calcBadge');
    $list        = document.getElementById('calcList');
    $subtotal    = document.getElementById('calcSubtotal');
    $charge      = document.getElementById('calcCharge');
    $chargeRow   = document.getElementById('calcChargeRow');
    $total       = document.getElementById('calcTotal');
    $serviceNote = document.getElementById('calcServiceNote');
    $headSub     = document.getElementById('calcHeadSub');
    $emptyMsg    = document.getElementById('calcEmpty');

    document.getElementById('calcClose').addEventListener('click', close);
    document.getElementById('calcClear').addEventListener('click', clearAll);

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (isOpen && !$panel.contains(e.target) && !$trigger.contains(e.target)) close();
    });
  }

  /* ── Toggle ─────────────────────────────────── */
  function toggle() { isOpen ? close() : open(); }
  function open()   { isOpen = true;  $panel.classList.add('open');    updateUI(); }
  function close()  { isOpen = false; $panel.classList.remove('open'); }

  /* ── Add / remove items ─────────────────────── */
  function addItem(catId, itemIdx, item) {
    const key = `${catId}::${itemIdx}`;
    const price = parsePrice(item.price);
    if (items.has(key)) {
      items.get(key).qty++;
    } else {
      items.set(key, { name: getName(item), price, qty: 1 });
    }
    renderItems();
    refreshAddButtons();
    if (!isOpen) bounceOpen();
  }

  function removeItem(key) {
    const it = items.get(key);
    if (!it) return;
    if (it.qty > 1) it.qty--;
    else items.delete(key);
    renderItems();
    refreshAddButtons();
  }

  function clearAll() {
    items.clear();
    renderItems();
    refreshAddButtons();
  }

  /* ── Render list — in-place update (no collapse) ── */
  function renderItems() {
    const isKa = ka();
    const foot = document.getElementById('calcFoot');
    $emptyMsg.style.display = items.size === 0 ? 'block' : 'none';

    // ── Update or create rows in-place ──────────────
    // Mark existing rows
    const existingRows = {};
    $list.querySelectorAll('.calc-item[data-row-key]').forEach(el => {
      existingRows[el.dataset.rowKey] = el;
    });

    // Keys in current order
    const keys = [...items.keys()];

    // Remove rows no longer in items
    Object.keys(existingRows).forEach(k => {
      if (!items.has(k)) existingRows[k].remove();
    });

    let sub = 0;
    keys.forEach(key => {
      const it = items.get(key);
      const itemTotal = it.price * it.qty;
      sub += itemTotal;

      if (existingRows[key]) {
        // Just update qty + price text (no DOM rebuild → no collapse)
        const row = existingRows[key];
        row.querySelector('.calc-qty').textContent = it.qty;
        row.querySelector('.calc-item-price').textContent = `${formatPrice(itemTotal)} ₾`;
      } else {
        // New row
        const row = document.createElement('div');
        row.className = 'calc-item';
        row.dataset.rowKey = key;
        row.innerHTML = `
          <div class="calc-item-name">${it.name}</div>
          <div class="calc-item-ctrl">
            <button class="calc-btn minus">−</button>
            <span class="calc-qty">${it.qty}</span>
            <button class="calc-btn plus">+</button>
          </div>
          <div class="calc-item-price">${formatPrice(itemTotal)} ₾</div>`;
        row.querySelector('.minus').addEventListener('click', () => removeItem(key));
        row.querySelector('.plus').addEventListener('click',  () => { it.qty++; renderItems(); });
        $list.appendChild(row);
      }
    });

    // Totals
    const chargeRate = getCharge();
    const chargeAmt  = sub * chargeRate / 100;
    const total      = sub + chargeAmt;
    const totalItems = [...items.values()].reduce((s, it) => s + it.qty, 0);

    $subtotal.textContent  = `${formatPrice(sub)} ₾`;
    $charge.textContent    = `${formatPrice(chargeAmt)} ₾`;
    $total.textContent     = `${formatPrice(total)} ₾`;

    if (chargeRate > 0) {
      $chargeRow.style.display = '';
      $serviceNote.innerHTML = isKa
        ? `⚠️ ეს რესტორანი ითხოვს <strong>${chargeRate}% მომსახურების საკომისიოს</strong> — ეს უკვე შედის „სავარ. ჯამში".`
        : `⚠️ This restaurant charges <strong>${chargeRate}% service fee</strong> — already included in "Est. Total".`;
      $serviceNote.style.display = '';
    } else {
      $chargeRow.style.display  = 'none';
      $serviceNote.style.display = 'none';
    }

    foot.style.display = items.size > 0 ? '' : 'none';

    // Badge
    if (totalItems > 0) {
      $badge.textContent = totalItems;
      $badge.classList.add('show');
    } else {
      $badge.classList.remove('show');
    }

    // Head sub
    $headSub.textContent = totalItems > 0
      ? (isKa ? `${totalItems} კერძი · ${formatPrice(total)} ₾` : `${totalItems} items · ${formatPrice(total)} ₾`)
      : (isKa ? 'კერძი არ არის არჩეული' : 'No items selected');

    updateTriggerSub(totalItems, total);
  }

  /* ── Update trigger sub-text — კომენტარი (trigger ახლა მრგვალია) ── */
  function updateTriggerSub(totalItems, total) {
    // trigger-ს ტექსტი აღარ აქვს — მხოლოდ badge-ი
  }

  /* ── Bounce open animation ───────────────────── */
  function bounceOpen() {
    $trigger.style.transform = 'scale(1.15)';
    setTimeout(() => { $trigger.style.transform = ''; }, 300);
  }

  /* ── Refresh all "add" buttons on the page ──── */
  function refreshAddButtons() {
    document.querySelectorAll('.item-add-btn[data-key]').forEach(btn => {
      const key = btn.dataset.key;
      const has = items.has(key);
      const isKa = ka();
      btn.classList.toggle('added', has);
      const qty = has ? items.get(key).qty : 0;
      btn.innerHTML = has
        ? `✓ ${qty}× &nbsp;${isKa ? 'დამატებულია' : 'Added'}`
        : `+ ${isKa ? 'დამატება' : 'Add'}`;
    });
  }

  /* ── updateUI (language rerender) ───────────── */
  function updateUI() {
    renderItems();
    refreshAddButtons();
  }

  /* ── addVariantItem — called from variants modal ── */
  function addVariantItem(variantKey, syntheticItem) {
    const price = parsePrice(syntheticItem.price);
    if (items.has(variantKey)) {
      items.get(variantKey).qty++;
    } else {
      items.set(variantKey, { name: syntheticItem.name, price, qty: 1 });
    }
    renderItems();
    refreshAddButtons();
    if (!isOpen) bounceOpen();
  }

  /* ── Public: inject "add" button into item card ─ */
  function injectButtons(catId) {
    if (typeof RESTAURANT === 'undefined') return;
    const cat = RESTAURANT.menu.find(c => c.id === catId);
    if (!cat) return;
    const isKa = ka();

    cat.items.forEach((item, idx) => {
      const cards = document.querySelectorAll('#itemsGrid .item-card');
      const card = cards[idx];
      if (!card) return;

      card.querySelector('.item-add-btn')?.remove();

      const btn = document.createElement('button');
      btn.className = 'item-add-btn';
      const hasVariants = item.variants && item.variants.length > 0;

      if (hasVariants) {
        btn.dataset.key = `__variants__${catId}::${idx}`;
        btn.innerHTML = `🔀 ${isKa ? 'ვარიანტის არჩევა' : 'Choose variant'}`;
        const anyAdded = item.variants.some((_, vi) => items.has(`${catId}::${idx}::v${vi}`));
        btn.classList.toggle('added', anyAdded);
        btn.addEventListener('click', () => {
          if (typeof openVariants === 'function') openVariants(catId, idx);
        });
      } else {
        const key = `${catId}::${idx}`;
        btn.dataset.key = key;
        const has = items.has(key);
        const qty = has ? items.get(key).qty : 0;
        btn.innerHTML = has
          ? `✓ ${qty}× &nbsp;${isKa ? 'დამატებულია' : 'Added'}`
          : `+ ${isKa ? 'დამატება' : 'Add'}`;
        btn.classList.toggle('added', has);
        btn.addEventListener('click', () => addItem(catId, idx, item));
      }

      const body = card.querySelector('.item-body');
      if (body) body.appendChild(btn);
    });
  }

  /* ── refreshAddButtons — also handles variants ── */
  function refreshAddButtons() {
    document.querySelectorAll('.item-add-btn[data-key]').forEach(btn => {
      const key = btn.dataset.key;
      const isKa = ka();

      if (key.startsWith('__variants__')) {
        const inner = key.replace('__variants__', '');
        const [catId, idxStr] = inner.split('::');
        const idx = parseInt(idxStr);
        const cat = (typeof RESTAURANT !== 'undefined') && RESTAURANT.menu.find(c => c.id === catId);
        const item = cat && cat.items[idx];
        const anyAdded = item && item.variants
          ? item.variants.some((_, vi) => items.has(`${catId}::${idx}::v${vi}`))
          : false;
        btn.classList.toggle('added', anyAdded);
        btn.innerHTML = anyAdded
          ? `✓ ${isKa ? 'ვარიანტი დამატებულია' : 'Variant added'}`
          : `🔀 ${isKa ? 'ვარიანტის არჩევა' : 'Choose variant'}`;
      } else {
        const has = items.has(key);
        btn.classList.toggle('added', has);
        const qty = has ? items.get(key).qty : 0;
        btn.innerHTML = has
          ? `✓ ${qty}× &nbsp;${isKa ? 'დამატებულია' : 'Added'}`
          : `+ ${isKa ? 'დამატება' : 'Add'}`;
      }
    });
  }

  /* ── Init ────────────────────────────────────── */
  function init() {
    buildUI();
    renderItems();
  }

  /* ── addItemRaw — VariantPicker-ისთვის ─────── */
  function addItemRaw(key, item) {
    const price = typeof item.price === 'number'
      ? item.price
      : (parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0);
    const name = typeof item.name === 'string'
      ? item.name
      : (ka() ? (item.name?.ka || item.name?.en) : (item.name?.en || item.name?.ka)) || '—';
 
    if (items.has(key)) items.get(key).qty++;
    else items.set(key, { name, price, qty: 1 });
 
    renderItems();
    refreshAddButtons();
    if (!isOpen) bounceOpen();
  }

  return { init, injectButtons, addItem, addItemRaw, removeItem, clearAll, updateUI };
})();

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => UrigodCalc.init());
} else {
  UrigodCalc.init();
}