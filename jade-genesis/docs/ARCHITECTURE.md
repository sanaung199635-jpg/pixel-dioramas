# JADE GENESIS — 架构说明（Phase 3 技术原型）

## 技术栈

| 层 | 选择 | 理由 |
|---|---|---|
| 构建 | Vite 6 + TypeScript 5.7（strict） | 快速开发服务器，产物为纯静态文件 |
| 3D | Three.js 0.170（WebGL 2） | PBR 材质 + 透射（transmission）+ 着色器注入 |
| 动画 | 自写的“进度 → 状态”纯函数时间轴 | 跳转、暂停、倍速的结果必须一致；目前不需要 GSAP |
| 测试 | Playwright 1.63（与本机浏览器版本一致） | 桌面与移动视口、交互、降级路径 |

运行时依赖只有 `three` 一个。

## 目录

```
jade-genesis/
├── index.html                 入口
├── content/                   文字数据（与场景逻辑分离）
│   ├── stages.zh-CN.json      12 工序知识数据（Phase 2）
│   ├── sources.json           来源与证据等级
│   └── hotspots.zh-CN.json    热点说明
├── src/
│   ├── main.ts                WebGL 2 检测 → 启动或降级
│   ├── app/
│   │   ├── App.ts             渲染循环、拾取、缩放、上下文丢失、调试接口
│   │   ├── Journey.ts         状态机：stage / progress / playing / speed
│   │   └── Quality.ts         自适应画质（DPR、阴影分辨率）
│   ├── stone/
│   │   ├── StoneSolid.ts      原石实体：形状函数、窗口、裂隙平面、截面半径
│   │   ├── StoneGeometry.ts   外壳与切面网格（都带 jpos / rim 属性）
│   │   └── noise.ts
│   ├── materials/
│   │   ├── JadeMaterial.ts    MeshPhysicalMaterial + 着色器注入
│   │   └── jadeShader.ts      翡翠颜色场、石皮、棉絮、裂隙、透光
│   ├── scenes/
│   │   ├── World.ts           展厅布局：展台工位 + 切割机工位
│   │   ├── Studio.ts          方案 A 灯光、背景、环境光；暗房模式
│   │   ├── StonePieces.ts     整石 ↔ 两半（同一外壳裁切 + 切面）
│   │   ├── RoughStoneScene.ts 工位 03–05：热点、打灯
│   │   ├── CuttingScene.ts    工位 06：进度 → 全部姿态 + 镜头关键帧
│   │   └── shots.ts
│   ├── controls/CameraRig.ts  轨道相机：边界、导览 / 自由两种模式、取景偏移
│   ├── props/                 展台、放大镜、标牌、手电、切割机、冷却水
│   ├── components/Ui.ts       DOM 界面
│   ├── content/index.ts       读取 /content 数据
│   ├── styles/main.css
│   └── utils/math.ts
├── tests/prototype.spec.ts
├── tools/                     知识表生成、开发截图脚本
├── design/                    Phase 1 概念渲染（独立的临时工具）
└── docs/
```

## 核心设计

### 1. 材料连续性：一块石头，一个坐标系

`StoneSolid` 把原石定义为一个实体（`isInside(p)`）。每个网格顶点都带两个属性：

- `jpos`：顶点在**原石坐标系**中的位置；
- `rim`：1 表示石皮，0 表示露出的翡翠。

着色器里的颜色、棉絮、包体和裂隙**只依赖 `jpos`**。所以：

- 切面（`capGeometry`）的纹理与切开前的石头在逻辑上完全一致；
- 两半原石是**同一个外壳**按切割平面裁切后加上切面。间隙为 0 时与整石完全重合，所以“整石 → 两半”的切换没有跳变；
- 那条命名裂隙（`FISSURE`，在 TS 与 GLSL 中各定义一次并保持一致）会出现在石皮、窗口和两个切面的对应位置；
- 后续的板料、镯芯、手镯（Phase 4）沿用同一机制。Phase 1 的概念渲染器已验证过这条路线。

### 2. 可复现的时间轴

`Journey` 只保存数据。`CuttingScene.apply(progress)` 是一个从进度到所有姿态的映射：原石运送、工作台进给、锯头升降、冷却水开关、两半打开、镜头关键帧。

- 任何进度都能直接算出画面，与“怎么到达”无关（测试中有像素比对验证）。
- 播放只是让进度随时间增加；暂停时进度不变。
- 只有锯片自转与水滴动画由“机器时间”驱动，它们循环播放，不携带剧情状态。

### 3. 相机

`CameraRig` 包装 OrbitControls：

- 有限制：距离 2.4–16，俯仰角不低于地面，目标点被限制在展厅范围内。
- **导览模式**：平滑跟随场景给出的镜头。
- **自由模式**：用户拖动或缩放后进入，导览不再抢夺镜头；点“重置视角”即可回到导览。
- **取景偏移**：用 `setViewOffset` 把画面主体移到界面面板之间的空白区域，旋转中心仍在主体上。

### 4. 画质与降级

- 自适应画质 `Quality`：根据最近 90 帧的平均帧时，逐级调整 DPR 上限与阴影贴图尺寸。目标：桌面 16.7 ms，移动 33.3 ms。
- 没有 WebGL 2 时：显示说明，不加载场景。
- WebGL 上下文丢失：停止循环并显示提示；上下文恢复后自动继续。

### 5. 翡翠材质要点

| 需求 | 实现 |
|---|---|
| 局部半透明 | `transmission`，并在石皮、棉絮、裂隙处衰减 |
| 内部色带、浓淡不均 | 扭曲的分形噪声场；两档绿色叠加 |
| 棉絮、包体 | 噪声阈值生成的白色云絮与深色小点 |
| 散射感、边缘透光 | 衰减色 + 掠射角自发光项（`uEdgeGlow`） |
| 表面微粗糙度 | 石皮凹凸；`uRough` 控制研磨痕 |
| 抛光前后差异 | `uRough` 0→1 同时改变粗糙度、透射和凹凸 |
| 窗口不出现整片眩光 | 手工磨面不是光学平面：`uWave` 加入低频起伏 |
| 远处细节闪烁 | 按像素尺度淡出高频细节（`aaFade` / `bumpFade`） |

折射率取 1.67，与 GIA 给出的 1.666–1.680 一致。

## 调试接口

`window.__jade`：`state()`、`setStage()`、`seek()`、`play()`、`pause()`、`setSpeed()`、`torch()`、`resetView()`、`hotspots()`、`frames(n)`、`freeze()` / `unfreeze()`，以及开发用的 `field()`、`mat()`。

测试和截图脚本都通过它驱动，与 UI 调用的是同一套操作。

## 已知限制（Phase 3）

- 只实现了工位 03–05 和 06；其余工序在 Phase 4。
- 声音系统尚未实现（Phase 4）。
- 机械模型仍是程序化的简化模型。
- 帧率尚未在任何真实设备上测量（见 `QA_REPORT.md`）。
