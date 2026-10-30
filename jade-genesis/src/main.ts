import './styles/main.css';
import { App, hasWebGL2 } from './app/App';
import { t } from './content';

function fallback(title: string, body: string): void {
  const el = document.createElement('div');
  el.className = 'fallback';
  el.setAttribute('role', 'alert');
  el.innerHTML = `<div class="card"><div class="kicker">JADE GENESIS</div><h1>${title}</h1><p>${body}</p></div>`;
  document.body.append(el);
}

const canvas = document.getElementById('stage') as HTMLCanvasElement;
const uiRoot = document.getElementById('ui') as HTMLElement;

if (!hasWebGL2()) {
  canvas.remove();
  fallback(t('fallback.noWebgl.title'), t('fallback.noWebgl.body'));
  document.documentElement.dataset.webgl = 'unavailable';
} else {
  try {
    const app = new App(canvas, uiRoot);
    app.start();
    document.documentElement.dataset.webgl = 'ready';
  } catch (err) {
    console.error(err);
    fallback(t('fallback.error.title'), t('fallback.error.body'));
    document.documentElement.dataset.webgl = 'error';
  }
}
