import { configureStore } from '@reduxjs/toolkit'
import filter from './Slice/filterSlice.js'

export const store = configureStore({
   reducer: {
      filter,
   },
})
