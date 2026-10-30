# 部署说明

JADE GENESIS 构建后是**纯静态文件**：一个 `index.html`、一个 JS 文件、一个 CSS 文件。不需要服务器端程序，也不需要数据库或任何外部资源（没有模型、贴图、音频或字体文件需要下载）。

## 1. 构建

```bash
cd jade-genesis
```

```bash
npm ci
```

```bash
npm run release
```

产物在 `jade-genesis/play/`：`index.html` 加 `assets/`，约 684 KB JS、gzip 后约 191 KB。所有路径都是相对路径，可以放在任意子目录下运行。

## 2. GitHub Pages（本仓库现有方式）

本仓库的其他作品就是这样发布的：Pages 直接提供仓库中的静态文件，根目录有 `.nojekyll`。

1. 运行 `npm run release`，把 `jade-genesis/play/` 一并提交。
2. 合并到 GitHub Pages 使用的分支（通常是 `main`）。
3. 访问地址：`https://sanaung199635-jpg.github.io/pixel-dioramas/jade-genesis/play/`。仓库首页 `index.html` 已加入入口卡片。

> 注意：`jade-genesis/index.html` 是**开发入口**，引用的是 TypeScript 源码，不能直接发布。对外链接请使用 `play/`。

## 3. 其他静态托管

把 `play/` 目录上传到 Netlify、Vercel、Cloudflare Pages、对象存储或任何 Web 服务器即可。

建议的 HTTP 设置：

| 文件 | 缓存 |
|---|---|
| `assets/*`（文件名含哈希） | `Cache-Control: public, max-age=31536000, immutable` |
| `index.html` | `Cache-Control: no-cache` |

请开启 gzip 或 brotli 压缩。

## 4. 本地预览发布版本

```bash
cd jade-genesis/play
```

```bash
python3 -m http.server 8080
```

打开 http://localhost:8080 。

## 5. 浏览器要求

- 需要 **WebGL 2**：Chrome / Edge / Firefox / Safari 的近期版本均支持。
- 不支持时，页面会显示说明，不会白屏。
- 声音需要用户点击“声音”按钮后才会开启（浏览器的自动播放策略也要求如此）。

## 6. 发布前检查清单

- [ ] `npm run build`：类型检查与构建通过
- [ ] `npm test`：桌面与移动端测试全部通过
- [ ] `npm run knowledge`：知识数据校验通过
- [ ] 在真实设备上测量帧率（见 `QA_REPORT.md`，当前**尚未完成**）
- [ ] 对照 GIA 原文核对知识内容（见 `RESEARCH.md`，当前**尚未完成**）

## 调试接口说明

发布版本保留了 `window.__jade`，自动化测试和性能测量会用到它。它只读取状态或调用界面上已有的操作，不涉及任何数据或网络。
