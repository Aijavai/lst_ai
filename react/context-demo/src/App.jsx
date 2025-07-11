import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import { ThemeContext } from './ThemeContext'

function App() {
const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
      <button onClick={() => setTheme("dark")}>切换主题</button>
      {/* <Uncle /> */}
      {/* <Parent>  
        <child>
          <GrandChild> 
            <GreatGrandChild>
             
            </GreatGrandChild>
          </GrandChild>
        </child>
      </Parent> */}
    </ThemeContext.Provider>
  )
}

export default App
