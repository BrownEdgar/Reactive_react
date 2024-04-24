import React, { useState, useEffect } from 'react';
import useCount from './useCount';





export default function App() {
  const data = useCount({ type: 'odd' })
  console.log(data)
  return (
    <div className='App'>

    </div>
  )
}
