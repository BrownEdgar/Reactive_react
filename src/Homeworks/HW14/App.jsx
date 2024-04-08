import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Products from './page/products/Products'
import Homes from './page/home/Homes'
import NavBar from './Navigation/NavBar'

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}
