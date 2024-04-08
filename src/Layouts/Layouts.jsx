import React from 'react'
import Navbar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic beatae modi unde facere vel saepe repudiandae error nesciunt quo?</p>
      </footer>
    </>
  )
}
