import { configureStore } from '@reduxjs/toolkit'
import filters from './Slice/filterSlice.js'

export const store = configureStore({
   reducer: {
      filters,
   },
})
