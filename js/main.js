// URIGOD.GE — Global JS

const TR = {
  ka:{
    nav_home:"მთავარი",nav_branches:"ფილიალები",nav_map:"რუქა",nav_about:"ჩვენს შესახებ",
    search_ph:"მოძებნეთ რესტორანი...",
    book_title:"მაგიდის ჯავშანი",book_branch:"ფილიალი",
    book_name:"სახელი / გვარი",book_phone:"ტელეფონი",book_email:"ელ-ფოსტა",
    book_date:"თარიღი",book_time:"დრო",book_guests:"სტუმრები",
    book_notes:"შენიშვნა",book_notes_ph:"სპეც. მოთხოვნა, დაბ. დღე...",
    book_cancel:"გაუქმება",book_submit:"📅 დაჯავშნა",book_sending:"იგზავნება...",
    book_ok:"ჯავშანი გაიგზავნა!",book_err:"შეცდომა. სცადეთ ხელახლა.",
    open:"● ღიაა",closed:"● დახურ.",branch_lbl:"ფილიალი",
    menu_btn:"მენიუ",book_btn:"ჯავშანი",see_more:"ნახე მეტი →",
    
    // Countdown
    launch_title:"გრანდიოზულ გაშვებამდე დარჩა:",
    cd_days:"დღე", cd_hours:"საათი", cd_minutes:"წუთი", cd_seconds:"წამი",
    
    // New Sections
    feat_title:"რატომ URIGOD.GE?",
    feat_1_t:"მარტივი ძიება", feat_1_d:"იპოვე სასურველი ადგილი ფილტრებით და რუკით წამებში.",
    feat_2_t:"რეალური შეფასებები", feat_2_d:"მხოლოდ ნამდვილი მომხმარებლების დატოვებული კომენტარები.",
    feat_3_t:"სწრაფი დაჯავშნა", feat_3_d:"დაჯავშნე მაგიდა ონლაინ, ზედმეტი ზარების გარეშე.",
    steps_title:"როგორ მუშაობს?",
    step_1_t:"მოძებნე", step_1_d:"აირჩიე ქალაქი და სამზარეულო",
    step_2_t:"დაჯავშნე", step_2_d:"შეარჩიე დრო და მაგიდა",
    step_3_t:"ისიამოვნე", step_3_d:"გაატარე დრო საუკეთესოდ",
    sub_title:"გამოიწერე სიახლეები", sub_desc:"არ გამოტოვო ახალი რესტორნები და ექსკლუზიური შეთავაზებები.",
    sub_ph:"შენი ელ-ფოსტა...", sub_btn:"გამოწერა", sub_ok:"წარმატებით გამოიწერეთ სიახლეები!"
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
    menu_btn:"Menu",book_btn:"Reserve",see_more:"See more →",
    
    // Countdown
    launch_title:"GRAND LAUNCH IN:",
    cd_days:"Days", cd_hours:"Hours", cd_minutes:"Mins", cd_seconds:"Secs",
    
    // New Sections
    feat_title:"Why URIGOD.GE?",
    feat_1_t:"Easy Search", feat_1_d:"Find your desired place with filters and maps in seconds.",
    feat_2_t:"Real Reviews", feat_2_d:"Comments and ratings left only by real customers.",
    feat_3_t:"Quick Booking", feat_3_d:"Book a table online without unnecessary calls.",
    steps_title:"How it works?",
    step_1_t:"Search", step_1_d:"Choose city and cuisine",
    step_2_t:"Book", step_2_d:"Select time and table",
    step_3_t:"Enjoy", step_3_d:"Have the best time",
    sub_title:"Subscribe to News", sub_desc:"Don't miss out on new restaurants and exclusive offers.",
    sub_ph:"Your email...", sub_btn:"Subscribe", sub_ok:"Successfully subscribed!"
  }
};

let LANG  = localStorage.getItem('ug_lang')  || 'ka';
let THEME = localStorage.getItem('ug_theme') || 'dark';

function i18n(k){ return (TR[LANG]||TR.ka)[k]||k; }
window.i18n  = i18n; window.LANG_GET = ()=>LANG;

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
function setLang(l){ LANG=l; localStorage.setItem('ug_lang',l); applyLang(); if(typeof window.rerender==='function') window.rerender(); }
window.setLang=setLang;

function applyTheme(){
  document.body.classList.toggle('light', THEME==='light');
  document.querySelectorAll('.theme-ico').forEach(el=>el.textContent=THEME==='dark'?'🌙':'☀️');
  if(typeof window.rerenderMap==='function') window.rerenderMap();
}
function toggleTheme(){ THEME=THEME==='dark'?'light':'dark'; localStorage.setItem('ug_theme',THEME); applyTheme(); }
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
  el.className=`toast ${type}`; el.querySelector('.t-ico').textContent=icon; el.querySelector('.t-msg').textContent=msg;
  el.classList.add('show'); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove('show'),4000);
}
window.showToast=showToast;

// Countdown Init
function initCountdown() {
  const targetDate = new Date("2026-06-01T12:00:00+04:00").getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const elDays = document.getElementById("cd-days");
    if (!elDays) return; 
    if (distance < 0) {
      clearInterval(timer);
      elDays.innerText = "00"; document.getElementById("cd-hours").innerText = "00";
      document.getElementById("cd-minutes").innerText = "00"; document.getElementById("cd-seconds").innerText = "00";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.innerText = days < 10 ? '0' + days : days;
    document.getElementById("cd-hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("cd-minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("cd-seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

document.addEventListener('DOMContentLoaded',()=>{ applyTheme(); applyLang(); setNavActive(); initCountdown(); });