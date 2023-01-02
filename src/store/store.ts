import { configureStore } from '@reduxjs/toolkit'
import filters from './Slice/filterSlice'
import carts from './Slice/cartSlice'
import pizzas from './Slice/pizzasSlice'

export const store = configureStore({
   reducer: {
      filters,
      carts,
      pizzas,
   },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
