# JADE GENESIS · 翡翠诞生记

一个 3D 互动网页项目：带观众亲眼看着一块硬玉翡翠原石，经过开采、清洗、观察、切片、取圈、打磨和抛光，最终成为一只绿色翡翠手镯。

## 当前状态：Phase 1（视觉概念）· 等待方案确认

- 报告与审查意见：[`design/PHASE1_REPORT.md`](design/PHASE1_REPORT.md)
- 方案 A / B 对比：[`design/concepts/ab-board.png`](design/concepts/ab-board.png)
- 12 镜头故事板：[`design/storyboard/storyboard.png`](design/storyboard/storyboard.png)
- 单张效果图：[`design/concepts/renders/`](design/concepts/renders)

**正式网页尚未开始开发。** `design/concepts/renderer/` 是一个只用于生成效果图的临时概念渲染器，不是产品代码。

## 重新生成效果图

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
