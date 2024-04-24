import React, { useState } from 'react'

export default function useArray(arr) {
  const [aray, setAray] = useState(arr)

  const push = (n) => {
    setAray([...aray, n])
  }

  const clear = () => {
    setAray([])
  }

  const delItem = (index) => {
    setAray(() => {
      return aray.toSpliced(index, 1)
    })
  }

  const filter = (item) => {
    setAray(() => {
      return aray.filter(elem => elem < item)
    })
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
    aray, push, clear, update, sort, delItem, filter
  }
}
