import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber] = useState(0)

  return (
  
      
    
    <>
      
      <h2>HERE IS FIRST TASK OF REACT-JS</h2>
    <div className='box'>
      <h3>Sunaina Talreja</h3>
      <button onClick={function(){alert("my name is sunaina Talreja")}}> please click me</button>
    </div>
    
     
      
      
    </>
  )
}


