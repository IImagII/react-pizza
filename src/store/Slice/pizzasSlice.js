import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { paths } from '../../paths'

export const axiosPizzas = createAsyncThunk(
   'pizzas/fetchPizzasStatus',
   async (params, { rejectWithValue }) => {
      const { category, sortSort, search, sortNumber, pageState } = params
      try {
         const { data } = await axios.get(
            `${paths.url}/items?page=${pageState}&limit=8&${category}&sortBy=${sortSort}&order=${sortNumber}${search}`
         )
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
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

// export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
