import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   categoryId: 0,
   sortType: {
      name: 'популярности по ув.',
      sort: 'rating',
      number: 'desc',
   },
   pageState: 1,
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
      setPageState: (state, action) => {
         state.pageState = action.payload
      },
   },
})

export const { setCategoryId, setSortState, setPageState } = filterSlice.actions

export default filterSlice.reducer
