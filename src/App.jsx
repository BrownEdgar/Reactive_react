import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <h1>Hello react with <span>VITE</span></h1>
    </div>
  )
}

export default App