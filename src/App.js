import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router'

import { Header } from './components/Header/Header'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'

import './scss/app.scss'

import { SearchProvider } from './hooks/Search/SearchProvider'
import { OnePizza } from './pages/Cart/OnePizza'

function App() {
   return (
      <div className='wrapper'>
         <SearchProvider>
            <Header />
            <div className='content'>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/pizza/:id' element={<OnePizza />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </div>
         </SearchProvider>
      </div>
   )
}

export default App
