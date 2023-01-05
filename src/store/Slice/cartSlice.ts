import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzaBloCkType } from '../../components/PizzaBlock/PizzaBlock'
import { RootState } from '../store'

type ICartType = {
   totalPrice: number
   items: PizzaBloCkType[] // обязательно добавлять в конце [] а не просто импортировать уже созданный тип
   addCount: number
}

const initialState: ICartType = {
   //мы заменили на функцию чтобы доставалось значени из нашего localStorage
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
            findItem.count!++
         } else {
            state.items.push({
               ...action.payload,
               count: 1,
            }) //просто добавление товара в корзину и ставим count =1
         }
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price * item.count! + total
         }, 0) // общий подсчет сколько стоит товар
         state.addCount = state.items.reduce(
            (sum, item) => sum + item.count!,
            0
         ) //делаем общий подсчет количества товаров
      },
      minusItems: (state, action: PayloadAction<string>) => {
         const findItem = state.items.find(item => item.id === action.payload) //ищем в нашем items похожий товар
         if (findItem) {
            // если товар нашелся то мы уменьшаем счетчик на -- в корзине
            findItem.count!--
         }
         state.items = state.items.filter(obj => obj.count !== 0) //этой строкой мы убераем товар из конзины если у нас количество товара равно 0
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price * item.count! + total
         }, 0) // общий подсчет сколько стоит товар
         state.addCount = state.items.reduce(
            (sum, item) => sum + item.count!,
            0
         ) //делаем общий подсчет количества товаров
      },
      removeItems: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload) // удаляем товар из корзины
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price * item.count! + total
         }, 0) // общий подсчет сколько стоит товар
         state.addCount = state.items.reduce(
            (sum, item) => sum + item.count!,
            0
         ) //делаем общий подсчет количества товаров
      },
      clearItems: state => {
         state.items = []
         state.totalPrice = 0
         state.addCount = 0
      }, //полностью очищаем корзину
   },
})
export const selectorCarts = (state: RootState) => state.carts
export const selectorCartsById = (id: string) => (state: RootState) =>
   state.carts.items.find(item => item.id === id)
export const { addItems, removeItems, clearItems, minusItems } =
   cardSlice.actions

export default cardSlice.reducer