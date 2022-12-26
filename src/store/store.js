import { configureStore } from '@reduxjs/toolkit'
import filters from './Slice/filterSlice.js'
import carts from './Slice/cartSlice.js'
import pizzas from './Slice/pizzasSlice.js'

export const store = configureStore({
   reducer: {
      filters,
      carts,
      pizzas,
   },
})
