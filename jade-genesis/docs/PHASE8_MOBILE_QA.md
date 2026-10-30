# Phase 8 移动端 QA 报告

## 测试环境

- Playwright 1.63，Chromium 无头模式，SwiftShader（CPU 渲染的 WebGL 2）；被测对象是生产构建（`vite build` 加 `vite preview`）。
- 手机用 Chromium 模拟：视口、触摸、`isMobile`、iPhone 或 Pixel 的 UA。**环境中没有 WebKit**，所以：
  - **iPhone Safari 的引擎行为没有测试**：安全区的实际数值、动态工具栏、橡皮筋滚动、Safari 的触摸手势、Safari 的 WebGL 实现。
  - “Safari 地址栏变化”只能用“可视高度缩小 80 px”来近似。
- **模拟测试不能替代真机测试。** 下文所有“通过”都是指模拟环境下通过。

## 最终结果（提交 370d9b5）

| 项目 | 视口 | 测试文件 | 通过 | 跳过 | 失败 |
|---|---|---|---|---|---|
| desktop | 1440×900 | journey + mobile | **30** | 2 | 0 |
| mobile | 390×844（iPhone 13 UA） | journey + mobile | **29** | 3 | 0 |
| iphone-se | 320×568 | mobile | **8** | 1 | 0 |
| iphone-max | 430×932 | mobile | **8** | 1 | 0 |
| android | Pixel 7（412×839，Android UA） | mobile | **8** | 1 | 0 |
| landscape | 844×390 | mobile | **8** | 1 | 0 |
| tablet | 768×1024（iPad mini UA） | mobile | **8** | 1 | 0 |

**跳过的原因（均为设计如此）：**
- 桌面：
  - “更多”面板只存在于手机布局。
  - 知识卡片在宽屏上常驻显示，没有抽屉。
- 390：
  - 键盘快捷键是桌面功能。
  - 显存测试只在桌面运行一次（渲染器与场景相同）。
  - “常规布局控制栏”测试只适用于桌面和平板。
- 其他手机：“常规布局控制栏”测试不适用。
- 平板：“更多”面板测试不适用（平板使用常规控制栏）。

运行历史：第一次完整运行（d4cfca1）有 6 项失败，修复过程见 `PHASE8_ITERATION_LOG.md` 第 7 轮。上表是修复后在最终代码上的完整重跑，没有拼接中途的结果。

## 需求覆盖

| # | 需求 | 覆盖方式 | 结果 |
|---|---|---|---|
| 1 | 首页 | `home: the diorama and the start button fit…`：两个按钮都在视口内；手机上首页卡片 < 屏高 50%；构图区域 > 屏高 38%；无溢出、无小于 44 px 的目标 | ✅ 7 个项目 |
| 2 | 12 阶段切换 | `every stage frames its subject…`：12 幕逐一检查，构图区域都在阶段卡片和控制栏之间（横屏时在阶段卡片右侧），高度 > 120 px；回归测试“all 12 stages render…” | ✅ |
| 3 | 播放和暂停 | 回归测试“pause holds the picture; play resumes”；抽屉测试中半展开时点击播放键 | ✅ |
| 4 | 时间轴 | 回归测试：时间轴和上一幕 / 下一幕（手机上通过工序网格）、进度条 | ✅ |
| 5 | 速度切换 | 回归测试“speed buttons…”（手机上在“更多”面板中）；“more panel”测试 | ✅ |
| 6 | 声音开关 | `sound toggle is on screen and starts off`；回归测试 | ✅ |
| 7 | 知识抽屉展开与关闭 | `knowledge sheet: half, full, scroll, close, Esc and focus`：半展开在控制栏上方、全展开 > 70% 屏高、内部滚动、关闭按钮让焦点回到开关、Esc、`aria-expanded`、全部 5 个字段和证据等级都在 | ✅ |
| 8 | 竖屏显示 | 所有竖屏项目的布局检查 | ✅ |
| 9 | 横屏显示 | landscape 项目 | ✅ |
| 10 | 旋转后布局 | `rotation and a shrinking toolbar…`：宽高互换后检查 `data-orient`、布局、构图和画布尺寸 | ✅ |
| 11 | Safari 地址栏变化 | 同上：可视高度缩小 80 px 后，控制栏仍在屏内，构图和画布同步更新 | ✅（**近似模拟，待实机**） |
| 12 | 320 小屏 | iphone-se 项目 | ✅ |
| 13 | 390 常见手机 | mobile 项目 | ✅ |
| 14 | 430 大屏手机 | iphone-max 项目 | ✅ |
| 15 | Android Chrome | android 项目（Pixel 7 描述，Chromium） | ✅（模拟） |
| 16 | 平板布局 | tablet 项目；`regular layout keeps the v1 dock` | ✅ |
| 17 | 控制台错误 | 每个测试都断言没有 `pageerror` 和 console error；截图工具也记录 HTTP ≥ 400 | ✅ 0 |
| 18 | WebGL 加载失败 | `without WebGL 2 the explanation fits the screen`（7 个项目）；回归测试中的上下文丢失与恢复 | ✅ |

另外：进度条拖动不会转动 3D 相机（`dragging the scrubber…`）；常规布局保持 v1 控制栏，防止桌面退化。

## 截图验收

- 截图在 `docs/phase8/before|after/<尺寸>/`，对比图在 `docs/phase8/compare/`，结论见 `PHASE8_VISUAL_REPORT.md`。
- 自动布局检查（after，6 种尺寸 × 8 种状态）：
  - 横向溢出：0。
  - 屏幕外控件：0。
  - 触屏上小于 44 px 的目标：0。
  - 被遮挡的按钮：0。
  - 控制台错误：0。
- 桌面 before / after 像素对比：首页、第 01、06 幕完全一致；其他 ≤ 0.4%，只在随时间变化的水流区域。

## 发布检查

- `npm run release`（v1.2.0）的产物放在 `/pixel-dioramas/jade-genesis/play/` 子路径下提供：
  - `index.html` 引用的都是相对路径（`./assets/…`），3 个请求全部返回 200。
  - 桌面视口点击“开始旅程”后进入导览，没有错误。
  - 手机竖屏和横屏视口下，首页和知识抽屉的布局检查全部通过，没有错误。

## 性能

- 渲染没有改动，Phase 7.7 的结果保持不变（第 01 幕 78 draw calls / 128k 三角形）。
- 新增的开销：手机上每帧读取 5 个面板的位置（一次布局读取）；构图区域变化时更新一次投影矩阵。不新增 WebGL 资源。
- 相同尺寸的重复 resize 会被忽略。
- **手机帧率：待实机测试。**

## 待实机验证（iPhone Safari）

1. 刘海、灵动岛和底部指示条的安全区间距。
2. 地址栏收起、展开时，控制栏会不会被工具栏盖住（实机截图中旧版控制栏位置正常，新版需要复测）。
3. 知识抽屉的拖动手势与 Safari 的边缘返回手势会不会冲突。
4. 进度条拖动：iOS 原生 range 控件的手感。
5. 旋转屏幕后的布局与构图。
6. 后台切回前台、WebGL 上下文丢失后的恢复。
7. 帧率：在第 01 幕和第 06 幕的控制台运行 `__jade.state().avgFrameMs`。
