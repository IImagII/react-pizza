import React, { useState } from 'react'

export const Categories = () => {
   const [activeIndex, setActiveIndex] = useState(0)

   const categories = [
      'Все',
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые',
   ]

   const onClickCategory = index => {
      setActiveIndex(index)
   }

   return (
      <div className='categories'>
         <ul>
            {categories.map((catogorie, index) => (
               <li
                  key={index}
                  className={activeIndex === index ? 'active' : ''}
                  onClick={() => onClickCategory(index)}
               >
                  {catogorie}
               </li>
            ))}
         </ul>
      </div>
   )
}
