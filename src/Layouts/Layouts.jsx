import React from "react"
import Navbar from "../Lessons/Lesson14/NavBar"
import { Outlet } from "react-router-dom"

function Layouts() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <footer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum, repellat assumenda doloribus expedita iste labore aut eligendi libero unde sint facilis. Nulla maiores, deleniti perferendis sapiente possimus blanditiis maxime.</p>
        </footer>
    </div>
  )
}

export default Layouts