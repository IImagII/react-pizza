import { createContext, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router'

import { Header } from './components/Header/Header'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'

import './scss/app.scss'

import { SearchProvider } from './hooks/Search/SearchProvider'
import { OnePizza } from './pages/Cart/OnePizza'
import { MainLayout } from './layouts/MainLayout'

function App() {
   return (
      <Routes>
         <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<OnePizza />} />
            <Route path='*' element={<NotFound />} />
         </Route>
      </Routes>
   )
}

export default App
