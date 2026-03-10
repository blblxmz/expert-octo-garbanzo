// 存档系统 - 5个档位
const Save = {
    // 存档到指定槽位
    saveGame: function(slot) {
        if (slot < 0 || slot > 4) return;
        
        // 获取当前游戏状态
        const state = Game.getState();
        
        // 添加存档时间戳
        state.saveTime = new Date().toLocaleString('zh-CN');
        
        // 保存到localStorage
        localStorage.setItem(`game_save_${slot}`, JSON.stringify(state));
        
        // 更新所有存档按钮状态
        this.updateAllButtons();
        
        UI.showTip(`已存档到槽位 ${slot + 1}`);
    },

    // 从指定槽位读档
    loadGame: function(slot) {
        if (slot < 0 || slot > 4) return;
        
        // 从localStorage读取
        const saveData = localStorage.getItem(`game_save_${slot}`);
        if (!saveData) {
            UI.showTip(`槽位 ${slot + 1} 无存档`);
            return;
        }
        
        try {
            const state = JSON.parse(saveData);
            
            // 恢复游戏状态
            Game.setState(state);
            
            // 切换到游戏页面
            document.getElementById('start-page').style.display = 'none';
            document.getElementById('game-page').style.display = 'block';
            
            // 更新所有存档按钮状态
            this.updateAllButtons();
            
            UI.showTip(`从槽位 ${slot + 1} 读档成功`);
        } catch (e) {
            console.error('读档失败', e);
            UI.showTip('读档失败，存档可能已损坏');
        }
    },

    // 更新所有存档按钮状态
    updateAllButtons: function() {
        for (let i = 0; i < 5; i++) {
            const saveBtn = document.getElementById(`save-btn-${i}`);
            const loadBtn = document.getElementById(`load-btn-${i}`);
            const hasSave = localStorage.getItem(`game_save_${i}`);
            
            if (saveBtn) {
                if (hasSave) {
                    saveBtn.classList.add('active');
                } else {
                    saveBtn.classList.remove('active');
                }
            }
            
            if (loadBtn) {
                if (hasSave) {
                    loadBtn.classList.add('active');
                } else {
                    loadBtn.classList.remove('active');
                }
            }
        }
    },

    // 删除指定槽位的存档
    deleteSave: function(slot) {
        if (slot < 0 || slot > 4) return;
        
        localStorage.removeItem(`game_save_${slot}`);
        
        this.updateAllButtons();
        
        UI.showTip(`已删除槽位 ${slot + 1} 的存档`);
    },

    // 获取所有存档信息
    getAllSaves: function() {
        const saves = [];
        for (let i = 0; i < 5; i++) {
            const data = localStorage.getItem(`game_save_${i}`);
            if (data) {
                try {
                    saves.push({
                        slot: i,
                        data: JSON.parse(data)
                    });
                } catch (e) {
                    saves.push({
                        slot: i,
                        data: null
                    });
                }
            }
        }
        return saves;
    },

    // 初始化存档按钮状态
    init: function() {
        this.updateAllButtons();
    }
};

// 页面加载完成后初始化
window.addEventListener('load', function() {
    Save.init();
});