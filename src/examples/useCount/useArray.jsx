import React, { useState, useEffect } from 'react'

export default function useArray({ quantity = 21, min = 15, max = 69 }) {
  const [data, setData] = useState(() => {
    return Array.from({length: quantity}, () => Math.trunc(Math.random() * (max - min) + min))
  })
  return data
}
