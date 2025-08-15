import { 
  useState,
  useEffect
} from 'react'
import './App.css'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('count', count);
  })
  return (
    <>
     <div>{count}</div>
     <button onClick={() => setCount(count + 1)}>增加</button>
     <Button >CLick Me </Button>
    </>
  )
}

export default App
