import { ref, onMounted, onUnmounted } from 'vue';

/**
 * 节流函数 - 限制函数执行频率
 * @param {Function} func - 要节流的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 节流后的函数
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

/**
 * 鼠标位置跟踪Hook
 * @param {Object} options - 配置选项
 * @param {number} options.throttleDelay - 节流延迟时间，默认16ms（60fps）
 * @param {boolean} options.enableThrottle - 是否启用节流，默认true
 * @param {string} options.target - 监听目标，默认'document'
 * @returns {Object} 返回鼠标位置和状态信息
 */
export function useMouse(options = {}) {
    const {
        throttleDelay = 16,
        enableThrottle = true,
        target = 'document'
    } = options;

    // 响应式数据
    const x = ref(0);
    const y = ref(0);
    const isMoving = ref(false);
    const isActive = ref(false);

    // 鼠标移动处理函数
    const updateMousePosition = (event) => {
        x.value = event.clientX;
        y.value = event.clientY;
        isMoving.value = true;
        
        // 重置移动状态
        setTimeout(() => {
            isMoving.value = false;
        }, 100);
    };

    // 应用节流（如果启用）
    const handleMouseMove = enableThrottle 
        ? throttle(updateMousePosition, throttleDelay)
        : updateMousePosition;

    // 鼠标进入事件
    const handleMouseEnter = () => {
        isActive.value = true;
    };

    // 鼠标离开事件
    const handleMouseLeave = () => {
        isActive.value = false;
        isMoving.value = false;
    };

    // 保存事件监听器引用，用于清理
    let mouseMoveListener = null;
    let mouseEnterListener = null;
    let mouseLeaveListener = null;

    onMounted(() => {
        const targetElement = target === 'document' ? document : document.querySelector(target);
        
        if (!targetElement) {
            console.warn(`useMouse: 无法找到目标元素 "${target}"`);
            return;
        }

        // 添加事件监听器
        mouseMoveListener = handleMouseMove;
        mouseEnterListener = handleMouseEnter;
        mouseLeaveListener = handleMouseLeave;

        targetElement.addEventListener('mousemove', mouseMoveListener);
        targetElement.addEventListener('mouseenter', mouseEnterListener);
        targetElement.addEventListener('mouseleave', mouseLeaveListener);

        console.log('useMouse: 鼠标监听器已挂载');
    });

    onUnmounted(() => {
        const targetElement = target === 'document' ? document : document.querySelector(target);
        
        if (targetElement) {
            // 清理事件监听器，防止内存泄漏
            if (mouseMoveListener) {
                targetElement.removeEventListener('mousemove', mouseMoveListener);
            }
            if (mouseEnterListener) {
                targetElement.removeEventListener('mouseenter', mouseEnterListener);
            }
            if (mouseLeaveListener) {
                targetElement.removeEventListener('mouseleave', mouseLeaveListener);
            }
        }

        // 重置引用
        mouseMoveListener = null;
        mouseEnterListener = null;
        mouseLeaveListener = null;

        console.log('useMouse: 鼠标监听器已清理');
    });

    // 返回响应式数据和方法
    return {
        // 响应式数据
        x,
        y,
        isMoving,
        isActive,
        
        // 计算属性
        position: () => ({ x: x.value, y: y.value }),
        
        // 方法
        reset: () => {
            x.value = 0;
            y.value = 0;
            isMoving.value = false;
            isActive.value = false;
        },
        
        // 获取相对于指定元素的坐标
        getRelativePosition: (element) => {
            if (!element) return { x: 0, y: 0 };
            
            const rect = element.getBoundingClientRect();
            return {
                x: x.value - rect.left,
                y: y.value - rect.top
            };
        }
    };
}