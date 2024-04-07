import React from 'react'
import { About, Contact, ErrorPage, Home, News, Post, Posts, Products } from '../../Posts'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layouts from '../../Layouts/Layouts'
import ROUTES from '../../routes'
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
         <Route path={ROUTES.HOME} element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.NEWS} element={<News />} />
            <Route path={ROUTES.CONTACT} element={<Contact />}/>
            <Route path={ROUTES.POSTS} element={<Posts />}/>
            <Route path={ROUTES.POST} element={<Post />}/>
            <Route path={ROUTES.ERRORPAGE} element={<ErrorPage />} />
            <Route path='*' element={<Navigate  to='/' />} />
         </Route>
      </Routes>
    </div>
  )
}