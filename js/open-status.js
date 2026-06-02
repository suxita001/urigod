/* ════════════════════════════════════════════════
   URIGOD.GE — Real-time Open/Closed Status
   open-status.js  →  js/ ფოლდერში ჩასვით

   ჩართვა: main.js-ის წინ
   <script src="js/open-status.js"></script>

   ━━━ მხარდაჭერილი ფორმატები ━━━
   "13:00 – 01:00"        (ერთი ფანჯარა)
   "09:00-23:00"          (dash)
   "06:00 – 24:00"        (24:00 = შუაღამე)
   "24/7"                 (ყოველთვის ღია)
   { ka: "...", en: "..." }  (ობიექტი)
   ════════════════════════════════════════════════ */

const OpenStatus = (() => {

  /* ── Parse "HH:MM" → minutes since midnight ── */
  function toMin(str) {
    if (!str) return null;
    const [h, m] = str.trim().split(':').map(Number);
    if (isNaN(h)) return null;
    return h * 60 + (m || 0);
  }

  /* ── Extract plain string from hours value ─── */
  function hoursStr(hours) {
    if (!hours) return '';
    if (typeof hours === 'string') return hours;
    // bilingual object — use either language
    return hours.ka || hours.en || '';
  }

  /* ── Core logic ─────────────────────────────── */
  function isOpenNow(hours) {
    const raw = hoursStr(hours).trim();
    if (!raw) return null;            // უცნობი — null → ჩვენება არ შეიცვლება
    if (/24\/7|24 ? საათი/i.test(raw)) return true;

    // Try to find HH:MM – HH:MM pattern (any separator)
    const match = raw.match(/(\d{1,2}:\d{2})\s*[–\-—]\s*(\d{1,2}:\d{2})/);
    if (!match) return null;

    const now = new Date();
    const nowMin = now.getHours() * 60 + now.getMinutes();

    let open  = toMin(match[1]);
    let close = toMin(match[2]);
    if (open === null || close === null) return null;

    // 24:00 → 0 of next day (1440 min)
    if (match[2].startsWith('24')) close = 1440;

    // Spans midnight: e.g. 22:00 – 02:00 → close += 1440
    if (close <= open) close += 1440;

    // Handle case where nowMin is past midnight (0–close wraps)
    if (nowMin < open && close > 1440) {
      return nowMin + 1440 >= open && nowMin + 1440 <= close;
    }

    return nowMin >= open && nowMin < close;
  }

  /* ── Compute status for a branch ────────────── */
  // Returns: 'open' | 'closed' | 'unknown'
  function branchStatus(branch) {
    const result = isOpenNow(branch.hours);
    if (result === null) return 'unknown';
    return result ? 'open' : 'closed';
  }

  /* ── Compute status for a restaurant ────────── */
  // A restaurant is "open" if ANY branch is currently open
  function restaurantStatus(restaurant) {
    const statuses = restaurant.branches.map(b => branchStatus(b));
    if (statuses.some(s => s === 'open'))    return 'open';
    if (statuses.every(s => s === 'unknown')) return 'unknown';
    return 'closed';
  }

  /* ── Patch RESTAURANTS array in-place ───────── */
  // Call once after restaurants.js loads.
  // Sets r.status and b.status based on current time.
  function patchAll(restaurants) {
    if (!Array.isArray(restaurants)) return;
    restaurants.forEach(r => {
      r.branches.forEach(b => {
        const s = branchStatus(b);
        if (s !== 'unknown') b.status = s;   // only override if we can detect
      });
      const rs = restaurantStatus(r);
      if (rs !== 'unknown') r.status = rs;
    });
  }

  /* ── Badge HTML helper ───────────────────────── */
  function badgeHtml(status, ka) {
    if (status === 'open')
      return `<span class="badge badge-open" style="position:static">🟢 ${ka ? 'ღიაა' : 'Open'}</span>`;
    if (status === 'closed')
      return `<span class="badge badge-closed" style="position:static">🔴 ${ka ? 'დახურულია' : 'Closed'}</span>`;
    return `<span class="badge" style="position:static;background:var(--glass);border:1px solid var(--bdr);color:var(--t3)">⚪ ${ka ? 'უცნობი' : 'Unknown'}</span>`;
  }

  /* ── Hours display string ────────────────────── */
  function hoursDisplay(branch) {
    const h = branch.hours;
    if (!h) return '—';
    if (typeof h === 'string') return h;
    const lang = (typeof LANG_GET === 'function' ? LANG_GET() : 'ka');
    return lang === 'en' ? (h.en || h.ka) : (h.ka || h.en);
  }

  return { isOpenNow, branchStatus, restaurantStatus, patchAll, badgeHtml, hoursDisplay };

})();