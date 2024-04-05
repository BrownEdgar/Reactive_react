import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Product from './pages/Products/Product'
export default function App() {
  return (
    <div className='App'>
    <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  )
}
