import React, { useState } from 'react'
import { addItems } from '../../store/Slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export const PizzaBlock = ({ id, title, price, imageUrl, types, sizes }) => {
   const [sizeIndex, setSizeIndex] = useState(0)
   const [typeChange, setTypeChange] = useState(0)
   const cartItem = useSelector(state =>
      state.carts.items.find(item => item.id === id)
   ) // ищем наш товар если id совпадает то вытягиваем свойство count
   const typeNames = ['тонкое ', 'традиционное ']
   const dispatch = useDispatch()

   const addCount = cartItem ? cartItem.count : 0 // делаем проверку есть ли товар в корзине и взависимости от этого выддаем число товара в корзинеы

   const handleAddItems = () => {
      const item = {
         id,
         title,
         price,
         imageUrl,
         sizes: sizeIndex,
         types: typeNames[typeChange],
      }
      dispatch(addItems(item))
   }

   return (
      <div className='pizza-block'>
         <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
         <h4 className='pizza-block__title'>{title}</h4>
         <div className='pizza-block__selector'>
            <ul>
               {types.map(typeName => (
                  <li
                     key={typeName}
                     onClick={() => setTypeChange(typeName)}
                     className={typeChange === typeName ? 'active' : ''}
                  >
                     {typeNames[typeName]}
                  </li>
               ))}
            </ul>
            <ul>
               {sizes.map((size, i) => (
                  <li
                     key={i}
                     onClick={() => setSizeIndex(i)}
                     className={sizeIndex === i ? 'active' : ''}
                  >
                     {size} см.
                  </li>
               ))}
            </ul>
         </div>
         <div className='pizza-block__bottom'>
            <div className='pizza-block__price'>от {price} ₴</div>
            <button
               onClick={handleAddItems}
               className='button button--outline button--add'
            >
               <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path
                     d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                     fill='white'
                  />
               </svg>
               <span>Добавить</span>
               {addCount > 0 && <i>{addCount}</i>}
               {/* делаем чтобы показывалось
               сколько товарра заказывалось в штуках */}
            </button>
         </div>
      </div>
   )
}
