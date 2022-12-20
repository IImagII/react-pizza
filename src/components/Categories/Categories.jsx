import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../../store/Slice/filterSlice'

export const Categories = () => {
   const categoryId = useSelector(state => state.filters.categoryId)
   const dispatch = useDispatch()
   const categories = [
      'Все',
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые',
   ]

   return (
      <div className='categories'>
         <ul>
            {categories.map((catogorie, index) => (
               <li
                  key={index}
                  className={categoryId === index ? 'active' : ''}
                  onClick={() => dispatch(setCategoryId(index))}
               >
                  {catogorie}
               </li>
            ))}
         </ul>
      </div>
   )
}
