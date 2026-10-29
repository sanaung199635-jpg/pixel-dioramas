import './styles/main.css';
import { App, hasWebGL2 } from './app/App';
import { Ui } from './components/Ui';

const canvas = document.getElementById('stage') as HTMLCanvasElement;
const uiRoot = document.getElementById('ui') as HTMLElement;

if (!hasWebGL2()) {
  canvas.remove();
  const ui = new Ui(uiRoot, { stage() {}, toggle() {}, speed() {}, seek() {}, resetView() {}, torch() {} });
  ui.showFallback('无法启动三维场景', '你的浏览器或设备没有启用 WebGL 2。请使用最新版 Chrome、Edge、Safari 或 Firefox，并确认已开启硬件加速。');
  document.documentElement.dataset.webgl = 'unavailable';
} else {
  try {
    const app = new App(canvas, uiRoot);
    app.start();
    document.documentElement.dataset.webgl = 'ready';
  } catch (err) {
    console.error(err);
    const ui = new Ui(uiRoot, { stage() {}, toggle() {}, speed() {}, seek() {}, resetView() {}, torch() {} });
    ui.showFallback('三维场景初始化失败', '加载过程中出现错误，请刷新页面重试。');
    document.documentElement.dataset.webgl = 'error';
  }
}
