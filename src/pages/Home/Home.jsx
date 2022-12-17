import React, { useEffect, useState } from 'react'

import { Categories } from '../../components/Categories/Categories'
import { PizzaBlock } from '../../components/PizzaBlock/PizzaBlock'
import { PizzaBlockSkeleton } from '../../components/PizzaBlockSkeleton/PizzaBlockSkeleton'
import { Sorties } from '../../components/Sorties/Sorties'
import useDebounce from '../../hooks/useDebounce'

export const Home = ({ searchValue, setSearchValue }) => {
   const [items, setItems] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [categoryId, setCategoryId] = useState(0) // состояние категории
   const [sortType, setSortType] = useState({
      name: 'популярности',
      sort: 'rating',
   }) // состояние сортировки

   const debouncedSearchTerm = useDebounce(searchValue, 700) //задержка для поиска
   const category = categoryId === 0 ? '' : `category=${categoryId}`
   const search = debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''

   useEffect(() => {
      setIsLoading(true) //для того чтобы скелетон подгружался на каждом запросе
      fetch(
         `https://6398b9fffe03352a94dc96b2.mockapi.io/items?${category}&sortBy=${sortType.sort}&order=asc${search}`
      )
         .then(response => response.json())
         .then(response => {
            setItems(response)
            setIsLoading(false)
         })
      window.scroll(0, 0) //чтобы при переходе на страницу с другой страницы автоматически страница переходилась вверх
   }, [sortType.sort, categoryId, search])

   const pizzas = items.map(pizza => <PizzaBlock {...pizza} key={pizza.id} />)

   const skeletons = [...new Array(6)].map((_, i) => (
      <PizzaBlockSkeleton key={i} />
   ))

   return (
      <div className='container'>
         <div className='content__top'>
            <Categories
               value={categoryId}
               onClickCategotyId={index => setCategoryId(index)}
            />
            <Sorties value={sortType} setSortType={setSortType} />
         </div>
         <h2 className='content__title'>Все пиццы</h2>
         <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      </div>
   )
}
