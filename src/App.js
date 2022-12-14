import { Route, Routes } from 'react-router'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'

import './scss/app.scss'

function App() {
   return (
      <div className='wrapper'>
         <Header />
         <div className='content'>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/cart' element={<Cart />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
