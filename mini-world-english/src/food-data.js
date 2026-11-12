// Food vocabulary for the stand-alone Food scene.
// Row format: [id, cat, group, en, us IPA, uk IPA (null = same), zh, emoji, badge emoji, example, example zh, note?]
const ROWS = [
  // ---- meat
  ['fd_beef', 'fd_meat', 'meat', 'beef', '/biːf/', null, '牛肉', '🐄', '🥩', 'I would like the beef, please.', '我想要牛肉。', '动物是 cow（牛），肉叫 beef。'],
  ['fd_pork', 'fd_meat', 'meat', 'pork', '/pɔːrk/', '/pɔːk/', '猪肉', '🐖', '🥩', 'Pork is popular in China.', '猪肉在中国很常见。', '动物是 pig（猪），肉叫 pork。'],
  ['fd_chicken', 'fd_meat', 'meat', 'chicken', '/ˈtʃɪkɪn/', null, '鸡肉', '🐔', '🥩', 'We are having chicken for dinner.', '我们晚饭吃鸡肉。'],
  ['fd_lamb', 'fd_meat', 'meat', 'lamb', '/læm/', null, '羊肉', '🐑', '🥩', 'Lamb is delicious with cumin.', '羊肉配孜然很好吃。', '结尾的 b 不发音。'],
  ['fd_duck', 'fd_meat', 'meat', 'duck', '/dʌk/', null, '鸭肉', '🦆', '🥩', 'Roast duck is a famous dish.', '烤鸭是一道名菜。'],
  ['fd_turkey', 'fd_meat', 'meat', 'turkey', '/ˈtɜːrki/', '/ˈtɜːki/', '火鸡肉', '🦃', '🥩', 'Turkey is low in fat.', '火鸡肉脂肪含量低。'],
  ['fd_steak', 'fd_meat', 'meat', 'steak', '/steɪk/', null, '牛排', '🥩', '', 'How would you like your steak?', '您的牛排要几分熟？', 'ea 读 /eɪ/，和 break 一样。'],
  ['fd_bacon', 'fd_meat', 'meat', 'bacon', '/ˈbeɪkən/', null, '培根', '🥓', '', 'I like bacon and eggs for breakfast.', '我早餐喜欢吃培根配鸡蛋。'],
  ['fd_ham', 'fd_meat', 'meat', 'ham', '/hæm/', null, '火腿', '🍖', '🐖', 'A ham sandwich, please.', '请给我一个火腿三明治。'],
  ['fd_sausage', 'fd_meat', 'meat', 'sausage', '/ˈsɔːsɪdʒ/', '/ˈsɒsɪdʒ/', '香肠', '🌭', '', 'He is grilling sausages.', '他正在烤香肠。'],
  ['fd_ribs', 'fd_meat', 'meat', 'ribs', '/rɪbz/', null, '排骨', '🦴', '🥩', 'These pork ribs are so tender.', '这些猪排骨真嫩。'],
  ['fd_wings', 'fd_meat', 'meat', 'chicken wings', '/ˈtʃɪkɪn wɪŋz/', null, '鸡翅', '🍗', '', 'We ordered spicy chicken wings.', '我们点了辣鸡翅。'],
  ['fd_breast', 'fd_meat', 'meat', 'chicken breast', '/ˈtʃɪkɪn brest/', null, '鸡胸肉', '🐔', '💪', 'Chicken breast is high in protein.', '鸡胸肉蛋白质含量高。'],
  ['fd_groundBeef', 'fd_meat', 'meat', 'ground beef', '/ˌɡraʊnd ˈbiːf/', null, '牛肉末；绞牛肉', '🥩', '🔪', 'Buy some ground beef for the burgers.', '买点牛肉末做汉堡。', '英式英语叫 minced beef 或 mince。'],
  ['fd_meatball', 'fd_meat', 'meat', 'meatball', '/ˈmiːtbɔːl/', null, '肉丸', '🧆', '', 'I love spaghetti with meatballs.', '我爱吃肉丸意面。'],
  // ---- seafood
  ['fd_fish', 'fd_meat', 'seafood', 'fish', '/fɪʃ/', null, '鱼', '🐟', '', 'Fish is good for your brain.', '吃鱼对大脑有好处。'],
  ['fd_salmon', 'fd_meat', 'seafood', 'salmon', '/ˈsæmən/', null, '三文鱼', '🍣', '', 'Grilled salmon is my favorite.', '烤三文鱼是我的最爱。', '字母 l 不发音。'],
  ['fd_shrimp', 'fd_meat', 'seafood', 'shrimp', '/ʃrɪmp/', null, '虾', '🦐', '', 'Are you allergic to shrimp?', '你对虾过敏吗？', '英式英语常说 prawn /prɔːn/。'],
  ['fd_crab', 'fd_meat', 'seafood', 'crab', '/kræb/', null, '螃蟹', '🦀', '', 'We ate crab by the sea.', '我们在海边吃了螃蟹。'],
  ['fd_squid', 'fd_meat', 'seafood', 'squid', '/skwɪd/', null, '鱿鱼', '🦑', '', 'Fried squid is crispy.', '炸鱿鱼很脆。'],
  ['fd_lobster', 'fd_meat', 'seafood', 'lobster', '/ˈlɑːbstər/', '/ˈlɒbstə(r)/', '龙虾', '🦞', '', 'Lobster is expensive.', '龙虾很贵。'],

  // ---- vegetables
  ['fd_tomato', 'fd_veg', '', 'tomato', '/təˈmeɪtoʊ/', '/təˈmɑːtəʊ/', '西红柿；番茄', '🍅', '', 'Slice the tomato for the salad.', '把西红柿切片做沙拉。', '复数是 tomatoes。'],
  ['fd_potato', 'fd_veg', '', 'potato', '/pəˈteɪtoʊ/', '/pəˈteɪtəʊ/', '土豆；马铃薯', '🥔', '', 'I like mashed potatoes.', '我喜欢土豆泥。', '复数是 potatoes。'],
  ['fd_sweetPotato', 'fd_veg', '', 'sweet potato', '/ˈswiːt pəteɪtoʊ/', '/ˈswiːt pəteɪtəʊ/', '红薯', '🍠', '', 'A baked sweet potato is a healthy snack.', '烤红薯是健康的零食。'],
  ['fd_carrot', 'fd_veg', '', 'carrot', '/ˈkærət/', null, '胡萝卜', '🥕', '', 'Carrots are good for your eyes.', '胡萝卜对眼睛好。'],
  ['fd_cucumber', 'fd_veg', '', 'cucumber', '/ˈkjuːkʌmbər/', '/ˈkjuːkʌmbə(r)/', '黄瓜', '🥒', '', 'Cucumber is fresh and crunchy.', '黄瓜又新鲜又爽脆。'],
  ['fd_onion', 'fd_veg', '', 'onion', '/ˈʌnjən/', null, '洋葱', '🧅', '', 'Chop the onion into small pieces.', '把洋葱切成小块。'],
  ['fd_garlic', 'fd_veg', '', 'garlic', '/ˈɡɑːrlɪk/', '/ˈɡɑːlɪk/', '大蒜', '🧄', '', 'Add some garlic to the pan.', '往锅里加点大蒜。', 'garlic 不可数：a clove of garlic（一瓣蒜）。'],
  ['fd_cabbage', 'fd_veg', '', 'cabbage', '/ˈkæbɪdʒ/', null, '卷心菜；白菜', '🥬', '', 'She is making cabbage soup.', '她在做白菜汤。'],
  ['fd_lettuce', 'fd_veg', '', 'lettuce', '/ˈletɪs/', null, '生菜', '🥗', '', 'Put some lettuce in the sandwich.', '在三明治里放点生菜。', '结尾读 /ɪs/，不读 /uːs/。'],
  ['fd_spinach', 'fd_veg', '', 'spinach', '/ˈspɪnɪtʃ/', null, '菠菜', '🍃', '', 'Spinach is full of iron.', '菠菜富含铁。'],
  ['fd_celery', 'fd_veg', '', 'celery', '/ˈseləri/', null, '芹菜', '🌿', '', 'Celery is very low in calories.', '芹菜热量很低。'],
  ['fd_broccoli', 'fd_veg', '', 'broccoli', '/ˈbrɑːkəli/', '/ˈbrɒkəli/', '西兰花', '🥦', '', 'Eat your broccoli. It is good for you.', '把西兰花吃了，对你有好处。'],
  ['fd_cauliflower', 'fd_veg', '', 'cauliflower', '/ˈkɔːliflaʊər/', '/ˈkɒliflaʊə(r)/', '花菜；菜花', '🥦', '⚪', 'Cauliflower is white.', '花菜是白色的。'],
  ['fd_eggplant', 'fd_veg', '', 'eggplant', '/ˈeɡplænt/', '/ˈeɡplɑːnt/', '茄子', '🍆', '', 'I cooked eggplant with garlic.', '我用蒜炒了茄子。', '英式英语叫 aubergine /ˈəʊbəʒiːn/。'],
  ['fd_bellPepper', 'fd_veg', '', 'bell pepper', '/ˈbel pepər/', '/ˈbel pepə(r)/', '甜椒；灯笼椒', '🫑', '', 'Bell peppers are not spicy.', '甜椒不辣。'],
  ['fd_chili', 'fd_veg', '', 'chili pepper', '/ˈtʃɪli pepər/', '/ˈtʃɪli pepə(r)/', '辣椒', '🌶️', '', 'Careful! The chili pepper is very hot.', '小心！这个辣椒非常辣。', '形容“辣”可以说 hot 或 spicy。'],
  ['fd_mushroom', 'fd_veg', '', 'mushroom', '/ˈmʌʃruːm/', '/ˈmʌʃrʊm/', '蘑菇', '🍄', '', 'I would like mushroom soup.', '我想要蘑菇汤。'],
  ['fd_corn', 'fd_veg', '', 'corn', '/kɔːrn/', '/kɔːn/', '玉米', '🌽', '', 'Sweet corn is yellow.', '甜玉米是黄色的。'],
  ['fd_pumpkin', 'fd_veg', '', 'pumpkin', '/ˈpʌmpkɪn/', null, '南瓜', '🎃', '', 'Pumpkin soup is warm and sweet.', '南瓜汤又暖又甜。'],

  // ---- fruit
  ['fd_apple', 'fd_fruit', '', 'apple', '/ˈæpl/', null, '苹果', '🍎', '', 'An apple a day keeps the doctor away.', '一天一苹果，医生远离我。'],
  ['fd_banana', 'fd_fruit', '', 'banana', '/bəˈnænə/', '/bəˈnɑːnə/', '香蕉', '🍌', '', 'I eat a banana before the gym.', '我去健身房前吃一根香蕉。'],
  ['fd_orange', 'fd_fruit', '', 'orange', '/ˈɔːrɪndʒ/', '/ˈɒrɪndʒ/', '橙子', '🍊', '', 'Oranges are rich in vitamin C.', '橙子富含维生素 C。'],
  ['fd_grapes', 'fd_fruit', '', 'grapes', '/ɡreɪps/', null, '葡萄', '🍇', '', 'These grapes are very sweet.', '这些葡萄很甜。'],
  ['fd_strawberry', 'fd_fruit', '', 'strawberry', '/ˈstrɔːberi/', '/ˈstrɔːbəri/', '草莓', '🍓', '', 'I like strawberry ice cream.', '我喜欢草莓冰淇淋。'],
  ['fd_watermelon', 'fd_fruit', '', 'watermelon', '/ˈwɔːtərmelən/', '/ˈwɔːtəmelən/', '西瓜', '🍉', '', 'Watermelon is perfect for summer.', '西瓜最适合夏天吃。'],
  ['fd_pineapple', 'fd_fruit', '', 'pineapple', '/ˈpaɪnæpl/', null, '菠萝', '🍍', '', 'Do you like pineapple on pizza?', '你喜欢披萨上放菠萝吗？'],
  ['fd_mango', 'fd_fruit', '', 'mango', '/ˈmæŋɡoʊ/', '/ˈmæŋɡəʊ/', '芒果', '🥭', '', 'This mango is ripe and juicy.', '这个芒果熟透了，汁很多。'],
  ['fd_peach', 'fd_fruit', '', 'peach', '/piːtʃ/', null, '桃子', '🍑', '', 'The peach is soft and sweet.', '这个桃子又软又甜。'],
  ['fd_pear', 'fd_fruit', '', 'pear', '/per/', '/peə(r)/', '梨', '🍐', '', 'Would you like a pear?', '你想吃个梨吗？'],
  ['fd_lemon', 'fd_fruit', '', 'lemon', '/ˈlemən/', null, '柠檬', '🍋', '', 'Add a slice of lemon to the water.', '在水里加一片柠檬。'],
  ['fd_cherry', 'fd_fruit', '', 'cherry', '/ˈtʃeri/', null, '樱桃', '🍒', '', 'Cherries are small and red.', '樱桃又小又红。', '复数是 cherries。'],
  ['fd_kiwi', 'fd_fruit', '', 'kiwi', '/ˈkiːwiː/', null, '猕猴桃', '🥝', '', 'A kiwi is green inside.', '猕猴桃里面是绿色的。'],
  ['fd_blueberry', 'fd_fruit', '', 'blueberry', '/ˈbluːberi/', '/ˈbluːbəri/', '蓝莓', '🫐', '', 'I put blueberries in my yogurt.', '我在酸奶里放蓝莓。'],
  ['fd_coconut', 'fd_fruit', '', 'coconut', '/ˈkoʊkənʌt/', '/ˈkəʊkənʌt/', '椰子', '🥥', '', 'Coconut water is refreshing.', '椰子水很解渴。'],
  ['fd_melon', 'fd_fruit', '', 'melon', '/ˈmelən/', null, '甜瓜；哈密瓜', '🍈', '', 'The melon smells sweet.', '这个甜瓜闻起来很甜。'],
  ['fd_avocado', 'fd_fruit', '', 'avocado', '/ˌævəˈkɑːdoʊ/', '/ˌævəˈkɑːdəʊ/', '牛油果', '🥑', '', 'Avocado on toast is a popular breakfast.', '牛油果吐司是很流行的早餐。'],

  // ---- staples
  ['fd_rice', 'fd_staple', 'staple', 'rice', '/raɪs/', null, '米饭；大米', '🍚', '', 'I eat rice every day.', '我每天都吃米饭。', 'rice 不可数：a bowl of rice（一碗米饭）。'],
  ['fd_noodles', 'fd_staple', 'staple', 'noodles', '/ˈnuːdlz/', null, '面条', '🍜', '', 'A bowl of beef noodles, please.', '请来一碗牛肉面。'],
  ['fd_bread', 'fd_staple', 'staple', 'bread', '/bred/', null, '面包', '🍞', '', 'I had two slices of bread.', '我吃了两片面包。', 'bread 不可数：a slice of bread（一片面包）。'],
  ['fd_baguette', 'fd_staple', 'staple', 'baguette', '/bæˈɡet/', null, '法棍面包', '🥖', '', 'A fresh baguette is crispy outside.', '新鲜的法棍外皮很脆。'],
  ['fd_croissant', 'fd_staple', 'staple', 'croissant', '/krəˈsɑːnt/', '/ˈkrwɑːsɒ̃/', '牛角包', '🥐', '', 'I had a croissant and coffee.', '我吃了一个牛角包，喝了咖啡。', '来自法语，结尾的 t 通常不发音。'],
  ['fd_pasta', 'fd_staple', 'staple', 'pasta', '/ˈpɑːstə/', '/ˈpæstə/', '意大利面', '🍝', '', 'She cooked pasta with tomato sauce.', '她做了番茄酱意面。'],
  ['fd_dumplings', 'fd_staple', 'staple', 'dumplings', '/ˈdʌmplɪŋz/', null, '饺子', '🥟', '', 'We make dumplings at Chinese New Year.', '我们过年时包饺子。'],
  ['fd_porridge', 'fd_staple', 'staple', 'porridge', '/ˈpɔːrɪdʒ/', '/ˈpɒrɪdʒ/', '粥', '🥣', '🍚', 'I eat rice porridge when I am sick.', '我生病的时候喝米粥。', '中式的粥也常叫 congee /ˈkɑːndʒiː/。'],
  ['fd_oatmeal', 'fd_staple', 'staple', 'oatmeal', '/ˈoʊtmiːl/', '/ˈəʊtmiːl/', '燕麦粥', '🥣', '🌾', 'Oatmeal keeps you full all morning.', '燕麦粥能让你一上午都不饿。'],
  ['fd_pancakes', 'fd_staple', 'staple', 'pancakes', '/ˈpænkeɪks/', null, '松饼；煎饼', '🥞', '', 'Pancakes with honey are sweet.', '松饼配蜂蜜很甜。'],
  ['fd_sandwich', 'fd_staple', 'staple', 'sandwich', '/ˈsænwɪtʃ/', '/ˈsænwɪdʒ/', '三明治', '🥪', '', 'I made a sandwich for lunch.', '我做了个三明治当午饭。', '中间的 d 通常不发音。'],
  ['fd_hamburger', 'fd_staple', 'staple', 'hamburger', '/ˈhæmbɜːrɡər/', '/ˈhæmbɜːɡə(r)/', '汉堡', '🍔', '', 'He ordered a hamburger and a cola.', '他点了一个汉堡和一杯可乐。', '口语里常简称 burger。'],
  ['fd_pizza', 'fd_staple', 'staple', 'pizza', '/ˈpiːtsə/', null, '披萨', '🍕', '', "Let's share a pizza.", '我们一起分一个披萨吧。', 'zz 读 /ts/。'],
  ['fd_fries', 'fd_staple', 'staple', 'French fries', '/ˌfrentʃ ˈfraɪz/', null, '薯条', '🍟', '', 'French fries taste best when hot.', '薯条趁热最好吃。', '英式英语叫 chips。'],
  // ---- protein foods
  ['fd_egg', 'fd_staple', 'protein', 'egg', '/eɡ/', null, '鸡蛋', '🥚', '', 'I eat two boiled eggs after training.', '我训练后吃两个水煮蛋。'],
  ['fd_tofu', 'fd_staple', 'protein', 'tofu', '/ˈtoʊfuː/', '/ˈtəʊfuː/', '豆腐', '⬜', '', 'Tofu is made from soybeans.', '豆腐是用大豆做的。'],
  ['fd_milk', 'fd_staple', 'protein', 'milk', '/mɪlk/', null, '牛奶', '🥛', '', 'Milk makes your bones strong.', '牛奶让你的骨骼强壮。'],
  ['fd_yogurt', 'fd_staple', 'protein', 'yogurt', '/ˈjoʊɡərt/', '/ˈjɒɡət/', '酸奶', '🥛', '🥄', 'Greek yogurt has a lot of protein.', '希腊酸奶含有很多蛋白质。'],
  ['fd_cheese', 'fd_staple', 'protein', 'cheese', '/tʃiːz/', null, '奶酪', '🧀', '', 'Say cheese!', '说“茄子”！（拍照时）'],
  ['fd_butter', 'fd_staple', 'protein', 'butter', '/ˈbʌtər/', '/ˈbʌtə(r)/', '黄油', '🧈', '', 'Spread some butter on the bread.', '在面包上抹点黄油。'],
  ['fd_beans', 'fd_staple', 'protein', 'beans', '/biːnz/', null, '豆子', '🫘', '', 'Beans are a cheap source of protein.', '豆子是便宜的蛋白质来源。'],
  ['fd_peanuts', 'fd_staple', 'protein', 'peanuts', '/ˈpiːnʌts/', null, '花生', '🥜', '', 'Some people are allergic to peanuts.', '有些人对花生过敏。'],
  ['fd_nuts', 'fd_staple', 'protein', 'nuts', '/nʌts/', null, '坚果', '🌰', '', 'A handful of nuts is a healthy snack.', '一把坚果是健康的零食。'],
  ['fd_soyMilk', 'fd_staple', 'protein', 'soy milk', '/ˈsɔɪ mɪlk/', null, '豆浆', '🧃', '🫘', 'I drink soy milk in the morning.', '我早上喝豆浆。', '英式英语叫 soya milk。'],
  ['fd_proteinShake', 'fd_staple', 'protein', 'protein shake', '/ˈproʊtiːn ʃeɪk/', '/ˈprəʊtiːn ʃeɪk/', '蛋白奶昔', '🥤', '💪', 'He drinks a protein shake after the gym.', '他健身后喝一杯蛋白奶昔。'],
];

export const FOOD_CATS = {
  fd_meat: { scene: 'food', zh: '肉类', en: 'Meat & Seafood', color: '#c9413f', icon: '🥩' },
  fd_veg: { scene: 'food', zh: '蔬菜类', en: 'Vegetables', color: '#3f9b57', icon: '🥦' },
  fd_fruit: { scene: 'food', zh: '水果类', en: 'Fruit', color: '#e5762b', icon: '🍎' },
  fd_staple: { scene: 'food', zh: '主食与蛋白质', en: 'Staples & Protein', color: '#b7862a', icon: '🍚' },
};

export const FOOD_GROUPS = {
  meat: { zh: '肉类', en: 'Meat' },
  seafood: { zh: '海鲜', en: 'Seafood' },
  staple: { zh: '主食', en: 'Staples' },
  protein: { zh: '蛋白质食品', en: 'Protein Foods' },
};

export const FOOD_WORDS = ROWS.map(([id, cat, group, en, us, uk, zh, emoji, badge, ex, exZh, note]) => ({
  id, cat, group, en, us, uk: uk || us, zh, emoji, badge, ex, exZh, ...(note ? { note } : {}),
}));
