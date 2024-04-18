import React, { useState } from 'react'

export default function useArray() {
  const [data, setData] = useState(initialState)

  const push = (elem) =>{
    setData((state) => [...state, elem]) 
  }


  return (
    <div>useArray</div>
  )
}
