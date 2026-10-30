# JADE GENESIS · 翡翠诞生记

一个 3D 互动网页项目：带观众亲眼看着一块硬玉翡翠原石，经过开采、清洗、观察、切片、取圈、打磨和抛光，最终成为一只绿色翡翠手镯。

## 当前状态：v1.1 · Phase 7 工业级视觉升级（待审核）

- **在线版本：** `https://sanaung199635-jpg.github.io/pixel-dioramas/jade-genesis/play/`（v1.0；Phase 7 合并后更新）
- **发布构建：** `npm run release` → `play/`（纯静态文件，部署方式见 [`docs/DEPLOY.md`](docs/DEPLOY.md)）
- **Phase 7：** 计划 [`docs/PHASE7_PLAN.md`](docs/PHASE7_PLAN.md) · 视觉验收 [`docs/PHASE7_VISUAL_REPORT.md`](docs/PHASE7_VISUAL_REPORT.md) · 性能 [`docs/PHASE7_PERFORMANCE.md`](docs/PHASE7_PERFORMANCE.md) · 迭代记录 [`docs/PHASE7_ITERATION_LOG.md`](docs/PHASE7_ITERATION_LOG.md)
- **前后对比图：** [`docs/phase7/compare/`](docs/phase7/compare)（同一状态、同一镜头）
- **未完成：** 真实设备上的帧率测量；GIA 原文的直接核对

## 功能（Phase 4 完成）

已选定视觉方案 **A · WHITE JADE GALLERY**；Phase 2 知识审核已确认；Phase 3 技术路线已确认。

一块程序化生成的硬玉翡翠原石，依次经过 12 道工序成为手镯：

01 开采 → 02 清洗 → 03 打灯观察 → 04 开窗 → 05 切割规划 → 06 水冷切片 → 07 画圈 → 08 套取镯坯 → 09 粗加工 → 10 精磨 → 11 抛光 → 12 检查展示

- **材料连续：** 切面、板料、镯坯、手镯的纹理和那条裂隙，都来自同一块石头的内部；镯坯从板料中钻出，镯芯留在孔里；镯子的截面从方逐渐磨成圆。
- **播放与导航：** “开始旅程”自动导览全程（约 5 分钟）；可暂停、继续，倍速 0.5× / 1× / 2×，拖动进度条；点击时间轴、上一道 / 下一道可跳到任意工序。
- **三维观察：** 拖动旋转、缩放，有边界限制；可重置视角；点击设备或热点查看说明。
- **第 03 幕：** 手动打灯。
- **第 12 幕：** 360° 环绕、三种灯光预设（聚光 / 柔光 / 背光）、打磨前后的表面对比滑块。
- **声音：** 程序合成的环境音、机械声、水声、研磨与抛光声；默认关闭，需用户点击开启。
- **适配：** 桌面版与移动版是两套不同的布局；没有 WebGL 2 或图形上下文丢失时有降级提示。
- **文字数据：** 全部文字来自 `content/` 中的数据，便于以后增加英文。

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

其他命令：
- `npm run build`：类型检查 + 构建
- `npm test`：Playwright，桌面 1440×900 + 移动 390×844
- `npm run knowledge`：校验知识数据并生成知识表

### 文档

- 架构：[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- 迭代记录：[`docs/ITERATION_LOG.md`](docs/ITERATION_LOG.md)
- 测试报告：[`docs/QA_REPORT.md`](docs/QA_REPORT.md)；截图在 [`docs/qa/`](docs/qa)（Phase 7 测试截图在 `docs/qa/phase7/`）
- Phase 7 截图工具：`node tools/phase7-capture.cjs <url> <输出目录> [desktop|mobile|both]`；对比图：`python3 tools/phase7-compare.py`
- 知识研究：[`docs/RESEARCH.md`](docs/RESEARCH.md)、[`docs/KNOWLEDGE_TABLE.md`](docs/KNOWLEDGE_TABLE.md)、[`docs/SCENE_SCRIPT.md`](docs/SCENE_SCRIPT.md)

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

所有模型、材质、纹理和反射环境都是代码程序化生成的，没有使用第三方模型、贴图、HDR 或图片。
