import React, { useState } from 'react'
import { MyContenxt } from './contexts/Contexts'
import './App.scss'
import A from './A'

function App() {
    const [data, setData] = useState(155) //qani vor nerqevum trvaca value en mer verevi 8-y antesvuma u grvuma useState-i mejiny
    const handleClick = () => {
        setData(data + 1)
    }
  return (
    <div>
        <h1>Component App</h1>
        <MyContenxt.Provider value={{data, handleClick}}>
            <A /> 
        </MyContenxt.Provider>   
    </div>
  )
}

export default App