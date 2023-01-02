import React, { FC, ReactNode } from 'react'
import { createContext, useState } from 'react'

type IChildren = {
   children: ReactNode
}
interface IContextProps {
   searchValue: string
   setSearchValue: (type: string) => void
}
export const SearchContext = createContext<IContextProps>({} as IContextProps)

export const SearchProvider: FC<IChildren> = ({ children }) => {
   const [searchValue, setSearchValue] = useState<string>('')

   return (
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
         {children}
      </SearchContext.Provider>
   )
}
