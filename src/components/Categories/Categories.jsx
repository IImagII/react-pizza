import React, { useState } from 'react'

export const Categories = ({ value, onClickCategotyId }) => {
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
                  className={value === index ? 'active' : ''}
                  onClick={() => onClickCategotyId(index)}
               >
                  {catogorie}
               </li>
            ))}
         </ul>
      </div>
   )
}
