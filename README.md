# 3D 等距像素微缩沙盘合集 · Isometric Pixel Dioramas

用 Three.js + WebGL 制作的三件等距像素风微缩沙盘。每个场景都是真实 3D 模型，经低分辨率离屏渲染 + 最近邻放大实现像素质感，悬浮在纯白背景中央。

| 项目 | 在线预览 | 内容 |
| --- | --- | --- |
| [`lake-fishing-diorama`](./lake-fishing-diorama) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/lake-fishing-diorama/) | 湖边钓鱼：木屋、码头、小船、三位钓鱼人（抛竿 / 等待 / 收竿）、游鱼与涟漪，四个时段切换 |
| [`shwedagon-diorama`](./shwedagon-diorama) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/shwedagon-diorama/) | 仰光大金塔：阶梯金塔、环塔佛龛、跪拜信众；可旋转视角、点击人物与建筑查看介绍（中英双语），人物互动动画 |
| [`convenience-store-diorama`](./convenience-store-diorama) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/convenience-store-diorama/) | 便利店：透过玻璃可见的店内陈设、晴天 / 下雨 / 下雪天气系统、白天 / 夜晚、“透视”揭开屋顶 |

## 运行

每个项目都是纯静态文件，Three.js 通过 importmap 从 CDN 加载，无需安装依赖。进入任一项目目录后：

```bash
python -m http.server 8080
```

然后打开 http://localhost:8080 。详细操作见各项目内的 README。

## 说明

- 场景中的人物均为虚构角色。
- 便利店门头标识为风格化演绎，并非官方素材。
