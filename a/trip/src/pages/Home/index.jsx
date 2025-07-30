import useTitle from '@/hooks/useTitle';
import { showToast } from '@/components/Toast/toastController';
import {
    Button
} from "react-vant"
const Home = () => {
    useTitle("奶龙首页");
    return (
        <>
            Home
            <Button 
            type='primary'
            onClick={() => showToast(1, 2, 3)}>显示Toast</Button>
        </>
    )
}

export default Home