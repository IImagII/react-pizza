import React from 'react'
import { useAppDispatch, useAppSelector } from '../../@types/hooks'
import { setCategoryId } from '../../store/Slice/filterSlice'

export const Categories = () => {
   const categoryId = useAppSelector(state => state.filters.categoryId)
   const dispatch = useAppDispatch()

   const categories: Array<string> = [
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
