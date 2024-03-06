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
      <button onClick={handleClick}>count: {count} </button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus nisi ipsum omnis modi magni quaerat necessitatibus excepturi nemo id sequi nesciunt, architecto suscipit minima labore quo distinctio aspernatur fugiat molestias optio reprehenderit perspiciatis? Deserunt nam reprehenderit tenetur veniam veritatis?</p>
    </div>
  )
}

export default App