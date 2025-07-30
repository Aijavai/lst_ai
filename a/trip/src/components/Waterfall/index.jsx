import styles from './waterfall.module.css';
import {
    useMemo
} from 'react';
import ImageCard from '@/components/ImageCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Waterfall = (props) => {
    const { 
        images, 
        fetchMore, 
        loading 
    } = props;

    // 智能分配图片到两列，保持高度平衡
    const { leftColumn, rightColumn } = useMemo(() => {
        const left = [];
        const right = [];
        let leftHeight = 0;
        let rightHeight = 0;

        images.forEach(img => {
            // 选择高度较小的列
            if (leftHeight <= rightHeight) {
                left.push(img);
                leftHeight += img.height || 300; // 默认高度300
            } else {
                right.push(img);
                rightHeight += img.height || 300;
            }
        });

        return { leftColumn: left, rightColumn: right };
    }, [images]);

    // 使用自定义Hook处理无限滚动
    const loaderRef = useIntersectionObserver(
        (entry) => {
            console.log('Loader entered viewport:', entry);
            fetchMore();
        },
        {}, // 默认配置
        [fetchMore] // 依赖数组
    );
    
    return (
        <div className={styles.wrapper}>
           <div className={styles.column}>
               {
                leftColumn.map(img => (
                    <ImageCard key={img.id} {...img} />
                ))
               }
           </div>
           <div className={styles.column}>
               {
                rightColumn.map(img => (
                    <ImageCard key={img.id} {...img} />
                ))
               }
           </div>
           <div ref={loaderRef} className={`${styles.loader} ${loading ? styles.loading : ''}`}>
               {loading ? '加载中...' : '滑动加载更多'}
           </div>
        </div>
    )
}

export default Waterfall
