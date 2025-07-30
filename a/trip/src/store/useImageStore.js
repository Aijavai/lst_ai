import {
    create
} from 'zustand'
import {
    getImages
} from '../api/home'

export const useImageStore = create((set, get) => ({
    images: [],
    page: 1,
    loading: false,
    hasMore: true,
    error: null,
    fetchMore: async () => {
        // 如果还在请求中或没有更多数据，不再发起新的请求
        if (get().loading || !get().hasMore) return;
        
        set({ loading: true, error: null }); // 请求中
        
        try {
            const res = await getImages(get().page);
            console.log(res);
            const newImages = res.data || [];
            
            // 去重处理
            const existingIds = new Set(get().images.map(img => img.id));
            const uniqueNewImages = newImages.filter(img => !existingIds.has(img.id));
            
            // 之前的状态
            set((state) => ({
                images: [...state.images, ...uniqueNewImages],
                page: state.page + 1,
                loading: false,
                hasMore: uniqueNewImages.length > 0,
                error: null
            }));
        } catch (error) {
            console.error('获取图片失败:', error);
            set({
                loading: false,
                error: error.message || '获取图片失败，请重试'
            });
        }
    },
    
    // 重置状态
    reset: () => {
        set({
            images: [],
            page: 1,
            loading: false,
            hasMore: true,
            error: null
        });
    }
}))