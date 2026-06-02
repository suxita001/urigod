/* ════════════════════════════════════════════════
   URIGOD.GE — Variant Picker v3
   variants  = radio (ერთი ვარიანტი ირჩევა)
   addons    = checkbox (base + ✓ ტოპინგები)
   ════════════════════════════════════════════════ */

const VariantPicker = (() => {
  let currentItem    = null;
  let currentCatId   = null;
  let currentItemIdx = null;
  let selected       = {};          // variants: { groupIdx: optionIdx }
  let checkedAddons  = new Set();   // addons:   Set of "groupIdx:addonIdx"
  let $overlay;

  const tl  = o => !o || typeof o === 'string' ? o || '' :
    (typeof LANG_GET === 'function' && LANG_GET() === 'en'
      ? o.en || o.ka : o.ka || o.en || '');
  const isKa = () => typeof LANG_GET !== 'function' || LANG_GET() === 'ka';
  const toNum = s => parseFloat(String(s || '0').replace(/[^\d.]/g, '')) || 0;
  
  // ფორმატერი: აშორებს ზედმეტ ნულებს ათწილადს, მაგ: 1.50 -> 1.5, 3.00 -> 3
  function formatPrice(num) {
    return Number(num.toFixed(2)).toString();
  }

  /* ── Build DOM (once) ─────────────────────── */
  function buildDOM() {
    $overlay = document.createElement('div');
    $overlay.className = 'vp-overlay';
    $overlay.innerHTML = `
      <div class="vp-sheet" id="vpSheet">
        <div class="vp-handle"></div>
        <div class="vp-hero" id="vpHero" style="display:none">
          <img id="vpHeroImg" class="vp-hero-img" src="" alt="">
          <div class="vp-hero-grad"></div>
          <div class="vp-hero-info">
            <div class="vp-hero-name" id="vpHeroName"></div>
            <div class="vp-hero-price" id="vpHeroPrice"></div>
          </div>
        </div>
        <div class="vp-info" id="vpInfo">
          <div class="vp-item-name" id="vpName"></div>
          <div class="vp-item-desc" id="vpDesc"></div>
        </div>
        <div id="vpGroups"></div>
        <div id="vpAddons"></div>
        <div class="vp-footer">
          <div class="vp-total-wrap">
            <div class="vp-total-lbl" id="vpTotalLbl">სულ</div>
            <div class="vp-total"     id="vpTotal">0 ₾</div>
          </div>
          <button class="vp-add-btn" id="vpAddBtn">
            ＋ <span id="vpAddTxt">კალკულატორში</span>
          </button>
        </div>
      </div>`;
    document.body.appendChild($overlay);

    $overlay.addEventListener('click', e => { if (e.target === $overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.getElementById('vpAddBtn').addEventListener('click', addToCalc);
  }

  /* ── Open ─────────────────────────────────── */
  function open(catId, itemIdx, item) {
    currentItem    = item;
    currentCatId   = catId;
    currentItemIdx = itemIdx;

    // init variants — default or first
    selected = {};
    (item.variants || []).forEach((g, gi) => {
      const def = g.options.findIndex(o => o.default);
      selected[gi] = def >= 0 ? def : 0;
    });

    // init addons — pre-check those with default:true
    checkedAddons = new Set();
    (item.addons || []).forEach((g, gi) => {
      g.items.forEach((a, ai) => {
        if (a.default) checkedAddons.add(`${gi}:${ai}`);
      });
    });

    renderSheet();
    requestAnimationFrame(() => $overlay.classList.add('open'));
  }

  /* ── Close ────────────────────────────────── */
  function close() { $overlay.classList.remove('open'); }

  /* ── Render ───────────────────────────────── */
  function renderSheet() {
    const ka = isKa();
    document.getElementById('vpName').textContent     = tl(currentItem.name);
    document.getElementById('vpDesc').textContent     = tl(currentItem.desc) || '';
    document.getElementById('vpTotalLbl').textContent = ka ? 'სულ' : 'Total';
    document.getElementById('vpAddTxt').textContent   = ka ? 'კალკულატორში' : 'Add to Calc';

    // ── Hero photo ─────────────────────────────
    const $hero = document.getElementById('vpHero');
    const $hImg = document.getElementById('vpHeroImg');
    const $hName = document.getElementById('vpHeroName');
    if (currentItem.img) {
      $hero.style.display = '';
      $hImg.src = currentItem.img;
      $hName.textContent = tl(currentItem.name);
      document.getElementById('vpInfo').style.paddingTop = '12px';
    } else {
      $hero.style.display = 'none';
    }

    // ── Variants (radio) ───────────────────────
    const groups = currentItem.variants || [];
    document.getElementById('vpGroups').innerHTML = groups.map((g, gi) => `
      <div class="vp-group">
        <div class="vp-group-lbl">${tl(g.groupLabel)}</div>
        <div class="vp-options-plain">
          ${g.options.map((opt, oi) => `
            <button class="vp-opt${selected[gi] === oi ? ' sel' : ''}"
                    onclick="VariantPicker.selectOpt(${gi},${oi})">
              ${tl(opt.label)}
              <span class="vp-opt-price">${opt.price}</span>
            </button>`).join('')}
        </div>
      </div>`).join('');

    // ── Addons (checkbox) ──────────────────────
    const addonGroups = currentItem.addons || [];
    document.getElementById('vpAddons').innerHTML = addonGroups.map((g, gi) => `
      <div class="vp-group">
        <div class="vp-group-lbl vp-addon-lbl">
          ${tl(g.groupLabel)}
          ${g.required ? `<span class="vp-required">${ka ? 'სავალდებულო' : 'Required'}</span>` : ''}
          ${g.max ? `<span class="vp-max-hint">${ka ? `მაქს. ${g.max}` : `max ${g.max}`}</span>` : ''}
        </div>
        <div class="vp-addon-list">
          ${g.items.map((a, ai) => {
            const key = `${gi}:${ai}`;
            const checked = checkedAddons.has(key);
            const priceStr = toNum(a.price) > 0 ? `+${formatPrice(toNum(a.price))} ₾` : ka ? 'უფასო' : 'Free';
            return `
              <label class="vp-addon-row${checked ? ' sel' : ''}${a.disabled ? ' disabled' : ''}"
                     onclick="VariantPicker.toggleAddon(${gi},${ai},${g.max||99})">
                <div class="vp-addon-check">${checked ? '✓' : ''}</div>
                <div class="vp-addon-info">
                  <div class="vp-addon-name">${tl(a.name)}</div>
                  ${tl(a.desc) ? `<div class="vp-addon-desc">${tl(a.desc)}</div>` : ''}
                </div>
                <div class="vp-addon-price">${priceStr}</div>
              </label>`;
          }).join('')}
        </div>
      </div>`).join('');

    updateTotal();
  }

  /* ── Select variant option (radio) ───────── */
  function selectOpt(gi, oi) {
    selected[gi] = oi;
    document.querySelectorAll('.vp-group').forEach((grpEl, i) => {
      if (i >= (currentItem.variants||[]).length) return;
      grpEl.querySelectorAll('.vp-opt').forEach((el, j) => {
        el.classList.toggle('sel', selected[i] === j);
      });
    });
    updateTotal();
  }

  /* ── Toggle addon (checkbox) ──────────────── */
  function toggleAddon(gi, ai, max) {
    const key = `${gi}:${ai}`;
    if (checkedAddons.has(key)) {
      checkedAddons.delete(key);
    } else {
      const groupChecked = [...checkedAddons].filter(k => k.startsWith(`${gi}:`)).length;
      if (groupChecked >= max) return;
      checkedAddons.add(key);
    }
    document.querySelectorAll('.vp-addon-row').forEach(el => {
      const [g, a] = el.getAttribute('onclick').match(/\d+/g).map(Number);
      const k = `${g}:${a}`;
      const c = checkedAddons.has(k);
      el.classList.toggle('sel', c);
      el.querySelector('.vp-addon-check').textContent = c ? '✓' : '';
    });
    updateTotal();
  }

  /* ── Compute total ────────────────────────── */
  function computeTotal() {
    let base = 0;

    const groups = currentItem.variants || [];
    if (groups.length) {
      groups.forEach((g, gi) => {
        const opt = g.options[selected[gi] ?? 0];
        const p   = toNum(opt?.price);
        if (gi === 0) base = p;
        else          base += p;
      });
    } else {
      base = toNum(currentItem.price);
    }

    let addonsTotal = 0;
    (currentItem.addons || []).forEach((g, gi) => {
      g.items.forEach((a, ai) => {
        if (checkedAddons.has(`${gi}:${ai}`)) addonsTotal += toNum(a.price);
      });
    });

    return base + addonsTotal;
  }

  function updateTotal() {
    const t  = computeTotal();
    const el = document.getElementById('vpTotal');
    el.textContent = `${formatPrice(t)} ₾`;
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 220);
    
    const hp = document.getElementById('vpHeroPrice');
    if (hp) hp.textContent = `${formatPrice(t)} ₾`;
  }

  /* ── Add to Calculator ────────────────────── */
  function addToCalc() {
    if (typeof UrigodCalc === 'undefined') { close(); return; }

    const parts = [tl(currentItem.name)];

    (currentItem.variants || []).forEach((g, gi) => {
      parts.push(tl(g.options[selected[gi] ?? 0].label));
    });

    (currentItem.addons || []).forEach((g, gi) => {
      g.items.forEach((a, ai) => {
        if (checkedAddons.has(`${gi}:${ai}`)) parts.push(tl(a.name));
      });
    });

    const addonKey = [...checkedAddons].sort().join(',');
    const varKey   = `${currentCatId}::${currentItemIdx}::${Object.values(selected).join('-')}::${addonKey}`;

    UrigodCalc.addItemRaw(varKey, { name: parts.join(' · '), price: computeTotal() });
    close();
  }

  function init() { buildDOM(); }

  return { init, open, close, selectOpt, toggleAddon };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => VariantPicker.init());
} else {
  VariantPicker.init();
}