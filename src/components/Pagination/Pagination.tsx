import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { useAppDispatch } from '../../@types/hooks'
import { setPageState } from '../../store/Slice/filterSlice'

export const Pagination: FC = () => {
   const dispatch = useAppDispatch()
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel='...'
         nextLabel='>'
         previousLabel='<'
         onPageChange={e => dispatch(setPageState(e.selected + 1))}
         pageRangeDisplayed={8}
         pageCount={3}
         // renderOnZeroPageCount={null}
      />
   )
}
