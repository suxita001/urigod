// ════════════════════════════════════════════════
// URIGOD.GE — Smart NLP Chatbot (Fully Local v5.0)
// chatbot.js (Conversational & Smart)
// ════════════════════════════════════════════════

(function () {
  'use strict';

  const L   = () => (localStorage.getItem('ug_lang') || 'ka');
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

  function getRestaurants() {
    return typeof RESTAURANTS !== 'undefined' ? RESTAURANTS : [];
  }

  function tl(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    const l = L();
    return obj[l] || obj.ka || '';
  }

  // ── 1. DICTIONARIES & INTENTS (ბოტის "ტვინი") ──
  const STOP_WORDS = ["მე", "შენ", "მინდა", "ძალიან", "რამე", "არის", "მაქვს", "სად", "ვჭამო", "შევჭამდი", "i", "want", "to", "eat", "very", "much", "where", "can", "some"];
  
  const INTENTS = {
    greeting: /გამარჯობა|სალამი|გაუმარჯოს|პრივეტ|hi|hello|hey|დილა მშვიდობის|საღამო მშვიდობის/i,
    how_are_you: /როგორ ხარ|რას შვრები|რაშვრები|რანაირად ხარ|how are you|whats up|what's up|how you doing/i,
    who_are_you: /ვინ ხარ|რა ხარ|რა შეგიძლია|შენი სახელი|who are you|what can you do|your name/i,
    joke: /ანეგდოტი|ხუმრობა|joke|tell me a joke|გამაცინე|ვიხუმროთ/i,
    thanks: /მადლობა|გაიხარე|სპასიბა|ჯიგარი ხარ|thank|thx|thanks|appreciate/i,
    bye: /ნახვამდის|კარგად|bye|goodbye|see ya|წავედი/i,
    hungry: /მშია|ჭამა|მინდა საჭმელი|food|hungry|სად ვჭამო|რას მირჩევ|გემრიელი/i
  };

  // ── 2. SMART NLP ENGINE ─────────────────────────────
  function smartProcess(text) {
    const q = text.toLowerCase().trim();
    const isKa = L() === 'ka';
    const rs = getRestaurants();
    
    // --- CHITCHAT & CONVERSATION ---

    if (INTENTS.joke.test(q)) {
      return {
        msg: isKa 
          ? "კარგი, მოისმინე: რატომ ვერ იტანენ საიდუმლოებებს რესტორანში? ...იმიტომ რომ სუპი ყოველთვის იღვრება! 🍲 ბადუმ-ცც... 😂 ჯობია საჭმლის ძებნა გავაგრძელოთ, არა?" 
          : "Alright, here goes: Why do restaurants hate secrets? ...Because the soup always spills! 🍲 Ba-dum-tss... 😂 Better stick to finding food, right?",
        qrs: isKa ? ['მშია', 'რუკაზე ნახვა'] : ['I am hungry', 'Open Map']
      };
    }

    if (INTENTS.who_are_you.test(q)) {
      return {
        msg: isKa
          ? "მე ვარ URIGOD-ის პირადი გასტრო-ასისტენტი! 🤖 ჩემი საქმეა ზეპირად ვიცოდე სად კეთდება ყველაზე გემრიელი კერძები. მითხარი რისი ხასიათი გაქვს და ეგრევე ვიპოვი!"
          : "I am URIGOD's personal gastro-assistant! 🤖 My job is to know exactly where the most delicious food is made. Tell me your mood, and I'll find the perfect spot!",
        qrs: isKa ? ['ბურგერი მინდა', 'აზიური სამზარეულო'] : ['I want burger', 'Asian cuisine']
      };
    }

    if (INTENTS.how_are_you.test(q)) {
      return {
        msg: isKa
          ? "მშვენივრად, რადგან აქ ვარ და შემიძლია საუკეთესო რესტორნები გირჩიო! ენერგიით სავსე ვარ ⚡ შენ როგორ ხარ? რამე ხომ არ მოგშივდა? 😎"
          : "Doing great, because I'm here ready to recommend the best restaurants! Full of energy ⚡ How about you? Are you hungry? 😎",
        qrs: isKa ? ['კი, ძალიან მშია', 'არა, უბრალოდ ვათვალიერებ'] : ['Yes, very hungry', 'No, just browsing']
      };
    }

    if (INTENTS.thanks.test(q)) {
      return {
        msg: isKa
          ? "არაფრის, რისი მადლობა! 💙 ყოველთვის აქ ვარ შენს დასახმარებლად. გემრიელად მიირთვი!"
          : "You're very welcome! 💙 I'm always here to help. Enjoy your meal!",
        qrs: isKa ? ['თავიდან დაწყება'] : ['Start over']
      };
    }

    if (INTENTS.bye.test(q)) {
      return {
        msg: isKa
          ? "დროებით! წარმატებული დღე და გემრიელი კერძები! 👋 შემოიხედე ხოლმე."
          : "See you later! Have a great day and delicious meals! 👋 Drop by anytime."
      };
    }

    if (INTENTS.greeting.test(q)) {
      return { 
        msg: isKa 
          ? "გაუმარჯოს! ✌️ მე URIGOD-ის ასისტენტი ვარ. რით შემიძლია დაგეხმარო? რა გემოზე ხარ დღეს?" 
          : "Hey there! ✌️ I'm URIGOD Assistant. How can I help you? What's your mood today?",
        qrs: isKa ? ['მშია, რას მირჩევ?', 'რუკაზე მაჩვენე'] : ['I am hungry, any tips?', 'Show on map']
      };
    }

    if (INTENTS.hungry.test(q) && q.split(' ').length <= 3) {
      const top = [...rs].sort((a,b) => b.rating - a.rating).slice(0, 3);
      return { 
        msg: isKa 
          ? "მეც! 😂 აი, ჩვენი მომხმარებლების ფავორიტი ტოპ-ადგილები, სადაც ნამდვილად ისიამოვნებ:" 
          : "Me too! 😂 Here are our top-rated favorite spots you will definitely enjoy:", 
        cards: top,
        qrs: isKa ? ['სხვა ვარიანტები', 'კონკრეტული კერძი მინდა'] : ['Other options', 'I want a specific dish']
      };
    }

    // --- RESTAURANT SEARCH (Fuzzy Matching) ---
    rs.forEach(r => r._score = 0);
    const words = q.split(/\s+/).filter(w => !STOP_WORDS.includes(w)); // ვფილტრავთ "ნაგავ" სიტყვებს
    
    words.forEach(w => {
      let cw = w.replace(/[.,?!]/g, ''); // სასვენი ნიშნების გაქრობა
      
      // მარტივი ქართული Stemming
      if (cw.length > 4) {
        if (cw.endsWith('ები') || cw.endsWith('ებს')) cw = cw.slice(0, -3);
        else if (cw.endsWith('ს') || cw.endsWith('ი') || cw.endsWith('ა') || cw.endsWith('ო') || cw.endsWith('ში')) cw = cw.slice(0, -1);
      }
      if (cw.length < 3) return;

      rs.forEach(r => {
        const searchStr = (
          JSON.stringify(r.name) + 
          JSON.stringify(r.cuisine) + 
          JSON.stringify(r.tags || []) + 
          JSON.stringify(r.branches || []) +
          JSON.stringify(r.menu || []) // მენიუშიც ვეძებთ!
        ).toLowerCase();
        
        if (searchStr.includes(cw)) r._score += 2;
        if (searchStr.includes(q)) r._score += 5; // ზუსტი ფრაზა
      });
    });

    const matched = rs.filter(r => r._score > 0).sort((a, b) => b._score - a._score);

    if (matched.length > 0) {
      return { 
        msg: isKa ? "აი, ვიპოვე ზუსტად ის, რაც გჭირდება! 👇" : "Found exactly what you need! 👇", 
        cards: matched.slice(0, 3),
        qrs: isKa ? ['კიდევ მაჩვენე', 'რუკაზე ნახვა'] : ['Show more', 'View on map']
      };
    }

    // --- FALLBACK (თუ ვერაფერი იპოვა) ---
    const topFallback = [...rs].sort((a, b) => b.rating - a.rating).slice(0, 2);
    return {
      msg: isKa 
        ? "ჰმმ, ვეცადე, მაგრამ კონკრეტულად მაგაზე ვერაფერი ვიპოვე 🧐... სამაგიეროდ, შემიძლია ეს უმაგრესი ადგილები შემოგთავაზო:" 
        : "Hmm, I tried, but couldn't find exactly that 🧐... However, I highly recommend checking these out instead:",
      cards: topFallback,
      qrs: isKa ? ['ბურგერი', 'აზიური', 'დესერტი'] : ['Burger', 'Asian', 'Dessert']
    };
  }

  // ── DOM State ────────────────────────────────────────────
  let winEl, msgsEl;
  let isOpen = false;

  function scrollBot() { if (msgsEl) msgsEl.scrollTop = msgsEl.scrollHeight; }
  function showBadge() { document.getElementById('_cb_badge')?.classList.add('show'); }
  function hideBadge() { document.getElementById('_cb_badge')?.classList.remove('show'); }

  // ── Chat UI Builders ─────────────────────────────────────
  function addUser(text) {
    const div = document.createElement('div');
    div.className = 'cb-msg user';
    div.innerHTML = `<div class="cb-bubble">${esc(text)}</div><div class="cb-avi">👤</div>`;
    msgsEl.appendChild(div);
    scrollBot();
  }

  function addBot(text, cards, qrs) {
    const div = document.createElement('div');
    div.className = 'cb-msg bot';
    const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    div.innerHTML = `<div class="cb-avi">🍽️</div><div class="cb-bubble">${html}</div>`;
    msgsEl.appendChild(div);

    if (cards && cards.length) {
      cards.forEach(r => msgsEl.appendChild(buildCard(r)));
    }
    
    if (qrs && qrs.length) {
      addQuickReplies(qrs);
    } else {
      scrollBot();
    }
    
    if (!isOpen) showBadge();
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'cb-msg bot'; div.id = '_cb_typing';
    div.innerHTML = `<div class="cb-avi">🍽️</div><div class="cb-bubble"><div class="cb-dots"><span></span><span></span><span></span></div></div>`;
    msgsEl.appendChild(div);
    scrollBot();
  }

  function removeTyping() {
    document.getElementById('_cb_typing')?.remove();
  }

  function addQuickReplies(labels) {
    const div = document.createElement('div');
    div.className = 'cb-msg bot';
    div.innerHTML = `<div class="cb-avi" style="visibility:hidden">🍽️</div><div style="flex:1"><div class="cb-qrs">${
      labels.map(l => `<button class="cb-qr">${esc(l)}</button>`).join('')
    }</div></div>`;
    msgsEl.appendChild(div);
    div.querySelectorAll('.cb-qr').forEach((btn, i) => {
      btn.onclick = () => {
        div.remove();
        processInput(labels[i]);
      };
    });
    scrollBot();
  }

  function buildCard(r) {
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
            🕐 ${r.hours} · 📍 ${r.branches?.length || 1} ${ka ? 'ფილიალი' : 'branch(es)'}
          </div>
          <div class="cb-card-actions">
            <a href="${pre}restaurants/${r.slug}/index.html" class="cb-card-btn p">
              ${ka ? 'ნახვა' : 'View'} →
            </a>
            <a href="${pre}restaurants/${r.slug}/menu.html" class="cb-card-btn g">
              🍽️ ${ka ? 'მენიუ' : 'Menu'}
            </a>
          </div>
        </div>
      </div>`;
    return card;
  }

  // ── Main Process Loop ─────────────────────────────────────
  function processInput(text) {
    if (!text.trim()) return;

    addUser(text);
    
    // Map Shortcut
    if (/map|ruka|რუკა|რუკაზე/i.test(text)) {
      showTyping();
      setTimeout(() => {
        removeTyping();
        addBot(L()==='ka' ? 'კარგი, გადავდივართ რუკაზე 🗺️' : 'Sure, opening the map 🗺️');
        const depth = window.location.pathname.split('/').filter(Boolean).length;
        setTimeout(() => window.location.href = (depth >= 2 ? '../../' : '') + 'map.html', 800);
      }, 500);
      return;
    }
    
    // Start Over
    if (/start over|თავიდან|ხელახლა|გასუფთავება/i.test(text)) {
      msgsEl.innerHTML = '';
      addBot(
        L()==='ka' ? 'კარგი, თავიდან დავიწყოთ! 🍽️ რითი დაგეხმარო?' : 'Sure, let\'s start over! 🍽️ How can I help?',
        null,
        L()==='ka' ? ['ბურგერი', 'სუში', 'რამე გემრიელი'] : ['Burger', 'Sushi', 'Something tasty']
      );
      return;
    }

    showTyping();

    // ვბაძავთ AI-ს "ფიქრს"
    setTimeout(() => {
      removeTyping();
      const response = smartProcess(text);
      addBot(response.msg, response.cards, response.qrs);
    }, 650);
  }

  window._cbFreeSubmit = () => {
    const inp = document.getElementById('_cb_free_in');
    const txt = inp?.value?.trim() || '';
    if (!txt) return;
    if (inp) inp.value = '';
    processInput(txt);
  };

  // ── Window Controls ──────────────────────────────────────
  function toggle() { isOpen ? close() : open(); }
  function open()   {
    isOpen = true;
    winEl.classList.add('open');
    document.getElementById('_cb_t')?.classList.add('open');
    hideBadge();
    setTimeout(() => {
        document.getElementById('_cb_free_in')?.focus();
        scrollBot();
    }, 100);
  }
  function close()  {
    isOpen = false;
    winEl.classList.remove('open');
    document.getElementById('_cb_t')?.classList.remove('open');
  }

  // ── Initialization ───────────────────────────────────────
  function build() {
    if (document.getElementById('_cb_t')) return;
    const isKa = L() === 'ka';

    const trig = document.createElement('button');
    trig.id = '_cb_t'; trig.className = 'cb-trigger';
    trig.innerHTML = `<span>🍽️</span><span class="cb-badge" id="_cb_badge"></span>`;
    trig.onclick = toggle;
    document.body.appendChild(trig);

    const win = document.createElement('div');
    win.id = '_cb_w'; win.className = 'cb-window';
    win.innerHTML = `
      <div class="cb-header">
        <div class="cb-avatar">🍽️</div>
        <div class="cb-hinfo">
          <div class="cb-hname" id="_cb_hn">${isKa ? 'URIGOD ასისტენტი' : 'URIGOD Assistant'}</div>
          <div class="cb-hstatus" id="_cb_hs">${isKa ? 'ონლაინ · გისმენთ ⚡' : 'Online · Listening ⚡'}</div>
        </div>
        <button class="cb-hclose" onclick="window._cbClose()" title="close">✕</button>
      </div>
      <div class="cb-messages" id="_cb_msgs" style="padding-bottom: 20px;"></div>
      
      <div class="cb-free" id="_cb_free_row" style="display:flex; border-top: 1px solid var(--bdr); padding: 14px 18px; background: var(--bg2);">
        <input class="cb-free-in" id="_cb_free_in" type="text"
          placeholder="${isKa ? 'მომწერე რას შეჭამდი...' : 'Type what you are craving...'}"
          onkeydown="if(event.key==='Enter')window._cbFreeSubmit()">
        <button class="cb-free-btn" onclick="window._cbFreeSubmit()">➤</button>
      </div>`;
    
    document.body.appendChild(win);
    winEl  = win;
    msgsEl = win.querySelector('#_cb_msgs');
    window._cbClose = close;

    setTimeout(() => {
      addBot(
        isKa 
          ? 'გამარჯობა! 👋 მე URIGOD-ის ჩატბოტი ვარ. მომწერე რას შეჭამდი და საუკეთესო ვარიანტებს მოგიძებნი, ან უბრალოდ ვილაპარაკოთ! ⚡' 
          : 'Hello! 👋 I am URIGOD chatbot. Type what you want to eat and I will find the best options, or we can just chat! ⚡',
        null,
        isKa ? ['🍔 ბურგერი მინდა', '🍣 სუში', 'როგორ ხარ?'] : ['🍔 I want burger', '🍣 Sushi', 'How are you?']
      );
    }, 450);
  }

  const _origSet = window.setLang;
  window.setLang = function(l) {
    if (_origSet) _origSet(l);
    const isKa = l === 'ka';
    const hn = document.getElementById('_cb_hn');
    const hs = document.getElementById('_cb_hs');
    const inp = document.getElementById('_cb_free_in');
    
    if (hn) hn.textContent = isKa ? 'URIGOD ასისტენტი' : 'URIGOD Assistant';
    if (hs) hs.textContent = isKa ? 'ონლაინ · გისმენთ ⚡' : 'Online · Listening ⚡';
    if (inp) inp.placeholder = isKa ? 'მომწერე რას შეჭამდი...' : 'Type what you are craving...';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    setTimeout(build, 0);
  }

})();