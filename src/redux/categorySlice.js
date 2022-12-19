import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryId: 0,
}

export const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {
      clickCategoryId: (state, action) => {
         state.value = action.payload
      },
   },
})

export const { clickCategoryId } = categorySlice.actions

export default categorySlice.reducer
