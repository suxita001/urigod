/* ════════════════════════════════════════════════
   URIGOD.GE — Mobile Nav Hamburger
   nav-mobile.js  →  js/ folder
   ════════════════════════════════════════════════ */

(function () {
  function initHamburger() {
    const navInner = document.querySelector('.nav-inner');
    const navLinks = document.querySelector('.nav-links');
    if (!navInner || !navLinks || document.querySelector('.nav-hamburger')) return;

    /* ── Burger button ──────────────────────────── */
    const burger = document.createElement('button');
    burger.className = 'nav-hamburger';
    burger.setAttribute('aria-label', 'მენიუ');
    burger.innerHTML = '<span></span><span></span><span></span>';
    navInner.appendChild(burger);

    /* ── Dropdown ───────────────────────────────── */
    const menu = document.createElement('div');
    menu.className = 'nav-mobile-menu';
    menu.style.display = 'none';

    navLinks.querySelectorAll('a').forEach(a => menu.appendChild(a.cloneNode(true)));

    const hr = document.createElement('div');
    hr.className = 'nav-mobile-divider';
    menu.appendChild(hr);

    const row = document.createElement('div');
    row.className = 'nav-mobile-actions';
    row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:4px 14px';
    
    const lang  = document.querySelector('.lang-toggle');
    const theme = document.querySelector('.theme-btn');
    if (lang)  row.appendChild(lang.cloneNode(true));
    if (theme) row.appendChild(theme.cloneNode(true));
    menu.appendChild(row);

    document.body.appendChild(menu);

    let open = false;

    /* ── open/close ─────────────────────────────── */
    function openMenu() {
      open = true;
      burger.classList.add('open');
      menu.style.display = 'flex';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => menu.classList.add('open'));
      });
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (!open) return;
      open = false;
      burger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (!open) menu.style.display = 'none';
      }, 300);
    }

    /* ── events ─────────────────────────────────── */
    burger.addEventListener('click', e => {
      e.stopPropagation();
      open ? closeMenu() : openMenu();
    });

    menu.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  /* ── Branches filter toggle (mobile only) ────── */
  function initFilterToggle() {
    const panel = document.querySelector('.filter-panel');
    if (!panel || panel.dataset.mobileInit) return;
    panel.dataset.mobileInit = '1';
    const ttl = panel.querySelector('.filter-ttl');
    if (!ttl) return;
    if (!panel.querySelector('.filter-body')) {
      const body = document.createElement('div');
      body.className = 'filter-body';
      let node = ttl.nextElementSibling;
      while (node) { const next = node.nextElementSibling; body.appendChild(node); node = next; }
      panel.appendChild(body);
    }
    ttl.style.cursor = 'pointer';
    ttl.addEventListener('click', () => panel.classList.toggle('filter-open'));
  }

  function init() {
    initHamburger();
    if (window.innerWidth <= 768) initFilterToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();