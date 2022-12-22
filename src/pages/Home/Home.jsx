import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
import { Categories } from '../../components/Categories/Categories'
import { Pagination } from '../../components/Pagination/Pagination'
import { PizzaBlock } from '../../components/PizzaBlock/PizzaBlock'
import { PizzaBlockSkeleton } from '../../components/PizzaBlockSkeleton/PizzaBlockSkeleton'
import { Sorties, sortStates } from '../../components/Sorties/Sorties'
import useDebounce from '../../hooks/useDebounce'
import { paths } from '../../paths'
import { SearchContext } from '../../hooks/Search/SearchProvider'

import axios from 'axios'
import { setFilters } from '../../store/Slice/filterSlice'

export const Home = () => {
   const { categoryId, sortType, pageState } = useSelector(
      state => state.filters
   ) //передача состояния через reduxToolkit
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const isSearch = useRef(false)
   const isMounted = useRef(false)

   const { searchValue } = useContext(SearchContext) //использоавние хука для прокидывания пропсов
   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const debouncedSearchTerm = useDebounce(searchValue, 700) //задержка для поиска
   const search = debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''
   const sortSort = sortType.sort
   const sortNumber = sortType.number

   const fetchPizzas = () => {
      const category = categoryId === 0 ? '' : `category=${categoryId}`
      const sortSort = sortType.sort

      setIsLoading(true) //для того чтобы скелетон подгружался на каждом запросе
      axios
         .get(
            `${paths.url}/items?page=${pageState}&limit=8&${category}&sortBy=${sortSort}&order=${sortNumber}${search}`
         )

         .then(response => {
            setItems(response.data)
            setIsLoading(false)
         })
      window.scroll(0, 0) //чтобы при переходе на страницу с другой страницы автоматически страница переходилась вверх
   }

   useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1)) // substring делаем для отго чтобы убрать ? он нам при парсинге не нужен

         const sort = sortStates.find(obj => obj.sort === params.sortSort)

         dispatch(setFilters({ ...params, sort }))
         isSearch.current = true
      }
   }, [])

   useEffect(() => {
      window.scrollTo(0, 0)
      if (!isSearch.current) {
         fetchPizzas()
      }

      isSearch.current = false
   }, [categoryId, sortSort, pageState, search, sortNumber])

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
         <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
         <Pagination />
      </div>
   )
}
