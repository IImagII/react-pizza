import React, { useContext, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../@types/hooks'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { Categories } from '../../components/Categories/Categories'
import { Pagination } from '../../components/Pagination/Pagination'
import { PizzaBlock, PizzaBlockSkeleton } from '../../../src/components'
import { Sorties, sortStates } from '../../components/Sorties/Sorties'
import useDebounce from '../../hooks/useDebounce'
import { SearchContext } from '../../hooks/Search/SearchProvider'
import { selectorFilter, setFilters } from '../../store/Slice/filterSlice'
import { axiosPizzas, selectorPizzas } from '../../store/Slice/pizzasSlice'

export const Home = () => {
   const { categoryId, sortType, pageState } = useAppSelector(selectorFilter) //передача состояния через reduxToolkit
   const { items, status, error } = useAppSelector(selectorPizzas) //передаем состояние нашего асинхронного запроса их redux
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const isSearch = useRef(false)
   const isMounted = useRef(false) //это нужно длятого чтобы понимать что делать при первой загрузке

   const { searchValue } = useContext(SearchContext) //использоавние хука для прокидывания пропсов

   const debouncedSearchTerm = useDebounce(searchValue, 700) //задержка для поиска
   const search = debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''
   const sortSort = sortType.sort
   const sortNumber = sortType.number

   const fetchPizzas = async () => {
      const category = categoryId === 0 ? '' : `category=${categoryId}`
      const sortSort = sortType.sort

      dispatch(
         axiosPizzas({
            category,
            sortSort,
            search,
            sortNumber,
            pageState,
         })
      ) //это наш созданный Thunk фсинхронный запрос из pizzasSlice

      window.scroll(0, 0) //чтобы при переходе на страницу с другой страницы автоматически страница переходилась вверх
   }
   //при первой загрузке  переносятся параметры в redux
   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1)) // substring делаем для отго чтобы убрать ? он нам при парсинге не нужен

         const sort = sortStates.find(obj => obj.sort === params.sortSort)

         dispatch(setFilters({ ...params, sort }))
         isSearch.current = true
      }
   }, [])
   //делается запрос общий со скролом вверх если бы первый рендер
   useEffect(() => {
      window.scrollTo(0, 0)
      if (!isSearch.current) {
         fetchPizzas()
      }

      isSearch.current = false
   }, [categoryId, sortSort, pageState, search, sortNumber])
   //тут берутся параметры из адресной строки

   useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            sortSort,
            sortNumber,
            categoryId,
            pageState,
         })
         navigate(`?${queryString}`) //через библиотеку формируем наши параметры
      }
      isMounted.current = true
   }, [categoryId, sortSort, pageState, sortNumber])

   const pizzas = items.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)

   const skeletons = [...new Array(6)].map((_, i) => (
      <PizzaBlockSkeleton key={i} />
   ))

   return (
      <div className='container'>
         <div className='content__top'>
            <Categories />
            <Sorties />
         </div>
         <h2 className='content__title'>Все пиццы</h2>
         <div className='content__items'>{status ? pizzas : skeletons}</div>
         {error && <h2>An error occurs:{error}</h2>}
         <Pagination />
      </div>
   )
}
