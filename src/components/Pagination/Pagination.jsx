import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
import { useDispatch } from 'react-redux'
import { setPageState } from '../../store/Slice/filterSlice'

export const Pagination = () => {
   const dispatch = useDispatch()
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel='...'
         nextLabel='>'
         previousLabel='<'
         onPageChange={e => dispatch(setPageState(e.selected + 1))}
         pageRangeDisplayed={8}
         pageCount={3}
         renderOnZeroPageCount={null}
      />
   )
}
