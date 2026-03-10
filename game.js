// 游戏核心逻辑（完整版，修复返回首页）
const Game = {
    // 当前游戏状态
    state: {
        currentView: null,
        currentNode: null,
        sync: 50,
        explore: 0,
        visitedNodes: [],
        collectedFragments: [],
        collectedItems: [],
        unlockedEndings: [],
        isFastForward: false,
        bgmEnabled: false,
        lastSaveTime: null
    },

    // 初始化
    init: function() {
        const savedEndings = localStorage.getItem('unlocked_endings');
        if (savedEndings) {
            this.state.unlockedEndings = JSON.parse(savedEndings);
        }
        
        const chengyeExplored = localStorage.getItem('chengye_explored') === 'true';
        const jiangyanbaiExplored = localStorage.getItem('jiangyanbai_explored') === 'true';
        
        UI.updateProgress();
        UI.updateViewStatus();
        
        console.log('游戏初始化完成');
    },

    // 开始视角
    startView: function(view) {
        this.state.currentView = view;
        this.state.currentNode = view === 'chengye' ? 'chengye_area1_start' : 'jiangyanbai_area1_start';
        this.state.sync = 50;
        this.state.explore = 0;
        this.state.visitedNodes = [];
        
        document.getElementById('start-page').style.display = 'none';
        document.getElementById('game-page').style.display = 'block';
        
        UI.renderScene(this.state.currentNode);
        UI.showTip(`已进入${view === 'chengye' ? '程野·临海之森' : '江砚白·钢铁森林'}`);
    },

    // 选择选项
    selectOption: function(nodeId, optionIndex) {
        const scene = GAME_DATA[this.state.currentView][nodeId];
        if (!scene || !scene.options || !scene.options[optionIndex]) return;
        
        const option = scene.options[optionIndex];
        
        const currentSync = this.state.sync;
        
        if (option.syncChange) {
            this.state.sync = Math.min(100, Math.max(0, this.state.sync + option.syncChange));
        }
        
        if (option.exploreChange) {
            this.state.explore = Math.min(100, this.state.explore + option.exploreChange);
        }
        
        if (option.fragment) {
            if (!this.state.collectedFragments.includes(option.fragment)) {
                this.state.collectedFragments.push(option.fragment);
                UI.showTip(`获得记忆碎片：${option.fragment}`);
            }
        }
        
        if (option.item) {
            if (!this.state.collectedItems.includes(option.item)) {
                this.state.collectedItems.push(option.item);
                UI.showTip(`获得特殊物品：${option.item}`);
            }
        }
        
        this.recordVisitedNode(nodeId, currentSync);
        
        if (option.nextNode && option.nextNode.includes('ending')) {
            this.triggerEnding(option.nextNode);
            return;
        }
        
        if (option.nextNode) {
            this.state.currentNode = option.nextNode;
            UI.renderScene(this.state.currentNode);
        }
        
        UI.updateProgress();
    },

    // 记录访问节点
    recordVisitedNode: function(nodeId, syncAtNode) {
        const scene = GAME_DATA[this.state.currentView][nodeId];
        if (!scene) return;
        
        const exists = this.state.visitedNodes.some(n => n.nodeId === nodeId);
        if (!exists) {
            this.state.visitedNodes.push({
                nodeId: nodeId,
                nodeName: scene.name || nodeId,
                sync: syncAtNode !== undefined ? syncAtNode : this.state.sync,
                time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            });
        }
    },

    // 回溯到指定节点
    backToNode: function(nodeId) {
        const record = this.state.visitedNodes.find(n => n.nodeId === nodeId);
        if (!record) return;
        
        this.state.sync = record.sync;
        this.state.currentNode = nodeId;
        
        UI.renderScene(nodeId);
        UI.showTip(`已回溯到：${record.nodeName}`);
        UI.updateProgress();
    },

    // 重播当前节点
    replayNode: function() {
        UI.renderScene(this.state.currentNode);
        UI.showTip('重播当前节点');
    },

    // 触发结局
    triggerEnding: function(endingId) {
        let finalEndingId = endingId;
        
        // 程野视角结局映射
        if (endingId === 'chengye_ending_trigger') {
            if (this.state.sync < 40) finalEndingId = 'ending_chengye_01';
            else if (this.state.sync < 60) finalEndingId = 'ending_chengye_02';
            else if (this.state.sync < 80) finalEndingId = 'ending_chengye_03';
            else if (this.state.sync < 95) finalEndingId = 'ending_chengye_04';
            else finalEndingId = 'ending_chengye_05';
        }
        // 江砚白视角结局映射
        else if (endingId === 'jiangyanbai_ending_trigger') {
            if (this.state.sync < 40) finalEndingId = 'ending_jiang_01';
            else if (this.state.sync < 60) finalEndingId = 'ending_jiang_02';
            else if (this.state.sync < 80) finalEndingId = 'ending_jiang_03';
            else if (this.state.sync < 95) finalEndingId = 'ending_jiang_04';
            else finalEndingId = 'ending_jiang_05';
        }
        
        // 检查是否已解锁
        if (!this.state.unlockedEndings.includes(finalEndingId)) {
            this.state.unlockedEndings.push(finalEndingId);
            localStorage.setItem('unlocked_endings', JSON.stringify(this.state.unlockedEndings));
            
            // 标记视角已完成
            if (this.state.currentView === 'chengye') {
                localStorage.setItem('chengye_explored', 'true');
            } else if (this.state.currentView === 'jiangyanbai') {
                localStorage.setItem('jiangyanbai_explored', 'true');
            }
            
            // 检查隐藏结局
            this.checkHiddenEnding();
        }
        
        // 显示结局
        UI.showEnding(finalEndingId);
    },

    // 检查隐藏结局
    checkHiddenEnding: function() {
        const chengyeExplored = localStorage.getItem('chengye_explored') === 'true';
        const jiangyanbaiExplored = localStorage.getItem('jiangyanbai_explored') === 'true';
        const allFragments = this.state.collectedFragments.length >= 15;
        const allItems = this.state.collectedItems.length >= 6;
        
        if (chengyeExplored && jiangyanbaiExplored && allFragments && allItems) {
            if (!this.state.unlockedEndings.includes('ending_hidden')) {
                this.state.unlockedEndings.push('ending_hidden');
                localStorage.setItem('unlocked_endings', JSON.stringify(this.state.unlockedEndings));
                UI.showTip('✨ 解锁隐藏结局：风知道，海知道，树也知道');
            }
        }
    },

    // 重玩结局线
    replayEndingLine: function() {
        this.state.currentNode = this.state.currentView === 'chengye' ? 'chengye_area1_start' : 'jiangyanbai_area1_start';
        this.state.sync = 50;
        this.state.explore = 0;
        
        UI.hideEnding();
        UI.renderScene(this.state.currentNode);
        UI.updateProgress();
        UI.showTip('重新开始当前视角');
    },

    // 返回开始页面（修复版：关闭结局弹窗）
    backToStart: function() {
        UI.hideEnding(); // 确保结局弹窗关闭
        UI.updateViewStatus();
        document.getElementById('game-page').style.display = 'none';
        document.getElementById('start-page').style.display = 'flex';
        UI.showTip('返回视角选择页面');
    },

    // 获取当前状态（用于存档）
    getState: function() {
        return {
            currentView: this.state.currentView,
            currentNode: this.state.currentNode,
            sync: this.state.sync,
            explore: this.state.explore,
            visitedNodes: this.state.visitedNodes,
            collectedFragments: this.state.collectedFragments,
            collectedItems: this.state.collectedItems,
            unlockedEndings: this.state.unlockedEndings
        };
    },

    // 恢复状态（用于读档）
    setState: function(state) {
        this.state = { ...this.state, ...state };
        
        if (this.state.currentNode) {
            UI.renderScene(this.state.currentNode);
        }
        
        UI.updateProgress();
        UI.showTip('读档完成');
    }
};

// 页面加载完成后初始化
window.addEventListener('load', function() {
    Game.init();
});