import styles from './card.module.css';
import { useState } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const ImageCard = (props) => {
    const { url, height } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    // 使用自定义Hook处理图片懒加载
    const imgRef = useIntersectionObserver(
        (entry, observer) => {
            const img = entry.target;
            img.src = img.dataset.src || '';
            observer.unobserve(img); // 加载后停止观察
        },
        {}, // 默认配置
        [] // 无依赖，只需要初始化一次
    );
    
    const handleImageLoad = () => {
        setIsLoaded(true);
    };
    
    const handleImageError = () => {
        setHasError(true);
    };
    return (
        <div style={{height}} className={styles.card}>
            {!isLoaded && !hasError && (
                <div className={styles.skeleton}>
                    <div className={styles.skeletonImage}></div>
                </div>
            )}
            {hasError ? (
                <div className={styles.errorPlaceholder}>
                    <span>图片加载失败</span>
                    <button onClick={() => {
                        setHasError(false);
                        if (imgRef.current) {
                            imgRef.current.src = url;
                        }
                    }}>重试</button>
                </div>
            ) : (
                <img 
                    ref={imgRef} 
                    data-src={url} 
                    className={`${styles.img} ${isLoaded ? styles.loaded : ''}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    alt=""
                />
            )}
        </div>
    )
}

export default ImageCard;