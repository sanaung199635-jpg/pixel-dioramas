// Vocabulary for the Climbing Gym and Tennis Court islands.
// Row format: [id, cat, en, us IPA, uk IPA (null = same), zh, example, example zh, use (what it is for) or '', note?]
const ROWS = [
  // ====================================================================== climbing: wall and holds
  ['c_wall', 'cWall', 'climbing wall', '/ˈklaɪmɪŋ wɔːl/', null, '攀岩墙', 'This climbing wall is fifteen meters high.', '这面攀岩墙有十五米高。', '', 'climb 结尾的 b 不发音。'],
  ['c_hold', 'cWall', 'hold', '/hoʊld/', '/həʊld/', '岩点', 'Grab the next hold with your right hand.', '用右手抓住下一个岩点。', '墙上所有能抓能踩的点都叫 hold；手点是 handhold，脚点是 foothold。'],
  ['c_jug', 'cWall', 'jug', '/dʒʌɡ/', null, '大把手点', 'That jug is easy to hold.', '那个大把手点很好抓。', '又大又深、整只手都能扣住的点，新手路线上最多。'],
  ['c_crimp', 'cWall', 'crimp', '/krɪmp/', null, '小边点；抠点', 'This crimp hurts my fingers.', '这个小边点硌得我手指疼。', '只有一条窄边，只能用指尖抠住。'],
  ['c_sloper', 'cWall', 'sloper', '/ˈsloʊpər/', '/ˈsləʊpə(r)/', '斜面点', 'Keep your weight low on the sloper.', '抓斜面点时把重心放低。', '圆滑没有边的点，要靠手掌的摩擦力按住。'],
  ['c_pinch', 'cWall', 'pinch', '/pɪntʃ/', null, '捏点', 'Squeeze the pinch with your thumb.', '用大拇指用力捏住这个捏点。', '要用拇指和其他手指从两侧夹住的点。'],
  ['c_pocket', 'cWall', 'pocket', '/ˈpɑːkɪt/', '/ˈpɒkɪt/', '洞点', 'Put two fingers in the pocket.', '把两根手指放进洞点里。', '一个小洞，只能伸进一到三根手指。'],
  ['c_volume', 'cWall', 'volume', '/ˈvɑːljuːm/', '/ˈvɒljuːm/', '造型块', 'Step on the big volume.', '踩到那个大造型块上。', '装在墙上的大木块，用来改变墙面的形状。'],
  ['c_overhang', 'cWall', 'overhang', '/ˈoʊvərhæŋ/', '/ˈəʊvəhæŋ/', '仰角；悬壁', 'The overhang makes my arms tired.', '仰角墙让我的手臂很累。', '向外倾斜超过垂直的墙面，更费力。'],
  ['c_slab', 'cWall', 'slab', '/slæb/', null, '斜板；缓坡', 'Slab climbing is all about balance.', '爬斜板全靠平衡。', '向里倾斜、不到垂直的墙面，靠脚和平衡。'],
  ['c_route', 'cWall', 'route', '/ruːt/', null, '路线', 'Follow the yellow route to the top.', '沿着黄色路线爬到顶。', '同一种颜色的岩点组成一条路线。', '美式英语里也有人读 /raʊt/。抱石的路线叫 problem。'],
  ['c_grade', 'cWall', 'grade', '/ɡreɪd/', null, '难度等级', 'What grade is this route?', '这条路线是什么难度？', '路线起点旁的标签会写难度，例如抱石的 V3 或绳索攀登的 5.10。'],
  ['c_bouldering', 'cWall', 'bouldering', '/ˈboʊldərɪŋ/', '/ˈbəʊldərɪŋ/', '抱石', 'Bouldering needs no rope.', '抱石不需要绳子。', '在不高的墙上不系绳子攀爬，下面铺着厚垫子。'],
  ['c_crashPad', 'cWall', 'crash pad', '/ˈkræʃ pæd/', null, '抱石垫', 'Land on the crash pad with bent knees.', '落在抱石垫上时膝盖要弯曲。', '抱石时铺在下面的厚垫子，用来缓冲坠落。'],
  ['c_hangboard', 'cWall', 'hangboard', '/ˈhæŋbɔːrd/', '/ˈhæŋbɔːd/', '指力板', 'I train my fingers on the hangboard.', '我用指力板训练手指。', '挂在上面练手指力量的训练板。', '英式英语也叫 fingerboard。'],
  ['c_campusBoard', 'cWall', 'campus board', '/ˈkæmpəs bɔːrd/', '/ˈkæmpəs bɔːd/', '动态板', 'The campus board is for advanced climbers.', '动态板是给高水平攀岩者用的。', '一排排木条，不用脚、只靠手向上爬，练爆发力。'],

  // ---- rope and safety
  ['c_rope', 'cRope', 'rope', '/roʊp/', '/rəʊp/', '绳子', 'Check the rope before you climb.', '攀爬前检查一下绳子。', '攀岩用的是有弹性的动力绳，能缓冲坠落。'],
  ['c_knot', 'cRope', 'knot', '/nɑːt/', '/nɒt/', '绳结', 'Tie a figure-eight knot.', '打一个八字结。', '把绳子系在安全带上最常用的是八字结（figure-eight knot）。', '开头的 k 不发音。'],
  ['c_harness', 'cRope', 'harness', '/ˈhɑːrnɪs/', '/ˈhɑːnɪs/', '安全带', 'Tighten your harness around your waist.', '把安全带在腰上收紧。', '穿在腰和大腿上，用来连接绳子。'],
  ['c_carabiner', 'cRope', 'carabiner', '/ˌkærəˈbiːnər/', '/ˌkærəˈbiːnə(r)/', '锁扣；主锁', 'Lock the carabiner.', '把锁扣锁上。', '带开口的金属环，用来快速连接绳子和装备。', '英式拼写是 karabiner。'],
  ['c_quickdraw', 'cRope', 'quickdraw', '/ˈkwɪkdrɔː/', null, '快挂', 'Clip the rope into the quickdraw.', '把绳子扣进快挂里。', '两个锁扣加一条短带，先锋攀登时把绳子挂在墙上的挂片上。'],
  ['c_belayDevice', 'cRope', 'belay device', '/bɪˈleɪ dɪvaɪs/', null, '保护器', 'Thread the rope through the belay device.', '把绳子穿过保护器。', '保护员用它制动绳子，接住坠落的攀岩者。'],
  ['c_anchor', 'cRope', 'anchor', '/ˈæŋkər/', '/ˈæŋkə(r)/', '保护站；顶部锚点', 'The rope runs through the anchor at the top.', '绳子穿过顶部的保护站。', '路线顶端固定绳子的装置。', 'ch 读 /k/。'],
  ['c_bolt', 'cRope', 'bolt', '/boʊlt/', '/bəʊlt/', '挂片；膨胀螺栓', 'Clip the first bolt.', '挂上第一个挂片。', '打在墙上的金属保护点，用来挂快挂。'],
  ['c_autoBelay', 'cRope', 'auto belay', '/ˈɔːtoʊ bɪleɪ/', '/ˈɔːtəʊ bɪleɪ/', '自动保护器', 'Clip in to the auto belay before you start.', '开始之前先扣上自动保护器。', '装在墙顶的装置，会自动收带并把你缓缓放下，一个人也能爬。'],
  ['c_climber', 'cRope', 'climber', '/ˈklaɪmər/', '/ˈklaɪmə(r)/', '攀岩者', 'The climber is halfway up the wall.', '那位攀岩者爬到了墙的一半。', '', 'b 不发音。'],
  ['c_belayer', 'cRope', 'belayer', '/bɪˈleɪər/', '/bɪˈleɪə(r)/', '保护员', 'A good belayer always watches the climber.', '好的保护员会一直看着攀岩者。', '在地面上控制绳子、保护攀岩者的人。'],

  // ---- personal gear
  ['c_shoes', 'cGear', 'climbing shoes', '/ˈklaɪmɪŋ ʃuːz/', null, '攀岩鞋', 'Climbing shoes should fit tightly.', '攀岩鞋应该穿得很紧。', '鞋底是有黏性的橡胶，鞋头很尖，方便踩小点。'],
  ['c_chalk', 'cGear', 'chalk', '/tʃɔːk/', null, '镁粉', 'Put some chalk on your hands.', '在手上抹点镁粉。', '吸汗防滑，让手更干。', '字母 l 不发音。'],
  ['c_chalkBag', 'cGear', 'chalk bag', '/ˈtʃɔːk bæɡ/', null, '粉袋', 'My chalk bag hangs behind my waist.', '我的粉袋挂在腰后面。', '装镁粉的小袋子，挂在腰后随时取用。'],
  ['c_helmet', 'cGear', 'helmet', '/ˈhelmɪt/', null, '头盔', 'Always wear a helmet outdoors.', '在户外一定要戴头盔。', '户外攀岩时保护头部，防落石和碰撞。'],
  ['c_brush', 'cGear', 'brush', '/brʌʃ/', null, '刷子', 'Brush the chalk off the hold.', '把岩点上的镁粉刷掉。', '把岩点上积的镁粉刷干净，摩擦力更好。'],
  ['c_tape', 'cGear', 'tape', '/teɪp/', null, '胶布', 'I put tape on my finger.', '我在手指上缠了胶布。', '缠在手指上保护皮肤和关节。'],

  // ====================================================================== tennis: the court
  ['t_court', 'tCourt', 'tennis court', '/ˈtenɪs kɔːrt/', '/ˈtenɪs kɔːt/', '网球场', 'We booked a tennis court for an hour.', '我们订了一个小时的网球场。', '', '场地类型：hard court 硬地、clay court 红土、grass court 草地。'],
  ['t_net', 'tCourt', 'net', '/net/', null, '球网', 'The ball hit the net.', '球打到了网上。'],
  ['t_baseline', 'tCourt', 'baseline', '/ˈbeɪslaɪn/', null, '底线', 'Stand behind the baseline to serve.', '站在底线后面发球。', '球场两端最后面的那条线。'],
  ['t_sideline', 'tCourt', 'sideline', '/ˈsaɪdlaɪn/', null, '边线', 'The ball landed on the sideline. It is in!', '球落在边线上，是界内球！', '球场两侧的线；压线算界内。'],
  ['t_serviceLine', 'tCourt', 'service line', '/ˈsɜːrvɪs laɪn/', '/ˈsɜːvɪs laɪn/', '发球线', 'The serve must land before the service line.', '发球必须落在发球线以内。', '球网和底线之间的那条横线。'],
  ['t_serviceBox', 'tCourt', 'service box', '/ˈsɜːrvɪs bɑːks/', '/ˈsɜːvɪs bɒks/', '发球区', 'Aim your serve at the service box.', '把发球瞄准发球区。', '发球必须落进对角的发球区才有效。'],
  ['t_alley', 'tCourt', 'alley', '/ˈæli/', null, '双打走廊', 'The alley is only used in doubles.', '双打走廊只在双打时算界内。', '单打边线和双打边线之间的长条区域。', '英式英语叫 tramlines。'],
  ['t_centerMark', 'tCourt', 'center mark', '/ˈsentər mɑːrk/', '/ˈsentə mɑːk/', '中点标记', 'Stand next to the center mark.', '站在中点标记旁边。', '底线正中间的小短线，发球时不能越过它。', '英式拼写是 centre mark。'],
  ['t_fence', 'tCourt', 'fence', '/fens/', null, '围栏', 'The ball flew over the fence.', '球飞出了围栏。'],
  ['t_floodlight', 'tCourt', 'floodlight', '/ˈflʌdlaɪt/', null, '球场照明灯', 'The floodlights come on at night.', '晚上球场的灯会打开。'],
  ['t_umpireChair', 'tCourt', 'umpire chair', '/ˈʌmpaɪər tʃer/', '/ˈʌmpaɪə tʃeə(r)/', '裁判椅', 'The umpire chair is next to the net.', '裁判椅在球网旁边。'],
  ['t_scoreboard', 'tCourt', 'scoreboard', '/ˈskɔːrbɔːrd/', '/ˈskɔːbɔːd/', '记分牌', 'Look at the scoreboard. It is forty-love.', '看记分牌，现在是 40 比 0。', '', '网球计分：0 读 love，然后 15、30、40；40 平叫 deuce，之后领先一分叫 advantage。'],

  // ---- equipment
  ['t_racket', 'tGear', 'racket', '/ˈrækɪt/', null, '球拍', 'Hold the racket with a relaxed grip.', '握拍要放松。', '', '也拼作 racquet。拍线是 strings，握把是 grip，拍面是 head。'],
  ['t_ball', 'tGear', 'tennis ball', '/ˈtenɪs bɔːl/', null, '网球', 'Keep your eye on the tennis ball.', '眼睛盯着球。'],
  ['t_ballBasket', 'tGear', 'ball basket', '/ˈbɔːl bæskɪt/', '/ˈbɔːl bɑːskɪt/', '球筐', 'Pick up the balls and put them in the ball basket.', '把球捡起来放进球筐。', '', '也叫 ball hopper。'],
  ['t_ballMachine', 'tGear', 'ball machine', '/ˈbɔːl məʃiːn/', null, '发球机', 'I practice with the ball machine.', '我用发球机练球。', '自动一个接一个把球打过来，一个人也能练。'],
  ['t_ballCan', 'tGear', 'can of balls', '/ˌkæn əv ˈbɔːlz/', null, '一筒球', 'Open a new can of balls.', '开一筒新球。', '', '新球通常三个或四个装一筒。'],
  ['t_overgrip', 'tGear', 'overgrip', '/ˈoʊvərɡrɪp/', '/ˈəʊvəɡrɪp/', '手胶', 'My overgrip is worn out.', '我的手胶磨坏了。', '缠在拍柄外面的薄胶带，吸汗防滑，要经常换。'],
  ['t_bag', 'tGear', 'tennis bag', '/ˈtenɪs bæɡ/', null, '网球包', 'I carry two rackets in my tennis bag.', '我的网球包里放了两支球拍。'],
  ['t_shoes', 'tGear', 'tennis shoes', '/ˈtenɪs ʃuːz/', null, '网球鞋', 'Tennis shoes protect your ankles.', '网球鞋能保护脚踝。', '鞋底耐磨，侧向支撑好，适合急停和横向移动。'],
  ['t_cap', 'tGear', 'cap', '/kæp/', null, '帽子', 'Wear a cap when it is sunny.', '出太阳的时候戴顶帽子。'],
  ['t_wristband', 'tGear', 'wristband', '/ˈrɪstbænd/', null, '护腕', 'A wristband keeps sweat off your hand.', '护腕能挡住流到手上的汗。', '', '开头的 w 不发音。'],
  ['t_cone', 'tGear', 'cone', '/koʊn/', '/kəʊn/', '标志桶', 'Try to hit the cone with your serve.', '试着用发球打中标志桶。', '训练时放在场上当目标或标记脚步。'],
  ['t_trophy', 'tGear', 'trophy', '/ˈtroʊfi/', '/ˈtrəʊfi/', '奖杯', 'She won the trophy.', '她赢得了奖杯。'],

  // ---- people and strokes
  ['t_serve', 'tPlay', 'serve', '/sɜːrv/', '/sɜːv/', '发球', 'It is your serve.', '该你发球了。', '把球向上抛起再击出，每一分都从发球开始。', '发球直接得分叫 ace；两次发球都失误叫 double fault。'],
  ['t_forehand', 'tPlay', 'forehand', '/ˈfɔːrhænd/', '/ˈfɔːhænd/', '正手', 'His forehand is very powerful.', '他的正手非常有力。', '在持拍手那一侧击球。'],
  ['t_backhand', 'tPlay', 'backhand', '/ˈbækhænd/', null, '反手', 'I use two hands for my backhand.', '我的反手是双手握拍。', '在非持拍手那一侧击球，可以单手也可以双手。'],
  ['t_volley', 'tPlay', 'volley', '/ˈvɑːli/', '/ˈvɒli/', '截击', 'Come to the net and volley.', '上网截击。', '在球落地之前就把它打回去，通常在网前。'],
  ['t_umpire', 'tPlay', 'umpire', '/ˈʌmpaɪər/', '/ˈʌmpaɪə(r)/', '裁判', 'The umpire called the ball out.', '裁判判这个球出界。', '', '裁判会喊 Out!（出界）、Fault!（发球失误）、Let!（重发）。'],
  ['t_coach', 'tPlay', 'coach', '/koʊtʃ/', '/kəʊtʃ/', '教练', 'My coach is teaching me to serve.', '我的教练正在教我发球。'],
];

export const SPORT_CATS = {
  cWall: { scene: 'climb', zh: '岩壁与岩点', en: 'Wall & Holds', color: '#c9682b' },
  cRope: { scene: 'climb', zh: '绳索与保护', en: 'Rope & Safety', color: '#3d6fd9' },
  cGear: { scene: 'climb', zh: '个人装备', en: 'Personal Gear', color: '#7a56c9' },
  tCourt: { scene: 'tennis', zh: '球场', en: 'The Court', color: '#2f7fc1' },
  tGear: { scene: 'tennis', zh: '装备', en: 'Equipment', color: '#9aa81e' },
  tPlay: { scene: 'tennis', zh: '人物与击球', en: 'People & Strokes', color: '#d6456b' },
};

export const SPORT_WORDS = ROWS.map(([id, cat, en, us, uk, zh, ex, exZh, use, note]) => ({
  id, cat, en, us, uk: uk || us, zh, ex, exZh, ...(use ? { use } : {}), ...(note ? { note } : {}),
}));
