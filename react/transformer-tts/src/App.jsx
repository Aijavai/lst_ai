import { useEffect, useRef, useState } from 'react'
import './App.css'
import Progress from './components/Progress'
import AudioPlayer from './components/AudioPlayer' 
import {
  SPEAKERS,
  DEFAULT_SPEAKER
} from './constants'

function App() {
  // 界面状态
  // llm ready 大模型准备好了不？
  const [ready, setReady] = useState(null);
  // 按钮点击 防止多次点击
  const [disabled, setDisabled] = useState(false);
  // 进度条数组
  const [progressItems, setProgressItems] = useState([]);
  // 表单文本
  const [text, setText] = useState('I love Hugging Face!');
  // 音色
  const [selectedSpeaker, setSelectedSpeaker] = useState(DEFAULT_SPEAKER);
  const [output, setOutput] = useState(null)

  const worker = useRef(null)
  useEffect(() => {
    // 引入transformer
    // http://localhost:5173/worker.js  
    worker.current = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module'
    })
    worker.current.postMessage({
      text: '灵不灵，奔驰s680'
    })
    // 事件监听器接收消息
    // 要移除事件监听器，给一个事件名
    const onMessageReceived = () => {

    }
    worker.current.onmessage = onMessageReceived;
    // 移除事件
    return () => worker.current.removeEventListener('message', onMessageReceived);
  },[])
  return (
    <div className='flex'>
      {/* <Progress text='model1' percentage={12} />
      <Progress text='model2' percentage={32} />
      <Progress text='model3' percentage={100} /> */}
      <AudioPlayer audioUrl="https://cdn.pixabay.com/audio/2023/08/07/audio_f786227e11.mp3" mimeType="audio/mpeg" />
    </div>
  )
}

export default App