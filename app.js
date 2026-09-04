const tripData = {
  title: "202610 釜山＋福岡 行程規劃",
  startDate: "2026-10-21",
  endDate: "2026-11-02",
  route: ["桃園", "釜山", "福岡", "桃園"],
  summaryCards: [
    {
      title: "Busan Base",
      body: "西面住 3 晚，梵魚寺、海東龍宮寺、海雲台、醫美與西面採買全都集中在前段。",
      tags: ["梵魚寺賞楓", "西面逛街", "炸雞與豬肉湯飯"]
    },
    {
      title: "Concert Hop",
      body: "10/25 直接衝北九州看 Vaundy，晚上留宿小倉，隔天一路玩回福岡。",
      tags: ["Kitakyushu Messe", "TangaTable", "門司港"]
    },
    {
      title: "Fukuoka Flow",
      body: "福岡後段安排阿蘇、太宰府、長崎、相島、角島與市區採買，節奏豐富但不擠爆。",
      tags: ["Klook 一日遊", "天神採買", "長崎車票"]
    }
  ],
  flights: [
    {
      date: "10/21（三）",
      number: "IT606",
      route: "桃園 TPE → 釜山金海 PUS",
      departure: "16:40",
      arrival: "19:55",
      airline: "台灣虎航",
      note: "抵達後直接往西面，晚上鎖定香蕉牛奶和炸雞。"
    },
    {
      date: "10/24（六）",
      number: "BX144",
      route: "釜山金海 PUS → 福岡 FUK",
      departure: "17:55",
      arrival: "18:50",
      airline: "釜山航空",
      note: "15:30 左右出發去機場，建議 16:00 前到。"
    },
    {
      date: "11/2（一）",
      number: "AK1511",
      route: "福岡 FUK → 桃園 TPE",
      departure: "17:00",
      arrival: "18:30",
      airline: "AirAsia（冬季班表）",
      note: "約 15:00 由博多搭計程車前往機場。"
    }
  ],
  stays: [
    {
      range: "10/21 - 10/23",
      name: "東橫INN 西面站",
      area: "釜山西面",
      note: "西面購物與交通都方便，適合前段集中跑點。"
    },
    {
      range: "10/24",
      name: "montan HAKATA",
      area: "福岡博多",
      note: "抵達福岡第一晚，作為日本段大本營。"
    },
    {
      range: "10/25",
      name: "Hostel & Dining TangaTable",
      area: "北九州小倉",
      note: "搭配演唱會與牛腸鍋宵夜。"
    },
    {
      range: "10/26 - 10/31",
      name: "montan HAKATA",
      area: "福岡博多",
      note: "阿蘇、太宰府、長崎、相島和市區採買都從這裡出發。"
    },
    {
      range: "11/1",
      name: "Hotel La Foresta",
      area: "福岡博多",
      note: "博多站步行 2 分，收尾日行李與機場動線更輕鬆。"
    }
  ],
  highlights: [
    {
      title: "10/23 醫美＋海雲台",
      body: "本思中心店做電波、音波、ONDA，下午一路接海東龍宮寺與海雲台晚餐。"
    },
    {
      title: "10/25 Vaundy 演唱會",
      body: "博多寄放行李後衝北九州，白天門司港，17:00 進場看演唱會。"
    },
    {
      title: "10/26 光之道挑戰日",
      body: "小倉早餐後騎車串神社，再趕宮地嶽神社整理券與日落時段。"
    },
    {
      title: "10/29 長崎一日遊",
      body: "原爆資料館、平和公園、眼鏡橋、出島與長崎蛋糕，一天濃縮歷史與散步感。"
    },
    {
      title: "10/30 相島貓島",
      body: "一早衝新宮漁港搭船看貓，下午再回福岡跑神社、藥院與天神購物線。"
    }
  ],
  reminders: [
    {
      id: "confirm-bonsi",
      title: "本思中心店預約時間確認",
      body: "電波（Thermage FLX）＋音波（Ulthera）＋ONDA，時間一確認就能把 10/23 下午動線鎖死。",
      dueIso: "2026-09-15T12:00:00+08:00",
      label: "優先度高"
    },
    {
      id: "confirm-miyajidake",
      title: "宮地嶽神社光之道 2026 年 10 月日期",
      body: "官方公布後再確認，避免 10/26 的整體節奏錯位。",
      dueIso: "2026-09-20T12:00:00+08:00",
      label: "景點視窗"
    },
    {
      id: "confirm-nagasaki-outbound",
      title: "9/29 10:00 開搶長崎去程指定席",
      body: "目標班次是リレーかもめ17号，這是整趟旅程最有明確時間壓力的一項。",
      dueIso: "2026-09-29T10:00:00+09:00",
      label: "時間點固定"
    },
    {
      id: "confirm-ferry",
      title: "相島渡船時刻再確認",
      body: "預計 09:20 去、10:50 回，出發前再核對一次最保險。",
      dueIso: "2026-10-20T12:00:00+08:00",
      label: "出發前一天"
    },
    {
      id: "confirm-klook-aso",
      title: "阿蘇 Klook 集合時間與費用",
      body: "10/27 當天動線很吃集合時間，先確認才好安排前晚與早餐節奏。",
      dueIso: "2026-10-10T12:00:00+08:00",
      label: "行程節點"
    },
    {
      id: "confirm-klook-tsunoshima",
      title: "角島 Klook 集合時間確認",
      body: "10/31 包車一日遊，集合點和回程時間會影響 10/30 晚上體力安排。",
      dueIso: "2026-10-10T18:00:00+08:00",
      label: "行程節點"
    },
    {
      id: "confirm-nagasaki-return",
      title: "長崎回程車票班次鎖定",
      body: "建議 19:22 或 20:20 那班，去程座位搶到後就順手把回程一起定下來。",
      dueIso: "2026-09-29T10:10:00+09:00",
      label: "成對處理"
    }
  ],
  notes: [
    {
      title: "醫美項目",
      items: ["電波 Thermage FLX", "音波 Ulthera", "ONDA", "視情況加保養項目"]
    },
    {
      title: "一日遊",
      items: ["10/27 阿蘇：上色見熊野座神社、草千里、阿蘇山、黑川溫泉", "10/31 角島：秋芳洞、元乃隅神社、角島大橋"]
    },
    {
      title: "演唱會與景點",
      items: ["10/25 Vaundy @ Kitakyushu Messe", "10/26 宮地嶽神社光之道", "10/30 相島貓島"]
    }
  ],
  transfers: [
    {
      title: "10/21 機場進城",
      body: "釜山金海機場到西面，地鐵約 30 分。"
    },
    {
      title: "10/24 跨國移動",
      body: "東橫 INN check-out 後保留半天行程，15:30 左右去釜山機場，傍晚飛福岡。"
    },
    {
      title: "10/25 博多 ↔ 小倉",
      body: "博多寄放行李，JR 約 1 小時到小倉，晚上直接住北九州。"
    },
    {
      title: "10/26 北九州 → 福岡",
      body: "早餐、神社、Outlet、光之道後，再回博多重新進入福岡基地。"
    },
    {
      title: "11/2 市區 → 機場",
      body: "約 15:00 從博多叫車去福岡機場，保留購物與退稅緩衝。"
    }
  ],
  days: [
    {
      shortDate: "10/21",
      fullDate: "10/21（三）",
      dateIso: "2026-10-21",
      location: "Busan",
      theme: "抵達釜山",
      anchor: "第一晚目標很簡單：順利入境、進西面、買香蕉牛奶、叫炸雞，讓身體直接切到旅行模式。",
      stay: "東橫INN 西面站",
      tags: ["Arrival", "西面", "炸雞"],
      events: [
        { time: "16:40", title: "IT606 桃園出發", note: "桃園 TPE → 釜山金海 PUS。" },
        { time: "19:55", title: "抵達釜山金海機場", note: "入境後準備進市區。" },
        { time: "21:00", title: "前往東橫INN 西面站", note: "地鐵約 30 分。" },
        { time: "21:30後", title: "便利商店買香蕉牛奶", note: "路過順手完成第一個旅行儀式。" },
        { time: "晚上", title: "叫炸雞外送", note: "先詢問飯店能否代收或外送。" }
      ]
    },
    {
      shortDate: "10/22",
      fullDate: "10/22（四）",
      dateIso: "2026-10-22",
      location: "Busan",
      theme: "梵魚寺＋西面逛街",
      anchor: "這天是釜山最完整的賞楓與購物日，行程核心是梵魚寺早去避人潮，下午把李在模和西面採買一口氣完成。",
      stay: "東橫INN 西面站",
      tags: ["Temple", "Shopping", "Pizza"],
      events: [
        { time: "07:30", title: "All Sunday Bagel 早餐", note: "西面站附近暖身。" },
        { time: "09:00", title: "出發梵魚寺", note: "地鐵約 1 小時，早去人少、賞楓更舒服。" },
        { time: "13:00", title: "回西面抽李在模號碼牌", note: "서면중앙점，西面站步行 3 分。" },
        { time: "13:15", title: "西面逛街（東）", note: "object、BUTTER、TWIN ETOILE 等邊等叫號。" },
        { time: "叫到號", title: "回附近吃李在模披薩", note: "把最想吃的先解鎖。" },
        { time: "吃完", title: "西面逛街（西）", note: "樂天百貨 Cueran、SPAO、Animate。" },
        { time: "18:00", title: "密陽豬肉湯飯＋血腸 晚餐", note: "補能量。" },
        { time: "21:00", title: "炸雞60G 宵夜", note: "一天的快樂收尾。" }
      ]
    },
    {
      shortDate: "10/23",
      fullDate: "10/23（五）",
      dateIso: "2026-10-23",
      location: "Busan",
      theme: "本思＋海東龍宮寺＋海雲台",
      anchor: "上午醫美是主軸，下午是海線模式，海東龍宮寺、海雲台市集與晚餐一路接完。",
      stay: "東橫INN 西面站",
      tags: ["醫美", "Haeundae", "Temple"],
      events: [
        { time: "09:00", title: "螞蟻家 西面2號店 早餐", note: "先吃飽再進長時段療程。" },
        { time: "10:00", title: "本思中心店", note: "電波＋音波＋ONDA＋視情況保養，約 4 到 5 小時。" },
        { time: "15:00", title: "海東龍宮寺", note: "地鐵＋公車約 1 小時，預留 1 小時停留。" },
        { time: "結束後", title: "海雲台市集逛逛", note: "看心情補買點心或伴手禮。" },
        { time: "晚餐", title: "미포집 해운대본점", note: "單點솥밥＋간장게장，注意 15:00 到 17:00 休息時間。" },
        { time: "吃完", title: "買炸雞帶走", note: "晚點回西面當宵夜。" },
        { time: "晚上", title: "搭計程車或地鐵回西面", note: "計程車約 20 到 25 分，地鐵約 40 分。" }
      ]
    },
    {
      shortDate: "10/24",
      fullDate: "10/24（六）",
      dateIso: "2026-10-24",
      location: "Transit",
      theme: "半天釜山 → 福岡",
      anchor: "這天的重點是留一點早午餐快樂，但不壓縮機場緩衝；晚上到博多只要輕鬆散步吃東西就好。",
      stay: "montan HAKATA",
      tags: ["Transit", "Airport", "Fukuoka"],
      events: [
        { time: "08:00", title: "Suyeong 豬肉湯飯 早餐", note: "24 小時，飯店步行約 12 分。" },
        { time: "09:30", title: "濟州家 釜山站", note: "海膽拌飯或鮑魚粥。" },
        { time: "11:00", title: "Check-out 東橫INN", note: "準備轉場。" },
        { time: "15:30", title: "前往釜山金海機場", note: "地鐵約 30 分，建議 16:00 前到。" },
        { time: "17:55", title: "BX144 釜山 → 福岡", note: "18:50 抵達福岡。" },
        { time: "19:30後", title: "博多市區隨意逛吃", note: "不排硬景點，讓身體適應日本段節奏。" }
      ]
    },
    {
      shortDate: "10/25",
      fullDate: "10/25（日）",
      dateIso: "2026-10-25",
      location: "Kitakyushu",
      theme: "北九州演唱會日",
      anchor: "白天門司港散步，下午直奔場館，晚上住小倉，這天是整趟行程最明確的單日主題。",
      stay: "Hostel & Dining TangaTable",
      tags: ["Concert", "Mojiko", "Kitakyushu"],
      events: [
        { time: "早上", title: "博多站買早餐 → 博多 → 小倉", note: "行李寄放博多站，JR 約 1 小時。" },
        { time: "午前", title: "門司港", note: "唐戶市場、日清講和紀念館、赤間神宮。" },
        { time: "午後", title: "燒咖哩午餐＋海響廣場", note: "保留港邊慢慢走的時間。" },
        { time: "15:00", title: "前往 Kitakyushu Messe 入場", note: "提早進場最安心。" },
        { time: "17:00", title: "Vaundy 演唱會", note: "整趟旅程的高光時刻之一。" },
        { time: "演唱會後", title: "Check-in TangaTable", note: "回住宿整頓一下。" },
        { time: "宵夜", title: "Tashu 牛腸鍋", note: "有一人份可點。" }
      ]
    },
    {
      shortDate: "10/26",
      fullDate: "10/26（一）",
      dateIso: "2026-10-26",
      location: "Kitakyushu → Fukuoka",
      theme: "神社串聯＋光之道",
      anchor: "這天很吃節奏感：早餐後騎腳踏車跑神社，中午 Outlet，下午卡整理券，傍晚賭光之道，晚上再回福岡。",
      stay: "montan HAKATA",
      tags: ["Shrines", "Outlet", "Sunset"],
      events: [
        { time: "早上", title: "GREEN GRASS 早餐", note: "Check-out 後步行前往。" },
        { time: "上午", title: "騎腳踏車串神社", note: "到津八幡神社、飛幡八幡宮、岡田宮、一宮神社。" },
        { time: "中午", title: "THE OUTLETS KITAKYUSHU 午餐", note: "うまや牛舌定食，順逛 Uniqlo、graniph、BEAMS、VANS、COACH、DIANA、mont-bell、扭蛋之森。" },
        { time: "13:30", title: "前往宮地嶽神社", note: "14:00 前領整理券，免費限 300 席。" },
        { time: "17:00前後", title: "宮地嶽神社光之道", note: "2026 年 10 月確切日期公布後再確認。" },
        { time: "晚上", title: "前往福岡 montan HAKATA", note: "回到日本段主基地。" },
        { time: "晚餐", title: "個室燒肉 にく田", note: "天神或赤坂，創業 37 年黑毛和牛。" }
      ]
    },
    {
      shortDate: "10/27",
      fullDate: "10/27（二）",
      dateIso: "2026-10-27",
      location: "Aso",
      theme: "阿蘇 Klook 一日遊",
      anchor: "這天是典型把體力交給包車的一天，行程重點在風景與溫泉，晚上回福岡吃奴奴雞。",
      stay: "montan HAKATA",
      tags: ["Klook", "Nature", "Onsen"],
      events: [
        { time: "全天", title: "Klook 包車一日遊", note: "上色見熊野座神社＋草千里＋阿蘇山＋黑川溫泉。" },
        { time: "早中餐", title: "途中隨意", note: "保留彈性。" },
        { time: "晚餐", title: "奴奴雞買回住宿吃", note: "回博多補個舒服的結尾。" },
        { time: "提醒", title: "阿蘇火口目前關閉", note: "以草千里瞭望台遠眺替代，以實際行程為準。" }
      ]
    },
    {
      shortDate: "10/28",
      fullDate: "10/28（三）",
      dateIso: "2026-10-28",
      location: "Dazaifu + Tenjin",
      theme: "太宰府＋天神",
      anchor: "這天把神社、美術館、米飛兔、Uniqlo 和蒸鰻魚飯串在一起，屬於很滿但很順的福岡日。",
      stay: "montan HAKATA",
      tags: ["Dazaifu", "Museum", "Tenjin"],
      events: [
        { time: "午前", title: "太宰府天滿宮", note: "梅枝餅、星巴克、米飛兔、Uniqlo 太宰府店、みっふぃーおやつ堂。" },
        { time: "午前", title: "竈門神社", note: "鬼滅聖地，秋天楓葉漂亮。" },
        { time: "午後", title: "九州國立博物館", note: "和太宰府動線接得很自然。" },
        { time: "午餐", title: "太宰府附近隨意", note: "看現場狀況決定。" },
        { time: "傍晚", title: "回博多，天神地下街逛街", note: "Uniqlo 天神店在ミーナ天神，九州最大。" },
        { time: "晚餐", title: "本吉屋 岩田屋店", note: "蒸鰻魚飯，18:30 前到更穩。" },
        { time: "宵夜", title: "Imaya Hamburger 六本松店", note: "六本松站步行 3 分，火曜定休。" }
      ]
    },
    {
      shortDate: "10/29",
      fullDate: "10/29（四）",
      dateIso: "2026-10-29",
      location: "Nagasaki",
      theme: "長崎一日遊",
      anchor: "長崎這天偏歷史與散步感，真正的關鍵在車票與節奏，不然整體會變得很趕。",
      stay: "montan HAKATA",
      tags: ["Nagasaki", "Train", "History"],
      events: [
        { time: "08:54", title: "博多站買早餐 → 搭リレーかもめ17号", note: "9/29 早上 10:00 開搶指定席。" },
        { time: "約10:20", title: "抵達長崎，換乘至浦上站", note: "購買路面電車一日券。" },
        { time: "上午", title: "原爆資料館", note: "建議停留 2 到 3 小時。" },
        { time: "上午", title: "平和公園＋原爆落下中心地", note: "步行可達。" },
        { time: "午餐", title: "新地中華街 強棒麵", note: "搭路面電車往南。" },
        { time: "下午", title: "眼鏡橋 → 出島 → 福砂屋", note: "一路散步補長崎蛋糕。" },
        { time: "晚餐", title: "レモンステーキ", note: "長崎站附近。" },
        { time: "晚上", title: "搭車回博多", note: "建議 19:22 或 20:20 那班。" }
      ]
    },
    {
      shortDate: "10/30",
      fullDate: "10/30（五）",
      dateIso: "2026-10-30",
      location: "Ainoshima + Fukuoka",
      theme: "相島貓島＋西側神社＋天神",
      anchor: "一早衝相島看貓，中午後回市區跑神社與採買，這天是超典型的旅行貪心日，但很可愛。",
      stay: "montan HAKATA",
      tags: ["Cat Island", "Shrines", "Shopping"],
      events: [
        { time: "07:20", title: "博多站買早餐 → 搭 JR", note: "先往福工大前站移動。" },
        { time: "07:45", title: "福工大前站換巴士", note: "搭 08:07 那班。" },
        { time: "08:36", title: "抵達新宮漁港", note: "等船。" },
        { time: "09:20", title: "搭船去相島", note: "目標是短時間高密度吸貓。" },
        { time: "09:37 - 10:50", title: "相島看貓咪", note: "拍照和散步都會很療癒。" },
        { time: "10:50", title: "搭船回新宮漁港", note: "別錯過回程。" },
        { time: "約12:00", title: "回到博多，午餐隨意", note: "補充體力。" },
        { time: "下午", title: "紅葉八幡宮 → 光雲神社 → 今宮熱狗", note: "一路往西側神社線走。" },
        { time: "傍晚", title: "藥院", note: "保留咖啡或雜貨店彈性。" },
        { time: "晚上", title: "天神地下街逛街", note: "Uniqlo 天神店、PARCO 8F 的 Snoopy 和 miffy 一起完成。" },
        { time: "晚餐", title: "博多天ぷらたかお 福岡パルコ店", note: "B1F，11:00 到 22:00。" }
      ]
    },
    {
      shortDate: "10/31",
      fullDate: "10/31（六）",
      dateIso: "2026-10-31",
      location: "Yamaguchi",
      theme: "角島大橋 Klook 一日遊",
      anchor: "把體力交給包車，讓這天成為純風景模式，餐食保持彈性反而更舒服。",
      stay: "montan HAKATA",
      tags: ["Klook", "Bridge", "Nature"],
      events: [
        { time: "全天", title: "Klook 包車一日遊", note: "秋芳洞＋元乃隅神社＋角島大橋。" },
        { time: "三餐", title: "隨遇而安", note: "當天視體力和景點節奏決定。" }
      ]
    },
    {
      shortDate: "11/1",
      fullDate: "11/1（日）",
      dateIso: "2026-11-01",
      location: "Fukuoka City",
      theme: "市區神社＋逛街收尾",
      anchor: "最後完整一天走市區神社線，帶一點小孩心情去麵包超人博物館，再把採買補齊。",
      stay: "Hotel La Foresta",
      tags: ["City Walk", "Shopping", "Shrines"],
      events: [
        { time: "早餐", title: "Onigiri 渡邊通", note: "飯糰先暖身。" },
        { time: "上午", title: "警固神社 → 東長寺 → 住吉神社 → 櫛田神社", note: "天神＋博多市區順著走。" },
        { time: "午餐", title: "106 サウスインディアン 天神店", note: "天神南站步行 5 分。" },
        { time: "下午", title: "福岡麵包超人兒童博物館", note: "中洲川端站直結，入場約 ¥2,000。" },
        { time: "下午", title: "市區逛街購物", note: "把還沒買到的補一補。" },
        { time: "晚餐", title: "隨意", note: "留給最後一天自由感。" }
      ]
    },
    {
      shortDate: "11/2",
      fullDate: "11/2（一）",
      dateIso: "2026-11-02",
      location: "Return",
      theme: "回台灣",
      anchor: "最後一天的關鍵是保留伴手禮與機場緩衝，心情上就是舒服收尾，不再塞景點。",
      stay: "回家",
      tags: ["Souvenir", "Airport", "Return"],
      events: [
        { time: "早上", title: "行李寄放博多站 → 早餐", note: "博多站附近隨意吃，順便逛 Uniqlo 與 GU。" },
        { time: "上午", title: "買明太子等伴手禮", note: "把最後清單補齊。" },
        { time: "約15:00", title: "搭計程車前往福岡機場", note: "留退稅與報到時間。" },
        { time: "17:00", title: "AK1511 福岡 → 桃園", note: "18:30 抵達。" }
      ]
    }
  ],
  checklists: [
    {
      id: "kr-food",
      label: "韓國吃吃",
      items: [
        { id: "kr-food-1", text: "All Sunday Bagel（早餐）" },
        { id: "kr-food-2", text: "李在模披薩 서면중앙점" },
        { id: "kr-food-3", text: "密陽豬肉湯飯＋血腸" },
        { id: "kr-food-4", text: "炸雞60G（宵夜）" },
        { id: "kr-food-5", text: "螞蟻家 西面2號店" },
        { id: "kr-food-6", text: "미포집 해운대본점（醬蟹單點）" },
        { id: "kr-food-7", text: "Suyeong 豬肉湯飯" },
        { id: "kr-food-8", text: "濟州家（海膽拌飯／鮑魚粥）" },
        { id: "kr-food-9", text: "便利商店香蕉牛奶" }
      ]
    },
    {
      id: "jp-food",
      label: "日本吃吃",
      items: [
        { id: "jp-food-1", text: "10/24 博多市區隨意逛吃" },
        { id: "jp-food-2", text: "10/25 門司港燒咖哩" },
        { id: "jp-food-3", text: "10/25 Tashu 牛腸鍋" },
        { id: "jp-food-4", text: "10/26 GREEN GRASS 早餐" },
        { id: "jp-food-5", text: "10/26 うまや 牛舌定食（Outlet）" },
        { id: "jp-food-6", text: "10/26 燒肉 にく田" },
        { id: "jp-food-7", text: "10/27 奴奴雞買回住宿吃" },
        { id: "jp-food-8", text: "10/28 本吉屋蒸鰻魚飯" },
        { id: "jp-food-9", text: "10/28 Imaya Hamburger 宵夜" },
        { id: "jp-food-10", text: "10/29 長崎強棒麵" },
        { id: "jp-food-11", text: "10/29 レモンステーキ" },
        { id: "jp-food-12", text: "10/30 博多天ぷらたかお 福岡パルコ店" },
        { id: "jp-food-13", text: "11/1 Onigiri 渡邊通" },
        { id: "jp-food-14", text: "11/1 106 サウスインディアン 天神店" }
      ]
    },
    {
      id: "kr-shop",
      label: "韓國購物",
      items: [
        { id: "kr-shop-1", text: "Cueran 真皮鞋（樂天百貨西面店）" },
        { id: "kr-shop-2", text: "Kaoko friend" },
        { id: "kr-shop-3", text: "Olive Young：PHYSIOGEL 潔美淨乳液" },
        { id: "kr-shop-4", text: "Youssoful 香水" },
        { id: "kr-shop-5", text: "Scentica 香水" },
        { id: "kr-shop-6", text: "Busan Sand 餅乾" },
        { id: "kr-shop-7", text: "Hotteok Dalgona 零食" },
        { id: "kr-shop-8", text: "Potato Cookie" },
        { id: "kr-shop-9", text: "seamenow.busan 衣服" },
        { id: "kr-shop-10", text: "釜山 Miffy" },
        { id: "kr-shop-11", text: "Lamsand Busan" },
        { id: "kr-shop-12", text: "冰箱貼" },
        { id: "kr-shop-13", text: "DINOTAENG 釜山店" },
        { id: "kr-shop-14", text: "Object 西面店 + Object Edit 田浦咖啡街" },
        { id: "kr-shop-15", text: "釜山車站 2F 官方合作／紀念品店" },
        { id: "kr-shop-16", text: "海雲台藍線公園合作櫃位" },
        { id: "kr-shop-17", text: "카메라여행 底片相機" },
        { id: "kr-shop-18", text: "린크 手工工房飾品" },
        { id: "kr-shop-19", text: "田浦咖啡街獨立設計師飾品小店" }
      ]
    },
    {
      id: "jp-shop",
      label: "日本購物",
      items: [
        { id: "jp-shop-1", text: "明太子" },
        { id: "jp-shop-2", text: "冰箱貼" },
        { id: "jp-shop-3", text: "砂糖樹" },
        { id: "jp-shop-4", text: "francfranc 香氛" },
        { id: "jp-shop-5", text: "米飛兔" },
        { id: "jp-shop-6", text: "Snoopy Town Shop（福岡PARCO 8F）" },
        { id: "jp-shop-7", text: "miffy style mimi（福岡PARCO 8F）" },
        { id: "jp-shop-8", text: "跑鞋：NB 2002R / ASICS GEL-KAYANO 32 / HOKA Clifton 或 Bondi" },
        { id: "jp-shop-9", text: "Puma 芭蕾鞋" },
        { id: "jp-shop-10", text: "藥妝：肌膚之鑰粉底＋蜜粉" },
        { id: "jp-shop-11", text: "超市：茅乃舍湯包、鹽昆布" },
        { id: "jp-shop-12", text: "mont-bell 輕量羽絨外套（送爸媽）" },
        { id: "jp-shop-13", text: "唐吉訶德：香水、瀏海燙" },
        { id: "jp-shop-14", text: "Jo Malone 護手霜" },
        { id: "jp-shop-15", text: "島本明太子醬（博多阪急 B1）" },
        { id: "jp-shop-16", text: "福太郎蝦餅" },
        { id: "jp-shop-17", text: "芋屋金次郎（天神地下街）" },
        { id: "jp-shop-18", text: "Leclerc 可麗露" },
        { id: "jp-shop-19", text: "博多風美庵明太子蝦餅" },
        { id: "jp-shop-20", text: "もち吉博多本店" },
        { id: "jp-shop-21", text: "Shinshin 拉麵盒裝" },
        { id: "jp-shop-22", text: "長崎蛋糕（福砂屋）" },
        { id: "jp-shop-23", text: "配眼鏡（考慮中）" },
        { id: "jp-shop-24", text: "一番賞" },
        { id: "jp-shop-25", text: "MOTHER HOUSE 包包" },
        { id: "jp-shop-26", text: "PORTER（KURA CHIKA by PORTER）" },
        { id: "jp-shop-27", text: "伊東屋（ONE FUKUOKA BLDG. 4F）" },
        { id: "jp-shop-28", text: "復古堂 新天町本店" },
        { id: "jp-shop-29", text: "Shirokuma 手工工房飾品" },
        { id: "jp-shop-30", text: "RIN.accessory 天神店" }
      ]
    },
    {
      id: "confirm",
      label: "待確認",
      items: [
        { id: "confirm-1", text: "本思中心店預約時間確認" },
        { id: "confirm-2", text: "宮地嶽神社光之道 2026 年 10 月確切日期" },
        { id: "confirm-3", text: "相島渡船時刻確認（09:20 去 / 10:50 回）" },
        { id: "confirm-4", text: "阿蘇 Klook 集合時間與費用" },
        { id: "confirm-5", text: "角島 Klook 集合時間確認" },
        { id: "confirm-6", text: "長崎去程車票：リレーかもめ17号" },
        { id: "confirm-7", text: "長崎回程車票：19:22 或 20:20 那班" }
      ]
    }
  ]
};

const state = {
  activePanel: "dashboard",
  activeDayIndex: getInitialDayIndex(),
  activeChecklistId: getInitialChecklistId(),
  checked: loadCheckedState()
};

const heroStatsEl = document.getElementById("hero-stats");
const tripStatusEl = document.getElementById("trip-status");
const tripProgressLabelEl = document.getElementById("trip-progress-label");
const tripProgressFillEl = document.getElementById("trip-progress-fill");
const citySummaryEl = document.getElementById("city-summary");
const focusChipEl = document.getElementById("focus-chip");
const focusCardEl = document.getElementById("focus-card");
const reminderListEl = document.getElementById("reminder-list");
const highlightListEl = document.getElementById("highlight-list");
const dayPillsEl = document.getElementById("day-pills");
const dayDetailEl = document.getElementById("day-detail");
const checklistTabsEl = document.getElementById("checklist-tabs");
const checklistPanelEl = document.getElementById("checklist-panel");
const checklistChipEl = document.getElementById("checklist-chip");
const checklistProgressLabelEl = document.getElementById("checklist-progress-label");
const checklistProgressFillEl = document.getElementById("checklist-progress-fill");
const flightCardsEl = document.getElementById("flight-cards");
const stayCardsEl = document.getElementById("stay-cards");
const noteGridEl = document.getElementById("note-grid");
const transferListEl = document.getElementById("transfer-list");

init();

function init() {
  renderHero();
  renderSummaryCards();
  renderFocusCard();
  renderReminders();
  renderHighlights();
  renderDayPills();
  renderDayDetail();
  renderChecklistTabs();
  renderChecklist();
  renderFlights();
  renderStays();
  renderNotes();
  renderTransfers();
  bindPanelSwitching();
}

function renderHero() {
  const start = new Date(`${tripData.startDate}T00:00:00`);
  const end = new Date(`${tripData.endDate}T23:59:59`);
  const now = new Date();
  const totalDays = daysBetweenInclusive(start, end);
  const tripStatus = getTripStatus(now, start, end);

  tripStatusEl.textContent = tripStatus.message;
  tripProgressLabelEl.textContent = tripStatus.progressLabel;
  tripProgressFillEl.style.width = `${tripStatus.progressPercent}%`;

  const stats = [
    { value: `${totalDays} 天`, label: "旅行長度" },
    { value: `${tripData.flights.length} 段`, label: "飛行航段" },
    { value: `${tripData.stays.length} 次`, label: "住宿切換" },
    { value: "2 國", label: "韓國 + 日本" }
  ];

  heroStatsEl.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-card">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `
    )
    .join("");
}

function renderSummaryCards() {
  citySummaryEl.innerHTML = tripData.summaryCards
    .map(
      (card, index) => `
        <article class="city-card">
          <h3>${index + 1}. ${card.title}</h3>
          <p>${card.body}</p>
          <div class="city-tags">
            ${card.tags.map((tag, tagIndex) => `<span class="tag ${tagIndex === 0 ? "warm" : ""}">${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderFocusCard() {
  const focus = getFocusState();
  focusChipEl.textContent = focus.badge;
  focusCardEl.innerHTML = `
    <div class="focus-stack">
      <div>
        <h3 class="focus-title">${focus.title}</h3>
        <p class="focus-body">${focus.body}</p>
      </div>
      <p class="focus-meta">${focus.meta}</p>
    </div>
  `;
}

function renderReminders() {
  const items = [...tripData.reminders].sort((a, b) => new Date(a.dueIso) - new Date(b.dueIso));
  reminderListEl.innerHTML = items
    .map((item) => {
      const dueLabel = getDueLabel(item.dueIso);
      return `
        <article class="reminder-card">
          <div class="card-headline">
            <div>
              <h3>${item.title}</h3>
              <span>${item.label}</span>
            </div>
            <strong>${dueLabel}</strong>
          </div>
          <p>${item.body}</p>
        </article>
      `;
    })
    .join("");
}

function renderHighlights() {
  highlightListEl.innerHTML = tripData.highlights
    .map(
      (item) => `
        <article class="highlight-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderDayPills() {
  dayPillsEl.innerHTML = tripData.days
    .map(
      (day, index) => `
        <button
          type="button"
          class="day-pill ${index === state.activeDayIndex ? "active" : ""}"
          data-day-index="${index}"
        >
          <strong>${day.shortDate}</strong>
          <span>${day.theme}</span>
        </button>
      `
    )
    .join("");

  dayPillsEl.querySelectorAll("[data-day-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDayIndex = Number(button.dataset.dayIndex);
      renderDayPills();
      renderDayDetail();
    });
  });
}

function renderDayDetail() {
  const day = tripData.days[state.activeDayIndex];
  const isKoreaDay = day.location.includes("Busan");
  dayDetailEl.innerHTML = `
    <div class="detail-top">
      <section class="detail-hero">
        <span class="detail-date">${day.fullDate}</span>
        <h3>${day.theme}</h3>
        <p>${day.anchor}</p>
        <div class="detail-badges">
          <span class="tag warm">${day.location}</span>
          <span class="tag gold">住宿：${day.stay}</span>
        </div>
      </section>
      <aside class="detail-side">
        <h3>今日標籤</h3>
        <div class="tag-list">
          ${day.tags.map((tag, index) => `<span class="tag ${index === 0 ? "warm" : index === 1 ? "gold" : ""}">${tag}</span>`).join("")}
        </div>
      </aside>
    </div>
    <section class="timeline-list-card">
      <div class="timeline-list">
        ${day.events
          .map(
            (event) => `
              <div class="timeline-row">
                <div class="timeline-time">${event.time}</div>
                <div class="timeline-copy">
                  <details class="timeline-event">
                    <summary>
                      <strong>${event.title}</strong>
                      <span class="event-expand-label">查看備註與地圖</span>
                    </summary>
                    <div class="timeline-event-content">
                      <p>${event.note || "尚未補充備註"}</p>
                    <div class="map-actions">
                      <a
                        class="map-link"
                        href="${getGoogleMapsUrl(event.mapQuery || event.title)}"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Maps
                      </a>
                      ${
                        isKoreaDay
                          ? `
                            <a
                              class="map-link naver-link"
                              href="${getNaverMapUrl(event.mapQuery || event.title)}"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Naver Map
                            </a>
                          `
                          : ""
                      }
                    </div>
                    </div>
                  </details>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function getGoogleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function getNaverMapUrl(query) {
  return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
}

function renderChecklistTabs() {
  checklistTabsEl.innerHTML = tripData.checklists
    .map(
      (list) => `
        <button
          type="button"
          class="tab-btn ${list.id === state.activeChecklistId ? "active" : ""}"
          data-checklist-id="${list.id}"
        >
          ${list.label}
        </button>
      `
    )
    .join("");

  checklistTabsEl.querySelectorAll("[data-checklist-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeChecklistId = button.dataset.checklistId;
      renderChecklistTabs();
      renderChecklist();
    });
  });
}

function renderChecklist() {
  const list = tripData.checklists.find((item) => item.id === state.activeChecklistId);
  const checkedCount = list.items.filter((item) => state.checked[item.id]).length;
  const progressPercent = list.items.length ? (checkedCount / list.items.length) * 100 : 0;

  checklistChipEl.textContent = `${checkedCount}/${list.items.length}`;
  checklistProgressLabelEl.textContent = `${Math.round(progressPercent)}%`;
  checklistProgressFillEl.style.width = `${progressPercent}%`;

  checklistPanelEl.innerHTML = `
    <div class="checklist-list">
      ${list.items
        .map(
          (item) => `
            <label class="check-item ${state.checked[item.id] ? "done" : ""}">
              <input type="checkbox" data-item-id="${item.id}" ${state.checked[item.id] ? "checked" : ""}>
              <div>
                <strong>${item.text}</strong>
              </div>
            </label>
          `
        )
        .join("")}
    </div>
  `;

  checklistPanelEl.querySelectorAll("[data-item-id]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const itemId = checkbox.dataset.itemId;
      state.checked[itemId] = checkbox.checked;
      persistCheckedState();
      renderChecklist();
    });
  });
}

function renderFlights() {
  flightCardsEl.innerHTML = tripData.flights
    .map(
      (flight) => `
        <article class="flight-card">
          <div class="card-headline">
            <div>
              <h3>${flight.number}</h3>
              <span>${flight.date}</span>
            </div>
            <strong>${flight.airline}</strong>
          </div>
          <p>${flight.route}</p>
          <div class="flight-route">
            <span class="tiny-pill">出發 ${flight.departure}</span>
            <span class="tiny-pill">抵達 ${flight.arrival}</span>
          </div>
          <div class="tag-list">
            <span class="tag warm">${flight.note}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStays() {
  stayCardsEl.innerHTML = tripData.stays
    .map(
      (stay) => `
        <article class="stay-card">
          <div class="card-headline">
            <div>
              <h3>${stay.name}</h3>
              <span>${stay.area}</span>
            </div>
            <strong>${stay.range}</strong>
          </div>
          <p>${stay.note}</p>
        </article>
      `
    )
    .join("");
}

function renderNotes() {
  noteGridEl.innerHTML = tripData.notes
    .map(
      (note) => `
        <article class="note-card">
          <h3>${note.title}</h3>
          <ul>
            ${note.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderTransfers() {
  transferListEl.innerHTML = tripData.transfers
    .map(
      (item) => `
        <article class="transfer-card">
          <div class="card-headline">
            <strong>${item.title}</strong>
          </div>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function bindPanelSwitching() {
  const panelButtons = document.querySelectorAll("[data-target]");
  const navButtons = document.querySelectorAll("[data-nav]");

  const applyPanel = (panelId) => {
    state.activePanel = panelId;

    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === panelId);
    });

    panelButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.target === panelId);
    });

    navButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.nav === panelId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  panelButtons.forEach((button) => {
    button.addEventListener("click", () => applyPanel(button.dataset.target));
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => applyPanel(button.dataset.nav));
  });
}

function getTripStatus(now, start, end) {
  if (now < start) {
    const daysLeft = Math.ceil((start - now) / 86400000);
    return {
      message: `距離 2026 年 10 月 21 日出發還有 ${daysLeft} 天，現在最值得先處理的是預約、車票與集合時間確認。`,
      progressLabel: "準備中",
      progressPercent: 0
    };
  }

  if (now > end) {
    return {
      message: "旅程已完成，這頁現在更像是你的回憶儀表板和採買對帳板。",
      progressLabel: "已完成",
      progressPercent: 100
    };
  }

  const elapsed = Math.max(now - start, 0);
  const total = end - start;
  const progressPercent = Math.min(100, Math.max(0, (elapsed / total) * 100));
  const todayIndex = tripData.days.findIndex((day) => isSameDate(now, new Date(`${day.dateIso}T00:00:00`)));
  const todayLabel = todayIndex >= 0 ? tripData.days[todayIndex].theme : "旅途中";

  return {
    message: `你現在正在旅程中，今天的主題是「${todayLabel}」。保持輕裝、留好移動緩衝就會很順。`,
    progressLabel: "旅途中",
    progressPercent
  };
}

function getFocusState() {
  const start = new Date(`${tripData.startDate}T00:00:00`);
  const end = new Date(`${tripData.endDate}T23:59:59`);
  const now = new Date();

  if (now < start) {
    const nextReminder = [...tripData.reminders].sort((a, b) => new Date(a.dueIso) - new Date(b.dueIso))[0];
    return {
      badge: "出發前",
      title: nextReminder.title,
      body: nextReminder.body,
      meta: `最接近的硬時間點是 ${formatDueFull(nextReminder.dueIso)}。先把這個鎖定，後面整體旅程會輕鬆很多。`
    };
  }

  if (now > end) {
    return {
      badge: "回顧中",
      title: "這趟旅行已完整收尾",
      body: "你可以把這頁留作回顧版，把真正吃到、買到、沒買到的項目勾完，之後重排下一次日本或韓國行會很方便。",
      meta: "Checklist 進度會保存在瀏覽器本機，之後回來看也還在。"
    };
  }

  const todayIndex = tripData.days.findIndex((day) => isSameDate(now, new Date(`${day.dateIso}T00:00:00`)));
  const currentDay = todayIndex >= 0 ? tripData.days[todayIndex] : tripData.days[0];
  return {
    badge: "旅途中",
    title: currentDay.theme,
    body: currentDay.anchor,
    meta: `今天住宿：${currentDay.stay}。把最晚需要移動的時間點先守住，剩下就照心情玩。`
  };
}

function getDueLabel(isoString) {
  const due = new Date(isoString);
  const now = new Date();
  const diffDays = Math.ceil((due - now) / 86400000);

  if (diffDays < 0) {
    return "已過";
  }

  if (diffDays === 0) {
    return "今天";
  }

  return `${diffDays} 天後`;
}

function formatDueFull(isoString) {
  return new Intl.DateTimeFormat("zh-Hant-TW", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(isoString));
}

function daysBetweenInclusive(start, end) {
  const startCopy = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endCopy = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.round((endCopy - startCopy) / 86400000) + 1;
}

function isSameDate(left, right) {
  return (
    left.getFullYear() === right.getFullYear() &&
    left.getMonth() === right.getMonth() &&
    left.getDate() === right.getDate()
  );
}

function getInitialDayIndex() {
  const now = new Date();
  const start = new Date(`${tripData.startDate}T00:00:00`);
  const end = new Date(`${tripData.endDate}T23:59:59`);

  if (now > end) {
    return tripData.days.length - 1;
  }

  if (now < start) {
    return 0;
  }

  const todayIndex = tripData.days.findIndex((day) => isSameDate(now, new Date(`${day.dateIso}T00:00:00`)));
  return todayIndex >= 0 ? todayIndex : 0;
}

function getInitialChecklistId() {
  const start = new Date(`${tripData.startDate}T00:00:00`);
  return new Date() < start ? "confirm" : "kr-food";
}

function loadCheckedState() {
  try {
    const raw = window.localStorage.getItem("travel-companion-checks");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function persistCheckedState() {
  window.localStorage.setItem("travel-companion-checks", JSON.stringify(state.checked));
}
