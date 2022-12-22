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
      setFilters: (state, action) => {
         state.pageState = Number(action.payload.pageState)
         state.sortType.sort = action.payload.sortType
         state.categoryId = Number(action.payload.categoryId)
      },
   },
})

export const { setCategoryId, setSortState, setPageState, setFilters } =
   filterSlice.actions

export default filterSlice.reducer
