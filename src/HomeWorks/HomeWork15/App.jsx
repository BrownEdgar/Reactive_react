import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import ROUTES from '../../routes'
import Header from './components/Header'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
export default function App() {
  return (
    <div className='App'>
    <Header/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.ABOUT} element={<About />}/>
        <Route path={ROUTES.PRODUCTS} element={<Products/>}/>
        <Route path={ROUTES.PRODUCT} element={<Product/>}/>
        <Route path={ROUTES.NEWS} element={<News/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </div>
  )
}
