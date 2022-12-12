import React, { useState } from 'react'

export const Categories = () => {
   const [activeIndex, setActiveIndex] = useState(3)

   const onClickCategory = index => {
      setActiveIndex(index)
   }

   return (
      <div className='categories'>
         <ul>
            <li
               className={activeIndex === 0 ? 'active' : ''}
               onClick={() => onClickCategory(0)}
            >
               Все
            </li>
            <li
               className={activeIndex === 1 ? 'active' : ''}
               onClick={() => onClickCategory(1)}
            >
               Мясные
            </li>
            <li
               className={activeIndex === 2 ? 'active' : ''}
               onClick={() => onClickCategory(2)}
            >
               Вегетарианская
            </li>
            <li
               className={activeIndex === 3 ? 'active' : ''}
               onClick={() => onClickCategory(3)}
            >
               Гриль
            </li>
            <li
               className={activeIndex === 4 ? 'active' : ''}
               onClick={() => onClickCategory(4)}
            >
               Острые
            </li>
            <li
               className={activeIndex === 5 ? 'active' : ''}
               onClick={() => onClickCategory(5)}
            >
               Закрытые
            </li>
         </ul>
      </div>
   )
}
