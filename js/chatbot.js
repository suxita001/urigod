// ════════════════════════════════════════════════
// URIGOD.GE — Smart Chatbot (No AI — Pure JS)
// chatbot.js
// ════════════════════════════════════════════════

(function () {
  'use strict';

  // ── ენა ─────────────────────────────────────────────────
  const L = () => document.documentElement.lang === 'en' ? 'en' : 'ka';
  const t = (ka, en) => L() === 'ka' ? ka : en;

  // ── Form state ───────────────────────────────────────────
  const S = {
    food:       '',   
    budget:     '',   
    people:     '',   
    delivery:   false,
    wine:       false,
    vegetarian: false,
    outdoor:    false,
    liveMusic:  false,
  };

  // ── Knowledge base ───────────────────────────────────────
  const FOOD_KEYWORDS = {
    georgian: ['ხინკალი','ხაჭაპური','მწვადი','ჩვენი','ქართული','georgia','georgian','khinkali','khachapuri','lobiani','pkhali','chahokhbili','chakhokhbili','ostri','shkmeruli','badrijani','churchkhela'],
    asian:    ['სუში','sushi','როლები','რამენი','ramen','tuna','salmon','nigiri','gyoza','california','dragon','spicy','asia','აზიური','იაპონური','საშიმი'],
    european: ['პიცა','pizza','პასტა','pasta','სტეიკი','steak','ბურგერი','burger','ევროპული','european'],
    fastfood: ['ბურგერი','burger','ჰოთ დოგი','hot dog','სწრაფი კვება','fast food','ფრი','fries'],
    seafood:  ['თევზი','fish','ზღვის პროდუქტები','seafood','კრევეტი','shrimp','lobster'],
  };
  const FEATURE_KEYWORDS = {
    delivery:  ['კურიერი','delivery','მოტანა','მიტანა','motana'],
    wine:      ['ღვინო','wine','სასმელი','sake','spirits','alkohol','drinks'],
    vegetarian:['ვეგეტარიანული','vegetarian','ვეგანური','vegan'],
    outdoor:   ['ტერასა','terrace','გარე','outdoor','ეზო'],
    liveMusic: ['მუსიკა','music','ლაივი','live','კონცერტი'],
  };

  function getRestaurants() {
    if (typeof RESTAURANTS !== 'undefined') return RESTAURANTS;
    return [];
  }

  // ── Evaluate a restaurant ─────────────────────────────
  function evaluateRestaurant(r, query) {
    let score = 0;
    const q = query.trim().toLowerCase();
    const rNameKa = tl(r.name).toLowerCase();
    const cuisineTag = r.cuisineTag || '';

    const foodTag = detectFoodTag(q);
    if (foodTag && cuisineTag === foodTag) score += 20;
    if (q && (rNameKa.includes(q) || tl(r.cuisine).toLowerCase().includes(q))) score += 20;

    let comboText = '';
    let passedStrictCheck = true;
    const budget = S.budget ? parseFloat(S.budget) : Infinity;
    const people = S.people ? parseInt(S.people) : 1;

    if (r.menu && r.menu.length > 0) {
      let mains = [], drinks = [], sides = [];

      r.menu.forEach(cat => {
        const catName = tl(cat.name).toLowerCase();
        cat.items.forEach(item => {
          const price = parseFloat(String(item.price).replace(/[^\d.]/g, '')) || 0;
          const type = item.type || 'main'; 
          const itemName = tl(item.name).toLowerCase();
          const obj = { name: tl(item.name), price, type, catName, itemName };

          if (type === 'drink') drinks.push(obj);
          else if (type === 'side') sides.push(obj);
          else mains.push(obj);
        });
      });

      drinks.sort((a,b) => a.price - b.price);
      sides.sort((a,b) => a.price - b.price);
      
      let matchedMains = mains;
      
      if (q) {
        matchedMains = mains.filter(m => m.itemName.includes(q) || m.catName.includes(q));
        if (matchedMains.length === 0 && foodTag === cuisineTag && /asian|georgian|european|fastfood|seafood|აზიური|ქართული|ევროპული|ფასტფუდი|სწრაფი/i.test(q)) {
           matchedMains = mains; 
        }
      }

      if (matchedMains.length === 0) {
        passedStrictCheck = false; 
      } else {
        let bestCombo = null;
        let maxSpend = -1;

        matchedMains.forEach(m => {
          const mCost = m.price * people;
          if (mCost > budget) return; 

          let currentCombo = { main: m, drink: null, side: null, cost: mCost };
          
          if (drinks.length > 0 && (mCost + drinks[0].price * people) <= budget) {
            currentCombo.drink = drinks[0];
            currentCombo.cost += drinks[0].price * people;
          }
          
          if (sides.length > 0 && (currentCombo.cost + sides[0].price * people) <= budget) {
            currentCombo.side = sides[0];
            currentCombo.cost += sides[0].price * people;
          }

          if (currentCombo.cost > maxSpend) {
            maxSpend = currentCombo.cost;
            bestCombo = currentCombo;
          }
        });

        if (!bestCombo && budget !== Infinity) {
          passedStrictCheck = false; 
        } else if (bestCombo) {
          score += 50; 
          const ka = L() === 'ka';
          let parts = [];
          parts.push(`🍽️ <b>${bestCombo.main.name}</b>`);
          if (bestCombo.drink) parts.push(`🥤 <b>${bestCombo.drink.name}</b>`);
          if (bestCombo.side)  parts.push(`🍟 <b>${bestCombo.side.name}</b>`);
          
          let leftover = budget !== Infinity ? budget - bestCombo.cost : 0;
          
          if (ka) {
            comboText = `ამ ბიუჯეტში მოგივათ:<br>${parts.join(' + ')}`;
            if (leftover > 0 && budget !== Infinity) {
              comboText += `<br><span style="color:var(--t2);font-size:11px;display:block;margin-top:4px">* დამატებით დაგრჩებათ ${leftover}₾</span>`;
            } else if (budget !== Infinity && (!bestCombo.side || !bestCombo.drink)) {
              comboText += `<br><span style="color:var(--t2);font-size:11px;display:block;margin-top:4px">* დამატებითი საიდისთვის/სასმელისთვის თანხა აღარ გრჩებათ</span>`;
            }
          } else {
            comboText = `In this budget you get:<br>${parts.join(' + ')}`;
            if (leftover > 0 && budget !== Infinity) {
              comboText += `<br><span style="color:var(--t2);font-size:11px;display:block;margin-top:4px">* ${leftover}₾ left over</span>`;
            } else if (budget !== Infinity && (!bestCombo.side || !bestCombo.drink)) {
              comboText += `<br><span style="color:var(--t2);font-size:11px;display:block;margin-top:4px">* Not enough for an extra side/drink</span>`;
            }
          }
        }
      }
    } else if (S.budget) {
      if (q && !(foodTag && cuisineTag === foodTag) && !rNameKa.includes(q)) {
        passedStrictCheck = false;
      }
      if (passedStrictCheck) {
        const b = parseInt(S.budget);
        if (b < 8) {
           passedStrictCheck = false; // 1-7 ლარად რესტორნებში არაფერია
        } else {
           if (b <= 20 && r.rating < 4.5)  score += 15;
           else if (b <= 40 && r.rating >= 4.3) score += 10;
           else if (b > 40  && r.rating >= 4.6) score += 15;
           else passedStrictCheck = false;
        }
      }
    }

    if (!passedStrictCheck) return { score: -100, comboText: '' };

    if (S.delivery && r.features?.some(f => /delivery|მოტანა|მიტანა|კურიერი/i.test(f.en + f.ka))) score += 10;
    if (S.wine && (
      r.features?.some(f => /wine|ღვინო|sake|სასმელი/i.test(f.en + f.ka)) ||
      r.menu?.some(cat => cat.id === 'drinks')
    )) score += 8;
    if (S.vegetarian && (
      r.features?.some(f => /vegan|vegetarian|ვეგანური|ვეგეტარიანული/i.test(f.en + f.ka)) ||
      r.menu?.some(cat => cat.items?.some(i => /vegan|vegetar|salad|pkhali|სალათი|ფხალი/i.test(tl(i.name))))
    )) score += 8;
    if (S.liveMusic && r.features?.some(f => /music|live|მუსიკა|ცოცხალი/i.test(f.en + f.ka))) score += 8;
    if (S.outdoor && r.features?.some(f => /terrace|outdoor|ტერასა|გარე/i.test(f.en + f.ka))) score += 6;

    if (S.people) {
      const p = parseInt(S.people);
      if (p >= 6 && r.branches?.length > 1) score += 5;
    }
    score += (r.rating - 4.0) * 10;

    return { score, comboText };
  }

  function detectFoodTag(q) {
    for (const [tag, keywords] of Object.entries(FOOD_KEYWORDS)) {
      if (keywords.some(kw => q.includes(kw.toLowerCase()))) return tag;
    }
    return null;
  }

  function tl(o) {
    if (!o || typeof o === 'string') return o || '';
    return (L() === 'en' ? o.en : o.ka) || o.ka || '';
  }

  function findMatches(query, topN = 3) {
    const rs = getRestaurants();
    if (!rs.length) return [];
    const scored = rs.map(r => {
      const evalData = evaluateRestaurant(r, query);
      return { r, score: evalData.score, comboText: evalData.comboText };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
    return scored.slice(0, topN); 
  }

  function generateResponse(results, query, failedDueToBudget = false) {
    const ka = L() === 'ka';
    if (!results.length) {
      if (failedDueToBudget) {
        return t(
          'ამ ბიუჯეტში სრულფასოვანი კერძი არ მოგივათ. თანხა ძალიან დაბალია (მხოლოდ სასმელს ან საიდს თუ ეყოფა). 😔 სცადეთ ბიუჯეტის გაზრდა.',
          'You cannot afford a full meal on this budget. The amount is too low (only enough for a drink or side). 😔 Please try increasing your budget.'
        );
      }
      return t(
        'სამწუხაროდ, ზუსტი ვარიანტი ვერ ვიპოვე ამ ბიუჯეტში 😕 სცადეთ ფილტრების შეცვლა.',
        'Sorry, no exact match found in this budget 😕 Try adjusting your filters.'
      );
    }
    const top = results[0].r;
    const extras = [];
    if (S.wine)       extras.push(ka ? 'ღვინის სია' : 'wine list');
    if (S.outdoor)    extras.push(ka ? 'ტერასა' : 'outdoor terrace');
    if (S.liveMusic)  extras.push(ka ? 'ცოცხალი მუსიკა' : 'live music');
    if (S.delivery)   extras.push(ka ? 'კურიერი' : 'delivery');
    if (S.vegetarian) extras.push(ka ? 'ვეგეტარიანული' : 'vegetarian options');

    const extrasStr = extras.length ? (ka ? `\n🔍 ${extras.join(', ')}` : `\n🔍 ${extras.join(', ')}`) : '';
    const budgetStr = S.budget ? (ka ? `\n💰 ბიუჯეტი: ~${S.budget}₾/კაცი` : `\n💰 Budget: ~${S.budget}₾/person`) : '';
    const peopleStr = S.people ? (ka ? `\n👥 ${S.people} კაცი` : `\n👥 ${S.people} people`) : '';

    const intro = results.length === 1
      ? t(`✨ საუკეთესო ვარიანტი: **${tl(top.name)}**!`, `✨ Best match: **${tl(top.name)}**!`)
      : t(`🎯 საუკეთესო ${results.length} ვარიანტი:`, `🎯 Top ${results.length} matches:`);

    return `${intro}${budgetStr}${peopleStr}${extrasStr}`;
  }

  function handleFreeText(text) {
    let q = text.toLowerCase();
    const ka = L() === 'ka';

    for (const [feat, kws] of Object.entries(FEATURE_KEYWORDS)) {
      if (kws.some(kw => q.includes(kw.toLowerCase()))) {
        S[feat] = true;
      }
    }

    const budgetMatch = q.match(/(\d+)\s*[₾l]|(\d+)\s*lari|(\d+)\s*ლარი/i);
    if (budgetMatch) {
        S.budget = budgetMatch[1] || budgetMatch[2] || budgetMatch[3];
        q = q.replace(budgetMatch[0], ''); // ამოვაჭრათ ბიუჯეტი ძებნიდან!
    }

    const peopleMatch = q.match(/(\d+)\s*(?:kac|person|people|კაც|ადამიანი)/i);
    if (peopleMatch) {
        S.people = peopleMatch[1];
        q = q.replace(peopleMatch[0], ''); // ამოვაჭრათ ხალხის რაოდენობა ძებნიდან!
    }

    q = q.replace(/\s+/g, ' ').trim(); // გავასუფთაოთ დარჩენილი ტექსტი
    S.food = q; 

    return findMatches(q);
  }

  let winEl, msgsEl, formEl, freeEl;
  let isOpen = false;
  let hasSubmitted = false;

  function build() {
    if (document.getElementById('_cb_t')) return;

    const trig = document.createElement('button');
    trig.id = '_cb_t';
    trig.className = 'cb-trigger';
    trig.title = t('რესტორნის ძიება', 'Find a restaurant');
    trig.innerHTML = `<span>🍽️</span><span class="cb-badge" id="_cb_badge"></span>`;
    trig.onclick = toggle;
    document.body.appendChild(trig);

    const win = document.createElement('div');
    win.id = '_cb_w';
    win.className = 'cb-window';
    win.innerHTML = `
      <div class="cb-header">
        <div class="cb-avatar">🍽️</div>
        <div class="cb-hinfo">
          <div class="cb-hname" id="_cb_hn">${t('URIGOD ასისტენტი','URIGOD Assistant')}</div>
          <div class="cb-hstatus" id="_cb_hs">${t('გეხმარებათ სწორი რესტორნის პოვნაში','Helps you find the right restaurant')}</div>
        </div>
        <button class="cb-hclose" onclick="window._cbClose()" title="close">✕</button>
      </div>
      <div class="cb-messages" id="_cb_msgs"></div>
      <div id="_cb_form">${buildFormHTML()}</div>
    `;
    document.body.appendChild(win);
    winEl  = win;
    msgsEl = win.querySelector('#_cb_msgs');
    formEl = win.querySelector('#_cb_form');

    window._cbClose = close;

    setTimeout(() => {
      addBot(t(
        'გამარჯობა! 👋 შეავსეთ ფორმა ან მომწერეთ — დაგეხმარებით საუკეთესო რესტორნის პოვნაში! 🍽️',
        'Hello! 👋 Fill the form or type freely — I\'ll find the right restaurant for you! 🍽️'
      ));
    }, 350);
  }

  function buildFormHTML() {
    const ka = L() === 'ka';
    return `
    <div class="cb-form-panel">
      <div class="cb-form-inner">

        <div class="cb-fl">
          <div class="cb-fl-lbl">${ka?'🍽️ რა გსურთ მიირთვათ?':'🍽️ What do you want to eat?'}</div>
          <input class="cb-ti" id="_cb_food" type="text"
            placeholder="${ka?'მაგ. სუში, ხინკალი, ბურგერი...':'e.g. sushi, khinkali, burger...'}"
            oninput="window._cbFoodInput(this.value)">
          <div class="cb-tags" id="_cb_food_tags">
            ${['🥟 ხინკალი','🍣 სუში','🫕 ქართული','🍕 პიცა','🍔 ბურგერი','🍜 რამენი','🍷 სასმელები'].map((v,i)=>{
              const vals=['ხინკალი','სუში','ქართული','პიცა','ბურგერი','რამენი','სასმელები'];
              return `<button class="cb-tag" onclick="window._cbFoodTag(this,'${vals[i]}')">${v}</button>`;
            }).join('')}
          </div>
        </div>

        <div class="cb-fl">
          <div class="cb-fl-lbl">${ka?'💰 ბიუჯეტი ერთ კაცზე (₾)?':'💰 Budget per person (₾)?'}</div>
          <div class="cb-budget">
            <input class="cb-ti" id="_cb_budget" type="number" min="0" max="500"
              placeholder="${ka?'მაგ. 30':'e.g. 30'}"
              oninput="window._cbBudget(this.value)">
            <span class="cb-budget-lari">₾</span>
          </div>
        </div>

        <div class="cb-fl">
          <div class="cb-fl-lbl">${ka?'👥 რამდენი ადამიანი?':'👥 Group size?'}</div>
          <div class="cb-people">
            ${['1','2','3','4','5','6+'].map(v=>
              `<button class="cb-pnum" onclick="window._cbPeople(this,'${v}')">${v}</button>`
            ).join('')}
          </div>
        </div>

        <div class="cb-fl">
          <div class="cb-fl-lbl">${ka?'✅ დამატებითი მოთხოვნები?':'✅ Extras?'}</div>
          <div class="cb-checks">
            <label class="cb-chk"><input type="checkbox" onchange="window._cbCheck('delivery',this.checked)"> ${ka?'🚀 კურიერი':'🚀 Delivery'}</label>
            <label class="cb-chk"><input type="checkbox" onchange="window._cbCheck('wine',this.checked)"> ${ka?'🍷 ღვინო / სასმელები':'🍷 Wine/drinks'}</label>
            <label class="cb-chk"><input type="checkbox" onchange="window._cbCheck('vegetarian',this.checked)"> ${ka?'🌿 ვეგეტარიანული':'🌿 Vegetarian'}</label>
            <label class="cb-chk"><input type="checkbox" onchange="window._cbCheck('outdoor',this.checked)"> ${ka?'🌿 გარე ტერასა':'🌿 Outdoor/terrace'}</label>
            <label class="cb-chk"><input type="checkbox" onchange="window._cbCheck('liveMusic',this.checked)"> ${ka?'🎵 ცოცხალი მუსიკა':'🎵 Live music'}</label>
          </div>
        </div>

      </div>
      <div class="cb-form-foot">
        <button class="cb-submit" onclick="window._cbSubmit()">
          🔍 ${ka?'მოძებნა':'Find restaurants'}
        </button>
      </div>
    </div>

    <div class="cb-free" style="display:none" id="_cb_free_row">
      <input class="cb-free-in" id="_cb_free_in" type="text"
        placeholder="${ka?'კიდევ გჭირდებათ რამე?':'Need anything else?'}"
        onkeydown="if(event.key==='Enter')window._cbFreeSubmit()">
      <button class="cb-free-btn" id="_cb_free_btn" onclick="window._cbFreeSubmit()">➤</button>
    </div>`;
  }

  window._cbFoodInput = v => { S.food = v; };
  window._cbFoodTag   = (btn, val) => {
    document.querySelectorAll('#_cb_food_tags .cb-tag').forEach(b => b.classList.remove('sel'));
    btn.classList.add('sel');
    S.food = val;
    const inp = document.getElementById('_cb_food');
    if (inp) inp.value = val;
  };
  window._cbBudget  = v => { S.budget = v; };
  window._cbPeople  = (btn, val) => {
    document.querySelectorAll('.cb-pnum').forEach(b => b.classList.remove('sel'));
    btn.classList.add('sel');
    S.people = val;
  };
  window._cbCheck   = (field, val) => { S[field] = val; };

  window._cbSubmit  = () => {
    const food = (document.getElementById('_cb_food')?.value || S.food).trim();
    S.food = food;
    S.budget = document.getElementById('_cb_budget')?.value || S.budget;

    const parts = [];
    const ka = L() === 'ka';
    if (food)         parts.push(`"${food}"`);
    if (S.budget)     parts.push(ka ? `ბიუჯეტი ${S.budget}₾/კაცი` : `budget ${S.budget}₾/p`);
    if (S.people)     parts.push(ka ? `${S.people} კაცი` : `${S.people} people`);
    if (S.delivery)   parts.push(ka ? 'კურიერი' : 'delivery');
    if (S.wine)       parts.push(ka ? 'ღვინო' : 'wine');
    if (S.vegetarian) parts.push(ka ? 'ვეგეტარიანული' : 'vegetarian');
    if (S.outdoor)    parts.push(ka ? 'ტერასა' : 'outdoor');
    if (S.liveMusic)  parts.push(ka ? 'ცოცხალი მუსიკა' : 'live music');

    const userMsg = parts.join(' · ') || (ka ? 'ნებისმიერი რესტორანი' : 'any restaurant');
    addUser(userMsg);

    showTyping(() => {
      let results = findMatches(food);
      let failedDueToBudget = false;

      if (results.length === 0 && S.budget) {
        const originalBudget = S.budget;
        S.budget = ''; 
        const resultsNoBudget = findMatches(food);
        S.budget = originalBudget; 
        if (resultsNoBudget.length > 0) {
          failedDueToBudget = true; 
        }
      }

      const reply = generateResponse(results, food, failedDueToBudget);
      addBot(reply, results);

      if (!hasSubmitted) {
        hasSubmitted = true;
        const fp  = document.querySelector('.cb-form-panel');
        const fr  = document.getElementById('_cb_free_row');
        if (fp) fp.style.display = 'none';
        if (fr) fr.style.display = 'flex';
        setTimeout(() => document.getElementById('_cb_free_in')?.focus(), 100);
      }

      addQuickReplies([
        t('სხვა ვარიანტი', 'Show more'),
        t('რუკაზე ნახვა', 'View on map'),
        t('დაჯავშნა', 'Make a reservation'),
        t('გასუფთავება', 'Start over'),
      ]);
    });
  };

  window._cbFreeSubmit = () => {
    const inp = document.getElementById('_cb_free_in');
    const txt = inp?.value?.trim() || '';
    if (!txt) return;
    if (inp) inp.value = '';
    addUser(txt);

    const ka  = L() === 'ka';
    const q   = txt.toLowerCase();

    if (/start over|თავიდან|ხელახლა|გასუფთავება/i.test(q)) {
      resetBot(); return;
    }
    if (/map|ruka|რუკა|რუკაზე/i.test(q)) {
      const depth = window.location.pathname.split('/').filter(Boolean).length;
      const pre   = depth >= 2 ? '../../' : '';
      addBot(t('კარგი, რუკაზე:','Sure, here\'s the map:'));
      setTimeout(() => window.location.href = pre + 'map.html', 800);
      return;
    }
    if (/more|sxva|კიდევ|სხვა|მეტი/i.test(q)) {
      showTyping(() => {
        const r2 = findMatches(S.food, 6).slice(3);
        if (r2.length) { addBot(t('კიდევ:','More options:'), r2); }
        else addBot(t('მეტი ვარიანტი აღარ მაქვს 😕','No more options 😕'));
      });
      return;
    }
    if (/javshani|reservation|book|ჯავშანი/i.test(q)) {
      addBot(t('გამოიყენეთ დაჯავშნის ღილაკი რესტორნის ბარათზე 📅','Use the Reserve button on any restaurant card 📅'));
      return;
    }

    showTyping(() => {
      let results = handleFreeText(txt);
      let failedDueToBudget = false;

      if (results.length === 0 && S.budget) {
        const originalBudget = S.budget;
        S.budget = '';
        const resultsNoBudget = findMatches(S.food);
        S.budget = originalBudget;
        if (resultsNoBudget.length > 0) {
          failedDueToBudget = true;
        }
      }

      const reply = generateResponse(results, S.food, failedDueToBudget);
      addBot(reply, results);
    });
  };

  function addBot(text, results) {
    const div = document.createElement('div');
    div.className = 'cb-msg bot';
    const html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    div.innerHTML = `<div class="cb-avi">🍽️</div><div class="cb-bubble">${html}</div>`;
    msgsEl.appendChild(div);

    if (results && results.length) {
      results.forEach(resObj => {
        const card = buildCard(resObj);
        msgsEl.appendChild(card);
      });
    }
    scrollBot();
    if (!isOpen) showBadge();
  }

  function addUser(text) {
    const div = document.createElement('div');
    div.className = 'cb-msg user';
    div.innerHTML = `<div class="cb-bubble">${esc(text)}</div><div class="cb-avi">👤</div>`;
    msgsEl.appendChild(div);
    scrollBot();
  }

  function showTyping(cb, delay = 800) {
    const div = document.createElement('div');
    div.className = 'cb-msg bot'; div.id = '_cb_typing';
    div.innerHTML = `<div class="cb-avi">🍽️</div><div class="cb-bubble"><div class="cb-dots"><span></span><span></span><span></span></div></div>`;
    msgsEl.appendChild(div);
    scrollBot();
    setTimeout(() => {
      const el = document.getElementById('_cb_typing');
      if (el) el.remove();
      cb();
    }, delay);
  }

  function addQuickReplies(labels) {
    const div = document.createElement('div');
    div.className = 'cb-msg bot';
    div.innerHTML = `<div class="cb-avi" style="visibility:hidden">🍽️</div><div style="flex:1"><div class="cb-qrs" id="_cb_qrs">${
      labels.map(l => `<button class="cb-qr">${esc(l)}</button>`).join('')
    }</div></div>`;
    msgsEl.appendChild(div);
    div.querySelectorAll('.cb-qr').forEach((btn, i) => {
      btn.onclick = () => {
        const label = labels[i];
        div.remove();
        const inp = document.getElementById('_cb_free_in');
        if (inp) inp.value = label;
        window._cbFreeSubmit();
      };
    });
    scrollBot();
  }

  function buildCard(resObj) {
    const r = resObj.r;
    const comboText = resObj.comboText;
    const ka    = L() === 'ka';
    const depth = window.location.pathname.split('/').filter(Boolean).length;
    const pre   = depth >= 2 ? '../../' : '';
    const name  = tl(r.name);
    const cui   = tl(r.cuisine);

    const card = document.createElement('div');
    card.className = 'cb-msg bot';
    card.style.animation = 'cbIn .35s cubic-bezier(.34,1.3,.64,1) both';

    const imgHtml = r.cover
      ? `<img class="cb-card-img" src="${r.cover}" alt="${name}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'cb-card-no-img\\'>${r.emoji}</div>'">`
      : `<div class="cb-card-no-img">${r.emoji}</div>`;

    const feats = (r.features || []).slice(0,3).map(f => ka ? f.ka : f.en).join(' · ');

    card.innerHTML = `
      <div class="cb-avi" style="visibility:hidden">🍽️</div>
      <div class="cb-card" style="flex:1;max-width:86%">
        ${imgHtml}
        <div class="cb-card-body">
          <div class="cb-card-top">
            <div class="cb-card-name">${name}</div>
            <div class="cb-card-rating">★ ${r.rating}</div>
          </div>
          <div class="cb-card-meta">
            ${cui}<br>
            🕐 ${r.hours} · 📍 ${r.branches?.length || 1} ${ka?'ფილიალი':'branch(es)'}
            ${feats ? `<br>✓ ${feats}` : ''}
            ${comboText ? `<div style="margin-top:10px;padding:10px;background:var(--glass2);border-radius:10px;border:1px solid var(--bdr-cyan);font-size:12px;color:var(--t1)">${comboText}</div>` : ''}
          </div>
          <div class="cb-card-actions">
            <a href="${pre}restaurants/${r.slug}/index.html" class="cb-card-btn p">
              ${ka?'ნახვა':'View'} →
            </a>
            <a href="${pre}restaurants/${r.slug}/menu.html" class="cb-card-btn g">
              🍽️ ${ka?'მენიუ':'Menu'}
            </a>
          </div>
        </div>
      </div>`;
    return card;
  }

  function resetBot() {
    Object.assign(S, { food:'', budget:'', people:'', delivery:false, wine:false, vegetarian:false, outdoor:false, liveMusic:false });
    hasSubmitted = false;
    msgsEl.innerHTML = '';
    formEl.innerHTML = buildFormHTML();
    addBot(t('კარგი, თავიდან დავიწყოთ! 🍽️ რა გსურთ?','Sure, let\'s start over! 🍽️ What are you looking for?'));
  }

  function scrollBot() { if (msgsEl) msgsEl.scrollTop = msgsEl.scrollHeight; }
  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function showBadge() { const b = document.getElementById('_cb_badge'); if (b) b.classList.add('show'); }
  function hideBadge() { const b = document.getElementById('_cb_badge'); if (b) b.classList.remove('show'); }

  function toggle() { isOpen ? close() : open(); }
  function open()  {
    isOpen = true;
    winEl.classList.add('open');
    document.getElementById('_cb_t')?.classList.add('open');
    hideBadge();
    setTimeout(scrollBot, 100);
  }
  function close() {
    isOpen = false;
    winEl.classList.remove('open');
    document.getElementById('_cb_t')?.classList.remove('open');
  }

  const _origSet = window.setLang;
  window.setLang = function (l) {
    if (_origSet) _origSet(l);
    const hn = document.getElementById('_cb_hn');
    const hs = document.getElementById('_cb_hs');
    if (hn) hn.textContent = t('URIGOD ასისტენტი','URIGOD Assistant');
    if (hs) hs.textContent = t('გეხმარებათ სწორი რესტორნის პოვნაში','Helps you find the right restaurant');
    if (!hasSubmitted && formEl) {
      formEl.innerHTML = buildFormHTML();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    setTimeout(build, 0);
  }

})();