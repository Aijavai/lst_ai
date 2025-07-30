import { useEffect, useRef } from 'react';

/**
 * 自定义Hook：封装IntersectionObserver逻辑
 * 遵循DRY原则，避免重复代码
 * @param {Function} callback - 当元素进入视口时的回调函数
 * @param {Object} options - IntersectionObserver的配置选项
 * @param {Array} deps - 依赖数组
 * @returns {Object} ref - 需要观察的元素的ref
 */
const useIntersectionObserver = (callback, options = {}, deps = []) => {
    const elementRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        // 清理之前的observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        // 创建新的observer
        observerRef.current = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                callback(entry, observer);
            }
        }, options);

        // 开始观察
        if (elementRef.current) {
            observerRef.current.observe(elementRef.current);
        }

        // 清理函数
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, deps);

    return elementRef;
};

export default useIntersectionObserver;