import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { paths } from '../../paths.js'
import style from './OnePizza.module.scss'

export const OnePizza = () => {
   const [item, setItem] = useState({})
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
      return 'Идет загрукзка....'
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
