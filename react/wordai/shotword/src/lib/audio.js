// 多个直接输出
export const generateAudio = async(text) => {
    const token = import.meta.VITE_AUDIO_ACCESS_TOKEN;
    const appId = import.meta.env.VITE_AUDIO_APP_ID;
    const clusterID = import.meta.env.VITE_AUDIO_CLUSTER_ID;
    const voiceName = import.meta.env.VITE_AUDIO_VOICE_NAME;


    const endpoint = "/tts/api/v1/tts";
    const headers = {
        "Content-Type": `application/json`,
        "Authorization": `Bearer ${token}`,
    }
    const payload = {
        app: {
            appid: appId,
            token, // es6 省略对象写法
            cluster: clusterId
        },
        user: {
            uid:'bearbobo'
        },
        audio: {
            
        }
    }
}

import { generateAudio } from './lib/audio'
import App from "./App"