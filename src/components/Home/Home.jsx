import React, { useEffect, useState } from 'react'
import { Categories } from '../Categories/Categories'
import { PizzaBlock } from '../PizzaBlock/PizzaBlock'
import { PizzaBlockSkeleton } from '../PizzaBlockSkeleton/PizzaBlockSkeleton'
import { Sorties } from '../Sorties/Sorties'

export const Home = () => {
   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetch('https://6398b9fffe03352a94dc96b2.mockapi.io/items')
         .then(response => response.json())
         .then(response => {
            setItems(response)
            setIsLoading(false)
         })
   }, [])
   return (
      <div className='container'>
         <div className='content__top'>
            <Categories />
            <Sorties />
         </div>
         <h2 className='content__title'>Все пиццы</h2>
         <div className='content__items'>
            {isLoading
               ? [...new Array(6)].map((_, i) => <PizzaBlockSkeleton key={i} />)
               : items.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)}
         </div>
      </div>
   )
}
