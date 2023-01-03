import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type ISortType = {
   name: string
   sort: string // это делается чтобы можно было передавать только определенные строки
   number: string
}

type IFilterState = {
   categoryId: number
   sortType: ISortType
   pageState: number
}

const initialState: IFilterState = {
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
      setCategoryId: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload
      },
      setSortState: (state, action: PayloadAction<ISortType>) => {
         state.sortType = action.payload
      },
      setPageState: (state, action: PayloadAction<number>) => {
         state.pageState = action.payload
      },
      setFilters: (state, action) => {
         state.pageState = Number(action.payload.pageState)
         state.sortType.sort = action.payload.sortType
         state.categoryId = Number(action.payload.categoryId)
      },
   },
})
export const selectorFilter = (state: RootState) => state.filters
export const { setCategoryId, setSortState, setPageState, setFilters } =
   filterSlice.actions

export default filterSlice.reducer
