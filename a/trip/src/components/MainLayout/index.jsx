import {
    useState,
    useEffect
} from 'react';
import {
    Tabbar
} from 'react-vant'
import {
    HomeO,
    Search,
    FriendsO,
    SettingO,
    UserO
} from '@react-vant/icons'
import {
    Outlet,
    useNavigate,
    useLocation
} from 'react-router-dom'

// 菜单栏配置O
const tabs = [
    { icon: <HomeO />, title: '首页', path: '/home'},
    { icon: <Search />, title: '特惠专区', path: '/discount'},
    { icon: <FriendsO />, title: '我的收藏', path: '/collection'},
    { icon: <SettingO />, title: '行程', path: '/trip'},
    { icon: <UserO />, title: '我的账号', path: '/account'}                         
]
const MainLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    // 根据当前路径设置active状态
    const currentIndex = tabs.findIndex(tab => tab.path === location.pathname)
    const [active, setActive] = useState(currentIndex >= 0 ? currentIndex : 0)
    
    // 监听路径变化，更新TabBar状态
    useEffect(() => {
        const index = tabs.findIndex(tab => tab.path === location.pathname)
        if (index >= 0) {
            setActive(index)
        }
    }, [location.pathname])
    
    const handleTabChange = (key) => {
        setActive(key)
        navigate(tabs[key].path)
    }
    
    return (
        <>
        <div 
            className='flex flex-col h-screen'
            style={{
                paddingBottom: '60px'
            }}
            >
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
            {/* tabbar */}
            <Tabbar value={active} onChange={handleTabChange}>
                {tabs.map((tab, index) => (
                    <Tabbar.Item 
                        key={index} 
                        icon={tab.icon}
                    > 
                    {tab.title}
                    </Tabbar.Item>
                ))}
            </Tabbar>
        </>
    )
}

export default MainLayout;