import React from 'react'
import './App.css'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurProducts from "./pages/OurProducts/OurProducts";
import News from "./pages/News/News";
import ContactUs from "./pages/ContactUs/ContactUs";
import Menu from "./Components/Menu/Menu";
import {Routes,Route } from 'react-router-dom'



export default function App() {
  return (
    <div className='App'>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ourproducts' element={<OurProducts/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
    </div>
  )
}
