import React, { useState } from 'react'

export default function useArray(arr) {
  const [aray, setAray] = useState(arr)

  const push = (n) => {
    setAray([...aray, n])
  }

  const clear = () => {
    setAray([])
  }

  const update = (index, changeMember) => {
    setAray(() => {
      return aray.toSpliced(index, 1, changeMember)
    })
  }

  const sort = (array) => {
    setAray((prevArr) => {
      return prevArr.toSorted((a, b) => a - b)
    })
  }

  return {
    aray, push, clear, update, sort
  }
}
