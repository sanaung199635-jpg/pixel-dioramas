// Bilingual content: UI strings, building history (from published reference sources)
// and clearly-labelled FICTIONAL demo characters.

export const SOURCES = {
  zh: '参考资料：Wikipedia「Shwedagon Pagoda」词条；Encyclopaedia Britannica「Shwedagon Pagoda」条目。模型为艺术化简，建筑数量与位置不代表实际布局。',
  en: 'Sources: Wikipedia, "Shwedagon Pagoda"; Encyclopaedia Britannica, "Shwedagon Pagoda". The model is a stylised simplification — counts and positions of structures are not the real layout.',
};

export const BUILDINGS = {
  main: {
    zh: {
      kicker: '主塔 · Zedi',
      title: '瑞光大金塔',
      sub: 'Shwedagon Pagoda · 高约 99 米',
      body: [
        '大金塔矗立在仰光的丹固达拉山（Singuttara Hill）上，高约 99 米，是缅甸最神圣的佛塔。',
        '按照传统说法，塔内供奉着佛陀的八根头发等圣物，历史可追溯到 2500 多年前；考古学者则普遍认为，它最初由孟族人在公元 6 至 10 世纪之间建造。',
        '此后历代君主多次加高、重修：15 世纪的信修浮女王（Shin Sawbu）加高佛塔，并捐出与自身体重相等的黄金用于贴金；1768 年地震后，辛标信王（Hsinbyushin）将塔重建到接近今天的高度。1871 年，敏东王（Mindon Min）捐献了新的塔顶宝伞（hti）。',
        '塔身覆盖金箔与金板，塔顶镶嵌数千颗钻石与红宝石，最顶端的"钻石蕾"上据记载镶有一颗约 76 克拉的钻石。',
      ],
    },
    en: {
      kicker: 'Main stupa · Zedi',
      title: 'Shwedagon Pagoda',
      sub: 'Yangon, Myanmar · about 99 m tall',
      body: [
        'The Shwedagon stands on Singuttara Hill in Yangon. At about 99 m it is the most sacred Buddhist pagoda in Myanmar.',
        'Tradition holds that it enshrines relics including eight strands of hair of the Buddha and is more than 2,500 years old; archaeologists generally estimate it was first built by the Mon between the 6th and 10th centuries CE.',
        'Successive rulers raised and rebuilt it. In the 15th century Queen Shin Sawbu raised the stupa and gave her body weight in gold for gilding; after an earthquake in 1768 King Hsinbyushin rebuilt it to roughly its present height. In 1871 King Mindon Min donated a new crowning umbrella (hti).',
        'The stupa is covered in gold leaf and plates, and its crown is set with thousands of diamonds and rubies; the topmost "diamond bud" is recorded as tipped with a 76-carat diamond.',
      ],
    },
  },
  adoration: {
    zh: {
      kicker: '礼拜殿 · Tazaung',
      title: '塔基礼拜殿',
      sub: 'Prayer halls around the base',
      body: [
        '大金塔塔基四周设有多座供奉佛像的礼拜殿（tazaung），信众在这里献花、点烛、诵经和礼佛。',
        '本模型在塔基四个斜角各放置了一座带发光佛龛的礼拜殿，用来表现这种围绕主塔礼拜的空间关系。',
      ],
    },
    en: {
      kicker: 'Prayer hall · Tazaung',
      title: 'Prayer halls at the base',
      sub: 'Shrines housing Buddha images',
      body: [
        'Around the base of the Shwedagon stand prayer halls (tazaung) housing Buddha images, where devotees offer flowers and candles, chant and pay homage.',
        'In this model one large shrine with a glowing niche sits on each diagonal of the base to suggest that ring of devotional spaces.',
      ],
    },
  },
  satellites: {
    zh: {
      kicker: '环塔佛塔',
      title: '环绕主塔的小佛塔',
      sub: 'Satellite stupas & planetary posts',
      body: [
        '据记载，大金塔塔基周围环绕着 64 座小佛塔，四个正方向上还各有一座较大的佛塔。本模型中的佛塔数量和位置经过简化。',
        '塔基周围还设有对应一周八天的"星宿角"（planetary posts，星期三分为上午与下午）。缅甸人按照自己出生是星期几，到对应的角落浇水、献花礼佛。',
      ],
    },
    en: {
      kicker: 'Satellite stupas',
      title: 'Stupas around the main zedi',
      sub: 'Satellite stupas & planetary posts',
      body: [
        'The base of the Shwedagon is described as being encircled by 64 small stupas, with four larger ones at the cardinal points. Counts and positions are simplified in this model.',
        'Around the base are also eight "planetary posts", one for each day of the Burmese eight-day week (Wednesday is split into morning and afternoon). People pour water and offer flowers at the post of the weekday they were born on.',
      ],
    },
  },
  tazaung: {
    zh: {
      kicker: '礼拜亭 · Pyatthat',
      title: '多层尖顶礼拜亭',
      sub: 'Tazaung pavilions with pyatthat roofs',
      body: [
        '大金塔平台上分布着许多由信众捐建的礼拜亭（tazaung），亭内供奉佛像，供人休憩与礼佛。',
        '它们多采用缅甸传统的 pyatthat 多层尖顶：屋檐层层收分，层数通常为奇数。在传统上，这种屋顶是宗教建筑与王宫才使用的形制。',
      ],
    },
    en: {
      kicker: 'Pavilion · Pyatthat',
      title: 'Tiered-roof pavilions',
      sub: 'Tazaung with pyatthat roofs',
      body: [
        'The platform is dotted with devotional pavilions (tazaung) donated by the faithful, sheltering Buddha images and offering a place to rest and pray.',
        'Many carry the traditional Burmese pyatthat — a tapering multi-tiered roof, usually with an odd number of tiers, historically reserved for religious buildings and royal palaces.',
      ],
    },
  },
  stairway: {
    zh: {
      kicker: '入口',
      title: '阶梯入口',
      sub: 'Stairways to the platform',
      body: [
        '大金塔有东、南、西、北四条带顶棚的阶梯长廊通往山顶平台，沿途有出售鲜花、香烛和佛具的摊位，如今也设有电梯。',
        '进入平台须脱鞋赤足。本模型将入口简化为两处露天台阶与尖塔门殿。',
      ],
    },
    en: {
      kicker: 'Entrance',
      title: 'Stairway entrances',
      sub: 'Approaches to the platform',
      body: [
        'Four covered stairways — north, south, east and west — climb to the hilltop platform, lined with stalls selling flowers, candles and devotional items; lifts are also available today.',
        'Visitors go barefoot on the platform. The model simplifies the entrances into two open stairs topped by spired gate shrines.',
      ],
    },
  },
  chinthe: {
    zh: {
      kicker: '守护神兽',
      title: 'Chinthe 守护狮',
      sub: 'Guardian lions',
      body: [
        'Chinthe 是缅甸佛教寺院入口常见的神话守护狮兽，通常成对立在入口两侧。',
        '大金塔的入口阶梯前也立有巨大的 chinthe 雕像，守护通往佛塔的道路。',
      ],
    },
    en: {
      kicker: 'Guardian',
      title: 'Chinthe',
      sub: 'Guardian lions',
      body: [
        'The chinthe is the mythical lion that guards Burmese temple entrances, usually standing in pairs on either side of a gateway.',
        'Giant chinthe statues guard the entrance stairways of the Shwedagon as well.',
      ],
    },
  },
  lantern: {
    zh: {
      kicker: '供养',
      title: '供灯与灯龛',
      sub: 'Lamps & candle offerings',
      body: [
        '点燃蜡烛与油灯是缅甸佛教常见的供养方式。',
        '在点灯节（Thadingyut）等满月节日，大金塔平台上会点亮成千上万盏灯。',
      ],
    },
    en: {
      kicker: 'Offerings',
      title: 'Lamps & lanterns',
      sub: 'Candle and lamp offerings',
      body: [
        'Lighting candles and oil lamps is a common offering in Burmese Buddhism.',
        'On full-moon festivals such as Thadingyut, the Festival of Lights, thousands of lamps are lit across the Shwedagon platform.',
      ],
    },
  },
  platform: {
    zh: {
      kicker: '导览',
      title: '仰光大金塔 · 微缩沙盘',
      sub: 'Shwedagon Pixel Diorama',
      body: [
        '大金塔建于丹固达拉山顶的大理石平台上。按照佛教传统，信众沿顺时针方向绕塔礼拜，以示恭敬。',
        '操作：拖动旋转视角，滚轮或双指缩放，右键或双指拖动平移。点击人物或建筑可查看介绍，人物卡片中可以触发站立、合十、跪拜、低头礼佛、起身等动作。',
        '画面中的人物均为虚构的演示角色。',
      ],
    },
    en: {
      kicker: 'Guide',
      title: 'Shwedagon Pixel Diorama',
      sub: 'A miniature of the hilltop platform',
      body: [
        'The Shwedagon rises from a marble platform on top of Singuttara Hill. Following Buddhist custom, devotees walk around the stupa clockwise as a sign of respect.',
        'Controls: drag to orbit, scroll or pinch to zoom, right-drag or two-finger drag to pan. Click a person or building for details; person cards let you trigger standing, hands-together, kneeling prostration, head-bow and rising animations.',
        'All people in the scene are fictional demo characters.',
      ],
    },
  },
};

// ---------------------------------------------------------------- fictional demo characters
export const ROLES = {
  devotee: { zh: '信众', en: 'Devotee' },
  pilgrim: { zh: '朝圣者', en: 'Pilgrim' },
  monk: { zh: '僧侣', en: 'Monk' },
  nun: { zh: '尼姑（thilashin）', en: 'Nun (thilashin)' },
};

const BIOS = {
  devotee: [
    { zh: '一位虚构的本地信众，清晨来到平台献花，在自己出生星期对应的星宿角浇水后，于此静坐祈祷。', en: 'A fictional local devotee who came early to offer flowers and pour water at the planetary post of their birth weekday, and now sits in quiet prayer.' },
    { zh: '虚构角色：带着家人的祝愿前来点灯供佛，祈求家人平安健康。', en: 'Fictional character: came to light a lamp on behalf of the family, praying for their health and safety.' },
    { zh: '虚构角色：每逢满月日都会来礼佛，习惯在主塔前跪坐诵经。', en: 'Fictional character: visits on every full-moon day and likes to kneel and chant before the main stupa.' },
    { zh: '虚构角色：刚从外地回到仰光，第一件事便是登上平台礼佛还愿。', en: 'Fictional character: just returned to Yangon, and the first stop was the platform to give thanks.' },
  ],
  pilgrim: [
    { zh: '虚构角色：远道而来的朝圣者，手捧鲜花，准备供奉在佛前。', en: 'Fictional character: a pilgrim from afar holding flowers to offer before the Buddha.' },
    { zh: '虚构角色：第一次来到大金塔，正站在台阶顶端合十致敬。', en: 'Fictional character: visiting the Shwedagon for the first time and pausing to pay respects.' },
  ],
  monk: [
    { zh: '虚构角色：一位沿顺时针方向绕塔经行的僧侣，以默念和慢步修习专注。', en: 'Fictional character: a monk walking clockwise around the stupa, practising mindful walking and recitation.' },
    { zh: '虚构角色：清晨托钵归来的年轻僧侣，正绕塔礼拜。', en: 'Fictional character: a young monk back from the morning alms round, circling the stupa in homage.' },
  ],
  nun: [
    { zh: '虚构角色：身着粉色袈裟的缅甸尼姑（thilashin），正在绕塔经行。', en: 'Fictional character: a Burmese nun (thilashin) in pink robes, walking around the stupa.' },
  ],
};

export function makePersonData(id, role, seed) {
  const bios = BIOS[role];
  const num = String(id).padStart(2, '0');
  return {
    id: `P-${num}`,
    role,
    name: { zh: `演示角色 · ${ROLES[role].zh} ${num}`, en: `Demo · ${ROLES[role].en} #${num}` },
    bio: bios[seed % bios.length],
  };
}

export const STATUS = {
  pray: { zh: '跪坐合十祈祷', en: 'Kneeling in prayer' },
  prostrate: { zh: '跪拜叩首', en: 'Prostrating' },
  stand: { zh: '静立', en: 'Standing' },
  standPray: { zh: '站立合十', en: 'Standing, hands together' },
  walk: { zh: '绕塔经行', en: 'Walking around the stupa' },
  bowHead: { zh: '低头礼佛', en: 'Bowing the head' },
  gassho: { zh: '双手合十', en: 'Joining hands' },
  kneel: { zh: '跪下礼拜', en: 'Kneeling to prostrate' },
  rise: { zh: '起身', en: 'Rising' },
};

export const ACTIONS = [
  { id: 'stand', zh: '站立', en: 'Stand' },
  { id: 'gassho', zh: '双手合十', en: 'Hands together' },
  { id: 'kneel', zh: '跪拜', en: 'Prostrate' },
  { id: 'bowHead', zh: '低头礼佛', en: 'Bow head' },
  { id: 'rise', zh: '起身', en: 'Rise' },
];

export const UI = {
  zh: {
    brand: '仰光大金塔',
    hint: '拖动旋转 · 滚轮缩放 · 点击人物或建筑查看介绍',
    scenes: { dawn: '晨曦礼佛', noon: '正午金光', dusk: '黄昏诵经', night: '夜色金塔' },
    quality: ['高清', '标准', '复古'],
    tools: { rotate: '旋转', zoomIn: '放大', zoomOut: '缩小', reset: '重置', auto: '自动', info: '信息' },
    role: '身份',
    status: '当前行为',
    actions: '互动动作',
    demo: '虚构演示内容',
    close: '关闭',
    lang: 'EN',
  },
  en: {
    brand: 'Pixel Diorama',
    hint: 'Drag to orbit · Scroll to zoom · Click people or buildings',
    scenes: { dawn: 'Dawn', noon: 'Noon', dusk: 'Dusk', night: 'Night' },
    quality: ['HD', 'Std', 'Retro'],
    tools: { rotate: 'Rotate', zoomIn: 'Zoom +', zoomOut: 'Zoom −', reset: 'Reset', auto: 'Auto', info: 'Info' },
    role: 'Role',
    status: 'Doing',
    actions: 'Actions',
    demo: 'Fictional demo content',
    close: 'Close',
    lang: '中',
  },
};
