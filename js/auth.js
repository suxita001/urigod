// ══════════════════════════════════════════════════════════
// URIGOD.GE — Firebase Auth System (Avatars Fixed)
// js/auth.js
// ══════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyBLN-PmI-OGyBRkV49J8pEg7BAWMF_I-sw",
  authDomain: "urigood-33c3e.firebaseapp.com",
  projectId: "urigood-33c3e",
  storageBucket: "urigood-33c3e.firebasestorage.app",
  messagingSenderId: "1077907609242",
  appId: "1:1077907609242:web:4fa2eca3b6356cfc147123",
  measurementId: "G-BF1D01E1V6"
};

// ─────────────────────────────────────────────────────────
// 1.5 ADMIN EMAILS (მხოლოდ ამ მეილებს ექნებათ ადმინ პანელზე წვდომა)
// ─────────────────────────────────────────────────────────
const ADMIN_EMAILS = [
  "nika@gmail.com", 
  "saba@gmail.com",
  "urigodge@gmail.com" // ჩაწერე აქ თქვენი რეალური მეილები
];

const DEFAULT_AVATARS = [
  { id: "fox",   emoji: "🦊", bg: "#FF6B35" },
  { id: "cat",   emoji: "🐱", bg: "#7C3AED" },
  { id: "bear",  emoji: "🐻", bg: "#059669" },
  { id: "lion",  emoji: "🦁", bg: "#D97706" },
  { id: "wolf",  emoji: "🐺", bg: "#2563EB" },
  { id: "panda", emoji: "🐼", bg: "#DB2777" },
  { id: "frog",  emoji: "🐸", bg: "#16A34A" },
  { id: "owl",   emoji: "🦉", bg: "#9333EA" },
];

let _auth = null;
let _currentUser = null;

function initFirebase() {
  try {
    if (typeof firebase === 'undefined') return;
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    _auth = firebase.auth();

    _auth.onAuthStateChanged(user => {
      _currentUser = user;
      if (user) {
        _saveUserLocally(user);
      } else {
        localStorage.removeItem('ug_user');
      }
      _renderNavProfile();
    });
  } catch (error) {
    console.error("Firebase Init Error:", error);
  }
}

// ── AVATAR PERSISTENCE LOGIC ──
function _saveUserLocally(user) {
  const avatars = JSON.parse(localStorage.getItem('ug_avatars') || '{}');
  const myAvatar = avatars[user.uid] || { emoji: '🦊', bg: '#FF6B35', custom: '' };

  const data = {
    uid: user.uid,
    email: user.email || '',
    displayName: user.displayName || 'მომხმარებელი',
    avatarEmoji: myAvatar.emoji,
    avatarBg: myAvatar.bg,
    avatarCustom: myAvatar.custom
  };
  localStorage.setItem('ug_user', JSON.stringify(data));
  return data;
}

function _getStoredUser() {
  try { return JSON.parse(localStorage.getItem('ug_user')); } catch { return null; }
}

function _updateStoredUser(patch) {
  const u = _getStoredUser() || {};
  const updated = { ...u, ...patch };
  localStorage.setItem('ug_user', JSON.stringify(updated));

  // თუ ავატარი შეიცვალა, მუდმივ მეხსიერებაში ვწერთ
  if (updated.uid && (patch.avatarEmoji !== undefined || patch.avatarCustom !== undefined)) {
    const avatars = JSON.parse(localStorage.getItem('ug_avatars') || '{}');
    avatars[updated.uid] = { emoji: updated.avatarEmoji, bg: updated.avatarBg, custom: updated.avatarCustom };
    localStorage.setItem('ug_avatars', JSON.stringify(avatars));
  }
  _renderNavProfile();
}

function handleAuthError(e) {
  console.error(e);
  if (e.code === 'auth/unauthorized-domain') {
    _showError("⚠️ დომენი არაა დამატებული! Firebase Console -> Auth -> Settings -> Authorized domains-ში დაამატეთ თქვენი საიტი.");
  } else if (e.code === 'auth/operation-not-allowed') {
    _showError("⚠️ Google-ით შესვლა გამორთულია Firebase-ში. შედით Sign-in method-ში და ჩართეთ Google.");
  } else if (e.code === 'auth/email-already-in-use') {
    _showError("⚠️ ეს ელ-ფოსტა უკვე გამოყენებულია.");
  } else if (e.code === 'auth/weak-password') {
    _showError("⚠️ პაროლი უნდა იყოს მინ. 6 სიმბოლო.");
  } else if (e.code === 'auth/invalid-credential') {
    _showError("⚠️ არასწორი პაროლი ან ელ-ფოსტა.");
  } else {
    _showError("ერორი: " + e.message);
  }
}

async function signInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await _auth.signInWithPopup(provider);
    _closeAuthModal();
  } catch (e) { handleAuthError(e); }
}

async function signInEmail(email, password) {
  if (!email || !password) { _showError("შეავსეთ ყველა ველი."); return; }
  try {
    await _auth.signInWithEmailAndPassword(email, password);
    _closeAuthModal();
  } catch (e) { handleAuthError(e); }
}

async function registerEmail(name, email, password) {
  if (!name || !email || !password) { _showError("შეავსეთ სრული ინფორმაცია."); return; }
  try {
    const res = await _auth.createUserWithEmailAndPassword(email, password);
    await res.user.updateProfile({ displayName: name });
    _saveUserLocally({ ...res.user, displayName: name });
    _closeAuthModal();
  } catch (e) { handleAuthError(e); }
}

async function signOut() {
  if (_auth) await _auth.signOut();
  localStorage.removeItem('ug_user');
  _closeProfilePopup();
  _renderNavProfile();
}

function _renderNavProfile() {
  const loginBtn = document.getElementById('nav-login-btn');
  const profileBtn = document.getElementById('nav-profile-btn');
  const u = _getStoredUser();

  if (u) {
    if (loginBtn) loginBtn.setAttribute('style', 'display: none !important;');
    if (profileBtn) {
      profileBtn.setAttribute('style', 'display: flex !important; align-items: center; justify-content: center; background: none; border: none; cursor: pointer; padding: 0;');
      profileBtn.innerHTML = _avatarHTML(u, 38);
      profileBtn.onclick = e => { e.stopPropagation(); _toggleProfilePopup(); };
    }
  } else {
    if (loginBtn) loginBtn.setAttribute('style', 'display: flex !important; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 20px; background: var(--cyan); color: #080808; font-weight: 700; font-size: 13px; border: none; cursor: pointer;');
    if (profileBtn) profileBtn.setAttribute('style', 'display: none !important;');
  }
}

function _avatarHTML(u, size = 36) {
  const s = `width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;`;
  if (u.avatarCustom) return `<img src="${u.avatarCustom}" style="${s}border:2px solid var(--cyan)">`;
  if (u.photoURL) return `<img src="${u.photoURL}" style="${s}border:2px solid var(--cyan)">`;
  if (u.avatarEmoji) return `<span style="${s}display:inline-flex;align-items:center;justify-content:center;background:${u.avatarBg};font-size:${size*0.5}px;border:2px solid var(--cyan)">${u.avatarEmoji}</span>`;
  const i = (u.displayName || u.email || '?').charAt(0).toUpperCase();
  return `<span style="${s}display:inline-flex;align-items:center;justify-content:center;background:var(--cyan);color:#000;font-weight:700;font-size:${size*0.4}px">${i}</span>`;
}

function _toggleProfilePopup() {
  const u = _getStoredUser();
  if (!u) { openAuthModal(); return; }
  let popup = document.getElementById('profile-popup');
  if (popup) { _closeProfilePopup(); return; }

  // ვამოწმებთ, არის თუ არა ეს იუზერი ადმინების სიაში
  const isAdmin = u.email && ADMIN_EMAILS.includes(u.email.toLowerCase());

  // თუ ადმინია, ვუმატებთ სპეციალურ ღილაკს
  const adminBtnHTML = isAdmin ? `
    <div class="pp-divider"></div>
    <button class="pp-item" onclick="window.location.href='/admin.html'" style="color: var(--cyan);">
      <span>⚙️</span><span>ადმინ პანელი</span>
    </button>
  ` : '';

  popup = document.createElement('div');
  popup.id = 'profile-popup';
  popup.className = 'profile-popup';
  popup.innerHTML = `
    <div class="pp-header">
      <div class="pp-avatar-wrap" onclick="openProfileModal()">${_avatarHTML(u, 56)}<div class="pp-avatar-edit">✏️</div></div>
      <div class="pp-info">
        <div class="pp-name">${u.displayName || 'მომხმარებელი'}</div>
        <div class="pp-email">${u.email || ''}</div>
      </div>
    </div>
    <div class="pp-divider"></div>
    <button class="pp-item" onclick="openProfileModal()"><span>👤</span><span>პროფილის ნახვა</span></button>
    ${adminBtnHTML} <div class="pp-divider"></div>
    <button class="pp-item pp-logout" onclick="signOut()"><span>🚪</span><span>გასვლა</span></button>
  `;
  document.body.appendChild(popup);
  
  const btn = document.getElementById('nav-profile-btn');
  if (btn) {
    const rect = btn.getBoundingClientRect();
    popup.style.top = (rect.bottom + 8) + 'px';
    popup.style.right = (window.innerWidth - rect.right) + 'px';
  }
  setTimeout(() => popup.classList.add('open'), 10);
  setTimeout(() => document.addEventListener('click', _closeProfilePopup, { once: true }), 50);
}

function _closeProfilePopup() {
  const p = document.getElementById('profile-popup');
  if (p) { p.classList.remove('open'); setTimeout(() => p.remove(), 200); }
}

function openProfileModal() {
  _closeProfilePopup();
  const u = _getStoredUser() || {};
  let modal = document.getElementById('profile-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'profile-modal';
    modal.className = 'auth-modal-overlay';
    document.body.appendChild(modal);
  }
  const defaultsHTML = DEFAULT_AVATARS.map(av => `
    <button class="avatar-opt ${u.avatarEmoji===av.emoji?'selected':''}" style="background:${av.bg}" onclick="selectDefaultAvatar('${av.emoji}','${av.bg}')">${av.emoji}</button>
  `).join('');

  modal.innerHTML = `
    <div class="auth-modal profile-modal-inner" onclick="event.stopPropagation()">
      <button class="auth-close" onclick="closeProfileModal()">✕</button>
      <h2 class="auth-title">პროფილი</h2>
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-bottom:20px">
        <div id="pm-preview" style="position:relative;cursor:pointer" onclick="document.getElementById('avatar-upload').click()">
          ${_avatarHTML(u, 80)}
          <div style="position:absolute;bottom:0;right:0;background:var(--cyan);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px">📷</div>
        </div>
        <input type="file" id="avatar-upload" accept="image/*" style="display:none" onchange="handleAvatarUpload(event)">
      </div>
      <div style="margin-bottom:16px">
        <div class="auth-label">სახელი და გვარი</div>
        <input id="pm-name" class="auth-input" type="text" value="${u.displayName||''}">
      </div>
      <div style="margin-bottom:20px"><div class="auth-label">ემოჯი ავატარები</div><div class="avatar-grid">${defaultsHTML}</div></div>
      <button class="auth-btn-primary" onclick="saveProfile()">💾 შენახვა</button>
    </div>
  `;
  modal.style.display = 'flex';
  modal.onclick = closeProfileModal;
  setTimeout(() => modal.querySelector('.auth-modal').classList.add('open'), 10);
}

function closeProfileModal() {
  const m = document.getElementById('profile-modal');
  if (m) m.style.display = 'none';
}

function selectDefaultAvatar(emoji, bg) {
  document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('selected'));
  event.currentTarget.classList.add('selected');
  _updateStoredUser({ avatarEmoji: emoji, avatarBg: bg, avatarCustom: '' });
  document.getElementById('pm-preview').innerHTML = _avatarHTML(_getStoredUser(), 80) + `<div style="position:absolute;bottom:0;right:0;background:var(--cyan);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px">📷</div>`;
}

function handleAvatarUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const base64 = ev.target.result;
    _updateStoredUser({ avatarCustom: base64, avatarEmoji: '', avatarBg: '' });
    document.getElementById('pm-preview').innerHTML = _avatarHTML(_getStoredUser(), 80) + `<div style="position:absolute;bottom:0;right:0;background:var(--cyan);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px">📷</div>`;
    document.querySelectorAll('.avatar-opt').forEach(b => b.classList.remove('selected'));
  };
  reader.readAsDataURL(file);
}

function saveProfile() {
  const name = document.getElementById('pm-name').value.trim();
  if (name) {
    _updateStoredUser({ displayName: name });
    if (_auth && _auth.currentUser) _auth.currentUser.updateProfile({ displayName: name }).catch(()=>{});
  }
  closeProfileModal();
}

// 7. AUTH MODAL (TABS)
function openAuthModal() {
  let modal = document.getElementById('auth-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'auth-modal';
    modal.className = 'auth-modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="auth-modal" onclick="event.stopPropagation()">
      <button class="auth-close" onclick="_closeAuthModal()">✕</button>
      <div class="auth-logo">URIGOD<em>.</em>GE</div>
      
      <div class="auth-tabs">
        <button id="tab-login" class="auth-tab active" onclick="switchAuthTab('login')">შესვლა</button>
        <button id="tab-reg" class="auth-tab" onclick="switchAuthTab('reg')">რეგისტრაცია</button>
      </div>

      <div id="form-login">
        <input id="login-email" class="auth-input" type="email" placeholder="ელ-ფოსტა">
        <input id="login-pass" class="auth-input" type="password" placeholder="პაროლი">
        <button class="auth-btn-primary" onclick="signInEmail(document.getElementById('login-email').value, document.getElementById('login-pass').value)">შესვლა</button>
      </div>

      <div id="form-reg" style="display:none;">
        <input id="reg-name" class="auth-input" type="text" placeholder="სახელი და გვარი">
        <input id="reg-email" class="auth-input" type="email" placeholder="ელ-ფოსტა">
        <input id="reg-pass" class="auth-input" type="password" placeholder="პაროლი (მინ. 6)">
        <button class="auth-btn-primary" onclick="registerEmail(document.getElementById('reg-name').value, document.getElementById('reg-email').value, document.getElementById('reg-pass').value)">რეგისტრაცია</button>
      </div>

      <div class="auth-divider"><span>ან გააგრძელე</span></div>
      <button class="auth-social-btn" onclick="signInGoogle()">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Google
      </button>

      <div id="auth-error" class="auth-error" style="display:none;"></div>
    </div>
  `;
  modal.style.display = 'flex';
  modal.onclick = _closeAuthModal;
  setTimeout(() => modal.querySelector('.auth-modal').classList.add('open'), 10);
}

function switchAuthTab(tab) {
  document.getElementById('auth-error').style.display = 'none';
  if (tab === 'login') {
    document.getElementById('tab-login').classList.add('active');
    document.getElementById('tab-reg').classList.remove('active');
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('form-reg').style.display = 'none';
  } else {
    document.getElementById('tab-reg').classList.add('active');
    document.getElementById('tab-login').classList.remove('active');
    document.getElementById('form-reg').style.display = 'block';
    document.getElementById('form-login').style.display = 'none';
  }
}

function _closeAuthModal() {
  const m = document.getElementById('auth-modal');
  if (m) m.style.display = 'none';
}

function _showError(msg) {
  const el = document.getElementById('auth-error');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function _injectAuthStyles() {
  if (document.getElementById('ug-auth-styles')) return;
  const style = document.createElement('style');
  style.id = 'ug-auth-styles';
  style.textContent = `
    .auth-modal-overlay { display: none; position: fixed; inset: 0; z-index: 10000; background: rgba(0,0,0,.8); backdrop-filter: blur(5px); align-items: center; justify-content: center; padding: 20px; }
    .auth-modal { background: var(--bg2, #111); border: 1px solid var(--bdr, #222); border-radius: 24px; padding: 36px 32px; width: 100%; max-width: 400px; position: relative; opacity: 0; transform: translateY(20px); transition: .3s; }
    .auth-modal.open { opacity: 1; transform: none; }
    .auth-close { position: absolute; top: 16px; right: 16px; background: #222; border: none; border-radius: 50%; width: 32px; height: 32px; color: #888; cursor: pointer; }
    .auth-logo { font-family: var(--font-serif, Georgia, serif); font-size: 20px; color: var(--cyan, #00c8aa); text-align: center; margin-bottom: 20px; font-weight: 900;}
    .auth-logo em { color: #fff; font-style: normal; }
    .auth-tabs { display: flex; background: #1a1a1a; border-radius: 12px; margin-bottom: 20px; padding: 4px; border: 1px solid #333; }
    .auth-tab { flex: 1; padding: 10px; background: transparent; border: none; color: #888; font-size: 14px; font-weight: bold; border-radius: 8px; cursor: pointer; transition: .2s; }
    .auth-tab.active { background: #333; color: #fff; }
    .auth-input { width: 100%; padding: 12px; border-radius: 12px; background: #1a1a1a; border: 1px solid #333; color: #fff; outline: none; margin-bottom: 12px; box-sizing: border-box;}
    .auth-input:focus { border-color: var(--cyan, #00c8aa); }
    .auth-btn-primary { width: 100%; padding: 12px; background: var(--cyan, #00c8aa); color: #000; font-weight: bold; border: none; border-radius: 12px; cursor: pointer; margin-top: 5px;}
    .auth-btn-primary:hover { opacity: .9; }
    .auth-divider { display: flex; align-items: center; margin: 20px 0; color: #666; font-size: 12px; }
    .auth-divider::before, .auth-divider::after { content: ''; flex: 1; height: 1px; background: #333; margin: 0 10px; }
    .auth-social-btn { width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #333; background: #1a1a1a; color: #fff; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; }
    .auth-error { background: rgba(248,113,113,.1); border: 1px solid #f87171; border-radius: 10px; padding: 10px; margin-top: 15px; font-size: 12px; color: #f87171; line-height: 1.5; }
    .profile-popup { position: fixed; z-index: 9000; background: #111; border: 1px solid #222; border-radius: 16px; padding: 8px; min-width: 220px; box-shadow: 0 16px 40px rgba(0,0,0,.5); opacity: 0; transform: translateY(-8px); transition: .2s; }
    .profile-popup.open { opacity: 1; transform: none; }
    .pp-header { display: flex; align-items: center; gap: 12px; padding: 8px 10px 12px; }
    .pp-name { font-weight: bold; color: #fff; font-size: 14px; margin-bottom: 2px;}
    .pp-email { font-size: 12px; color: #888; }
    .pp-divider { height: 1px; background: #222; margin: 4px 0; }
    .pp-item { width: 100%; padding: 10px 12px; border: none; background: transparent; color: #fff; text-align: left; display: flex; gap: 10px; cursor: pointer; border-radius: 8px;}
    .pp-item:hover { background: rgba(255,255,255,0.05); }
    .pp-logout { color: #f87171 !important; }
    .avatar-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    .avatar-opt { aspect-ratio: 1; border-radius: 50%; border: 3px solid transparent; font-size: 28px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: .2s; }
    .avatar-opt.selected { border-color: var(--cyan, #00c8aa); box-shadow: 0 0 0 2px var(--cyan, #00c8aa); }
  `;
  document.head.appendChild(style);
}

_injectAuthStyles();
function _boot() { _renderNavProfile(); initFirebase(); }
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', _boot); } else { _boot(); }

window.openAuthModal = openAuthModal;
window.switchAuthTab = switchAuthTab;
window.signInEmail = signInEmail;
window.registerEmail = registerEmail;
window.signInGoogle = signInGoogle;
window.signOut = signOut;
window._closeAuthModal = _closeAuthModal;
window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.selectDefaultAvatar = selectDefaultAvatar;
window.saveProfile = saveProfile;