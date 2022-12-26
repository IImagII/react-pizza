import React, { useEffect } from 'react'
import { selectorCarts } from '../../store/Slice/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const OnePizza = () => {
   const { items } = useSelector(selectorCarts)
   const { id } = useParams()

   useEffect(() => {
      axios.get('')
   }, [])

   return (
      <>
         <img src='' alt='' />
         <h2>nbnk</h2>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            nisi deserunt accusantium unde atque nam id assumenda architecto
            culpa placeat!
         </p>
         <h4>Цена за шт:</h4>
      </>
   )
}
