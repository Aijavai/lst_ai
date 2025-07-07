import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <div style={{fontSize:'12px', width: '8.3333rem', height: '8.3333rem', background: 'red'}}></div>
     <div style={{fontSize:'14px', width: '3.5714rem', height: '3.5714rem', background: 'red'}}></div> */}
    {/* 开发单位就是组件 */}
      <Todos />
    </>
  )
}

export default App
