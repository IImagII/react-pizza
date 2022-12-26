import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   totalPrice: 0,
   items: [],
   addCount: 0,
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
         state.addCount = state.items.reduce((sum, item) => sum + item.count, 0) //делаем общий подсчет количества товаров
      },
      minusItems: (state, action) => {
         const findItem = state.items.find(item => item.id === action.payload) //ищем в нашем items похожий товар
         if (findItem) {
            // если товар нашелся то мы уменьшаем счетчик на -- в корзине
            findItem.count--
         }
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price * item.count + total
         }, 0) // общий подсчет сколько стоит товар
         state.addCount = state.items.reduce((sum, item) => sum + item.count, 0) //делаем общий подсчет количества товаров
      },
      removeItems: (state, action) => {
<<<<<<< HEAD
         state.items = state.items.filter(item => item.id !== action.payload.id) // удаляем товар из корзины
=======
         state.items = state.items.filter(item => item.id !== action.payload) // удаляем товар из корзины
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price * item.count + total
         }, 0) // общий подсчет сколько стоит товар
         state.addCount = state.items.reduce((sum, item) => sum + item.count, 0) //делаем общий подсчет количества товаров
>>>>>>> 74473a1f3742c35adcd93afd8cca63e39111fc3d
      },
      clearItems: state => {
         state.items = []
         state.totalPrice = 0
<<<<<<< HEAD
=======
         state.addCount = 0
>>>>>>> 74473a1f3742c35adcd93afd8cca63e39111fc3d
      }, //полностью очищаем корзину
   },
})
export const selectorCarts = state => state.carts
export const { addItems, removeItems, clearItems, minusItems } =
   cardSlice.actions

export default cardSlice.reducer
