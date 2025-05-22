/**
 * @desc 页面背景切换
 * @author lst
 * @date 2025-05-10 16:45:36 
 */
//JS面向对象语言
//事件监听
//弹窗加载完后执行
document.addEventListener('DOMContentLoaded', () => {
    //获取按钮元素
    const changeColorBtn = document.getElementById('changeColorBtn');
    changeColorBtn.addEventListener('click', () => {
        // 获取当前激活的标签页
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            // 向标签页发送消息触发背景色修改
            chrome.tabs.sendMessage(tabs[0].id, { action: 'changeBgColor', color: 'green' });
        });
    });
});