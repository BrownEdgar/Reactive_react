import React, { useState } from 'react'

function useArray({ quantity = 21, min = 15, max = 69 }) {
    const [arr, setArr] = useState(() => {
        return Array.from({length: quantity}, () => Math.ceil(Math.random() * (max - min) + min))
    })

  return arr
}

export default useArray;