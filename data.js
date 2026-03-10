// 剧情数据 - 按视角分类（完整版，含江砚白视角全部29个节点）
const GAME_DATA = {
    // ==================== 程野视角（原有，保持不变） ====================
    chengye: {
        // 区域一：山脚阔叶林
        "chengye_area1_start": {
            id: "chengye_area1_start",
            name: "山脚阔叶林 · 初入",
            text: "你站在温带阔叶林边缘。阳光透过树叶洒下斑驳光影，小径蜿蜒向上，路边开着不知名的野花。\n\n但有些不对劲——几棵树歪斜着，像是被什么撞过；地上散落着不该出现的枯叶；远处的鸟鸣声忽远忽近，音调扭曲。\n\n这是江砚白精神图景的最外层，平时最温和的区域。现在正在崩塌的边缘。\n\n狼王在你脚边嗅了嗅地面，然后抬起头，朝某个方向低吼。",
            options: [
                { text: "走近歪斜的树查看", nextNode: "chengye_area1_point1" }
            ]
        },
        "chengye_area1_point1": {
            id: "chengye_area1_point1",
            name: "山脚阔叶林 · 歪斜的树",
            text: "你走近那几棵歪斜的树。树干上有抓痕——很深，像是某种野兽留下的。",
            options: [
                { 
                    text: "用指尖触碰抓痕", 
                    syncChange: 5,
                    fragment: "失控的痕迹",
                    nextNode: "chengye_area1_point1_after"
                },
                { 
                    text: "让狼王嗅闻抓痕", 
                    syncChange: 5,
                    nextNode: "chengye_area1_point1_after"
                },
                { 
                    text: "用精神力感知抓痕上的情绪残留", 
                    syncChange: 5,
                    cost: { type: "精神力", value: 5 },
                    hiddenPerception: "他独自扛过很多次",
                    nextNode: "chengye_area1_point1_after"
                }
            ]
        },
        "chengye_area1_point1_after": {
            id: "chengye_area1_point1_after",
            name: "山脚阔叶林 · 继续探索",
            text: "你收回手，心口发紧。\n\n那时候，你在哪？你为什么没在他身边？",
            options: [
                { text: "继续探索", nextNode: "chengye_area1_point2" }
            ]
        },
        "chengye_area1_point2": {
            id: "chengye_area1_point2",
            name: "山脚阔叶林 · 落叶的异常",
            text: "地上有一片落叶，颜色比周围的树叶深。你捡起来看——这不是阔叶林的叶子，是针叶林才有的松针。",
            options: [
                { 
                    text: "顺着松针散落的方向走", 
                    syncChange: 3,
                    exploreChange: 10,
                    hiddenPerception: "发现隐秘小径",
                    nextNode: "chengye_area1_point3"
                },
                { 
                    text: "让狼王闻松针", 
                    syncChange: 5,
                    hiddenPerception: "江砚白最近去过山顶",
                    nextNode: "chengye_area1_point3"
                },
                { 
                    text: "把松针收起来", 
                    syncChange: 3,
                    item: "来自山腰的松针",
                    nextNode: "chengye_area1_point3"
                }
            ]
        },
        "chengye_area1_point3": {
            id: "chengye_area1_point3",
            name: "山脚阔叶林 · 扭曲的鸟鸣",
            text: "你听见鸟鸣声忽远忽近，音调扭曲得像坏掉的录音带。",
            options: [
                { 
                    text: "启用超听觉，捕捉鸟鸣的真实来源", 
                    syncChange: 5,
                    cost: { type: "精神力", value: 10 },
                    hiddenPerception: "声音来自山腰东侧",
                    nextNode: "chengye_area1_point4"
                },
                { 
                    text: "尝试用精神力和这些声音建立联系", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 15 },
                    hiddenPerception: "他害怕失去",
                    nextNode: "chengye_area1_point4"
                },
                { 
                    text: "忽略声音，继续前进", 
                    syncChange: 0,
                    nextNode: "chengye_area1_point4"
                }
            ]
        },
        "chengye_area1_point4": {
            id: "chengye_area1_point4",
            name: "山脚阔叶林 · 小径分岔",
            text: "山路出现分岔。左边是缓坡，铺满落叶；右边是陡峭的石阶，看起来更难走。",
            options: [
                { 
                    text: "走缓坡", 
                    syncChange: 2,
                    exploreChange: 0,
                    nextNode: "chengye_area2_start"
                },
                { 
                    text: "走石阶", 
                    syncChange: 8,
                    cost: { type: "体力" },
                    hiddenPerception: "江砚白常走这条路",
                    nextNode: "chengye_area2_start"
                },
                { 
                    text: "停下来，先让狼王探路", 
                    syncChange: 5,
                    hiddenPerception: "石阶通往他所在的位置",
                    nextNode: "chengye_area2_start"
                }
            ]
        },

        // 区域二：山腰针叶林
        "chengye_area2_start": {
            id: "chengye_area2_start",
            name: "山腰针叶林 · 初入",
            text: "石阶尽头，雾气渐浓。\n\n你站在针叶林边缘。这里的树更高更密，阳光几乎透不下来。雾气在你周围流动，像有生命的东西。\n\n远处有悬崖，有深谷。你能听见山涧的水声，但看不见水在哪里。\n\n狼王变得警惕，耳朵竖起，喉咙里发出低沉的呜咽。\n\n这里对应江砚白处理过的那些复杂案件、接触过的黑暗人性。整个区域都在不稳定地颤动——有些地方的树木已经折断，悬崖边缘在崩塌。",
            options: [
                { text: "走进雾气深处", nextNode: "chengye_area2_point1" }
            ]
        },
        "chengye_area2_point1": {
            id: "chengye_area2_point1",
            name: "山腰针叶林 · 雾中的身影",
            text: "雾气深处，有一个模糊的人影。\n\n你走近几步——那个人影也在动，像是朝你走来。但等你再靠近，它又消失了。",
            options: [
                { 
                    text: "启用超听觉，捕捉雾中的声音", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 10 },
                    hiddenPerception: "他在说话，他让你别过去",
                    nextNode: "chengye_area2_point2"
                },
                { 
                    text: "让狼王追上去", 
                    syncChange: 10,
                    item: "染血的羽毛",
                    nextNode: "chengye_area2_point2"
                },
                { 
                    text: "用自己的精神力感知", 
                    syncChange: 8,
                    cost: { type: "精神力", value: 15 },
                    hiddenPerception: "他在期待你",
                    nextNode: "chengye_area2_point2"
                }
            ]
        },
        "chengye_area2_point2": {
            id: "chengye_area2_point2",
            name: "山腰针叶林 · 断裂的悬崖",
            text: "你走到一处悬崖边。边缘的岩石在崩落，一块接一块地坠入看不见的深谷。\n\n悬崖对面，隐约能看见另一片山林——那是通往山顶的路。\n\n但你过不去。中间的裂缝太宽了。",
            options: [
                { 
                    text: "试图跳过去", 
                    syncChange: -10,
                    nextNode: "chengye_area2_point2"
                },
                { 
                    text: "寻找其他路", 
                    syncChange: 3,
                    exploreChange: 5,
                    nextNode: "chengye_area2_point3"
                },
                { 
                    text: "让狼王试试看", 
                    syncChange: 5,
                    nextNode: "chengye_area2_point2_after"
                },
                { 
                    text: "用自己的精神力尝试修补裂缝", 
                    syncChange: 15,
                    cost: { type: "精神力", value: 20 },
                    hiddenPerception: "你稳定了这一小段悬崖",
                    nextNode: "chengye_area2_point3"
                }
            ]
        },
        "chengye_area2_point2_after": {
            id: "chengye_area2_point2_after",
            name: "山腰针叶林 · 狼王的鼓励",
            text: "它跳过去了！\n\n它稳稳落在对面，然后回头看你，低吼一声。\n\n像是在说：你可以的。\n\n你看着那道裂缝，深吸一口气。\n\n它跳过去了。你也应该能。",
            options: [
                { text: "继续前进", nextNode: "chengye_area2_point3" }
            ]
        },
        "chengye_area2_point3": {
            id: "chengye_area2_point3",
            name: "山腰针叶林 · 山涧的回声",
            text: "你循着水声找到一条山涧。水很清，但看不见底。水面上漂着几片奇怪的叶子——不是针叶林的叶子，是钢铁森林里才会有的、沾着城市灰尘的叶子。\n\n你蹲下来，伸手触碰水面。",
            options: [
                { 
                    text: "直接用手捧水", 
                    syncChange: 10,
                    hiddenPerception: "他的图景里，倒映着你的树",
                    nextNode: "chengye_area2_point4"
                },
                { 
                    text: "让狼王喝水", 
                    syncChange: 8,
                    nextNode: "chengye_area2_point4"
                },
                { 
                    text: "用精神力探入水中", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 15 },
                    hiddenPerception: "他想走进你的图景",
                    nextNode: "chengye_area2_point4"
                }
            ]
        },
        "chengye_area2_point4": {
            id: "chengye_area2_point4",
            name: "山腰针叶林 · 记忆碎片",
            text: "雾气忽然散开一角，露出一小片空地。\n\n空地上有一个透明的、漂浮的发光碎片。\n\n记忆碎片。\n\n你走过去，伸手触碰——\n\n画面闪现：\n\n审讯室。惨白的灯光。江砚白坐在桌子这一边，对面是一个罪犯。罪犯在笑，说着什么，那些话像刀子一样锋利。\n\n江砚白的表情平静。他的手放在桌上，一动不动。\n\n但你知道——你的感知告诉你——他的手在微微发抖。\n\n那是他第一次接触人性的极端黑暗。那个罪犯说的话，后来在他脑海里回响了很久很久。\n\n他用了很久才消化掉那段记忆。他一个人。\n\n碎片消散前，你感知到他的情绪：\n\n当时的恐惧。\n后来的释然。\n还有一个念头——\n\n“幸好程野不用经历这些。”\n\n你站在空地上，很久没动。",
            options: [
                { 
                    text: "记住这个念头", 
                    syncChange: 5,
                    fragment: "他在黑暗里想过你",
                    nextNode: "chengye_area2_point5"
                },
                { 
                    text: "对着消散的碎片说话：“但我愿意经历你的所有。”", 
                    syncChange: 10,
                    nextNode: "chengye_area2_point5"
                },
                { 
                    text: "让狼王记住这个地方", 
                    syncChange: 5,
                    nextNode: "chengye_area2_point5"
                }
            ]
        },
        "chengye_area2_point5": {
            id: "chengye_area2_point5",
            name: "山腰针叶林 · 信鸽的踪迹",
            text: "你在地上发现几片灰白色的羽毛，还有一小摊血迹。\n\n血迹。\n\n你的心猛地抽紧。",
            options: [
                { 
                    text: "启用超嗅觉，追踪血迹", 
                    syncChange: 8,
                    cost: { type: "精神力", value: 10 },
                    hiddenPerception: "发现隐蔽山洞",
                    nextNode: "chengye_hidden_cave"
                },
                { 
                    text: "让狼王带路", 
                    syncChange: 5,
                    nextNode: "chengye_hidden_cave"
                },
                { 
                    text: "捡起羽毛，轻声呼唤", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 5 },
                    nextNode: "chengye_hidden_cave"
                }
            ]
        },

        // 隐藏区域：山腰山洞
        "chengye_hidden_cave": {
            id: "chengye_hidden_cave",
            name: "隐藏区域 · 山腰山洞",
            text: "山洞不大，但很深。洞壁上有发光的苔藓，照亮了前路。\n\n你的脚步声在洞里回响，一下，一下。\n\n狼王走在你身边，安静得不像它。\n\n走到最深处——\n\n信鸽蜷缩在一块石头上，翅膀上有一道伤口，正在流血。它看见你，想飞起来，但动不了。\n\n旁边，江砚白靠坐在洞壁边，闭着眼，脸色苍白。\n\n他的精神体受伤了。他也受伤了。\n\n你的心狠狠揪了一下。",
            options: [
                { 
                    text: "先查看信鸽", 
                    syncChange: 15,
                    fragment: "信鸽治愈",
                    nextNode: "chengye_hidden_cave_dialogue"
                },
                { 
                    text: "先查看江砚白", 
                    syncChange: 15,
                    cost: { type: "精神力", value: 10 },
                    nextNode: "chengye_hidden_cave_dialogue"
                },
                { 
                    text: "同时触碰他们两个", 
                    syncChange: 20,
                    cost: { type: "精神力", value: 20 },
                    fragment: "双向治愈",
                    nextNode: "chengye_hidden_cave_dialogue"
                }
            ]
        },
        "chengye_hidden_cave_dialogue": {
            id: "chengye_hidden_cave_dialogue",
            name: "隐藏区域 · 山洞对话",
            text: "江砚白睁开眼，看着你。\n\n他的眼睛里有短暂的茫然，然后渐渐聚焦。\n\n“......程野。”\n\n“嗯。”\n\n“你怎么找到这里的？”",
            options: [
                { 
                    text: "“跟着血迹来的。”", 
                    syncChange: 5,
                    hiddenPerception: "你不想再看见他受伤",
                    nextNode: "chengye_hidden_cave_after"
                },
                { 
                    text: "“鸽子带我来的。”", 
                    syncChange: 8,
                    nextNode: "chengye_hidden_cave_after"
                },
                { 
                    text: "“我总能找到你。”", 
                    syncChange: 15,
                    nextNode: "chengye_hidden_cave_after"
                }
            ]
        },
        "chengye_hidden_cave_after": {
            id: "chengye_hidden_cave_after",
            name: "隐藏区域 · 山洞深处",
            text: "沉默片刻。\n\n江砚白：“这里......是我藏起来的地方。”\n\n“藏什么？”\n\n他没有回答。\n\n但你懂了。\n\n藏那些不想让人看见的脆弱，藏那些独自消化的黑暗，藏那些不能说出口的情绪。\n\n藏那些——他不想让你担心，所以从来不说的事。",
            options: [
                { 
                    text: "不再追问，只是扶他起来", 
                    syncChange: 10,
                    fragment: "沉默的陪伴",
                    nextNode: "chengye_hidden_cave_exit"
                },
                { 
                    text: "说：“以后可以不用藏。”", 
                    syncChange: 15,
                    nextNode: "chengye_hidden_cave_exit"
                },
                { 
                    text: "让狼王进来", 
                    syncChange: 10,
                    nextNode: "chengye_hidden_cave_exit"
                }
            ]
        },
        "chengye_hidden_cave_exit": {
            id: "chengye_hidden_cave_exit",
            name: "离开山洞",
            text: "你扶着他走出山洞。\n\n外面的雾气淡了一些。信鸽飞在前面，偶尔回头看看你们。\n\n狼王走在他另一边，时不时用头蹭蹭他的腿。\n\n你感觉到他的身体不再那么紧绷了。\n\n“......程野。”\n\n“嗯？”\n\n他顿了顿，然后说：“谢谢。”\n\n你转头看他。\n\n他没看你，看着前方的路。\n\n但你知道，他是认真的。\n\n你没说话，只是扶着他的手臂，又紧了一点。",
            options: [
                { text: "继续向山顶前进", nextNode: "chengye_area3_start" }
            ],
            fragment: "藏起来的地方",
            exploreChange: 15
        },

        // 区域三：山顶草甸
        "chengye_area3_start": {
            id: "chengye_area3_start",
            name: "山顶草甸 · 初入",
            text: "穿过山洞后方的隐秘小径，你终于抵达山顶。\n\n雾气散去，眼前豁然开朗——\n\n一片开阔的草甸，风吹过时草浪起伏。远处，是那片海。蔚蓝、辽阔、没有边际。海面上有光在跳动，像是阳光，但天空是灰白色的，这光是来自哪里？\n\n江砚白站在草甸边缘，背对着你，看着海。\n\n他的背影看起来很安静，但你知道——他的精神图景还没有完全稳定。草甸的某些地方，草在无故倒伏；远处海面上，偶尔有奇怪的波纹。",
            options: [
                { text: "走向他", nextNode: "chengye_area3_point1" }
            ]
        },
        "chengye_area3_point1": {
            id: "chengye_area3_point1",
            name: "山顶草甸 · 草甸上的痕迹",
            text: "你走近他，但没有立刻出声。\n\n草甸上有一条被人踩过的路，从你站的地方一直延伸到江砚白站的地方。那是他平时走的路。\n\n路的两旁，有些地方的草格外茂盛，有些地方的草稀疏。",
            options: [
                { 
                    text: "看茂盛的草", 
                    syncChange: 8,
                    hiddenPerception: "他在这里想过你",
                    nextNode: "chengye_area3_point2"
                },
                { 
                    text: "看稀疏的草", 
                    syncChange: 8,
                    hiddenPerception: "他在这里独自消化黑暗",
                    nextNode: "chengye_area3_point2"
                },
                { 
                    text: "让狼王沿着路走", 
                    syncChange: 5,
                    nextNode: "chengye_area3_point2"
                }
            ]
        },
        "chengye_area3_point2": {
            id: "chengye_area3_point2",
            name: "山顶草甸 · 海面上的倒影",
            text: "你走近江砚白，站在他身边，一起看着海。\n\n海面上，除了天空的倒影，还有别的——\n\n一座城市。钢铁森林。霓虹灯牌闪烁，高架桥交错。\n\n那是你的精神图景。",
            options: [
                { 
                    text: "指着海面：“那是......”", 
                    syncChange: 5,
                    hiddenPerception: "他一直能看见你",
                    nextNode: "chengye_area3_point3"
                },
                { 
                    text: "沉默地看着，心跳加快", 
                    syncChange: 10,
                    nextNode: "chengye_area3_point3"
                },
                { 
                    text: "问：“你什么时候开始能看见的？”", 
                    syncChange: 12,
                    hiddenPerception: "他从第一天就开始看着你",
                    nextNode: "chengye_area3_point3"
                }
            ]
        },
        "chengye_area3_point3": {
            id: "chengye_area3_point3",
            name: "山顶草甸 · 信鸽的归来",
            text: "信鸽从远处飞来，落在江砚白肩头。它的伤已经好了，羽毛也恢复了光泽。\n\n它歪着头看你，然后飞起来，落在你肩上。\n\n江砚白侧头看着这一幕。",
            options: [
                { 
                    text: "伸手摸了摸信鸽", 
                    syncChange: 8,
                    nextNode: "chengye_area3_point4"
                },
                { 
                    text: "说：“它好像喜欢我。”", 
                    syncChange: 12,
                    hiddenPerception: "他脱口而出的话",
                    nextNode: "chengye_area3_point4"
                },
                { 
                    text: "让狼王站起来", 
                    syncChange: 10,
                    hiddenPerception: "它们比你们自在",
                    nextNode: "chengye_area3_point4"
                }
            ]
        },
        "chengye_area3_point4": {
            id: "chengye_area3_point4",
            name: "山顶草甸 · 风的方向",
            text: "山顶的风一直吹着，从海面吹向陆地。\n\n但你忽然发现，有一瞬间，风向变了——从你身后吹向海面。\n\n那一缕风里，带着钢铁森林的气息：金属、混凝土、城市的烟火气。\n\n那是从你的精神图景吹来的风。",
            options: [
                { 
                    text: "闭上眼，感受这缕风", 
                    syncChange: 10,
                    hiddenPerception: "你们之间有看不见的通道",
                    nextNode: "chengye_area3_core"
                },
                { 
                    text: "问江砚白：“你也能感受到吗？”", 
                    syncChange: 12,
                    hiddenPerception: "他一直能感觉到你",
                    nextNode: "chengye_area3_core"
                },
                { 
                    text: "轻声说：“原来我们之间，一直有风。”", 
                    syncChange: 15,
                    hiddenPerception: "风知道",
                    nextNode: "chengye_area3_core"
                }
            ]
        },
        "chengye_area3_core": {
            id: "chengye_area3_core",
            name: "核心场景 · 山顶对话",
            text: "你们并肩站着，看了很久的海。\n\n最后，江砚白开口：\n\n“你是第二个来这里的人。”\n\n你侧头看他。\n\n他没看你，继续看着海：\n\n“第一个是我自己。”\n\n你的心跳漏了一拍。",
            options: [
                { 
                    text: "“我很荣幸。”", 
                    syncChange: 10,
                    nextNode: "chengye_area3_core_after"
                },
                { 
                    text: "沉默，等他说下去", 
                    syncChange: 15,
                    nextNode: "chengye_area3_core_after"
                },
                { 
                    text: "“那我能不能......经常来？”", 
                    syncChange: 20,
                    nextNode: "chengye_area3_core_after"
                }
            ]
        },
        "chengye_area3_core_after": {
            id: "chengye_area3_core_after",
            name: "核心场景 · 目光",
            text: "江砚白转过头来看你。\n\n那一瞬间，风停了。\n\n他的眼睛里有东西在动——那是你从未见过的东西，像海面下涌动的暗流。\n\n你的喉咙发紧。你想说点什么，却发现自己的嘴唇在微微发抖。\n\n然后他移开了视线。\n\n“该出去了。”他说，声音比平时低了一点，“外面还有人在等你。”",
            options: [
                { 
                    text: "“好。”", 
                    syncChange: 5,
                    nextNode: "chengye_area3_farewell"
                },
                { 
                    text: "站着没动，再看了他一眼", 
                    syncChange: 10,
                    nextNode: "chengye_area3_farewell"
                },
                { 
                    text: "说：“砚白哥。”", 
                    syncChange: 15,
                    nextNode: "chengye_area3_farewell"
                }
            ]
        },
        "chengye_area3_farewell": {
            id: "chengye_area3_farewell",
            name: "离开前的瞬间",
            text: "你转身，准备离开。\n\n走出两步——\n\n“阿野。”\n\n你的脚步猛地停住。\n\n那是他的声音，很轻，被风吹得有点散。\n\n你回过头。\n\n他还站在原地，背对着你，看着海。风吹起他的衣摆，信鸽落在他肩上。\n\n“下次想来看海，”他说，“不用等我被困。”\n\n你站在原地，心跳擂鼓。",
            options: [
                { 
                    text: "“好。”", 
                    syncChange: 10,
                    nextNode: "chengye_ending_trigger"
                },
                { 
                    text: "“我会来的。”", 
                    syncChange: 15,
                    nextNode: "chengye_ending_trigger"
                },
                { 
                    text: "走回去，站在他身边", 
                    syncChange: 20,
                    nextNode: "chengye_ending_trigger"
                }
            ]
        },
        "chengye_ending_trigger": {
            id: "chengye_ending_trigger",
            name: "离开",
            text: "你退出了精神图景。\n\n最后一刻，你看见——\n\n山顶上，他一个人站着。\n\n风吹了很久。\n\n然后他伸出手，摸了摸信鸽的羽毛。\n\n轻声说了什么。\n\n被风吹散了。\n\n但你猜到了。\n\n因为你的心跳，还在为他跳着。",
            options: [],
            isEnding: true
        }
    },

    // ==================== 江砚白视角（完整版） ====================
    jiangyanbai: {
        // ---------- 区域一：边缘地带·高架桥下 ----------
        "jiangyanbai_area1_start": {
            id: "jiangyanbai_area1_start",
            name: "边缘地带 · 高架桥下",
            text: "江砚白从意识深处浮起时，发现自己站在一座城市的边缘。\n\n不是普通的城市。这里的天永远不会亮——灰蒙蒙的穹顶下，高架桥交错纵横，玻璃幕墙的大厦林立，霓虹灯牌闪烁却寂静无声。远处有废弃的工业区，生锈的管道像巨兽的骨架。\n\n程野的精神图景。钢铁森林。\n\n江砚白从来没有从'外面'看过这里。\n\n他是程野的向导，每一次精神链接都是直接进入核心区域——巨树下。他见过那棵树的每一片叶子，感受过它根系的深度。但他从未见过这座城市的全貌。\n\n原来程野的图景这么大。原来他每天穿行的世界，是这样的。\n\n风从城市深处吹来，带着金属的味道和淡淡的烟火气。不是冷的风——程野的风里，有一种很轻的温暖，像深夜亮着灯的窗户。\n\n狼王从一条巷子里走出来。\n\n它看着他，没有像平时那样直接跑过来，而是慢慢走近，在他面前停下，然后低下头，蹭了蹭他的腿。\n\n江砚白蹲下来，伸手摸了摸它的头。\n\n“他在哪？”他轻声问。\n\n狼王朝城市深处看了一眼，然后转身，走了几步，回头看他——跟上来。",
            options: [
                { text: "探索高架桥下", nextNode: "jiangyanbai_area1_point1" }
            ]
        },
        "jiangyanbai_area1_point1": {
            id: "jiangyanbai_area1_point1",
            name: "桥墩上的爪痕",
            text: "你走近那些爪痕。很深，像是狼王在这里磨过爪子，一遍又一遍。",
            options: [
                { 
                    text: "伸手触碰爪痕", 
                    syncChange: 5,
                    hiddenPerception: "狼王一直在等你",
                    nextNode: "jiangyanbai_area1_point1_after"
                },
                { 
                    text: "问狼王：“你经常在这里等？”", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area1_point1_after"
                },
                { 
                    text: "用自己的精神力感知爪痕上的残留", 
                    syncChange: 8,
                    cost: { type: "精神力", value: 5 },
                    hiddenPerception: "你感知到了等待的漫长",
                    nextNode: "jiangyanbai_area1_point1_after"
                }
            ]
        },
        "jiangyanbai_area1_point1_after": {
            id: "jiangyanbai_area1_point1_after",
            name: "桥墩上的爪痕",
            text: "你收回手，心口有点软。\n\n狼王一直在等你。从程野成为你哨兵的第一天起，它就在这里等。",
            options: [
                { text: "继续探索", nextNode: "jiangyanbai_area1_point2" }
            ]
        },
        "jiangyanbai_area1_point2": {
            id: "jiangyanbai_area1_point2",
            name: "第一片落叶",
            text: "高架桥下的地面上，散落着一些东西——几片枯叶，一根羽毛，一小截被咬过的树枝。",
            options: [
                { 
                    text: "捡起羽毛", 
                    syncChange: 5,
                    item: "信鸽的羽毛（来自程野的收藏）",
                    nextNode: "jiangyanbai_area1_point3"
                },
                { 
                    text: "看那截树枝", 
                    syncChange: 5,
                    hiddenPerception: "程野的图景里有你的东西",
                    nextNode: "jiangyanbai_area1_point3"
                },
                { 
                    text: "让信鸽飞下来", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area1_point3"
                }
            ]
        },
        "jiangyanbai_area1_point3": {
            id: "jiangyanbai_area1_point3",
            name: "高架桥的方向",
            text: "高架桥有两个方向。一条通向更深的城市中心，那里灯火更密；一条通向废弃厂区，那里更暗、更静。\n\n狼王站在通向城市中心的方向，回头看你。\n\n信鸽却飞向了废弃厂区，在空中盘旋。",
            options: [
                { 
                    text: "跟着狼王走", 
                    syncChange: 3,
                    nextNode: "jiangyanbai_area2_start"
                },
                { 
                    text: "跟着信鸽走", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area2_start"
                },
                { 
                    text: "停下来感知程野的位置", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 10 },
                    hiddenPerception: "程野的精神力分裂了",
                    nextNode: "jiangyanbai_area1_point4"
                }
            ]
        },
        "jiangyanbai_area1_point4": {
            id: "jiangyanbai_area1_point4",
            name: "城市的风",
            text: "站在高架桥下，你感觉到风在变化。\n\n有时候，风从城市深处吹来，带着烟火气和温暖。\n\n有时候，风突然转向，从你身后吹来——那是从你精神图景吹来的风，带着海的味道和松木的清香。",
            options: [
                { 
                    text: "闭上眼感受风的来去", 
                    syncChange: 8,
                    hiddenPerception: "你们之间有风",
                    nextNode: "jiangyanbai_area1_point5"
                },
                { 
                    text: "问狼王：“你能感觉到我的风吗？”", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area1_point5"
                },
                { 
                    text: "轻声说：“原来他也能感觉到我。”", 
                    syncChange: 8,
                    hiddenPerception: "他也能感觉到你",
                    nextNode: "jiangyanbai_area1_point5"
                }
            ]
        },
        "jiangyanbai_area1_point5": {
            id: "jiangyanbai_area1_point5",
            name: "第一座大厦",
            text: "高架桥尽头，第一座玻璃幕墙大厦矗立在路口。\n\n你走近时，忽然发现——玻璃幕墙上映出的不是你的脸。\n\n是画面。",
            options: [
                { 
                    text: "看第一块幕墙", 
                    syncChange: 5,
                    hiddenPerception: "他看见你的温和",
                    nextNode: "jiangyanbai_area2_start"
                },
                { 
                    text: "看第二块幕墙", 
                    syncChange: 5,
                    hiddenPerception: "他也看见你的黑暗",
                    nextNode: "jiangyanbai_area2_start"
                },
                { 
                    text: "看第三块幕墙", 
                    syncChange: 10,
                    hiddenPerception: "他看见你最私密的地方",
                    nextNode: "jiangyanbai_area2_start"
                }
            ]
        },

        // ---------- 区域二：废弃厂区 ----------
        "jiangyanbai_area2_start": {
            id: "jiangyanbai_area2_start",
            name: "废弃厂区 · 初入",
            text: "穿过高架桥，你来到一片废弃的工业区。\n\n生锈的管道像巨蟒一样盘在地上，倒塌的厂房墙壁上爬满了藤蔓，但藤蔓是灰色的——这里没有生命应有的绿色。\n\n这里对应程野执行过的案件，那些无法磨灭的记忆。\n\n每一座废弃的厂房，都是一段他无法忘记的过去。\n\n狼王变得安静了，走在你身边，偶尔用头蹭蹭你的腿——像是在安慰你，也像是在提醒你：这里对他来说，不轻松。",
            options: [
                { text: "探索第一座厂房", nextNode: "jiangyanbai_area2_point1" }
            ]
        },
        "jiangyanbai_area2_point1": {
            id: "jiangyanbai_area2_point1",
            name: "第一座厂房",
            text: "你推开生锈的铁门，走进去。\n\n厂房里空荡荡的，只有一些废弃的机械。但墙上有东西——一幅幅画面，像投影一样在墙上播放。\n\n第一幅画面：\n\n程野第一次出任务。很年轻，眼神里还有警校生的青涩。他在追一个人，跑得很快。最后追上了，但那人回头时，手里有刀。程野躲开了，刀锋擦过他脸侧——没有伤到，只差一点。",
            options: [
                { 
                    text: "伸手触碰画面", 
                    syncChange: 8,
                    fragment: "第一次任务",
                    hiddenPerception: "他那时候就在想你",
                    nextNode: "jiangyanbai_area2_point2"
                },
                { 
                    text: "只是看着，不动", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area2_point2"
                },
                { 
                    text: "问狼王：“他当时回来怎么说的？”", 
                    syncChange: 5,
                    hiddenPerception: "他什么都没说",
                    nextNode: "jiangyanbai_area2_point2"
                }
            ]
        },
        "jiangyanbai_area2_point2": {
            id: "jiangyanbai_area2_point2",
            name: "第二座厂房",
            text: "第二座厂房更大，墙上也有画面。\n\n程野和几个队友一起追捕嫌犯。嫌犯跑进一栋楼，程野第一个冲进去。楼里很黑，他打开手电，一点一点搜索。忽然有人从暗处冲出来——程野反应很快，躲开了，但队友在后面。他一把推开队友，自己撞在墙上。\n\n画面里，他撞得很重，但站起来时只是揉了揉肩膀，继续追。",
            options: [
                { 
                    text: "感知他的情绪", 
                    syncChange: 5,
                    fragment: "推开队友",
                    hiddenPerception: "他总是在保护别人",
                    nextNode: "jiangyanbai_area2_point3"
                },
                { 
                    text: "注意到一个细节", 
                    syncChange: 8,
                    hiddenPerception: "他撞墙时在想你",
                    nextNode: "jiangyanbai_area2_point3"
                },
                { 
                    text: "问狼王：“他后来去医务室了吗？”", 
                    syncChange: 3,
                    nextNode: "jiangyanbai_area2_point3"
                }
            ]
        },
        "jiangyanbai_area2_point3": {
            id: "jiangyanbai_area2_point3",
            name: "管道迷宫",
            text: "厂区深处，是一片生锈的管道迷宫。管道纵横交错，有些地方很低，需要弯腰才能通过。\n\n狼王朝一个方向跑去，很快消失在管道间。\n\n你等了等，它没回来。",
            options: [
                { 
                    text: "跟着狼王的方向走", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_hidden_pipe"
                },
                { 
                    text: "释放信鸽探路", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_hidden_pipe"
                },
                { 
                    text: "用自己的精神力感知", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 10 },
                    nextNode: "jiangyanbai_hidden_pipe"
                }
            ]
        },
        "jiangyanbai_hidden_pipe": {
            id: "jiangyanbai_hidden_pipe",
            name: "隐藏区域 · 管道空间",
            text: "你走进那个小空间。\n\n狼王在这里。它卧在地上，头枕着前爪。\n\n旁边，有一小块空地，地上铺着一些干草和羽毛——是狼王给自己做的窝。\n\n但它很少睡在这里。因为这里，是程野每次任务后来'消化'情绪的地方。\n\n你感知到的疲惫和委屈，就是他从这里留下的。",
            options: [
                { 
                    text: "伸手触碰那些干草", 
                    syncChange: 10,
                    hiddenPerception: "他在这里消化不能说的事",
                    nextNode: "jiangyanbai_area2_point4"
                },
                { 
                    text: "捡起一根羽毛", 
                    syncChange: 10,
                    item: "隐藏的羽毛",
                    nextNode: "jiangyanbai_area2_point4"
                },
                { 
                    text: "只是看着，不说话", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area2_point4"
                }
            ]
        },
        "jiangyanbai_area2_point4": {
            id: "jiangyanbai_area2_point4",
            name: "生锈的楼梯",
            text: "厂区最深处，有一架生锈的楼梯，通向一个高处的平台。\n\n楼梯看起来很危险，有些踏板已经锈穿了。\n\n狼王在楼梯下停下来，抬头看着上面，然后回头看你——它想上去，但它在等你决定。",
            options: [
                { 
                    text: "试着走上去", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_hidden_platform"
                },
                { 
                    text: "让信鸽先飞上去看看", 
                    syncChange: 3,
                    nextNode: "jiangyanbai_hidden_platform"
                },
                { 
                    text: "用精神力感知上面", 
                    syncChange: 5,
                    cost: { type: "精神力", value: 5 },
                    nextNode: "jiangyanbai_hidden_platform"
                }
            ]
        },
        "jiangyanbai_hidden_platform": {
            id: "jiangyanbai_hidden_platform",
            name: "隐藏区域 · 平台上的收藏盒",
            text: "你爬上平台，走到铁箱子前。\n\n打开箱子——\n\n里面放着一些东西：\n\n· 几片灰白色的羽毛，是你的信鸽的\n· 一张便签，上面是你的笔迹，写着某次案件的分析\n· 一小截松枝，从你图景里飘来的\n· 一块石头，很普通，但上面刻着一个字：'白'",
            options: [
                { 
                    text: "拿起羽毛", 
                    syncChange: 10,
                    hiddenPerception: "他从第一天就在收集你的东西",
                    nextNode: "jiangyanbai_area2_point5"
                },
                { 
                    text: "看那张便签", 
                    syncChange: 10,
                    fragment: "那次案件",
                    nextNode: "jiangyanbai_area2_point5"
                },
                { 
                    text: "拿起那块石头", 
                    syncChange: 15,
                    hiddenPerception: "他一直想让你来",
                    nextNode: "jiangyanbai_area2_point5"
                }
            ]
        },
        "jiangyanbai_area2_point5": {
            id: "jiangyanbai_area2_point5",
            name: "第三座厂房",
            text: "第三座厂房最小，也最偏僻。\n\n门半开着。\n\n你推门进去——\n\n里面只有一个画面，在墙上静静地播放：\n\n程野受了伤，坐在医务室里。医生在给他包扎，他低着头，看不见表情。\n\n门开了。你走进来。\n\n画面里的程野抬起头，看见你的一瞬间，他的眼神变了——从忍着疼的倔强，变成了一种很轻的、几乎看不出来的放松。\n\n你走过去，在他身边坐下，什么都没说，只是陪着他。\n\n画面定格在这个瞬间。",
            options: [
                { 
                    text: "看着那个瞬间", 
                    syncChange: 10,
                    fragment: "你在的时候",
                    nextNode: "jiangyanbai_area3_start"
                },
                { 
                    text: "伸手触碰画面里的他", 
                    syncChange: 12,
                    hiddenPerception: "你来了，他就安心了",
                    nextNode: "jiangyanbai_area3_start"
                },
                { 
                    text: "只是站着，不说话", 
                    syncChange: 8,
                    nextNode: "jiangyanbai_area3_start"
                }
            ]
        },

        // ---------- 区域三：核心空地·巨树下 ----------
        "jiangyanbai_area3_start": {
            id: "jiangyanbai_area3_start",
            name: "核心空地 · 巨树下",
            text: "穿过废弃厂区，眼前豁然开朗。\n\n一片被钢铁森林包围的空地。四周是高楼大厦，但中间有一片开阔地，地上是柔软的草地——这是整座钢铁森林里，唯一有绿色的地方。\n\n中央，一棵巨树。\n\n树冠遮天蔽日，根系深深扎进混凝土之下。树干很粗，要几个人才能合抱。\n\n狼王走到树下，卧下。\n\n程野靠在树干上，闭着眼。\n\n他蜷缩着，像一个在等什么人的孩子。",
            options: [
                { text: "走近他", nextNode: "jiangyanbai_area3_point1" }
            ]
        },
        "jiangyanbai_area3_point1": {
            id: "jiangyanbai_area3_point1",
            name: "走近他",
            text: "你走过去，在他面前蹲下。\n\n他闭着眼，眉头轻轻皱着。呼吸很平稳，但嘴唇抿得很紧——即使在睡梦中，他也在忍着什么。\n\n你伸出手，想帮他梳理一下那些乱成一团的感知——\n\n指尖刚触到他额头的瞬间，他动了动。\n\n“砚白哥......”他轻声呢喃。\n\n你的手顿住了。\n\n他没醒，只是下意识地叫了你的名字。",
            options: [
                { 
                    text: "继续梳理", 
                    syncChange: 10,
                    cost: { type: "精神力", value: 5 },
                    nextNode: "jiangyanbai_area3_point2"
                },
                { 
                    text: "收回手，只是看着他", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area3_point2"
                },
                { 
                    text: "轻声回应：“我在。”", 
                    syncChange: 12,
                    nextNode: "jiangyanbai_area3_point2"
                }
            ]
        },
        "jiangyanbai_area3_point2": {
            id: "jiangyanbai_area3_point2",
            name: "树下的痕迹",
            text: "你环顾四周。巨树下有很多痕迹——狼王卧过的地方，磨过爪子的树根，还有......\n\n一些你不认识的东西。",
            options: [
                { 
                    text: "树根上的刻痕", 
                    syncChange: 10,
                    hiddenPerception: "他记住了每一个日子",
                    nextNode: "jiangyanbai_area3_point3"
                },
                { 
                    text: "树下的一小堆石头", 
                    syncChange: 10,
                    hiddenPerception: "他把你的名字刻在石头上",
                    nextNode: "jiangyanbai_area3_point3"
                },
                { 
                    text: "树洞里藏着的东西", 
                    syncChange: 0,
                    nextNode: "jiangyanbai_hidden_letters"
                }
            ]
        },
        "jiangyanbai_hidden_letters": {
            id: "jiangyanbai_hidden_letters",
            name: "隐藏区域 · 树洞里的信",
            text: "树干上有一个洞，不大，但足够伸手进去。\n\n你犹豫了一下，然后伸手。\n\n摸到一个小盒子。\n\n拿出来，打开——\n\n盒子里是信。\n\n很多封，叠得整整齐齐。\n\n最上面一封的日期是今天。\n\n你打开，上面只有一行字：\n\n“砚白哥今天没来。他是不是累了？”\n\n你的心口一紧。\n\n你翻看下一封：\n\n“砚白哥帮我梳理的时候，手很轻。他知不知道我喜欢他？”\n\n再下一封：\n\n“今天差点说漏嘴了。还好他转头了。”\n\n再下一封：\n\n“我想让他来看我的树。但不知道怎么开口。”\n\n一封一封，全是这样的句子。\n\n从来没寄出去的信。从来没说过的话。\n\n你一封一封看下去：\n\n第一年：“今天第一次见他。他穿灰色毛衣。我想记住他。”\n\n第二年：“他记得我的名字。他叫我程野。就两个字，我高兴了一整天。”\n\n第三年：“他成了哥哥的搭档。我能经常看见他了。我是不是应该满足了？但我还想更多。”\n\n第四年：“今天他问我，程野，你是不是累了？他看出来了。他看出来了！”\n\n第五年：“我成为他哨兵了。以后能天天见到他。我要控制住自己，不能让他发现。”\n\n第六年：“控制不住了。我好想告诉他。但不行。说了他会躲吗？他会不会觉得我烦？”\n\n第七年：“今天又写了一封。第一百三十七封了。一封都没寄出去。”\n\n第八年：“他在我精神图景里的时候，我的树会高兴。他走了，树就蔫几天。树都知道我喜欢他，就他不知道。”\n\n第九年：“今天差点说了。真的只差一点点。但他转头了。他是不是故意的？他是不是知道，所以假装没听见？”\n\n第十年：“砚白哥今天没来。他是不是累了？”\n\n信到这里结束。\n\n你捧着那些信，很久很久。\n\n十年。他写了十年。\n\n从第一次见到你那天开始，一直写到现在。",
            options: [
                { 
                    text: "放下信，看着他", 
                    syncChange: 30,
                    item: "程野的信",
                    nextNode: "jiangyanbai_area3_point3"
                }
            ]
        },
        "jiangyanbai_area3_point3": {
            id: "jiangyanbai_area3_point3",
            name: "狼王和信鸽",
            text: "狼王还卧在那里，看着你。\n\n信鸽从你肩头飞下来，落在狼王背上。\n\n两个精神体就这样待着，一个灰白色的狼，一只灰白色的鸽子。",
            options: [
                { 
                    text: "轻声说：“你们倒是比我们自在。”", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area3_point4"
                },
                { 
                    text: "走过去，在狼王身边坐下", 
                    syncChange: 8,
                    nextNode: "jiangyanbai_area3_point4"
                },
                { 
                    text: "什么都不说，只是看着", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area3_point4"
                }
            ]
        },
        "jiangyanbai_area3_point4": {
            id: "jiangyanbai_area3_point4",
            name: "树上的叶子",
            text: "巨树上，有些叶子的颜色不太一样。\n\n你仔细看——那些叶子，不是这棵树的叶子。是针叶，是松叶，是从你图景里飘来的叶子，落在了他的树上。\n\n它们被小心地夹在枝桠间，没有掉落。",
            options: [
                { 
                    text: "伸手触碰那些叶子", 
                    syncChange: 10,
                    hiddenPerception: "他留着你的一切",
                    nextNode: "jiangyanbai_area3_core"
                },
                { 
                    text: "问狼王：“他一直留着？”", 
                    syncChange: 8,
                    nextNode: "jiangyanbai_area3_core"
                },
                { 
                    text: "轻声说：“原来你收着。”", 
                    syncChange: 12,
                    hiddenPerception: "你们一样",
                    nextNode: "jiangyanbai_area3_core"
                }
            ]
        },
        "jiangyanbai_area3_core": {
            id: "jiangyanbai_area3_core",
            name: "核心场景 · 巨树下的对话",
            text: "你在他身边坐下来，背靠着树干。\n\n狼王卧在你另一边，信鸽在你肩上。\n\n风从城市深处吹来，带着烟火气。\n\n过了很久，他动了动。\n\n然后他睁开眼，看着你。\n\n他的眼睛里有短暂的茫然，然后渐渐聚焦。\n\n“......江砚白？”\n\n“嗯。”\n\n“你怎么进来的？”",
            options: [
                { 
                    text: "“你叫我进来的。”", 
                    syncChange: 10,
                    nextNode: "jiangyanbai_area3_core_branch1"
                },
                { 
                    text: "“我不进来，谁进来？”", 
                    syncChange: 12,
                    nextNode: "jiangyanbai_area3_core_branch2"
                },
                { 
                    text: "沉默片刻，然后说：“我担心你。”", 
                    syncChange: 15,
                    nextNode: "jiangyanbai_area3_core_branch3"
                }
            ]
        },
        "jiangyanbai_area3_core_branch1": {
            id: "jiangyanbai_area3_core_branch1",
            name: "核心对话 · 你叫我进来的",
            text: "他愣了一下。\n\n然后他想起——梦里喊过你的名字。很多次。\n\n他垂下眼，耳朵尖有点红。\n\n你没说话，只是看着他。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_continue" }
            ]
        },
        "jiangyanbai_area3_core_branch2": {
            id: "jiangyanbai_area3_core_branch2",
            name: "核心对话 · 我不进来谁进来",
            text: "他垂下眼，没说话。\n\n但你知道他在想什么——他在想“你怎么每次都来”。\n\n你每次都来。每次他需要的时候，你都在。\n\n你不知道怎么解释。你只是......会来。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_continue" }
            ]
        },
        "jiangyanbai_area3_core_branch3": {
            id: "jiangyanbai_area3_core_branch3",
            name: "核心对话 · 我担心你",
            text: "这是真话。\n\n你确实是担心他。\n\n从感知到他精神力分裂的那一刻起，你就一直担心。\n\n他看着你，眼睛里有东西在动。\n\n“......我知道。”他说。\n\n你知道他担心你吗？你知道每次你出事，他都在担心吗？\n\n他不知道怎么问。你也不知道怎么答。\n\n但你们都知道对方在担心。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_continue" }
            ]
        },
        "jiangyanbai_area3_core_continue": {
            id: "jiangyanbai_area3_core_continue",
            name: "核心对话 · 那些信",
            text: "他坐起来，靠在你旁边，没说话。\n\n你们就这样坐着。\n\n过了很久，他开口：\n\n“你看到那些信了吗？”",
            options: [
                { 
                    text: "“看到了。”", 
                    syncChange: 8,
                    nextNode: "jiangyanbai_area3_core_after1"
                },
                { 
                    text: "沉默，然后点头", 
                    syncChange: 12,
                    nextNode: "jiangyanbai_area3_core_after2"
                },
                { 
                    text: "反问：“你想让我看到吗？”", 
                    syncChange: 15,
                    nextNode: "jiangyanbai_area3_core_after3"
                }
            ]
        },
        "jiangyanbai_area3_core_after1": {
            id: "jiangyanbai_area3_core_after1",
            name: "核心对话 · 看到了",
            text: "你诚实地说。\n\n他低下头，耳朵更红了。\n\n“......别看。”\n\n“已经看了。”\n\n他没说话。\n\n你也没说话。\n\n但你知道，从这一刻起，有些东西不一样了。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_final" }
            ]
        },
        "jiangyanbai_area3_core_after2": {
            id: "jiangyanbai_area3_core_after2",
            name: "核心对话 · 沉默",
            text: "你不知道该说什么，只是点了点头。\n\n他看见了你的动作。\n\n他把脸埋进膝盖里。\n\n“......十年。”他的声音闷闷的，“我写了十年。”\n\n你的心口一紧。\n\n十年。从第一次见面开始。\n\n你伸手，想碰他的肩，但又缩回来。\n\n你没说话。但你知道，你记住了。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_final" }
            ]
        },
        "jiangyanbai_area3_core_after3": {
            id: "jiangyanbai_area3_core_after3",
            name: "核心对话 · 想让我看到吗",
            text: "他看着你，眼睛里有东西在动。\n\n“......想。”他说，声音很轻，“也不想。”\n\n想让你知道。又怕你知道了会躲。\n\n你懂他的意思。\n\n你看着他，说：“我知道了。”\n\n他没问你知道什么。\n\n但他看着你的眼神，有点不一样了。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_final" }
            ]
        },
        "jiangyanbai_area3_core_final": {
            id: "jiangyanbai_area3_core_final",
            name: "核心对话 · 最后的话",
            text: "他的喉结动了动。\n\n“......我写了很多年。”\n\n你看着他。\n\n他没看你，看着巨树的树冠：\n\n“从警校那年开始。你第一次来给我们讲课。你穿着那件灰色毛衣，站在讲台上，讲行为分析。我坐在最后一排，看了你整整两个小时。”\n\n你的心跳漏了一拍。\n\n他继续说：\n\n“后来你成了哥哥的搭档。我每次去找哥哥，都能看见你。你有时候在看书，有时候在写东西，有时候就坐在那里发呆。我每次都想过去说话，但每次都没敢。”\n\n“再后来，我成了你的哨兵。”\n\n他转过头，看着你。\n\n“我以为能天天见到你，就能少写一点信。结果写得更多了。”",
            options: [
                { 
                    text: "“为什么不告诉我？”", 
                    syncChange: 5,
                    nextNode: "jiangyanbai_area3_core_choice1"
                },
                { 
                    text: "沉默，只是看着他", 
                    syncChange: 8,
                    nextNode: "jiangyanbai_area3_core_choice2"
                },
                { 
                    text: "伸手，轻轻碰了碰他的脸", 
                    syncChange: 30,
                    nextNode: "jiangyanbai_area3_core_choice3"
                }
            ]
        },
        "jiangyanbai_area3_core_choice1": {
            id: "jiangyanbai_area3_core_choice1",
            name: "核心对话 · 为什么不告诉我",
            text: "声音很轻。\n\n他垂下眼：“怕你躲。”\n\n怕你知道了，就不再来了。怕你知道了，就不再像以前那样对他。\n\n怕失去你。\n\n所以你一直没说。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_last" }
            ]
        },
        "jiangyanbai_area3_core_choice2": {
            id: "jiangyanbai_area3_core_choice2",
            name: "核心对话 · 只是看着",
            text: "你不知道该说什么。\n\n只是看着他，看着这个写了十年信的人，这个从第一次见面就记住你的人。\n\n你的心口很满，满得说不出话。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_last" }
            ]
        },
        "jiangyanbai_area3_core_choice3": {
            id: "jiangyanbai_area3_core_choice3",
            name: "核心对话 · 触碰",
            text: "你抬起手，轻轻碰了碰他的脸。\n\n他愣住了。\n\n你的手还停在他脸侧。\n\n他看着你，眼睛里有光在晃动。\n\n“砚白哥......”\n\n“嗯。”\n\n“你......”\n\n他没说完。\n\n因为你靠过去，轻轻抵住了他的额头。\n\n精神链接在这一刻变得无比清晰——你们能感知到对方此刻的心跳，都是乱的。",
            options: [
                { text: "继续", nextNode: "jiangyanbai_area3_core_last" }
            ]
        },
        "jiangyanbai_area3_core_last": {
            id: "jiangyanbai_area3_core_last",
            name: "核心对话 · 不用写了",
            text: "你们就这样抵着额头，很久很久。\n\n风吹过，带着钢铁森林的气息和海的味道。\n\n最后，你开口，声音很轻：\n\n“阿野。”\n\n他的呼吸停了一拍。\n\n“那些信......”你说，“不用写了。”\n\n他愣住了。\n\n你退开一点，看着他的眼睛：\n\n“以后有什么想说的，直接告诉我。”\n\n他的喉结动了动，嘴唇动了动——\n\n然后他移开视线。\n\n“......好。”\n\n你知道他差点说什么。你也知道自己差点说什么。\n\n但都没说。",
            options: [
                { text: "准备离开", nextNode: "jiangyanbai_area3_farewell" }
            ]
        },
        "jiangyanbai_area3_farewell": {
            id: "jiangyanbai_area3_farewell",
            name: "离开前的瞬间",
            text: "你站起来，准备退出精神图景。\n\n“江砚白。”\n\n你回头。\n\n他还坐在树下，看着你。\n\n“下次......”他说，“你什么时候再来？”",
            options: [
                { 
                    text: "“你想让我来的时候。”", 
                    syncChange: 10,
                    nextNode: "jiangyanbai_ending_trigger"
                },
                { 
                    text: "“等你叫我的时候。”", 
                    syncChange: 12,
                    nextNode: "jiangyanbai_ending_trigger"
                },
                { 
                    text: "“随时。”", 
                    syncChange: 15,
                    nextNode: "jiangyanbai_ending_trigger"
                }
            ]
        },
        "jiangyanbai_ending_trigger": {
            id: "jiangyanbai_ending_trigger",
            name: "离开",
            text: "你转身，离开。\n\n走出几步——\n\n“砚白哥！”\n\n你回头。\n\n他还坐在那里，看着你。\n\n“......路上小心。”\n\n你点点头。\n\n然后你退出了他的精神图景。\n\n最后一刻，你看见——\n\n他还坐在巨树下，看着你离开的方向。\n\n狼王站起来，走到他身边，卧下。\n\n信鸽从你肩头飞回去，落在他肩上。\n\n他看着信鸽，轻声说了什么。\n\n被风吹散了。\n\n但你猜到了。\n\n因为你的心跳，还在为他跳着。",
            options: [],
            isEnding: true
        }
    }
};

// 结局数据
const ENDINGS = {
    chengye: {
        "ending_chengye_01": {
            id: "ending_chengye_01",
            name: "沉默的海",
            condition: "同步率 < 40",
            desc: "你成功把他带出来了。\n\n但他醒来后，很沉默。你们坐在他公寓里，谁也没说话。\n\n最后他开口：“谢谢。”\n\n你点头：“嗯。”\n\n你起身离开。走到门口时，你回头看他——他已经背过身去，看着窗外。\n\n那一声“阿野”，像是从来没有发生过。\n\n后来你问自己：那天在山顶，他真的叫了吗？还是你听错了？\n\n你不知道答案。\n\n但你知道，从那以后，你的海面上，再也没有倒映出他的城市。"
        },
        "ending_chengye_02": {
            id: "ending_chengye_02",
            name: "不说的约定",
            condition: "40 ≤ 同步率 < 60",
            desc: "他醒来后，靠在你肩上喘了很久。\n\n然后他坐起来，看着你，说：“以后别进来了。”\n\n你皱眉：“为什么？”\n\n他没回答。\n\n但你知道答案：他不想让你看见那些黑暗。不想让你知道他藏起来的地方。不想让你看见那些信鸽的血、那些崩塌的悬崖。\n\n你站起来，说：“下次你困住自己，我还是会进来。”\n\n他抬头看你，眼睛里有东西闪了一下。\n\n然后他低下头，什么都没说。\n\n但你看见他的嘴角，轻轻弯了一下。"
        },
        "ending_chengye_03": {
            id: "ending_chengye_03",
            name: "风的方向",
            condition: "60 ≤ 同步率 < 80",
            desc: "他醒来后，看了你很久。\n\n然后他伸手，拂去你肩上的一根羽毛——是信鸽留下的。\n\n“阿野，”他说，“谢谢你进来。”\n\n那是他第一次清醒时叫你阿野。\n\n你的心跳很快，但你只是点头：“嗯。”\n\n他没再说什么。你也没再问。\n\n但那天之后，你发现自己的精神图景里，偶尔会飘来一阵海风。\n\n不是每次都有。但每次飘来的时候，你都会停下手里的事，闭上眼，感受那阵风。\n\n你知道那是他在想你。"
        },
        "ending_chengye_04": {
            id: "ending_chengye_04",
            name: "触碰",
            condition: "80 ≤ 同步率 < 95",
            desc: "他醒来后，没有立刻说话。\n\n他只是看着你，看了很久很久。\n\n然后他伸手，轻轻碰了碰你的脸。\n\n“砚白哥......”\n\n“嗯。”\n\n“你碰我了。”\n\n他愣了一下，然后轻轻弯了弯嘴角。\n\n“嗯。”他说，“我碰了。”\n\n你们都没再说话。\n\n但那天之后，他碰你的次数变多了。\n\n有时候是拂去肩上的灰，有时候是递东西时手指的轻触，有时候是精神梳理时多停留的那一秒。\n\n每一次，你都记住了。"
        },
        "ending_chengye_05": {
            id: "ending_chengye_05",
            name: "随时可以来的海",
            condition: "同步率 ≥ 95",
            desc: "他醒来后，你们坐在他公寓里，谁也没说话。\n\n天快亮了。\n\n你站起来，准备离开。\n\n“程野。”他叫住你。\n\n你回头。\n\n他站在窗边，晨光照在他身上。\n\n“下次，”他说，“你想看海的时候，直接进来。”\n\n你站在原地，心跳声震耳欲聋。\n\n“......好。”\n\n你推开门，走进清晨的风里。\n\n身后，他的声音很轻地传来：\n\n“阿野，路上小心。”\n\n那天之后，你的海，随时为他开着。"
        }
    },
    jiangyanbai: {
        "ending_jiang_01": {
            id: "ending_jiang_01",
            name: "沉默的城市",
            condition: "同步率 < 40",
            desc: "你找到了他，带他出来了。\n\n但他醒来后，很沉默。你们坐在他办公室里，谁也没说话。\n\n最后他开口：“谢谢。”\n\n你点头：“嗯。”\n\n你起身离开。走到门口时，你回头看他——他已经背过身去，看着窗外。\n\n那些信的事，谁也没再提。\n\n但你后来发现，你的精神图景里，钢铁森林的倒影变淡了。\n\n越来越淡。\n\n最后只剩下那棵巨树，孤零零地立在海面上。"
        },
        "ending_jiang_02": {
            id: "ending_jiang_02",
            name: "不再写的信",
            condition: "40 ≤ 同步率 < 60",
            desc: "他醒来后，看着你。\n\n“你看到了？”他问。\n\n你知道他问的是信。\n\n你点头。\n\n他低下头：“......别看。”\n\n你在他身边坐下：“已经看了。”\n\n他没说话。\n\n你也没说话。\n\n但那天之后，你再也没见他写过信。\n\n他不再写了。但他看你的眼神，和以前不一样了。\n\n有时候你看过去，会发现他在看你。你一看他，他就移开视线。\n\n你从来没问。\n\n但你知道，那些信虽然不写了，话却一直都在。"
        },
        "ending_jiang_03": {
            id: "ending_jiang_03",
            name: "等你叫我的时候",
            condition: "60 ≤ 同步率 < 80",
            desc: "他醒来后，你们在巨树下坐了很久。\n\n最后他问：“你什么时候再来？”\n\n你看着他，说：“等你叫我的时候。”\n\n他点头：“那我叫的时候，你一定要来。”\n\n你说：“好。”\n\n那天之后，你偶尔会听见精神链接里传来很轻的声音——\n\n“江砚白。”\n\n不是有事。只是叫你的名字。\n\n每次听见，你都会弯一下嘴角。\n\n然后在下一次进入他的图景时，在他耳边轻轻说：\n\n“听见了。”"
        },
        "ending_jiang_04": {
            id: "ending_jiang_04",
            name: "直接说",
            condition: "80 ≤ 同步率 < 95",
            desc: "他醒来后，靠在树上，看着你。\n\n“那些信......”他说，“本来打算一辈子都不让你看见。”\n\n你在他身边坐下：“现在看见了。”\n\n他垂下眼：“那你......”\n\n你没让他说完。\n\n你伸手，轻轻抵住他的额头。\n\n精神链接里，你传过去一句话：\n\n“以后不用写，直接说。”\n\n他愣住了。\n\n然后他轻轻“嗯”了一声。\n\n那天之后，他真的开始“直接说”了。\n\n有时候是“砚白哥，我今天有点累”，有时候是“砚白哥，你在吗”，有时候是“砚白哥，我想你了”。\n\n每一次，你都会回他：“在。”"
        },
        "ending_jiang_05": {
            id: "ending_jiang_05",
            name: "随时可以来的地方",
            condition: "同步率 ≥ 95",
            desc: "他醒来后，你们在巨树下坐了很久。\n\n天快亮了——精神图景里的天亮。\n\n你站起来，准备离开。\n\n“江砚白。”\n\n你回头。\n\n他还坐在树下，看着你。\n\n“下次，”他说，“你想来的时候，直接来。”\n\n你站在原地，看着他。\n\n他继续说：“不用等我叫你。你什么时候想来，就来。”\n\n你的心跳很快。\n\n“......好。”\n\n你转身，离开。\n\n身后，他的声音很轻地传来：\n\n“砚白哥，路上小心。”\n\n那天之后，钢铁森林对你永远敞开。\n\n你随时可以来。\n\n他随时都在。"
        }
    },
    hidden: {
        "ending_hidden": {
            id: "ending_hidden",
            name: "风知道，海知道，树也知道",
            condition: "双视角全收集",
            desc: "后来，有人问他们：\n\n“你们是怎么在一起的？”\n\n程野想了想，说：“没在一起。”\n\n问的人愣了：“啊？”\n\n江砚白在旁边看书，头也不抬：“他在胡说的。”\n\n程野看他一眼：“那我问你，我们什么时候在一起的？”\n\n江砚白翻了一页书：“从你第一次在精神图景里写信那天。”\n\n程野脸红了：“......那不是信！”\n\n“那是什么？”\n\n“那是......那是......”\n\n江砚白抬眼看他，嘴角轻轻弯着。\n\n程野不说话了。\n\n问的人更懵了：“所以到底在没在一起？”\n\n程野站起来，往外走：“我出任务了。”\n\n江砚白继续看书：“路上小心。”\n\n程野走到门口，回头看了一眼。\n\n江砚白还在看书，但嘴角的笑意没下去。\n\n程野也笑了一下，推门出去。\n\n问的人看向江砚白：“江教授，你们......”\n\n江砚白合上书，站起来，走到窗边。\n\n窗外，程野正走过院子，狼王跟在他身边。\n\n江砚白看着那个背影，轻声说：\n\n“有些事，不用说在一起。”\n\n“那怎么说？”\n\n他没回答。\n\n但这时，程野忽然在院子里停下来，回头朝他的方向看了一眼。\n\n隔着玻璃，隔着距离，隔着所有没说过的话——\n\n他们看着彼此。\n\n然后程野挥了挥手，继续往前走。\n\n江砚白嘴角弯起来。\n\n“就这样说。”"
        }
    }
};