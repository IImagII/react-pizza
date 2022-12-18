import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

export const Pagination = ({ page, setPage }) => {
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel='...'
         nextLabel='>'
         previousLabel='<'
         onPageChange={e => setPage(e.selected + 1)}
         pageRangeDisplayed={8}
         pageCount={3}
         renderOnZeroPageCount={null}
      />
   )
}
