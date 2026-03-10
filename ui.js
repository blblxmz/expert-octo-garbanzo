// UI核心交互逻辑 - 逐字显示版本（修复结局显示）
const UI = {
    // 显示终端提示
    showTip: function(text) {
        const tip = document.getElementById("game-tip");
        tip.textContent = `> ${text}`;
        tip.style.display = "block";
        setTimeout(() => {
            tip.style.display = "none";
        }, 2500);
    },

    // 更新进度条
    updateProgress: function() {
        const state = Game.state;
        
        document.getElementById("sync-value").innerText = `${state.sync}%`;
        document.getElementById("sync-progress").style.width = `${state.sync}%`;
        
        document.getElementById("explore-value").innerText = `${state.explore}%`;
        document.getElementById("explore-progress").style.width = `${state.explore}%`;
        
        const fragCount = state.collectedFragments.length;
        document.getElementById("frag-text").innerText = `${fragCount} / 15`;
        document.getElementById("frag-progress").style.width = `${(fragCount/15)*100}%`;
        
        const itemCount = state.collectedItems.length;
        document.getElementById("item-text").innerText = `${itemCount} / 6`;
        document.getElementById("item-progress").style.width = `${(itemCount/6)*100}%`;
        
        const endCount = state.unlockedEndings.length;
        document.getElementById("end-text").innerText = `${endCount} / 10`;
        document.getElementById("end-progress").style.width = `${(endCount/10)*100}%`;
    },

    // 更新视角状态
    updateViewStatus: function() {
        const chengyeExplored = localStorage.getItem("chengye_explored") === "true";
        const jiangyanbaiExplored = localStorage.getItem("jiangyanbai_explored") === "true";
        
        const chengyeEl = document.getElementById("chengye-status");
        const jiangEl = document.getElementById("jiangyanbai-status");
        
        if (chengyeExplored) {
            chengyeEl.innerText = "已探索";
            chengyeEl.classList.add("completed");
        }
        if (jiangyanbaiExplored) {
            jiangEl.innerText = "已探索";
            jiangEl.classList.add("completed");
        }
    },

    // 逐字显示文本
    typeText: function(element, text, speed = 30, callback) {
        if (this.typeTimer) {
            clearInterval(this.typeTimer);
        }
        
        element.innerText = '';
        let index = 0;
        
        if (Game.state.isFastForward) {
            element.innerText = text;
            if (callback) callback();
            return;
        }
        
        this.typeTimer = setInterval(() => {
            if (index < text.length) {
                element.innerText += text[index];
                index++;
            } else {
                clearInterval(this.typeTimer);
                if (callback) callback();
            }
        }, speed);
    },

    // 渲染场景
    renderScene: function(nodeId) {
        if (!Game.state.currentView) return;
        
        const scene = GAME_DATA[Game.state.currentView][nodeId];
        if (!scene) {
            console.error('场景不存在', nodeId);
            return;
        }

        const narrateEl = document.getElementById("narrate-text");
        this.typeText(narrateEl, scene.text, 30);

        const optionsArea = document.getElementById("options-area");
        optionsArea.innerHTML = "";

        if (scene.options && scene.options.length > 0) {
            scene.options.forEach((option, index) => {
                const optionEl = document.createElement("div");
                optionEl.className = "option-item";
                optionEl.onclick = function() {
                    Game.selectOption(nodeId, index);
                };

                let optionContent = `
                    <span class="option-number">${String.fromCharCode(65 + index)}</span>
                    <span class="option-text">${option.text}</span>
                `;

                if (option.syncChange) {
                    const syncText = option.syncChange >= 0 ? `+${option.syncChange}` : option.syncChange;
                    optionContent += `<span class="option-sync">同步率 ${syncText}</span>`;
                }

                if (option.cost) {
                    const costText = option.cost.type === "精神力" ? `精神-${option.cost.value}` : "体力消耗";
                    optionContent += `<span class="option-sync mental-cost">${costText}</span>`;
                }

                optionContent += `<span class="option-arrow">></span>`;
                optionEl.innerHTML = optionContent;
                optionsArea.appendChild(optionEl);
            });
        } else {
            optionsArea.innerHTML = `
                <div class="option-item" style="cursor: default; opacity: 0.6;">
                    <span class="option-number">✓</span>
                    <span class="option-text">剧情已结束</span>
                    <span class="option-arrow">></span>
                </div>
            `;
        }

        const titleEl = document.querySelector(".options-title");
        if (titleEl && scene.name) {
            titleEl.innerHTML = `> ${scene.name}`;
        }

        this.updateProgress();
    },

    // 重播当前节点
    replayNode: function() {
        if (!Game.state.currentNode) return;
        
        const scene = GAME_DATA[Game.state.currentView][Game.state.currentNode];
        if (!scene) return;
        
        const narrateEl = document.getElementById("narrate-text");
        this.typeText(narrateEl, scene.text, 30);
        
        this.showTip("重播当前节点");
    },

    // 显示时间线
    showTimeLine: function() {
        const timelineContent = document.getElementById("time-line-content");
        timelineContent.innerHTML = "";

        if (Game.state.visitedNodes.length === 0) {
            timelineContent.innerHTML = '<div style="color:#888; text-align:center; padding:20px;">暂无访问记录</div>';
        } else {
            const reversedNodes = [...Game.state.visitedNodes].reverse();
            reversedNodes.forEach((node) => {
                const nodeEl = document.createElement("div");
                nodeEl.style.cssText = `
                    background: #1e1e1e;
                    border: 1px solid #333;
                    border-radius: 6px;
                    padding: 12px;
                    margin-bottom: 8px;
                    cursor: pointer;
                `;
                nodeEl.onclick = function() {
                    Game.backToNode(node.nodeId);
                    UI.hideTimeLine();
                };

                nodeEl.innerHTML = `
                    <div style="display:flex; justify-content:space-between; color:#00d9c0; font-size:12px; margin-bottom:5px;">
                        <span>${node.time || '--:--'}</span>
                        <span>同步率 ${node.sync}%</span>
                    </div>
                    <div style="color:#e0e0e0; font-size:14px;">${node.nodeName}</div>
                `;
                timelineContent.appendChild(nodeEl);
            });
        }

        document.getElementById("time-line-page").style.display = "flex";
    },

    // 隐藏时间线
    hideTimeLine: function() {
        document.getElementById("time-line-page").style.display = "none";
    },

    // 显示结局 - 修正版（支持双视角）
    showEnding: function(endId) {
        let endingData;
        
        // 先尝试从程野视角结局中查找
        if (ENDINGS.chengye && ENDINGS.chengye[endId]) {
            endingData = ENDINGS.chengye[endId];
        }
        // 再尝试从江砚白视角结局中查找
        else if (ENDINGS.jiangyanbai && ENDINGS.jiangyanbai[endId]) {
            endingData = ENDINGS.jiangyanbai[endId];
        }
        // 最后尝试隐藏结局
        else if (ENDINGS.hidden && ENDINGS.hidden[endId]) {
            endingData = ENDINGS.hidden[endId];
        }

        if (!endingData) {
            console.error('结局数据未找到:', endId);
            this.showTip(`结局数据加载失败 (${endId})`);
            return;
        }

        document.getElementById("ending-name").innerText = `结局：${endingData.name}`;
        
        const endingDesc = document.getElementById("ending-desc");
        this.typeText(endingDesc, endingData.desc, 20);

        document.getElementById("ending-page").style.display = "flex";
        this.showTip(`解锁结局：${endingData.name}`);
        this.updateProgress();
    },

    // 隐藏结局
    hideEnding: function() {
        if (this.typeTimer) {
            clearInterval(this.typeTimer);
        }
        document.getElementById("ending-page").style.display = "none";
    },

    // 快进切换
    toggleFastForward: function() {
        Game.state.isFastForward = !Game.state.isFastForward;
        const btn = document.getElementById("fast-forward-btn");
        
        if (Game.state.isFastForward) {
            btn.classList.add('active');
            if (this.typeTimer) {
                clearInterval(this.typeTimer);
                const narrateEl = document.getElementById("narrate-text");
                const scene = GAME_DATA[Game.state.currentView][Game.state.currentNode];
                if (scene) {
                    narrateEl.innerText = scene.text;
                }
            }
        } else {
            btn.classList.remove('active');
        }
        
        this.showTip(Game.state.isFastForward ? "快进模式开启" : "快进模式关闭");
    },

    // 音乐切换
    toggleBgm: function() {
        Game.state.bgmEnabled = !Game.state.bgmEnabled;
        const btn = document.getElementById("music-btn");
        
        if (Game.state.bgmEnabled) {
            if (!window.bgmPlayer) {
                window.bgmPlayer = new Audio('music/bgm.mp3');
                window.bgmPlayer.loop = true;
            }
            window.bgmPlayer.play().catch(() => {
                this.showTip("请先点击页面任意位置开启音乐");
                Game.state.bgmEnabled = false;
                return;
            });
            btn.classList.add('active');
        } else {
            if (window.bgmPlayer) {
                window.bgmPlayer.pause();
            }
            btn.classList.remove('active');
        }
        this.showTip(Game.state.bgmEnabled ? "音乐开启" : "音乐关闭");
    },

    // 初始化
    init: function() {
        this.updateViewStatus();
        this.updateProgress();
        
        window.toggleFastForward = this.toggleFastForward.bind(this);
        window.toggleBgm = this.toggleBgm.bind(this);
        window.showTimeLine = this.showTimeLine.bind(this);
        window.hideTimeLine = this.hideTimeLine.bind(this);
        window.hideEnding = this.hideEnding.bind(this);
        window.replayNode = this.replayNode.bind(this);
    }
};

window.addEventListener("load", function() {
    UI.init();
});