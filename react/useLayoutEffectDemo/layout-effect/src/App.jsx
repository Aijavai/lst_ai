import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef 
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象
//   const boxRef = useRef();
//   console.log(boxRef.current, boxRef);

//   useEffect(()=> {
//     console.log('useEffect height', boxRef.current.offsetHeight);
//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{height: 100}}></div>
//     </>
//   )
// }

// function App() {
//   const ref = useRef();
//   useLayoutEffect(() => {
//     ref.current.style.height = '200px';
//     ref.current.style.width = '200px';
//   }, [])
//   return (
//     <>
//       <div ref={ref} style={{height: 100, backgroundColor: 'red'}}>内容</div>
//     </>
//   )
// }
// 弹窗
function Modal() {
  const ref = useRef();
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height)/2}px`;
  },[])

  return <div ref={ref} style={{position: 'absolute'}}>我是弹窗</div>
}

function App() {
  return (
    <>
      <Modal />
    </>
  )
}

export default App