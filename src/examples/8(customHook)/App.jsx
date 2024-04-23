import React, { useState, useEffect } from 'react';



function useArray({ quantity = 21, min = 15, max = 69 }) {
  const [data, setdata] = useState(() => {
    return Array.from({ length: quantity }, () => Math.ceil(Math.random() * (max - min) + min))
  })

  return data
}


export default function App() {
  const data = useArray({ quantity: 21, min: 15, max: 69 })
  console.log(data)

  return (
    <div className='App'>

    </div>
  )
}
