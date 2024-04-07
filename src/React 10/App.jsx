import React from 'react'
import './App.scss'
import Menu from "./Components/Menu/Menu";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Routes, Route } from 'react-router-dom'
import routes from "../routes";
import ROUTES from '../routes';

export default function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.Products} element={<Products />}></Route>
      </Routes>
    </div>
  )
}
