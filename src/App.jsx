import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import ROUT from './Navbar/route'
import Home from './Navbar/page/Home/Home'
import Navbar from './Navbar/Navbar'
import About from './Navbar/page/About/About'
import Properties from './Navbar/page/Properties/Properties'
import Services from './Navbar/page/Services/Services'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUT.HOME} element={<Home />} />
        <Route path={ROUT.ABOUT} element={<About />} />
        <Route path={ROUT.PROPERTIES} element={<Properties />} />
        <Route path={ROUT.SERVICES} element={<Services />} />
      </Routes>
    </div>
  )
}
