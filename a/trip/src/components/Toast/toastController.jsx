// 让组件基于事件机制来通信
import mitt from 'mitt';  // 自定义事件
// 实例化
export const toastEvents = mitt();

export function showToast(user = 0, bell = 0, mail = 0) {
    toastEvents.emit('show', {user, bell, mail});
}