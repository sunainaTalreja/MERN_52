import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>HERE IS FIRST TASK</h1>
      <div className="task">
        <h2>SUNAINA TALREJA</h2>
        <button onClick={function(){alert("my name is Sunaina Talreja")}} >please click me</button>
        
      </div>
     
    </>
  )
}

export default App
