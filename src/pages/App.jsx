import React from 'react'
import './App.css'
import Home from "./Home/Home";
import About from "./About/About";
import OurProducts from "./OurProducts/OurProducts";
import News from "./News/News";
import ContactUs from "./ContactUs/ContactUs";
import Menu from "../Components/Menu/Menu";
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
