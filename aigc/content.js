// 监听来自popup的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'changeBgColor') {
        document.body.style.backgroundColor = request.color;
    }
}); 