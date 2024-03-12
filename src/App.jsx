import React from 'react'
import Todos from './components/component_1/App'
import Comments from './components/component_2/App'
import Users from './components/component_3/App'
import Posts from './components/component_4/App'

export default function App() {
  return (
    <div>
      <Todos/>
      <Comments/>
      <Users/>
      <Posts/>
    </div>
  )
}
