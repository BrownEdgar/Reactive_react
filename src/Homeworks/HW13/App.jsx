import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About, Contact, ErrorPage,  Home, News, Products } from './pages';
import Layouts from './Layouts/Layouts';
import ROUTES from './routes' 
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.NEWS} element={<News />} />
          <Route path={ROUTES.CONTACTS} element={<Contact />}/>
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}
