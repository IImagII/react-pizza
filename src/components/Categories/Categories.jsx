import React, { useState } from 'react'

export const Categories = () => {
   const [activeIndex, setActiveIndex] = useState(3)
   return (
      <div className='categories'>
         <ul>
            <li className={activeIndex === 0 ? 'active' : ''}>Все</li>
            <li className={activeIndex === 1 ? 'active' : ''}>Мясные</li>
            <li className={activeIndex === 2 ? 'active' : ''}>
               Вегетарианская
            </li>
            <li className={activeIndex === 3 ? 'active' : ''}>Гриль</li>
            <li className={activeIndex === 4 ? 'active' : ''}>Острые</li>
            <li className={activeIndex === 5 ? 'active' : ''}>Закрытые</li>
         </ul>
      </div>
   )
}
