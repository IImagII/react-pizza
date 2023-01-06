import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'

import './scss/app.scss'

import { MainLayout } from './layouts/MainLayout'

const Cart = React.lazy(() => import('./pages/Cart/Cart'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))
const OnePizza = React.lazy(() => import('./pages/Cart/OnePizza'))

const App = () => {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            <Route path='/' element={<MainLayout />}>
               <Route path='/' element={<Home />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/pizza/:id' element={<OnePizza />} />
               <Route path='*' element={<NotFound />} />
            </Route>
         </Routes>
      </Suspense>
   )
}

export default App
