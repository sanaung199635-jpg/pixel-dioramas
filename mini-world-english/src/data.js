// Vocabulary for the mini world. us / uk = IPA, zh = Chinese, ex = example sentence.
import { PHONE_CATS, PHONE_WORDS } from './phone-data.js';

export const SCENES = {
  park: { zh: '小公园', en: 'Park' },
  gym: { zh: '健身房', en: 'Gym' },
  home: { zh: '家', en: 'Home' },
  market: { zh: '超市', en: 'Market' },
  phone: { zh: '手机', en: 'Phone' },
};

export const CATS = {
  tree: { scene: 'park', zh: '树木', en: 'Trees', color: '#3f9b57' },
  play: { scene: 'park', zh: '操场', en: 'Playground', color: '#f08a3c' },
  grass: { scene: 'park', zh: '草地', en: 'Grass', color: '#7cb342' },
  bug: { scene: 'park', zh: '虫子', en: 'Bugs', color: '#d6456b' },
  cardio: { scene: 'gym', zh: '有氧器械', en: 'Cardio', color: '#e5483f' },
  weights: { scene: 'gym', zh: '自由重量', en: 'Free Weights', color: '#3d6fd9' },
  machine: { scene: 'gym', zh: '力量器械', en: 'Machines', color: '#7a56c9' },
  gear: { scene: 'gym', zh: '小器材与用品', en: 'Gear', color: '#1f9e8f' },
  bedroom: { scene: 'home', zh: '卧室', en: 'Bedroom', color: '#b0569f' },
  living: { scene: 'home', zh: '客厅', en: 'Living Room', color: '#c07f1e' },
  store: { scene: 'market', zh: '店内设施', en: 'In the Store', color: '#2f7fc1' },
  fruit: { scene: 'market', zh: '水果', en: 'Fruit', color: '#e5483f' },
  veg: { scene: 'market', zh: '蔬菜', en: 'Vegetables', color: '#3f9b57' },
  food: { scene: 'market', zh: '食品饮料', en: 'Food & Drinks', color: '#d1861c' },
};

export const WORDS = [
  // ---- trees
  { id: 'tree', cat: 'tree', en: 'tree', us: '/triː/', uk: '/triː/', zh: '树', ex: 'The tree is very tall.', exZh: '这棵树很高。' },
  { id: 'appleTree', cat: 'tree', en: 'apple tree', us: '/ˈæpl triː/', uk: '/ˈæpl triː/', zh: '苹果树', ex: 'There are red apples on the apple tree.', exZh: '苹果树上有红苹果。' },
  { id: 'apple', cat: 'tree', en: 'apple', us: '/ˈæpl/', uk: '/ˈæpl/', zh: '苹果', ex: 'I eat an apple every day.', exZh: '我每天吃一个苹果。' },
  { id: 'pineTree', cat: 'tree', en: 'pine tree', us: '/paɪn triː/', uk: '/paɪn triː/', zh: '松树', ex: 'The pine tree is green all year.', exZh: '松树一年四季都是绿色的。' },
  { id: 'bush', cat: 'tree', en: 'bush', us: '/bʊʃ/', uk: '/bʊʃ/', zh: '灌木', ex: 'A bird is hiding in the bush.', exZh: '一只小鸟躲在灌木丛里。' },
  { id: 'stump', cat: 'tree', en: 'stump', us: '/stʌmp/', uk: '/stʌmp/', zh: '树桩', ex: 'The ants walk around the stump.', exZh: '蚂蚁绕着树桩走。' },

  // ---- playground
  { id: 'playground', cat: 'play', en: 'playground', us: '/ˈpleɪɡraʊnd/', uk: '/ˈpleɪɡraʊnd/', zh: '操场；游乐场', ex: 'We play on the playground after school.', exZh: '放学后我们在操场上玩。' },
  { id: 'slide', cat: 'play', en: 'slide', us: '/slaɪd/', uk: '/slaɪd/', zh: '滑梯', ex: 'She goes down the slide.', exZh: '她从滑梯上滑下来。' },
  { id: 'swing', cat: 'play', en: 'swing', us: '/swɪŋ/', uk: '/swɪŋ/', zh: '秋千', ex: 'He is sitting on the swing.', exZh: '他坐在秋千上。' },
  { id: 'seesaw', cat: 'play', en: 'seesaw', us: '/ˈsiːsɔː/', uk: '/ˈsiːsɔː/', zh: '跷跷板', ex: 'Two kids play on the seesaw.', exZh: '两个小朋友在玩跷跷板。' },
  { id: 'sandbox', cat: 'play', en: 'sandbox', us: '/ˈsændbɑːks/', uk: '/ˈsændbɒks/', zh: '沙坑', ex: "Let's build a castle in the sandbox.", exZh: '我们在沙坑里堆一座城堡吧。', note: '英式英语更常说 sandpit /ˈsændpɪt/。' },
  { id: 'ball', cat: 'play', en: 'ball', us: '/bɔːl/', uk: '/bɔːl/', zh: '球', ex: 'Kick the ball to me!', exZh: '把球踢给我！' },
  { id: 'bench', cat: 'play', en: 'bench', us: '/bentʃ/', uk: '/bentʃ/', zh: '长椅', ex: 'Grandma sits on the bench.', exZh: '奶奶坐在长椅上。' },

  // ---- grass
  { id: 'grass', cat: 'grass', en: 'grass', us: '/ɡræs/', uk: '/ɡrɑːs/', zh: '草', ex: 'The grass is soft and green.', exZh: '草又软又绿。', note: '美音和英音的元音不同：/æ/ 与 /ɑː/。' },
  { id: 'flower', cat: 'grass', en: 'flower', us: '/ˈflaʊər/', uk: '/ˈflaʊə(r)/', zh: '花', ex: 'This flower smells good.', exZh: '这朵花很香。' },
  { id: 'mushroom', cat: 'grass', en: 'mushroom', us: '/ˈmʌʃruːm/', uk: '/ˈmʌʃrʊm/', zh: '蘑菇', ex: 'A small mushroom grows under the tree.', exZh: '树下长着一朵小蘑菇。' },
  { id: 'rock', cat: 'grass', en: 'rock', us: '/rɑːk/', uk: '/rɒk/', zh: '石头', ex: 'A ladybug is sitting on the rock.', exZh: '一只瓢虫趴在石头上。' },
  { id: 'pond', cat: 'grass', en: 'pond', us: '/pɑːnd/', uk: '/pɒnd/', zh: '池塘', ex: 'There is a small pond in the park.', exZh: '公园里有一个小池塘。' },

  // ---- bugs
  { id: 'butterfly', cat: 'bug', en: 'butterfly', us: '/ˈbʌtərflaɪ/', uk: '/ˈbʌtəflaɪ/', zh: '蝴蝶', ex: 'The butterfly has beautiful wings.', exZh: '蝴蝶有美丽的翅膀。' },
  { id: 'bee', cat: 'bug', en: 'bee', us: '/biː/', uk: '/biː/', zh: '蜜蜂', ex: 'The bee likes flowers.', exZh: '蜜蜂喜欢花。' },
  { id: 'ladybug', cat: 'bug', en: 'ladybug', us: '/ˈleɪdibʌɡ/', uk: '/ˈleɪdibʌɡ/', zh: '瓢虫', ex: 'The ladybug is red with black spots.', exZh: '瓢虫是红色的，带着黑点。', note: '英式英语叫 ladybird /ˈleɪdibɜːd/。' },
  { id: 'ant', cat: 'bug', en: 'ant', us: '/ænt/', uk: '/ænt/', zh: '蚂蚁', ex: 'The ant is small but strong.', exZh: '蚂蚁很小，但很强壮。' },
  { id: 'snail', cat: 'bug', en: 'snail', us: '/sneɪl/', uk: '/sneɪl/', zh: '蜗牛', ex: 'The snail moves very slowly.', exZh: '蜗牛爬得很慢。' },
  { id: 'caterpillar', cat: 'bug', en: 'caterpillar', us: '/ˈkætərpɪlər/', uk: '/ˈkætəpɪlə(r)/', zh: '毛毛虫', ex: 'The caterpillar will become a butterfly.', exZh: '毛毛虫会变成蝴蝶。' },
  { id: 'dragonfly', cat: 'bug', en: 'dragonfly', us: '/ˈdræɡənflaɪ/', uk: '/ˈdræɡənflaɪ/', zh: '蜻蜓', ex: 'A dragonfly flies over the pond.', exZh: '一只蜻蜓飞过池塘。' },

  // ================================================================== gym
  // ---- cardio
  { id: 'treadmill', cat: 'cardio', en: 'treadmill', us: '/ˈtredmɪl/', uk: '/ˈtredmɪl/', zh: '跑步机', use: '跑步、快走，锻炼心肺和腿部。', ex: 'I run on the treadmill for twenty minutes.', exZh: '我在跑步机上跑二十分钟。' },
  { id: 'exerciseBike', cat: 'cardio', en: 'exercise bike', us: '/ˈeksərsaɪz baɪk/', uk: '/ˈeksəsaɪz baɪk/', zh: '健身车；动感单车', use: '原地骑车，锻炼心肺和大腿。', ex: 'She rides the exercise bike every morning.', exZh: '她每天早上骑健身车。' },
  { id: 'elliptical', cat: 'cardio', en: 'elliptical', us: '/ɪˈlɪptɪkl/', uk: '/ɪˈlɪptɪkl/', zh: '椭圆机', use: '手脚一起动的有氧运动，对膝盖冲击小。', ex: 'The elliptical is easy on my knees.', exZh: '椭圆机对我的膝盖很友好。', note: '全称 elliptical trainer；英式英语常说 cross trainer。' },
  { id: 'rowingMachine', cat: 'cardio', en: 'rowing machine', us: '/ˈroʊɪŋ məʃiːn/', uk: '/ˈrəʊɪŋ məʃiːn/', zh: '划船机', use: '模拟划船，锻炼背部、腿部和心肺。', ex: 'The rowing machine works your whole body.', exZh: '划船机能锻炼到全身。' },
  { id: 'stairClimber', cat: 'cardio', en: 'stair climber', us: '/ˈster klaɪmər/', uk: '/ˈsteə klaɪmə(r)/', zh: '楼梯机；登山机', use: '不停地爬楼梯，锻炼臀部、腿部和心肺。', ex: 'Ten minutes on the stair climber makes me sweat.', exZh: '在楼梯机上练十分钟我就出汗了。' },
  { id: 'jumpRope', cat: 'cardio', en: 'jump rope', us: '/ˈdʒʌmp roʊp/', uk: '/ˈdʒʌmp rəʊp/', zh: '跳绳', use: '跳绳热身，锻炼心肺和协调性。', ex: 'I warm up with a jump rope.', exZh: '我用跳绳来热身。', note: '英式英语叫 skipping rope /ˈskɪpɪŋ rəʊp/。' },

  // ---- free weights
  { id: 'dumbbell', cat: 'weights', en: 'dumbbell', us: '/ˈdʌmbel/', uk: '/ˈdʌmbel/', zh: '哑铃', use: '单手握的重量，练手臂、肩膀、胸等。', ex: 'He lifts a dumbbell with one hand.', exZh: '他用一只手举起哑铃。', note: '拼写里有两个 b，但只读一个 /b/：dumb 的 b 不发音。' },
  { id: 'barbell', cat: 'weights', en: 'barbell', us: '/ˈbɑːrbel/', uk: '/ˈbɑːbel/', zh: '杠铃', use: '双手握的长杠，用来深蹲、硬拉、卧推。', ex: 'She lifts the barbell off the floor.', exZh: '她把杠铃从地上拉起来。' },
  { id: 'kettlebell', cat: 'weights', en: 'kettlebell', us: '/ˈketlbel/', uk: '/ˈketlbel/', zh: '壶铃', use: '带提手的铁球，常做甩摆（swing）动作。', ex: 'Swing the kettlebell with both hands.', exZh: '用双手甩壶铃。' },
  { id: 'weightPlate', cat: 'weights', en: 'weight plate', us: '/ˈweɪt pleɪt/', uk: '/ˈweɪt pleɪt/', zh: '杠铃片', use: '装在杠铃两端，用来增加重量。', ex: 'Put a weight plate on each side of the bar.', exZh: '在杠的两边各放一片杠铃片。' },
  { id: 'benchPress', cat: 'weights', en: 'bench press', us: '/ˈbentʃ pres/', uk: '/ˈbentʃ pres/', zh: '卧推；卧推架', use: '躺着把杠铃向上推，练胸、肩和手臂。', ex: 'How much can you bench press?', exZh: '你卧推能推多重？', note: 'bench press 既是名词（卧推这个动作），也可以当动词用。' },
  { id: 'weightBench', cat: 'weights', en: 'weight bench', us: '/ˈweɪt bentʃ/', uk: '/ˈweɪt bentʃ/', zh: '健身凳', use: '坐着或躺着做哑铃动作用的凳子。', ex: 'Lie down on the weight bench.', exZh: '躺在健身凳上。' },
  { id: 'squatRack', cat: 'weights', en: 'squat rack', us: '/ˈskwɑːt ræk/', uk: '/ˈskwɒt ræk/', zh: '深蹲架', use: '架住杠铃，用来做深蹲（squat）。', ex: 'I do squats in the squat rack.', exZh: '我在深蹲架里做深蹲。' },
  { id: 'dumbbellRack', cat: 'weights', en: 'dumbbell rack', us: '/ˈdʌmbel ræk/', uk: '/ˈdʌmbel ræk/', zh: '哑铃架', use: '摆放哑铃的架子，用完要放回去。', ex: 'Please put the dumbbells back on the dumbbell rack.', exZh: '请把哑铃放回哑铃架上。' },
  { id: 'medicineBall', cat: 'weights', en: 'medicine ball', us: '/ˈmedɪsn bɔːl/', uk: '/ˈmedsn bɔːl/', zh: '药球；实心球', use: '有重量的球，用来抛、砸、转体练核心。', ex: 'Throw the medicine ball to your partner.', exZh: '把药球抛给你的搭档。' },

  // ---- machines
  { id: 'smithMachine', cat: 'machine', en: 'Smith machine', us: '/ˈsmɪθ məʃiːn/', uk: '/ˈsmɪθ məʃiːn/', zh: '史密斯机', use: '杠铃固定在轨道上，只能上下移动，更安全。', ex: 'Beginners often squat in the Smith machine.', exZh: '新手常在史密斯机里做深蹲。' },
  { id: 'cableMachine', cat: 'machine', en: 'cable machine', us: '/ˈkeɪbl məʃiːn/', uk: '/ˈkeɪbl məʃiːn/', zh: '龙门架；绳索训练机', use: '拉动钢索做各种角度的动作，全身都能练。', ex: 'You can train every muscle on the cable machine.', exZh: '在龙门架上可以练到每一块肌肉。' },
  { id: 'legPress', cat: 'machine', en: 'leg press', us: '/ˈleɡ pres/', uk: '/ˈleɡ pres/', zh: '腿举机；倒蹬机', use: '坐着用双脚把重量蹬出去，练大腿和臀部。', ex: 'Push the plate away with your feet on the leg press.', exZh: '在腿举机上用脚把踏板蹬出去。' },
  { id: 'latPulldown', cat: 'machine', en: 'lat pulldown', us: '/ˌlæt ˈpʊldaʊn/', uk: '/ˌlæt ˈpʊldaʊn/', zh: '高位下拉机', use: '坐着把横杆往下拉，练背部（背阔肌）。', ex: 'Pull the bar down to your chest on the lat pulldown.', exZh: '在高位下拉机上把横杆拉到胸前。', note: 'lat 是 latissimus（背阔肌）的简称。' },
  { id: 'pecDeck', cat: 'machine', en: 'pec deck', us: '/ˈpek dek/', uk: '/ˈpek dek/', zh: '蝴蝶机；夹胸机', use: '双臂向中间夹，练胸肌。', ex: 'Squeeze your arms together on the pec deck.', exZh: '在蝴蝶机上把双臂夹紧。', note: 'pec 是 pectoral（胸肌）的简称。' },
  { id: 'legExtension', cat: 'machine', en: 'leg extension', us: '/ˈleɡ ɪkstenʃn/', uk: '/ˈleɡ ɪkstenʃn/', zh: '腿屈伸机', use: '坐着把小腿向前踢直，练大腿前侧。', ex: 'The leg extension makes your thighs strong.', exZh: '腿屈伸机能让你的大腿更有力。' },
  { id: 'pullUpBar', cat: 'machine', en: 'pull-up bar', us: '/ˈpʊl ʌp bɑːr/', uk: '/ˈpʊl ʌp bɑː(r)/', zh: '引体向上杆；单杠', use: '抓住横杆把身体拉上去，练背和手臂。', ex: 'Can you do ten pull-ups on the pull-up bar?', exZh: '你能在单杠上做十个引体向上吗？' },
  { id: 'dipBars', cat: 'machine', en: 'dip bars', us: '/ˈdɪp bɑːrz/', uk: '/ˈdɪp bɑːz/', zh: '双杠；臂屈伸架', use: '撑在两根杠上身体上下起伏，练胸和手臂后侧。', ex: 'He does dips on the dip bars.', exZh: '他在双杠上做臂屈伸。' },
  { id: 'punchingBag', cat: 'machine', en: 'punching bag', us: '/ˈpʌntʃɪŋ bæɡ/', uk: '/ˈpʌntʃɪŋ bæɡ/', zh: '沙袋', use: '练拳击用，出拳、踢腿都可以。', ex: 'She hits the punching bag hard.', exZh: '她用力击打沙袋。', note: '英式英语常说 punchbag。' },

  // ---- gear
  { id: 'yogaMat', cat: 'gear', en: 'yoga mat', us: '/ˈjoʊɡə mæt/', uk: '/ˈjəʊɡə mæt/', zh: '瑜伽垫', use: '铺在地上做拉伸、瑜伽和腹肌练习。', ex: 'Roll out your yoga mat and stretch.', exZh: '铺开你的瑜伽垫，做做拉伸。' },
  { id: 'exerciseBall', cat: 'gear', en: 'exercise ball', us: '/ˈeksərsaɪz bɔːl/', uk: '/ˈeksəsaɪz bɔːl/', zh: '健身球；瑜伽球', use: '坐或躺在球上练平衡和核心。', ex: 'Sit on the exercise ball and keep your balance.', exZh: '坐在健身球上，保持平衡。' },
  { id: 'foamRoller', cat: 'gear', en: 'foam roller', us: '/ˈfoʊm roʊlər/', uk: '/ˈfəʊm rəʊlə(r)/', zh: '泡沫轴', use: '在肌肉上来回滚动，放松按摩。', ex: 'Use the foam roller after your workout.', exZh: '锻炼之后用泡沫轴放松一下。' },
  { id: 'resistanceBand', cat: 'gear', en: 'resistance band', us: '/rɪˈzɪstəns bænd/', uk: '/rɪˈzɪstəns bænd/', zh: '弹力带', use: '拉伸弹力带产生阻力，热身或练力量。', ex: 'Pull the resistance band with both hands.', exZh: '用双手拉开弹力带。' },
  { id: 'abWheel', cat: 'gear', en: 'ab wheel', us: '/ˈæb wiːl/', uk: '/ˈæb wiːl/', zh: '健腹轮', use: '跪着把轮子向前推再拉回，练腹肌。', ex: 'The ab wheel is hard but great for your abs.', exZh: '健腹轮很难，但对腹肌很有效。', note: 'ab / abs 是 abdominal muscles（腹肌）的简称。' },
  { id: 'boxingGloves', cat: 'gear', en: 'boxing gloves', us: '/ˈbɑːksɪŋ ɡlʌvz/', uk: '/ˈbɒksɪŋ ɡlʌvz/', zh: '拳击手套', use: '打沙袋时保护双手。', ex: 'Put on your boxing gloves first.', exZh: '先戴上你的拳击手套。' },
  { id: 'plyoBox', cat: 'gear', en: 'plyo box', us: '/ˈplaɪoʊ bɑːks/', uk: '/ˈplaɪəʊ bɒks/', zh: '跳箱', use: '双脚跳上箱子，练爆发力。', ex: 'Jump onto the plyo box with both feet.', exZh: '双脚跳上跳箱。', note: 'plyo 是 plyometric（增强式训练）的简称，也叫 jump box。' },
  { id: 'battleRopes', cat: 'gear', en: 'battle ropes', us: '/ˈbætl roʊps/', uk: '/ˈbætl rəʊps/', zh: '战绳', use: '双手快速甩动粗绳，练力量和心肺。', ex: 'Shake the battle ropes as fast as you can.', exZh: '尽可能快地甩动战绳。' },
  { id: 'waterBottle', cat: 'gear', en: 'water bottle', us: '/ˈwɔːtər bɑːtl/', uk: '/ˈwɔːtə bɒtl/', zh: '水瓶；水杯', ex: "Don't forget your water bottle.", exZh: '别忘了带你的水瓶。' },
  { id: 'towel', cat: 'gear', en: 'towel', us: '/ˈtaʊəl/', uk: '/ˈtaʊəl/', zh: '毛巾', ex: 'Wipe the bench with your towel.', exZh: '用你的毛巾把凳子擦一下。' },
  { id: 'sneakers', cat: 'gear', en: 'sneakers', us: '/ˈsniːkərz/', uk: '/ˈsniːkəz/', zh: '运动鞋', ex: 'I wear sneakers to the gym.', exZh: '我穿运动鞋去健身房。', note: '英式英语叫 trainers /ˈtreɪnəz/。' },
  { id: 'gymBag', cat: 'gear', en: 'gym bag', us: '/ˈdʒɪm bæɡ/', uk: '/ˈdʒɪm bæɡ/', zh: '健身包', ex: 'My towel is in my gym bag.', exZh: '我的毛巾在健身包里。' },
  { id: 'scale', cat: 'gear', en: 'scale', us: '/skeɪl/', uk: '/skeɪl/', zh: '体重秤', ex: 'Step on the scale to check your weight.', exZh: '站到体重秤上看看你的体重。', note: '英式英语常用复数 scales。' },
  { id: 'locker', cat: 'gear', en: 'locker', us: '/ˈlɑːkər/', uk: '/ˈlɒkə(r)/', zh: '储物柜', ex: 'Keep your clothes in the locker.', exZh: '把你的衣服放在储物柜里。' },
  { id: 'mirror', cat: 'gear', en: 'mirror', us: '/ˈmɪrər/', uk: '/ˈmɪrə(r)/', zh: '镜子', ex: 'Check your form in the mirror.', exZh: '对着镜子检查你的动作。', note: 'form 在健身里指“动作姿势”。' },
  { id: 'floor', cat: 'gear', en: 'floor', us: '/flɔːr/', uk: '/flɔː(r)/', zh: '地板', ex: 'Do not drop the weights on the floor.', exZh: '不要把重物摔在地板上。' },
  { id: 'wall', cat: 'gear', en: 'wall', us: '/wɔːl/', uk: '/wɔːl/', zh: '墙', ex: 'Stand with your back against the wall.', exZh: '背靠墙站好。' },

  // ================================================================== home
  // ---- bedroom
  { id: 'bed', cat: 'bedroom', en: 'bed', us: '/bed/', uk: '/bed/', zh: '床', ex: 'I go to bed at ten.', exZh: '我十点上床睡觉。' },
  { id: 'pillow', cat: 'bedroom', en: 'pillow', us: '/ˈpɪloʊ/', uk: '/ˈpɪləʊ/', zh: '枕头', ex: 'This pillow is very soft.', exZh: '这个枕头很软。' },
  { id: 'blanket', cat: 'bedroom', en: 'blanket', us: '/ˈblæŋkɪt/', uk: '/ˈblæŋkɪt/', zh: '毯子；被子', ex: 'The blanket keeps me warm.', exZh: '毯子让我很暖和。' },
  { id: 'teddyBear', cat: 'bedroom', en: 'teddy bear', us: '/ˈtedi ber/', uk: '/ˈtedi beə(r)/', zh: '泰迪熊；玩具熊', ex: 'She sleeps with her teddy bear.', exZh: '她抱着泰迪熊睡觉。' },
  { id: 'nightstand', cat: 'bedroom', en: 'nightstand', us: '/ˈnaɪtstænd/', uk: '/ˈnaɪtstænd/', zh: '床头柜', ex: 'My phone is on the nightstand.', exZh: '我的手机在床头柜上。', note: '英式英语叫 bedside table。' },
  { id: 'lamp', cat: 'bedroom', en: 'lamp', us: '/læmp/', uk: '/læmp/', zh: '台灯', ex: 'Turn off the lamp, please.', exZh: '请把台灯关掉。' },
  { id: 'alarmClock', cat: 'bedroom', en: 'alarm clock', us: '/əˈlɑːrm klɑːk/', uk: '/əˈlɑːm klɒk/', zh: '闹钟', ex: 'The alarm clock rings at seven.', exZh: '闹钟七点响。' },
  { id: 'wardrobe', cat: 'bedroom', en: 'wardrobe', us: '/ˈwɔːrdroʊb/', uk: '/ˈwɔːdrəʊb/', zh: '衣柜', ex: 'My clothes are in the wardrobe.', exZh: '我的衣服在衣柜里。', note: '美式英语里嵌在墙里的衣柜叫 closet /ˈklɑːzɪt/。' },
  { id: 'dresser', cat: 'bedroom', en: 'dresser', us: '/ˈdresər/', uk: '/ˈdresə(r)/', zh: '抽屉柜；梳妆台', ex: 'Put your socks in the dresser.', exZh: '把你的袜子放进抽屉柜里。', note: '英式英语叫 chest of drawers。' },
  { id: 'desk', cat: 'bedroom', en: 'desk', us: '/desk/', uk: '/desk/', zh: '书桌', ex: 'I do my homework at the desk.', exZh: '我在书桌前写作业。' },
  { id: 'chair', cat: 'bedroom', en: 'chair', us: '/tʃer/', uk: '/tʃeə(r)/', zh: '椅子', ex: 'Please sit on the chair.', exZh: '请坐在椅子上。' },
  { id: 'laptop', cat: 'bedroom', en: 'laptop', us: '/ˈlæptɑːp/', uk: '/ˈlæptɒp/', zh: '笔记本电脑', ex: 'He works on his laptop.', exZh: '他用笔记本电脑工作。' },
  { id: 'book', cat: 'bedroom', en: 'book', us: '/bʊk/', uk: '/bʊk/', zh: '书', ex: 'I read a book before bed.', exZh: '我睡前读一本书。' },
  { id: 'bookshelf', cat: 'bedroom', en: 'bookshelf', us: '/ˈbʊkʃelf/', uk: '/ˈbʊkʃelf/', zh: '书架', ex: 'The bookshelf is full of books.', exZh: '书架上摆满了书。', note: '复数是 bookshelves /ˈbʊkʃelvz/。' },
  { id: 'backpack', cat: 'bedroom', en: 'backpack', us: '/ˈbækpæk/', uk: '/ˈbækpæk/', zh: '书包；背包', ex: 'My books are in my backpack.', exZh: '我的书在书包里。', note: '英式英语也说 rucksack。' },
  { id: 'slippers', cat: 'bedroom', en: 'slippers', us: '/ˈslɪpərz/', uk: '/ˈslɪpəz/', zh: '拖鞋', ex: 'I wear slippers at home.', exZh: '我在家穿拖鞋。' },
  { id: 'laundryBasket', cat: 'bedroom', en: 'laundry basket', us: '/ˈlɔːndri bæskɪt/', uk: '/ˈlɔːndri bɑːskɪt/', zh: '脏衣篮', ex: 'Put your dirty clothes in the laundry basket.', exZh: '把你的脏衣服放进脏衣篮。' },
  { id: 'window', cat: 'bedroom', en: 'window', us: '/ˈwɪndoʊ/', uk: '/ˈwɪndəʊ/', zh: '窗户', ex: 'Open the window, please.', exZh: '请打开窗户。' },
  { id: 'curtain', cat: 'bedroom', en: 'curtain', us: '/ˈkɜːrtn/', uk: '/ˈkɜːtn/', zh: '窗帘', ex: 'Close the curtains at night.', exZh: '晚上把窗帘拉上。' },
  { id: 'carpet', cat: 'bedroom', en: 'carpet', us: '/ˈkɑːrpɪt/', uk: '/ˈkɑːpɪt/', zh: '地毯', ex: 'The carpet feels soft under my feet.', exZh: '地毯踩上去很软。', note: 'carpet 通常指铺满房间的大地毯，rug 是小块地毯。' },

  // ---- living room
  { id: 'sofa', cat: 'living', en: 'sofa', us: '/ˈsoʊfə/', uk: '/ˈsəʊfə/', zh: '沙发', ex: 'We sit on the sofa and watch TV.', exZh: '我们坐在沙发上看电视。', note: '美式口语里也常说 couch /kaʊtʃ/。' },
  { id: 'cushion', cat: 'living', en: 'cushion', us: '/ˈkʊʃn/', uk: '/ˈkʊʃn/', zh: '靠垫；抱枕', ex: 'There are two cushions on the sofa.', exZh: '沙发上有两个靠垫。' },
  { id: 'cat', cat: 'living', en: 'cat', us: '/kæt/', uk: '/kæt/', zh: '猫', ex: 'The cat is sleeping on the sofa.', exZh: '猫正在沙发上睡觉。' },
  { id: 'armchair', cat: 'living', en: 'armchair', us: '/ˈɑːrmtʃer/', uk: '/ˈɑːmtʃeə(r)/', zh: '扶手椅', ex: 'Grandpa reads in his armchair.', exZh: '爷爷坐在扶手椅上看书。' },
  { id: 'coffeeTable', cat: 'living', en: 'coffee table', us: '/ˈkɔːfi teɪbl/', uk: '/ˈkɒfi teɪbl/', zh: '茶几', ex: 'Put the cups on the coffee table.', exZh: '把杯子放在茶几上。' },
  { id: 'cup', cat: 'living', en: 'cup', us: '/kʌp/', uk: '/kʌp/', zh: '杯子', ex: 'Would you like a cup of tea?', exZh: '你想喝杯茶吗？' },
  { id: 'magazine', cat: 'living', en: 'magazine', us: '/ˈmæɡəziːn/', uk: '/ˌmæɡəˈziːn/', zh: '杂志', ex: 'She is reading a magazine.', exZh: '她正在看杂志。', note: '美音重音在第一个音节，英音在最后一个音节。' },
  { id: 'remoteControl', cat: 'living', en: 'remote control', us: '/rɪˌmoʊt kənˈtroʊl/', uk: '/rɪˌməʊt kənˈtrəʊl/', zh: '遥控器', ex: 'Where is the remote control?', exZh: '遥控器在哪里？', note: '口语里常简称 the remote。' },
  { id: 'rug', cat: 'living', en: 'rug', us: '/rʌɡ/', uk: '/rʌɡ/', zh: '小地毯', ex: 'The coffee table stands on a rug.', exZh: '茶几放在一块小地毯上。' },
  { id: 'television', cat: 'living', en: 'television', us: '/ˈtelɪvɪʒn/', uk: '/ˈtelɪvɪʒn/', zh: '电视', ex: 'Turn on the television, please.', exZh: '请打开电视。', note: '常简称 TV /ˌtiː ˈviː/。' },
  { id: 'tvStand', cat: 'living', en: 'TV stand', us: '/ˌtiː ˈviː stænd/', uk: '/ˌtiː ˈviː stænd/', zh: '电视柜', ex: 'The TV sits on the TV stand.', exZh: '电视放在电视柜上。' },
  { id: 'speaker', cat: 'living', en: 'speaker', us: '/ˈspiːkər/', uk: '/ˈspiːkə(r)/', zh: '音箱', ex: 'Music is coming from the speaker.', exZh: '音乐从音箱里传出来。' },
  { id: 'vase', cat: 'living', en: 'vase', us: '/veɪs/', uk: '/vɑːz/', zh: '花瓶', ex: 'There are flowers in the vase.', exZh: '花瓶里插着花。', note: '美音 /veɪs/ 和英音 /vɑːz/ 差别很大。' },
  { id: 'picture', cat: 'living', en: 'picture', us: '/ˈpɪktʃər/', uk: '/ˈpɪktʃə(r)/', zh: '画；照片', ex: 'There is a picture on the wall.', exZh: '墙上挂着一幅画。' },
  { id: 'clock', cat: 'living', en: 'clock', us: '/klɑːk/', uk: '/klɒk/', zh: '钟', ex: 'Look at the clock. What time is it?', exZh: '看看钟，现在几点了？' },
  { id: 'airConditioner', cat: 'living', en: 'air conditioner', us: '/ˈer kəndɪʃənər/', uk: '/ˈeə kəndɪʃənə(r)/', zh: '空调', ex: 'It is hot. Turn on the air conditioner.', exZh: '好热，把空调打开吧。', note: '口语里常简称 AC /ˌeɪ ˈsiː/。' },
  { id: 'door', cat: 'living', en: 'door', us: '/dɔːr/', uk: '/dɔː(r)/', zh: '门', ex: 'Please close the door.', exZh: '请关上门。' },
  { id: 'lightSwitch', cat: 'living', en: 'light switch', us: '/ˈlaɪt swɪtʃ/', uk: '/ˈlaɪt swɪtʃ/', zh: '电灯开关', ex: 'The light switch is next to the door.', exZh: '电灯开关在门旁边。' },
  { id: 'shoeRack', cat: 'living', en: 'shoe rack', us: '/ˈʃuː ræk/', uk: '/ˈʃuː ræk/', zh: '鞋架', ex: 'Put your shoes on the shoe rack.', exZh: '把你的鞋放在鞋架上。' },
  { id: 'fan', cat: 'living', en: 'fan', us: '/fæn/', uk: '/fæn/', zh: '风扇', ex: 'The fan keeps the room cool.', exZh: '风扇让房间保持凉爽。' },
  { id: 'floorLamp', cat: 'living', en: 'floor lamp', us: '/ˈflɔːr læmp/', uk: '/ˈflɔː læmp/', zh: '落地灯', ex: 'The floor lamp stands next to the armchair.', exZh: '落地灯立在扶手椅旁边。' },
  { id: 'plant', cat: 'living', en: 'plant', us: '/plænt/', uk: '/plɑːnt/', zh: '植物；盆栽', ex: 'I water the plant every week.', exZh: '我每周给这盆植物浇水。' },
  { id: 'guitar', cat: 'living', en: 'guitar', us: '/ɡɪˈtɑːr/', uk: '/ɡɪˈtɑː(r)/', zh: '吉他', ex: 'My brother plays the guitar.', exZh: '我哥哥会弹吉他。', note: '重音在第二个音节。演奏乐器要加 the：play the guitar。' },
  { id: 'fishTank', cat: 'living', en: 'fish tank', us: '/ˈfɪʃ tæŋk/', uk: '/ˈfɪʃ tæŋk/', zh: '鱼缸', ex: 'Three fish swim in the fish tank.', exZh: '三条鱼在鱼缸里游。', note: 'fish 的复数通常还是 fish。' },
  { id: 'vacuumCleaner', cat: 'living', en: 'vacuum cleaner', us: '/ˈvækjuːm kliːnər/', uk: '/ˈvækjuːm kliːnə(r)/', zh: '吸尘器', ex: 'I clean the carpet with the vacuum cleaner.', exZh: '我用吸尘器清理地毯。', note: '英式英语常说 hoover /ˈhuːvə(r)/。' },
  { id: 'trashCan', cat: 'living', en: 'trash can', us: '/ˈtræʃ kæn/', uk: '/ˈtræʃ kæn/', zh: '垃圾桶', ex: 'Throw the paper in the trash can.', exZh: '把纸扔进垃圾桶。', note: '英式英语叫 bin /bɪn/。' },

  // ================================================================== supermarket
  // ---- store
  { id: 'shelf', cat: 'store', en: 'shelf', us: '/ʃelf/', uk: '/ʃelf/', zh: '货架', ex: 'The bread is on the top shelf.', exZh: '面包在最上层的货架上。', note: '复数是 shelves /ʃelvz/。' },
  { id: 'shoppingCart', cat: 'store', en: 'shopping cart', us: '/ˈʃɑːpɪŋ kɑːrt/', uk: '/ˈʃɒpɪŋ kɑːt/', zh: '购物车', ex: 'She pushes a shopping cart.', exZh: '她推着一辆购物车。', note: '英式英语叫 trolley /ˈtrɒli/。' },
  { id: 'shoppingBasket', cat: 'store', en: 'shopping basket', us: '/ˈʃɑːpɪŋ bæskɪt/', uk: '/ˈʃɒpɪŋ bɑːskɪt/', zh: '购物篮', ex: 'I only need a shopping basket today.', exZh: '我今天只需要一个购物篮。' },
  { id: 'customer', cat: 'store', en: 'customer', us: '/ˈkʌstəmər/', uk: '/ˈkʌstəmə(r)/', zh: '顾客', ex: 'The customer is looking for milk.', exZh: '那位顾客正在找牛奶。' },
  { id: 'cashier', cat: 'store', en: 'cashier', us: '/kæˈʃɪr/', uk: '/kæˈʃɪə(r)/', zh: '收银员', ex: 'The cashier says, "Have a nice day!"', exZh: '收银员说：“祝你今天愉快！”', note: '重音在第二个音节。' },
  { id: 'checkout', cat: 'store', en: 'checkout', us: '/ˈtʃekaʊt/', uk: '/ˈtʃekaʊt/', zh: '收银台', ex: 'Please pay at the checkout.', exZh: '请到收银台付款。' },
  { id: 'cashRegister', cat: 'store', en: 'cash register', us: '/ˈkæʃ redʒɪstər/', uk: '/ˈkæʃ redʒɪstə(r)/', zh: '收银机', ex: 'The cashier opens the cash register.', exZh: '收银员打开了收银机。', note: '英式英语常说 till /tɪl/。' },
  { id: 'money', cat: 'store', en: 'money', us: '/ˈmʌni/', uk: '/ˈmʌni/', zh: '钱', ex: 'How much money do you have?', exZh: '你有多少钱？', note: 'money 不可数，不能说 a money 或 moneys。' },
  { id: 'receipt', cat: 'store', en: 'receipt', us: '/rɪˈsiːt/', uk: '/rɪˈsiːt/', zh: '小票；收据', ex: 'Here is your receipt.', exZh: '这是您的小票。', note: '字母 p 不发音。' },
  { id: 'shoppingBag', cat: 'store', en: 'shopping bag', us: '/ˈʃɑːpɪŋ bæɡ/', uk: '/ˈʃɒpɪŋ bæɡ/', zh: '购物袋', ex: 'Do you need a shopping bag?', exZh: '您需要购物袋吗？' },
  { id: 'priceTag', cat: 'store', en: 'price tag', us: '/ˈpraɪs tæɡ/', uk: '/ˈpraɪs tæɡ/', zh: '价签', ex: 'Look at the price tag. How much is it?', exZh: '看看价签，多少钱？' },
  { id: 'fridge', cat: 'store', en: 'fridge', us: '/frɪdʒ/', uk: '/frɪdʒ/', zh: '冷藏柜；冰箱', ex: 'The milk is in the fridge.', exZh: '牛奶在冷藏柜里。', note: 'fridge 是 refrigerator /rɪˈfrɪdʒəreɪtər/ 的口语说法。' },
  { id: 'freezer', cat: 'store', en: 'freezer', us: '/ˈfriːzər/', uk: '/ˈfriːzə(r)/', zh: '冷冻柜；冰柜', ex: 'The ice cream is in the freezer.', exZh: '冰淇淋在冷冻柜里。' },
  { id: 'sign', cat: 'store', en: 'sign', us: '/saɪn/', uk: '/saɪn/', zh: '招牌；指示牌', ex: 'The sign says "Open".', exZh: '牌子上写着“营业中”。', note: '字母 g 不发音。' },
  { id: 'entrance', cat: 'store', en: 'entrance', us: '/ˈentrəns/', uk: '/ˈentrəns/', zh: '入口', ex: 'Meet me at the entrance.', exZh: '在入口处等我。', note: '反义词是 exit /ˈeksɪt/（出口）。' },

  // ---- fruit
  { id: 'banana', cat: 'fruit', en: 'banana', us: '/bəˈnænə/', uk: '/bəˈnɑːnə/', zh: '香蕉', ex: 'Monkeys love bananas.', exZh: '猴子爱吃香蕉。' },
  { id: 'orange', cat: 'fruit', en: 'orange', us: '/ˈɔːrɪndʒ/', uk: '/ˈɒrɪndʒ/', zh: '橙子', ex: 'This orange is sweet and juicy.', exZh: '这个橙子又甜又多汁。', note: 'orange 也是颜色“橙色”。前面用 an：an orange。' },
  { id: 'grapes', cat: 'fruit', en: 'grapes', us: '/ɡreɪps/', uk: '/ɡreɪps/', zh: '葡萄', ex: 'I want a bunch of grapes.', exZh: '我想要一串葡萄。' },
  { id: 'strawberry', cat: 'fruit', en: 'strawberry', us: '/ˈstrɔːberi/', uk: '/ˈstrɔːbəri/', zh: '草莓', ex: 'Strawberry is my favorite fruit.', exZh: '草莓是我最喜欢的水果。', note: '复数是 strawberries。' },
  { id: 'pineapple', cat: 'fruit', en: 'pineapple', us: '/ˈpaɪnæpl/', uk: '/ˈpaɪnæpl/', zh: '菠萝', ex: 'The pineapple is sweet inside.', exZh: '菠萝里面很甜。' },
  { id: 'lemon', cat: 'fruit', en: 'lemon', us: '/ˈlemən/', uk: '/ˈlemən/', zh: '柠檬', ex: 'A lemon tastes sour.', exZh: '柠檬尝起来很酸。' },
  { id: 'pear', cat: 'fruit', en: 'pear', us: '/per/', uk: '/peə(r)/', zh: '梨', ex: 'Would you like a pear?', exZh: '你想吃个梨吗？' },
  { id: 'peach', cat: 'fruit', en: 'peach', us: '/piːtʃ/', uk: '/piːtʃ/', zh: '桃子', ex: 'This peach is soft and sweet.', exZh: '这个桃子又软又甜。' },
  { id: 'watermelon', cat: 'fruit', en: 'watermelon', us: '/ˈwɔːtərmelən/', uk: '/ˈwɔːtəmelən/', zh: '西瓜', ex: 'We eat watermelon in summer.', exZh: '我们夏天吃西瓜。' },

  // ---- vegetables
  { id: 'carrot', cat: 'veg', en: 'carrot', us: '/ˈkærət/', uk: '/ˈkærət/', zh: '胡萝卜', ex: 'Rabbits like carrots.', exZh: '兔子喜欢胡萝卜。' },
  { id: 'tomato', cat: 'veg', en: 'tomato', us: '/təˈmeɪtoʊ/', uk: '/təˈmɑːtəʊ/', zh: '西红柿；番茄', ex: 'I put a tomato in my salad.', exZh: '我在沙拉里放了一个西红柿。', note: '美音 /təˈmeɪtoʊ/ 和英音 /təˈmɑːtəʊ/ 不同。复数 tomatoes。' },
  { id: 'potato', cat: 'veg', en: 'potato', us: '/pəˈteɪtoʊ/', uk: '/pəˈteɪtəʊ/', zh: '土豆；马铃薯', ex: 'French fries are made from potatoes.', exZh: '薯条是用土豆做的。', note: '复数是 potatoes。' },
  { id: 'cabbage', cat: 'veg', en: 'cabbage', us: '/ˈkæbɪdʒ/', uk: '/ˈkæbɪdʒ/', zh: '卷心菜；白菜', ex: 'Mom is cooking cabbage soup.', exZh: '妈妈正在煮白菜汤。' },
  { id: 'corn', cat: 'veg', en: 'corn', us: '/kɔːrn/', uk: '/kɔːn/', zh: '玉米', ex: 'I like corn on the cob.', exZh: '我喜欢啃整根的玉米。', note: '英式英语常说 sweetcorn。' },
  { id: 'onion', cat: 'veg', en: 'onion', us: '/ˈʌnjən/', uk: '/ˈʌnjən/', zh: '洋葱', ex: 'Cutting an onion makes me cry.', exZh: '切洋葱会让我流眼泪。', note: '开头的 o 读 /ʌ/，不读 /ɒ/。' },
  { id: 'broccoli', cat: 'veg', en: 'broccoli', us: '/ˈbrɑːkəli/', uk: '/ˈbrɒkəli/', zh: '西兰花', ex: 'Broccoli is good for you.', exZh: '西兰花对身体有好处。' },
  { id: 'cucumber', cat: 'veg', en: 'cucumber', us: '/ˈkjuːkʌmbər/', uk: '/ˈkjuːkʌmbə(r)/', zh: '黄瓜', ex: 'Slice the cucumber for the salad.', exZh: '把黄瓜切片做沙拉。' },
  { id: 'eggplant', cat: 'veg', en: 'eggplant', us: '/ˈeɡplænt/', uk: '/ˈeɡplɑːnt/', zh: '茄子', ex: 'The eggplant is purple.', exZh: '茄子是紫色的。', note: '英式英语叫 aubergine /ˈəʊbəʒiːn/。' },
  { id: 'pumpkin', cat: 'veg', en: 'pumpkin', us: '/ˈpʌmpkɪn/', uk: '/ˈpʌmpkɪn/', zh: '南瓜', ex: 'We make pumpkin pie in the fall.', exZh: '我们秋天做南瓜派。' },

  // ---- food and drinks
  { id: 'bread', cat: 'food', en: 'bread', us: '/bred/', uk: '/bred/', zh: '面包', ex: 'I eat bread for breakfast.', exZh: '我早餐吃面包。', note: 'bread 不可数：a loaf of bread（一条面包）。' },
  { id: 'rice', cat: 'food', en: 'rice', us: '/raɪs/', uk: '/raɪs/', zh: '大米；米饭', ex: 'We need a bag of rice.', exZh: '我们需要一袋大米。' },
  { id: 'noodles', cat: 'food', en: 'noodles', us: '/ˈnuːdlz/', uk: '/ˈnuːdlz/', zh: '面条', ex: 'He eats noodles for lunch.', exZh: '他午饭吃面条。' },
  { id: 'cookies', cat: 'food', en: 'cookies', us: '/ˈkʊkiz/', uk: '/ˈkʊkiz/', zh: '饼干；曲奇', ex: 'These cookies are delicious.', exZh: '这些饼干真好吃。', note: '英式英语叫 biscuits /ˈbɪskɪts/。' },
  { id: 'chips', cat: 'food', en: 'chips', us: '/tʃɪps/', uk: '/tʃɪps/', zh: '薯片', ex: 'Can I have a bag of chips?', exZh: '我可以要一包薯片吗？', note: '在英国 chips 指“薯条”，薯片叫 crisps /krɪsps/。' },
  { id: 'candy', cat: 'food', en: 'candy', us: '/ˈkændi/', uk: '/ˈkændi/', zh: '糖果', ex: 'Too much candy is bad for your teeth.', exZh: '吃太多糖果对牙齿不好。', note: '英式英语叫 sweets /swiːts/。' },
  { id: 'chocolate', cat: 'food', en: 'chocolate', us: '/ˈtʃɔːklət/', uk: '/ˈtʃɒklət/', zh: '巧克力', ex: 'I love dark chocolate.', exZh: '我爱吃黑巧克力。', note: '中间的 o 不发音，只有两个音节。' },
  { id: 'cake', cat: 'food', en: 'cake', us: '/keɪk/', uk: '/keɪk/', zh: '蛋糕', ex: "Let's buy a cake for her birthday.", exZh: '我们给她买个生日蛋糕吧。' },
  { id: 'milk', cat: 'food', en: 'milk', us: '/mɪlk/', uk: '/mɪlk/', zh: '牛奶', ex: 'I drink a glass of milk every day.', exZh: '我每天喝一杯牛奶。' },
  { id: 'yogurt', cat: 'food', en: 'yogurt', us: '/ˈjoʊɡərt/', uk: '/ˈjɒɡət/', zh: '酸奶', ex: 'She eats yogurt with fruit.', exZh: '她吃酸奶配水果。', note: '英式拼写也写作 yoghurt。' },
  { id: 'cheese', cat: 'food', en: 'cheese', us: '/tʃiːz/', uk: '/tʃiːz/', zh: '奶酪', ex: 'Mice like cheese.', exZh: '老鼠喜欢奶酪。' },
  { id: 'eggs', cat: 'food', en: 'eggs', us: '/eɡz/', uk: '/eɡz/', zh: '鸡蛋', ex: 'We need a dozen eggs.', exZh: '我们需要一打鸡蛋。', note: 'a dozen 是“一打”，也就是十二个。' },
  { id: 'juice', cat: 'food', en: 'juice', us: '/dʒuːs/', uk: '/dʒuːs/', zh: '果汁', ex: 'I would like some orange juice.', exZh: '我想要一些橙汁。' },
  { id: 'water', cat: 'food', en: 'water', us: '/ˈwɔːtər/', uk: '/ˈwɔːtə(r)/', zh: '水', ex: 'Can I have a bottle of water?', exZh: '可以给我一瓶水吗？' },
  { id: 'soda', cat: 'food', en: 'soda', us: '/ˈsoʊdə/', uk: '/ˈsəʊdə/', zh: '汽水', ex: 'Soda has a lot of sugar.', exZh: '汽水里有很多糖。', note: '英式英语常说 fizzy drink。' },
  { id: 'iceCream', cat: 'food', en: 'ice cream', us: '/ˈaɪs kriːm/', uk: '/ˈaɪs kriːm/', zh: '冰淇淋', ex: 'Ice cream melts quickly in the sun.', exZh: '冰淇淋在太阳下化得很快。' },
  { id: 'fish', cat: 'food', en: 'fish', us: '/fɪʃ/', uk: '/fɪʃ/', zh: '鱼', ex: 'We have fish for dinner tonight.', exZh: '我们今晚晚饭吃鱼。' },
  { id: 'meat', cat: 'food', en: 'meat', us: '/miːt/', uk: '/miːt/', zh: '肉', ex: 'He does not eat meat.', exZh: '他不吃肉。', note: 'meat 和 meet（见面）发音完全一样。' },
];

Object.assign(CATS, PHONE_CATS);
WORDS.push(...PHONE_WORDS);

export const WORD_BY_ID = Object.fromEntries(WORDS.map((w) => [w.id, w]));
