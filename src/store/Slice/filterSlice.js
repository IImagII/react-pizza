import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryId: 0,
   sortType: {
      name: 'популярности по ув.',
      sort: 'rating',
      number: 'desc',
   },
}

export const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      setCategoryId: (state, action) => {
         state.categoryId = action.payload
      },
      setSortState: (state, action) => {
         state.sortType = action.payload
      },
   },
})

export const { setCategoryId, setSortState } = filterSlice.actions

export default filterSlice.reducer
