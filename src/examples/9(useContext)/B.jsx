import React from 'react'
import C from './C'

export default function B() {
  console.log('B Render')
  return (
    <div>
      <h1>Component B</h1>
      <C />
    </div>
  )
}
