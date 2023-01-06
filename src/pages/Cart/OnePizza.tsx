import React, { useEffect, useState, FC } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { paths } from '../../paths'
import style from './OnePizza.module.scss'

interface IPizza {
   imageUrl: string
   title: string
   category: number
   price: number
}
const OnePizza: FC = () => {
   const [item, setItem] = useState<IPizza>()

   const { id } = useParams()
   const categories = [
      'Все',
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые',
   ]
   const typeNames = ['тонкое', 'традиционное']
   useEffect(() => {
      const fetchPizza = async () => {
         try {
            const { data } = await axios.get(`${paths.url}/items/${id}`)
            setItem(data)
         } catch (e) {
            console.log(e)
         }
      }
      fetchPizza() //тут же и вызываем ее чтобы сделать запрос
   }, [])

   if (!item) {
      return <>'Идет загрукзка....'</> //для ts взято в <></>
   } //это мы сделали условный рендер который будет отображаться пока не загрузолось наша пицца
   return (
      <>
         <div className={style.root}>
            <img src={item.imageUrl} alt='' className={style.img} />
            <h2>{item.title}</h2>
            <div className={style.category}>
               Категория пиццы:
               <span>{categories[item.category]}</span>
            </div>
            <div className={style.type}>
               Тип теста:<span>{typeNames[0]} тесто</span>
            </div>
            <h4>Цена за шт: {item.price}₴</h4>
         </div>
      </>
   )
}
export default OnePizza
