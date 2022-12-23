import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   items: [],
}

export const cardSlice = createSlice({
   name: 'carts',
   initialState,
   reducers: {
      addItems: (state, action) => {
         const findItem = state.items.find(
            item => item.id === action.payload.id
         ) //ищем в нашем items похожий товар
         if (findItem) {
            // если товар нашелся то мы увеличиваем счетчик на ++
            findItem.count++
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
            }) //просто добавление товара в корзину и ставим count =1
         }
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price * item.count + total
         }, 0) // общий подсчет сколько стоит товар
      },
      removeItems: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload.id) // удаляем товар из корзины
      },
      clearItems: state => {
         state.items = []
         state.totalPrice = 0
      }, //полностью очищаем корзину
   },
})

export const { addItems, removeItems, clearItems } = cardSlice.actions

export default cardSlice.reducer
