# 湖畔垂钓 · Isometric 3D Pixel Art Diorama

Three.js (r160) 等距像素微缩沙盘：湖泊、木码头、三位钓鱼人、木屋、树木、围栏、小船和游鱼。

## 运行

ES Module 需要通过本地服务器打开（直接双击 `index.html` 会被浏览器拦截）：

```bash
python -m http.server 8080
```

然后打开 http://localhost:8080 。也可以用 `npx serve .`。Three.js 通过 importmap 从 jsDelivr CDN 加载，无需安装依赖。

## 操作

| 操作 | 效果 |
| --- | --- |
| 底部胶囊导航 / 键盘 `1`–`4` | 切换 清晨薄雾 / 午后垂钓 / 黄昏归舟 / 月夜静湖（光照平滑过渡） |
| 点击钓鱼人 | 立即抛竿；等待中点击则马上咬钩并收竿上鱼 |
| 点击湖面 | 涟漪扩散，附近的鱼受惊加速游走 |
| 右上角 高清/标准/复古 或 `P` | 切换像素精度（会记住选择） |
| `?scene=dusk` | URL 参数直接进入某个场景 |

## 渲染管线（`src/pixel-renderer.js`）

1. **Beauty pass**：场景渲染到低分辨率 `WebGLRenderTarget`（HalfFloat + DepthTexture，`NearestFilter`）。
2. **Normal pass**：同分辨率用 `MeshNormalMaterial` 覆盖渲染法线（透明特效层隐藏）。
3. **合成**：全屏着色器按整数像素网格做最近邻放大，并计算
   - 深度边缘 → 暗色像素轮廓；法线边缘 → 亮色棱线高光
   - 基于深度二阶差分的屏幕空间环境遮蔽（墙角、脚下、物体接触处变暗）
   - 色调/饱和度/对比度调色，线性 → sRGB
   - 4×4 Bayer 有序抖动 + 色阶量化，形成复古像素质感
   
   相机视锥会按 `ceil(屏幕/像素尺寸)` 微调，保证每个像素块都是严格整数大小，边缘不糊。

## 目录

```
index.html          页面 + importmap + 场景切换导航
style.css           白底留白、胶囊导航、响应式
src/main.js         渲染器、正交相机（45° 方位 / 32° 俯角）、灯光、交互、主循环
src/pixel-renderer.js  低分辨率像素化管线
src/world.js        地形沙盘、木屋、码头、小船、围栏、树木、草丛、石头、道具
src/lake.js         湖岸形状、水面着色器（波动/浅水色/闪光）、涟漪、鱼群
src/fisher.js       钓鱼人模型与 抛竿→飞线→等待→咬钩→收竿→上鱼 状态机
src/effects.js      炊烟、晨雾、萤火虫
src/presets.js      四种时段光照预设
src/textures.js     Canvas 生成的像素贴图（草地、泥土、原木、瓦片、木板、石块、沙地）
```
