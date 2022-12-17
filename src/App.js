import { Route, Routes } from 'react-router'

import { Header } from './components/Header/Header'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'

import './scss/app.scss'
import { useState } from 'react'

function App() {
   const [searchValue, setSearchValue] = useState('')

   return (
      <div className='wrapper'>
         <Header searchValue={searchValue} setSearchValue={setSearchValue} />
         <div className='content'>
            <Routes>
               <Route
                  path='/'
                  element={
                     <Home
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                     />
                  }
               />
               <Route path='/cart' element={<Cart />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
