import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Products from './page/products/Products'
import Homes from './page/home/Homes'
import NavBar from './Navigation/NavBar'
import Product from './page/product/Product'
import ROUT from './route'

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path={ROUT.HOME} element={<Homes />} />
        <Route path={ROUT.PRODUCTS} element={<Products />} />
        <Route path={ROUT.PRODUCT} element={<Product />} />
      </Routes>
    </div>
  )
}
