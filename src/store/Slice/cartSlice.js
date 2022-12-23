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
         state.items.push(action.payload)
         state.totalPrice = state.items.reduce((total, item) => {
            return item.price + total
         }, 0)
      },
      removeItems: (state, action) => {
         state.items = state.items.filter(item => item !== action.payload)
      },
      clearItems: state => {
         state.items = []
      },
   },
})

export const { addItems, removeItems, clearItems } = cardSlice.actions

export default cardSlice.reducer
