import { useEffect } from 'react'
import { useState } from 'react'
import { Categories } from './components/Categories/Categories'
import { Header } from './components/Header/Header'
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock'
import { PizzaBlockSkeleton } from './components/PizzaBlockSkeleton/PizzaBlockSkeleton'
import { Sorties } from './components/Sorties/Sorties'

import './scss/app.scss'

function App() {
   const [items, setItems] = useState([])

   useEffect(() => {
      fetch('https://6398b9fffe03352a94dc96b2.mockapi.io/items')
         .then(response => response.json())
         .then(response => setItems(response))
   }, [])

   return (
      <div className='wrapper'>
         <Header />
         <div className='content'>
            <div className='container'>
               <div className='content__top'>
                  <Categories />
                  <Sorties />
               </div>
               <h2 className='content__title'>Все пиццы</h2>
               <div className='content__items'>
                  {items.map(pizza => (
                     <PizzaBlockSkeleton {...pizza} key={pizza.id} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
