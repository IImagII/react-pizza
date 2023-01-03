import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { paths } from '../../paths'
import { RootState } from '../store'
import { PizzaBloCkType } from '../../components/PizzaBlock/PizzaBlock'

export enum Status {
   LOADING = 'loading',
   SUCCESS = 'success',
   ERROR = 'error',
}

type IPizza = {
   items: PizzaBloCkType[]
   status: Status
   error: string | null | undefined
}
interface IParams {
   category: string
   sortSort: string
   search: string
   sortNumber: string
   pageState: number
}

export const axiosPizzas = createAsyncThunk<
   PizzaBloCkType[], //тут мы типизировали наш ответ от сервера
   IParams, // тут мы типизировали наши параметры которые мы передаем
   { rejectValue: string } //тут мы типизировали нашу ошибку если таковая будет
>('pizzas/fetchPizzasStatus', async (params, { rejectWithValue }) => {
   const { category, sortSort, search, sortNumber, pageState } = params
   try {
      const { data } = await axios.get<PizzaBloCkType[]>(
         `${paths.url}/items?page=${pageState}&limit=8&${category}&sortBy=${sortSort}&order=${sortNumber}${search}`
      )
      return data
   } catch (e) {
      return rejectWithValue(`Ошибка ${e}`)
   }
})

const initialState: IPizza = {
   items: [],
   status: Status.LOADING,
   error: null,
}

export const pizzasSlice = createSlice({
   name: 'pizzas',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(axiosPizzas.pending, state => {
            state.status = Status.LOADING
            state.error = null
         })
         .addCase(axiosPizzas.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
         })
         .addCase(axiosPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
            state.error = action.payload
         })
   },
})
export const selectorPizzas = (state: RootState) => state.pizzas

export default pizzasSlice.reducer
