import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { About, Contact, Home, Post, Posts } from './pages'
import Layouts from './Layouts/Layouts'
import ROUTES from './routes'

import './App.scss'

export default function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path={ROUTES.HOME} element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.POSTS} element={<Posts />} />
          <Route path={ROUTES.POST} element={<Post />} />
          {/* <Route path='*' element={<ErrorPage />} /> */}
          <Route path='*' element={<Navigate to='/' />} />
        </Route>

      </Routes>

    </div>
  )
}
