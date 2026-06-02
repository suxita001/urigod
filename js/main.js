// URIGOD.GE — Global JS

const TR = {
  ka:{
    nav_home:"მთავარი",nav_branches:"ფილიალები",nav_map:"რუკა",nav_about:"ჩვენს შესახებ",
    search_ph:"მოძებნეთ რესტორანი...",
    book_title:"მაგიდის ჯავშანი",book_branch:"ფილიალი",
    book_name:"სახელი / გვარი",book_phone:"ტელეფონი",book_email:"ელ-ფოსტა",
    book_date:"თარიღი",book_time:"დრო",book_guests:"სტუმრები",
    book_notes:"შენიშვნა",book_notes_ph:"სპეც. მოთხოვნა, დაბ. დღე...",
    book_cancel:"გაუქმება",book_submit:"📅 დაჯავშნა",book_sending:"იგზავნება...",
    book_ok:"ჯავშანი გაიგზავნა!",book_err:"შეცდომა. სცადეთ ხელახლა.",
    open:"● ღიაა",closed:"● დახურ.",branch_lbl:"ფილიალი",
    menu_btn:"მენიუ",book_btn:"ჯავშანი",see_more:"ნახე მეტი →"
  },
  en:{
    nav_home:"Home",nav_branches:"Branches",nav_map:"Map",nav_about:"About",
    search_ph:"Search restaurant...",
    book_title:"Table Reservation",book_branch:"Branch",
    book_name:"Full Name",book_phone:"Phone",book_email:"Email",
    book_date:"Date",book_time:"Time",book_guests:"Guests",
    book_notes:"Notes",book_notes_ph:"Special request, birthday...",
    book_cancel:"Cancel",book_submit:"📅 Reserve",book_sending:"Sending...",
    book_ok:"Reservation sent!",book_err:"Error. Please try again.",
    open:"● Open",closed:"● Closed",branch_lbl:"Branch",
    menu_btn:"Menu",book_btn:"Reserve",see_more:"See more →"
  }
};

let LANG  = localStorage.getItem('ug_lang')  || 'ka';
let THEME = localStorage.getItem('ug_theme') || 'dark';

function i18n(k){ return (TR[LANG]||TR.ka)[k]||k; }
window.i18n  = i18n;
window.LANG_GET = ()=>LANG;

function applyLang(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = i18n(el.dataset.i18n);
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=v;
    else el.textContent=v;
  });
  document.querySelectorAll('.lang-ka').forEach(b=>b.classList.toggle('active',LANG==='ka'));
  document.querySelectorAll('.lang-en').forEach(b=>b.classList.toggle('active',LANG==='en'));
}
function setLang(l){
  LANG=l; localStorage.setItem('ug_lang',l);
  applyLang();
  if(typeof window.rerender==='function') window.rerender();
}
window.setLang=setLang;

function applyTheme(){
  document.body.classList.toggle('light', THEME==='light');
  document.querySelectorAll('.theme-ico').forEach(el=>el.textContent=THEME==='dark'?'🌙':'☀️');
  if(typeof window.rerenderMap==='function') window.rerenderMap();
}
function toggleTheme(){
  THEME=THEME==='dark'?'light':'dark';
  localStorage.setItem('ug_theme',THEME);
  applyTheme();
}
window.toggleTheme=toggleTheme;

function setNavActive(){
  const curr=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    const h=(a.getAttribute('href')||'').split('/').pop().split('?')[0];
    a.classList.toggle('active',!!h&&curr===h);
  });
}

document.addEventListener('keydown',e=>{
  if(e.key!=='Enter'||!e.target.matches('.nav-search input')) return;
  const q=e.target.value.trim(); if(!q) return;
  const depth=window.location.pathname.split('/').filter(Boolean).length;
  const base=depth>=2?'../../branches.html':'branches.html';
  window.location.href=`${base}?q=${encodeURIComponent(q)}`;
});

function showToast(icon,msg,type='ok'){
  let el=document.getElementById('_toast');
  if(!el){el=document.createElement('div');el.id='_toast';el.className='toast';el.innerHTML='<span class="t-ico"></span><span class="t-msg"></span>';document.body.appendChild(el);}
  el.className=`toast ${type}`;
  el.querySelector('.t-ico').textContent=icon;
  el.querySelector('.t-msg').textContent=msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t=setTimeout(()=>el.classList.remove('show'),4000);
}
window.showToast=showToast;

// BOOKING MODAL
function buildModal(){
  if(document.getElementById('_bk_overlay')) return;
  document.body.insertAdjacentHTML('beforeend',`
<div class="modal-overlay" id="_bk_overlay" onclick="if(event.target===this)closeBooking()">
  <div class="modal">
    <div class="modal-head">
      <div>
        <div class="modal-title" data-i18n="book_title">${i18n('book_title')}</div>
        <div class="modal-sub" id="_bk_rname"></div>
      </div>
      <button class="modal-x" onclick="closeBooking()">✕</button>
    </div>
    <form id="_bk_form" class="modal-body" onsubmit="submitBooking(event)" novalidate>
      <div id="_bk_branch_row" class="form-group" style="display:none">
        <label class="form-label" data-i18n="book_branch">${i18n('book_branch')}</label>
        <select id="_bk_branch_sel" name="branch_id" class="form-select form-input"></select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${i18n('book_name')} *</label>
          <input type="text" name="name" class="form-input" required placeholder="გიორგი მაისურაძე">
        </div>
        <div class="form-group">
          <label class="form-label">${i18n('book_phone')} *</label>
          <input type="tel" name="phone" class="form-input" required placeholder="+995 5XX XXX XXX">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${i18n('book_email')}</label>
        <input type="email" name="email" class="form-input" placeholder="mail@gmail.com">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${i18n('book_date')} *</label>
          <input type="date" name="date" class="form-input" required min="${new Date().toISOString().split('T')[0]}">
        </div>
        <div class="form-group">
          <label class="form-label">${i18n('book_time')} *</label>
          <input type="time" name="time" class="form-input" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${i18n('book_guests')} *</label>
        <select name="guests" class="form-select form-input" required>
          <option value="">-- ${LANG==='en'?'Select':'აირჩიეთ'} --</option>
          ${[1,2,3,4,5,6,7,8].map(n=>`<option value="${n}">${n} ${LANG==='en'?'guests':'სტუმარი'}</option>`).join('')}
          <option value="9+">9+ ${LANG==='en'?'guests':'სტუმარი'}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" data-i18n="book_notes">${i18n('book_notes')}</label>
        <textarea name="notes" class="form-textarea" data-i18n="book_notes_ph" placeholder="${i18n('book_notes_ph')}"></textarea>
      </div>
    </form>
    <div class="modal-foot">
      <button class="btn btn-ghost" onclick="closeBooking()" data-i18n="book_cancel">${i18n('book_cancel')}</button>
      <button class="btn btn-primary" id="_bk_sub" type="submit" form="_bk_form" data-i18n="book_submit">${i18n('book_submit')}</button>
    </div>
  </div>
</div>`);
}

function openBooking(rName, rEmail, branches, preId){
  buildModal();
  const ov=document.getElementById('_bk_overlay');
  ov.dataset.email=rEmail;
  const name=typeof rName==='object'?(LANG==='en'?rName.en:rName.ka):rName;
  ov.dataset.rname=name;
  document.getElementById('_bk_rname').textContent=name;

  const row=document.getElementById('_bk_branch_row');
  const sel=document.getElementById('_bk_branch_sel');
  if(branches && branches.length>1){
    row.style.display='block';
    sel.innerHTML=branches.map(b=>{
      const bn=typeof b.name==='object'?(LANG==='en'?b.name.en:b.name.ka):b.name;
      return `<option value="${b.id}"${preId===b.id?' selected':''}>${bn}</option>`;
    }).join('');
  } else if(branches && branches.length===1){
    row.style.display='none';
    sel.innerHTML=`<option value="${branches[0].id}"></option>`;
  } else { row.style.display='none'; }

  document.getElementById('_bk_form').reset();
  if(preId) sel.value=preId;
  document.querySelector('#_bk_form [name=date]').min=new Date().toISOString().split('T')[0];
  requestAnimationFrame(()=>ov.classList.add('open'));
  document.body.style.overflow='hidden';
}
function closeBooking(){
  const el=document.getElementById('_bk_overlay');
  if(el) el.classList.remove('open');
  document.body.style.overflow='';
}
async function submitBooking(e){
  e.preventDefault();
  const ov=document.getElementById('_bk_overlay');
  const data=Object.fromEntries(new FormData(e.target));
  if(!data.name||!data.phone||!data.date||!data.time||!data.guests){
    showToast('⚠️',LANG==='en'?'Fill required fields':'შეავსეთ სავ. ველები','err'); return;
  }
  const btn=document.getElementById('_bk_sub');
  btn.disabled=true; btn.textContent=i18n('book_sending');

  if(window.emailjs&&window.EMAILJS_SID&&window.EMAILJS_TID){
    try{
      await emailjs.send(window.EMAILJS_SID,window.EMAILJS_TID,{
        to_email:ov.dataset.email, restaurant:ov.dataset.rname,
        branch:data.branch_id||'', guest_name:data.name,
        guest_phone:data.phone, guest_email:data.email||'',
        date:data.date, time:data.time, guests:data.guests, notes:data.notes||'—'
      });
      showToast('✅',i18n('book_ok'),'ok'); closeBooking();
    } catch{ showToast('❌',i18n('book_err'),'err'); }
  } else {
    const subj=encodeURIComponent(`Reservation — ${ov.dataset.rname}`);
    const body=encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email||'—'}\nDate: ${data.date}\nTime: ${data.time}\nGuests: ${data.guests}\nBranch: ${data.branch_id||'—'}\nNotes: ${data.notes||'—'}`);
    window.open(`mailto:${ov.dataset.email}?subject=${subj}&body=${body}`,'_blank');
    showToast('✅',i18n('book_mailto')||'Mail opened','ok'); closeBooking();
  }
  btn.disabled=false; btn.textContent=i18n('book_submit');
}

document.addEventListener('keydown',e=>{ 
    if(e.key==='Escape') {
        closeBooking(); 
        if(typeof window._closeAuthModal === 'function') window._closeAuthModal(); 
    }
});
window.openBooking=openBooking; window.closeBooking=closeBooking; window.submitBooking=submitBooking;

document.addEventListener('DOMContentLoaded',()=>{ applyTheme(); applyLang(); setNavActive(); });