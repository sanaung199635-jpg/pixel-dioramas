// A clickable mock of a phone set to English. Every label with data-w is a vocabulary word.
// The layouts are generic look-alikes drawn with emoji and CSS; they only teach the wording.
import { WORD_BY_ID } from './data.js';

const en = (id) => WORD_BY_ID[id].en;
const W = (id, cls = '', inner) => `<button class="w ${cls}" data-w="${id}">${inner ?? en(id)}</button>`;
const zh = (text) => `<small class="zh">${text}</small>`;

const status = (dark = false) =>
  `<div class="ph-status${dark ? ' dark' : ''}"><span>10:30</span><span class="ph-status-r">5G <i class="sig"></i><i class="bat"></i></span></div>`;

// ---------------------------------------------------------------- Home Screen
const APPS = [
  ['ph_facetime', '📹', '#34c759'], ['ph_calendar', '📅', '#ffffff'], ['ph_photos', '🌈', '#ffffff'], ['ph_camera', '📷', '#c7c7cc'],
  ['ph_mail', '✉️', '#1a8cff'], ['ph_clock', '🕙', '#1c1c1e'], ['ph_maps', '🗺️', '#e8f4e4'], ['ph_weather', '⛅', '#3a9bf0'],
  ['ph_reminders', '☑️', '#ffffff'], ['ph_notes', '📝', '#ffd95a'], ['ph_appStore', '🅰️', '#1a8cff'], ['ph_health', '❤️', '#ffffff'],
  ['ph_wallet', '💳', '#1c1c1e'], ['ph_settings', '⚙️', '#8e8e93'], ['ph_files', '📁', '#e9f2ff'], ['ph_calculator', '🧮', '#3a3a3c'],
  ['ph_contacts', '👤', '#d9d9de'], ['ph_findMy', '📍', '#34c759'], ['ph_translate', '🌐', '#1c1c1e'], ['ph_voiceMemos', '🎙️', '#1c1c1e'],
];
const DOCK = [['ph_phone', '📞', '#34c759'], ['ph_safari', '🧭', '#ffffff'], ['ph_messages', '💬', '#34c759'], ['ph_music', '🎵', '#fa3c55']];
const app = ([id, emoji, bg]) => W(id, 'app', `<span class="ic" style="background:${bg}">${emoji}</span><span class="nm">${en(id)}</span>`);

const homeScreen = () => `
  <div class="ph-view home">
    ${status(true)}
    <div class="apps">${APPS.map(app).join('')}</div>
    ${W('ph_search', 'pill', `🔍 ${en('ph_search')}`)}
    <div class="dock">${DOCK.map(app).join('')}</div>
  </div>`;

// ---------------------------------------------------------------- Settings lists
const row = ([id, emoji, bg, extra = '']) =>
  `<div class="row"><span class="ri" style="background:${bg}">${emoji}</span>${W(id, 'rl')}${extra}<span class="chev">›</span></div>`;
const toggle = '<span class="tog"></span>';
const val = (t) => `<span class="rv">${t}</span>`;
const group = (rows) => `<div class="group">${rows.map(row).join('')}</div>`;

const settingsScreen = () => `
  <div class="ph-view list">
    ${status()}
    <h1>${W('ph_settings', 'h')}</h1>
    ${W('ph_search', 'field', `🔍 ${en('ph_search')}`)}
    ${group([
      ['ph_airplane', '✈️', '#ff9500', toggle],
      ['ph_wifi', '📶', '#0a7aff', val('Home')],
      ['ph_bluetooth', '🔷', '#0a7aff', val('On')],
      ['ph_cellular', '📡', '#34c759'],
      ['ph_hotspot', '🔗', '#34c759', val('Off')],
    ])}
    ${group([
      ['ph_notifications', '🔔', '#ff3b30'],
      ['ph_sounds', '🔊', '#ff2d55'],
      ['ph_focus', '🌙', '#5856d6'],
      ['ph_screenTime', '⏳', '#5856d6'],
    ])}
    ${group([
      ['ph_general', '⚙️', '#8e8e93'],
      ['ph_controlCenter', '🎛️', '#8e8e93'],
      ['ph_display', '☀️', '#0a7aff'],
      ['ph_wallpaper', '🖼️', '#32ade6'],
      ['ph_battery', '🔋', '#34c759'],
      ['ph_privacy', '✋', '#0a7aff'],
    ])}
    ${group([
      ['ph_passwords', '🔑', '#8e8e93'],
      ['ph_faceId', '🙂', '#34c759'],
    ])}
  </div>`;

const generalScreen = () => `
  <div class="ph-view list">
    ${status()}
    <div class="nav">${W('ph_back', 'link', `‹ ${en('ph_settings')}`)}<b>${en('ph_general')}</b><span></span></div>
    <p class="tip">‹ = ${en('ph_back')} ${zh('返回上一页')}</p>
    ${group([
      ['ph_about', 'ℹ️', '#8e8e93'],
      ['ph_softwareUpdate', '⬇️', '#8e8e93', '<span class="badge">1</span>'],
      ['ph_storage', '💾', '#8e8e93'],
    ])}
    ${group([
      ['ph_airdrop', '📡', '#0a7aff'],
      ['ph_keyboard', '⌨️', '#8e8e93'],
      ['ph_language', '🌐', '#0a7aff'],
      ['ph_dateTime', '🕙', '#0a7aff'],
    ])}
    ${group([['ph_vpn', '🔒', '#0a7aff', val('Not Connected')]])}
    ${group([['ph_reset', '🔄', '#8e8e93']])}
    <div class="group"><div class="row center">${W('ph_shutDown', 'link')}</div></div>
  </div>`;

// ---------------------------------------------------------------- alerts
const alertBox = (title, titleZh, body, bodyZh, buttons, stacked = false) => `
  <div class="alert">
    <div class="at"><b>${title}</b>${zh(titleZh)}${body ? `<p>${body}</p>${zh(bodyZh)}` : ''}</div>
    <div class="ab${stacked ? ' stacked' : ''}">${buttons.map(([id, cls]) => W(id, cls || '')).join('')}</div>
  </div>`;

const alertsScreen = () => `
  <div class="ph-view alerts">
    ${status(true)}
    ${alertBox('“Maps” Would Like to Use Your Location', '“地图”想使用你的位置', '', '', [['ph_allowOnce'], ['ph_allowWhile'], ['ph_dontAllow']], true)}
    ${alertBox('“Weather” Would Like to Send You Notifications', '“天气”想给你发送通知', '', '', [['ph_dontAllow'], ['ph_allow', 'bold']])}
    ${alertBox('Software Update', '软件更新', 'A new update is ready to install.', '新的更新已准备好安装。', [['ph_later'], ['ph_installNow', 'bold']])}
    ${alertBox('Delete Photo?', '删除照片？', 'This action cannot be undone.', '此操作无法撤销。', [['ph_cancel'], ['ph_delete', 'red']])}
    ${alertBox('Cannot Connect', '无法连接', 'Check your internet connection.', '请检查你的网络连接。', [['ph_ok'], ['ph_tryAgain', 'bold']])}
    ${alertBox('Turn On Bluetooth?', '打开蓝牙？', '', '', [['ph_notNow'], ['ph_turnOn', 'bold']])}
    ${alertBox('Terms and Conditions', '条款与条件', 'Please read before you continue.', '继续之前请先阅读。', [['ph_disagree'], ['ph_agree', 'bold']])}
    <div class="alert"><div class="ab stacked">${W('ph_continue', 'bold')}</div></div>
  </div>`;

// ---------------------------------------------------------------- sign in
const loginScreen = () => `
  <div class="ph-view login">
    ${status()}
    <div class="nav">${W('ph_back', 'link', `‹ ${en('ph_back')}`)}<span></span>${W('ph_skip', 'link')}</div>
    <div class="avatar">👤</div>
    <h2>${W('ph_signIn', 'h')}</h2>
    <div class="group">
      <div class="row">${W('ph_email', 'rl')}<span class="rv">name@example.com</span></div>
      <div class="row">${W('ph_password', 'rl')}<span class="rv">••••••••</span></div>
    </div>
    ${W('ph_forgot', 'link small')}
    ${W('ph_next', 'primary')}
    <p class="tip">Don’t have an account? ${zh('还没有账户？')}</p>
    ${W('ph_signUp', 'secondary')}
    <p class="tip">Already signed in? ${zh('已经登录了？')}</p>
    ${W('ph_signOut', 'secondary red')}
  </div>`;

// ---------------------------------------------------------------- common buttons
const buttonsScreen = () => `
  <div class="ph-view buttons">
    ${status()}
    <div class="nav">${W('ph_back', 'link', `‹ ${en('ph_back')}`)}<b>Note</b>${W('ph_done', 'link bold')}</div>
    <div class="toolbar">${W('ph_edit', 'link')}${W('ph_save', 'link')}${W('ph_undo', 'link')}${W('ph_add', 'link', `＋ ${en('ph_add')}`)}</div>
    <p class="tip">Press and hold the text ${zh('长按文字会出现这个菜单')}</p>
    <div class="menu">${W('ph_copy')}${W('ph_paste')}${W('ph_selectAll')}${W('ph_share')}</div>
    <p class="tip">In the App Store ${zh('在 App Store 里')}</p>
    <div class="group">
      <div class="row"><span class="ri" style="background:#34c759">🎮</span><span class="rl plain">Fun Game</span>${W('ph_get', 'cap')}</div>
      <div class="row"><span class="ri" style="background:#ff9500">📚</span><span class="rl plain">Word Book</span>${W('ph_open', 'cap')}</div>
      <div class="row"><span class="ri" style="background:#0a7aff">🗒️</span><span class="rl plain">My Notes</span>${W('ph_update', 'cap')}</div>
      <div class="row"><span class="ri" style="background:#8e8e93">📄</span><span class="rl plain">report.pdf</span>${W('ph_download', 'cap')}</div>
    </div>
    <p class="tip">In a chat ${zh('聊天时')}</p>
    <div class="chatbar"><span class="input">Message</span>${W('ph_send', 'cap blue')}</div>
    <div class="sheet">${W('ph_more', 'link', `••• ${en('ph_more')}`)}${W('ph_close', 'link', `✕ ${en('ph_close')}`)}</div>
  </div>`;

// ---------------------------------------------------------------- Control Center
const tile = ([id, emoji, on]) => W(id, `tile${on ? ' on' : ''}`, `<span class="ti">${emoji}</span><span class="tn">${en(id)}</span>`);
const controlScreen = () => `
  <div class="ph-view control">
    ${status(true)}
    <div class="tiles">
      ${[
        ['ph_airplane', '✈️'], ['ph_wifi', '📶', 1], ['ph_bluetooth', '🔷', 1], ['ph_cellular', '📡', 1],
        ['ph_dnd', '🌙'], ['ph_silent', '🔕'], ['ph_orientation', '🔒'], ['ph_mirroring', '📺'],
        ['ph_flashlight', '🔦'], ['ph_timer', '⏲️'], ['ph_alarm', '⏰'], ['ph_calculator', '🧮'],
        ['ph_camera', '📷'], ['ph_recording', '⏺️'], ['ph_lowPower', '🔋'], ['ph_darkMode', '🌗'],
      ].map(tile).join('')}
    </div>
    <div class="sliders">
      <div class="slider"><span style="height:65%"></span>${W('ph_brightness', 'sl', `☀️<br>${en('ph_brightness')}`)}</div>
      <div class="slider"><span style="height:40%"></span>${W('ph_volume', 'sl', `🔊<br>${en('ph_volume')}`)}</div>
    </div>
  </div>`;

// ---------------------------------------------------------------- calls and messages
const callScreen = () => `
  <div class="ph-view call">
    ${status(true)}
    <div class="incoming">
      <div class="who">👩 <b>Mom</b><small>mobile ${zh('手机')}</small></div>
      <div class="pair">${W('ph_decline', 'round red', `<i>📵</i>${en('ph_decline')}`)}${W('ph_accept', 'round green', `<i>📞</i>${en('ph_accept')}`)}</div>
    </div>
    <div class="incall">${W('ph_mute', 'round', `<i>🎙️</i>${en('ph_mute')}`)}${W('ph_keypad', 'round', `<i>🔢</i>${en('ph_keypad')}`)}${W('ph_speaker', 'round', `<i>🔊</i>${en('ph_speaker')}`)}</div>
    <div class="notice">${W('ph_missed', 'link red')}<span>Dad · 9:15</span></div>
    <div class="tabbar">${W('ph_favorites', 'tab', `⭐<br>${en('ph_favorites')}`)}${W('ph_recents', 'tab', `🕘<br>${en('ph_recents')}`)}${W('ph_contacts', 'tab', `👤<br>${en('ph_contacts')}`)}${W('ph_keypad', 'tab', `🔢<br>${en('ph_keypad')}`)}${W('ph_voicemail', 'tab', `📼<br>${en('ph_voicemail')}`)}</div>
    <div class="msgs">
      <div class="nav light">${W('ph_messages', 'h')}${W('ph_newMessage', 'link', `✏️ ${en('ph_newMessage')}`)}</div>
      <div class="bubble out">See you at six!</div>
      <div class="state">${W('ph_delivered', 'link small')}</div>
      <div class="bubble out">Don't be late 😄</div>
      <div class="state">${W('ph_read', 'link small')} <span>10:28</span></div>
    </div>
    ${W('ph_emergency', 'link red')}
  </div>`;

// ---------------------------------------------------------------- camera and photos
const photoScreen = () => `
  <div class="ph-view photo">
    ${status(true)}
    <div class="finder">${W('ph_flash', 'fchip', `⚡ ${en('ph_flash')}`)}${W('ph_timer', 'fchip', `⏲️ ${en('ph_timer')}`)}<div class="scene">🏞️</div></div>
    <div class="modes">${W('ph_video', 'mode')}${W('ph_photo', 'mode on')}${W('ph_portrait', 'mode')}</div>
    <div class="shutter"><span></span></div>
    <div class="album">
      <div class="nav light">${W('ph_albums', 'h')}${W('ph_select', 'link')}</div>
      <div class="group">
        <div class="row"><span class="ri" style="background:#0a7aff">🕘</span>${W('ph_recents', 'rl')}${val('1,204')}</div>
        <div class="row"><span class="ri" style="background:#ff2d55">❤️</span>${W('ph_favorites', 'rl')}${val('36')}</div>
        <div class="row"><span class="ri" style="background:#8e8e93">📱</span>${W('ph_screenshots', 'rl')}${val('88')}</div>
        <div class="row"><span class="ri" style="background:#8e8e93">🗑️</span>${W('ph_recentlyDeleted', 'rl')}${val('5')}</div>
      </div>
      <div class="toolbar">${W('ph_edit', 'link')}${W('ph_crop', 'link')}${W('ph_rotate', 'link')}${W('ph_hide', 'link')}${W('ph_share', 'link')}</div>
      <div class="tabbar light">${W('ph_library', 'tab', `🖼️<br>${en('ph_library')}`)}${W('ph_albums', 'tab', `📚<br>${en('ph_albums')}`)}${W('ph_search', 'tab', `🔍<br>${en('ph_search')}`)}</div>
    </div>
  </div>`;

export const PHONE_SCREENS = [
  { id: 'home', zh: '主屏幕', en: 'Home Screen', html: homeScreen },
  { id: 'settings', zh: '设置', en: 'Settings', html: settingsScreen },
  { id: 'general', zh: '通用', en: 'General', html: generalScreen },
  { id: 'alerts', zh: '弹窗提示', en: 'Alerts', html: alertsScreen },
  { id: 'login', zh: '登录', en: 'Sign In', html: loginScreen },
  { id: 'buttons', zh: '常用按钮', en: 'Buttons', html: buttonsScreen },
  { id: 'control', zh: '控制中心', en: 'Control Center', html: controlScreen },
  { id: 'call', zh: '电话与信息', en: 'Calls', html: callScreen },
  { id: 'photo', zh: '相机与照片', en: 'Camera', html: photoScreen },
];

export function createPhone(stage, { onPick, onScreen }) {
  const tabsEl = stage.querySelector('#phTabs');
  const screenEl = stage.querySelector('#phScreen');
  const pages = PHONE_SCREENS.map((s) => {
    const html = s.html();
    return { ...s, html, words: [...new Set([...html.matchAll(/data-w="([^"]+)"/g)].map((m) => m[1]))] };
  });
  let idx = -1;
  const tabs = pages.map((p, i) => {
    const b = document.createElement('button');
    b.innerHTML = `${p.zh}<small>${p.en}</small>`;
    b.addEventListener('click', () => show(i));
    tabsEl.appendChild(b);
    return b;
  });

  function show(i, silent = false) {
    if (i === idx) return;
    idx = i;
    screenEl.innerHTML = pages[i].html;
    screenEl.scrollTop = 0;
    tabs.forEach((b, k) => b.classList.toggle('active', k === i));
    tabs[i].scrollIntoView({ block: 'nearest', inline: 'center' });
    if (!silent) onScreen?.(pages[i]);
  }
  screenEl.addEventListener('click', (e) => {
    const el = e.target.closest('[data-w]');
    if (el) onPick(el.dataset.w, el);
  });
  show(0, true);

  return {
    /** jump to a screen that shows this word and pick it */
    reveal(id) {
      if (!pages[idx].words.includes(id)) {
        const i = pages.findIndex((p) => p.words.includes(id));
        if (i < 0) return;
        show(i);
      }
      const el = screenEl.querySelector(`[data-w="${id}"]`);
      el.scrollIntoView({ block: 'nearest' });
      onPick(id, el);
    },
    highlight(el) {
      screenEl.querySelectorAll('.w.sel').forEach((n) => n.classList.remove('sel'));
      if (el && screenEl.contains(el)) el.classList.add('sel');
    },
    shake(el) {
      el.classList.remove('shake');
      void el.offsetWidth;
      el.classList.add('shake');
    },
    screenWords: () => pages[idx].words,
    quizPrompt: '听一听，在手机屏幕上点出它！',
  };
}
