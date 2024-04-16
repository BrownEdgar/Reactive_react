import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import ROUTES from './routes'
import {Home, News, Products, Contact, Product} from './pages/index'

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.NEWS} element={<News/>}/>
          <Route path={ROUTES.PRODUCTS} element={<Products/>}/>
          <Route path={ROUTES.PRODUCT} element={<Product/>}/>
          <Route path={ROUTES.CONTACT} element={<Contact/>}/>
      </Routes>
    </div>
  )
}
