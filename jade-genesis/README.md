# JADE GENESIS · 翡翠诞生记

一个 3D 互动网页项目：带观众亲眼看着一块硬玉翡翠原石，经过开采、清洗、观察、切片、取圈、打磨和抛光，最终成为一只绿色翡翠手镯。

## 当前状态：Phase 3（技术原型）

已选定视觉方案 **A · WHITE JADE GALLERY**；Phase 2 知识审核已确认。

Phase 3 是一个**可交互的技术原型**，只包含两个工位：
- **03–05 原石观察：** 展台上的原石，带开窗与贯穿裂隙；有热点说明，还可以打灯观察（场景变暗，手电处透出绿光）。
- **06 水冷切片：** 原石被运到切割机上，锯片带冷却水下切，两半原石如书页打开，露出对称的切面。

两个工位都支持：播放、暂停、0.5× / 1× / 2× 倍速、进度拖动、拖动旋转与缩放、重置视角、键盘快捷键（空格、←→、1/2、R、T）。另外有桌面版与移动版布局，以及 WebGL 不可用和上下文丢失时的降级提示。

### 运行

```bash
cd jade-genesis
```

```bash
npm install
```

```bash
npm run dev
```

其他命令：`npm run build`（类型检查 + 构建）、`npm test`（Playwright：桌面 1440×900 + 移动 390×844）、`npm run knowledge`（校验知识数据并生成知识表）。

### 文档

- 架构：[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- 迭代记录：[`docs/ITERATION_LOG.md`](docs/ITERATION_LOG.md)
- 测试报告：[`docs/QA_REPORT.md`](docs/QA_REPORT.md)，截图在 [`docs/qa/phase3/`](docs/qa/phase3)
- 知识研究：[`docs/RESEARCH.md`](docs/RESEARCH.md)、[`docs/KNOWLEDGE_TABLE.md`](docs/KNOWLEDGE_TABLE.md)、[`docs/SCENE_SCRIPT.md`](docs/SCENE_SCRIPT.md)
- 文字数据：[`content/`](content)

### Phase 1 成果

- 报告与审查意见：[`design/PHASE1_REPORT.md`](design/PHASE1_REPORT.md)
- 方案 A / B 对比：[`design/concepts/ab-board.png`](design/concepts/ab-board.png)
- 12 镜头故事板：[`design/storyboard/storyboard.png`](design/storyboard/storyboard.png)
- 单张效果图：[`design/concepts/renders/`](design/concepts/renders)

`design/concepts/renderer/` 是 Phase 1 用于生成效果图的临时概念渲染器，与正式代码（`src/`）互相独立。

## 重新生成 Phase 1 效果图

渲染器是纯静态页面，Three.js 0.160 通过 importmap 从 CDN 加载。

浏览器中查看单个镜头：

```bash
cd jade-genesis/design && python -m http.server 8080
```

然后打开 `http://localhost:8080/concepts/renderer/index.html?shot=hero&theme=A`。
可用的 `shot`：`hero` `mine` `wash` `inspect` `window` `plan` `saw` `cut` `slab` `core` `rough` `fine` `polish` `grind` `showcase`；`theme`：`A` / `B`；`ui=0` 用于隐藏界面层。

批量渲染（需要 Node 和 Playwright，另外需要一份本地 `three@0.160.0`，用于离线响应 CDN 请求）：

```bash
npm i three@0.160.0 playwright
```

```bash
node jade-genesis/design/tools/render.cjs node_modules/three
```

```bash
node jade-genesis/design/tools/board.cjs
```

## 素材与版权

所有模型、材质和场景都是代码程序化生成的，没有使用第三方模型、贴图或图片。
