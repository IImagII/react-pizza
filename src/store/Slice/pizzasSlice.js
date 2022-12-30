import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { paths } from '../../paths'

// type IPizza = {
//    items: []
//    status: false
//    error: null
// }
// interface IParams {
//    category: string
//    sortSort: string
//    search: string
//    sortNumber: string
//    pageState: string
// }

export const axiosPizzas = createAsyncThunk(
   'pizzas/fetchPizzasStatus',
   async (params: IParams, { rejectWithValue }) => {
      const { category, sortSort, search, sortNumber, pageState } = params
      try {
         const { data } = await axios.get(
            `${paths.url}/items?page=${pageState}&limit=8&${category}&sortBy=${sortSort}&order=${sortNumber}${search}`
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const initialState: IPizza = {
   items: [],
   status: false,
   error: null,
}

export const pizzasSlice = createSlice({
   name: 'pizzas',
   initialState,
   reducers: {},
   extraReducers: {
      //Обрабатываем предзагрузку то есть загрузку нашего скелетона
      [axiosPizzas.pending]: state => {
         state.status = false
         state.error = null
      },
      [axiosPizzas.fulfilled]: (state, action) => {
         //Добавляем пицц в наш массив
         state.status = true
         state.items = action.payload
      },
      // обрабатываем ошибку
      [axiosPizzas.rejected]: (state, action) => {
         state.status = true
         state.items = []
         state.error = action.payload
      },
   },
})
export const selectorPizzas = state => state.pizzas

export default pizzasSlice.reducer
