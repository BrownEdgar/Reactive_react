import React, { useState } from 'react'

export default function useArray(yourArray) {

  const [array, setArray] = useState(yourArray)

  const set = (newArr) => {
    setArray(newArr)
  }
  const push = (number) => {
    setArray([...array, number])
  }
  const clear = () => {
    setArray([])
  }
  const filter = (number) => {
    setArray(() => {
      return array.filter(number)
    })
  }
  const remove = (index) => {
    setArray(() => {
      return array.toSpliced(index, 1)
    })
  }
  const update = (index, number) => {
    setArray(() => {
      return array.toSpliced(index, 1, number)
    })
  }







  

  return { array, set, push, remove, filter, update, clear }
  
}

