import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Products from './pages/Products/Products'
import Navbar from './components/NavBar/Navbar'
import ErrorPage from './pages/ErorrPage/ErrorPage'
import { Routes, Route } from 'react-router-dom'
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/News' element={<News />} />
        <Route path='/Contacts' element={<Contact />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}