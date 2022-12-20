import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Categories } from '../../components/Categories/Categories'
import { Pagination } from '../../components/Pagination/Pagination'
import { PizzaBlock } from '../../components/PizzaBlock/PizzaBlock'
import { PizzaBlockSkeleton } from '../../components/PizzaBlockSkeleton/PizzaBlockSkeleton'
import { Sorties } from '../../components/Sorties/Sorties'
import useDebounce from '../../hooks/useDebounce'
import { paths } from '../../paths'
import { SearchContext } from '../../hooks/Search/SearchProvider'

export const Home = () => {
   const { categoryId, sortType } = useSelector(state => state.filters) //передача состояния через reduxToolkit

   const { searchValue } = useContext(SearchContext) //использоавние хука для прокидывания пропсов
   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const [page, setPage] = useState(1) //состояние пагинации

   const debouncedSearchTerm = useDebounce(searchValue, 700) //задержка для поиска

   const category = categoryId === 0 ? '' : `category=${categoryId}`
   const sortSort = sortType.sort
   const sortNumber = sortType.number
   const search = debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''
   const pageID = debouncedSearchTerm.length > 0 ? 1 : page //для того чтобы перебрасывало на первую страницу при активации поиска

   useEffect(() => {
      setIsLoading(true) //для того чтобы скелетон подгружался на каждом запросе
      fetch(
         `${paths.url}/items?page=${pageID}&limit=8&${category}&sortBy=${sortSort}&order=${sortNumber}${search}`
      )
         .then(response => response.json())
         .then(response => {
            setItems(response)
            setIsLoading(false)
         })
      window.scroll(0, 0) //чтобы при переходе на страницу с другой страницы автоматически страница переходилась вверх
   }, [sortSort, categoryId, search, pageID, sortNumber])

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
         <Pagination setPage={setPage} />
      </div>
   )
}
