import React from 'react'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Navbar from './components/NavBar/NavBar'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'
import ErrorPage from './pages/ErrorPage/ErrorPage'

export default function App() {
  return (
    <div className='App'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </div>
  )
}
