import React from 'react'
import { Header } from '../components/Header/Header'
import { SearchProvider } from '../hooks/Search/SearchProvider'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
   return (
      <div className='wrapper'>
         <SearchProvider>
            <Header />
            <div className='content'>
               <Outlet />
            </div>
         </SearchProvider>
      </div>
   )
}
