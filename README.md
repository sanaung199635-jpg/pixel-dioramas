# 3D 等距像素微缩沙盘合集 · Isometric Pixel Dioramas

用 Three.js + WebGL 制作的三件等距像素风微缩沙盘。每个场景都是真实 3D 模型，经低分辨率离屏渲染 + 最近邻放大实现像素质感，悬浮在纯白背景中央。

| 项目 | 在线预览 | 内容 |
| --- | --- | --- |
| [`lake-fishing-diorama`](./lake-fishing-diorama) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/lake-fishing-diorama/) | 湖边钓鱼：木屋、码头、小船、三位钓鱼人（抛竿 / 等待 / 收竿）、游鱼与涟漪，四个时段切换 |
| [`shwedagon-diorama`](./shwedagon-diorama) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/shwedagon-diorama/) | 仰光大金塔：阶梯金塔、环塔佛龛、跪拜信众；可旋转视角、点击人物与建筑查看介绍（中英双语），人物互动动画 |
| [`convenience-store-diorama`](./convenience-store-diorama) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/convenience-store-diorama/) | 便利店：透过玻璃可见的店内陈设、晴天 / 下雨 / 下雪天气系统、白天 / 夜晚、“透视”揭开屋顶 |
| [`jade-genesis`](./jade-genesis) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/jade-genesis/play/)（合并到 Pages 分支后生效） | 翡翠诞生记：一块硬玉翡翠原石经 12 道工序成为手镯的 3D 互动工艺馆（Vite + TypeScript + Three.js） |
| [`mini-world-english`](./mini-world-english) | [打开 ▶](https://sanaung199635-jpg.github.io/pixel-dioramas/mini-world-english/) | 迷你小世界学英语：小公园（树木、操场、草地、虫子，25 词）+ 健身房（有氧器械、自由重量、力量器械、小器材，41 词）+ 家（卧室、客厅，46 词）+ 超市（店内设施、水果、蔬菜、食品饮料，52 词）+ 手机（英文 iPhone 界面高频词，129 词）+ 食物（肉类、蔬菜、水果、主食与蛋白质，82 词），另有 16 段高频情景对话，点击任何物品查看中英文、美/英音标、器械用途并朗读单词与例句，含“听音找物”测验 |

## 运行

每个项目都是纯静态文件，Three.js 通过 importmap 从 CDN 加载，无需安装依赖。进入任一项目目录后：

```bash
python -m http.server 8080
```

然后打开 http://localhost:8080 。详细操作见各项目内的 README。

## 说明

- 场景中的人物均为虚构角色。
- 便利店门头标识为风格化演绎，并非官方素材。
