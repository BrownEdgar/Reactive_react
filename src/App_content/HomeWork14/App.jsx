import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Products from './pages/Products/Products'
import Navbar from './components/Navbar/Navbar'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import ROUTES from '../../routes'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path={ROUTES.CONTACT} element={<Contact />}/>
        <Route path={ROUTES.ERRORPAGE} element={<ErrorPage />} />
      </Routes>
    </div>
  )
}
