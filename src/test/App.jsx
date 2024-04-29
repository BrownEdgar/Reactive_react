import moment from 'moment'
import React, { useState } from 'react'

export default function App() {
  const [x, setX] = useState(moment('1889 04 20'))
  console.log()
  return (
    <div>
      <h1>{moment().to([2025, 5, 29])}</h1>
    </div>
  )
}
