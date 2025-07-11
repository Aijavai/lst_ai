// 自定义hooks 
// hooks + component renderer(渲染器)
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export function useTheme() {
    return useContext(ThemeContext)
}