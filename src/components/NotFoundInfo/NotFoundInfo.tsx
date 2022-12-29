import React, { FC } from 'react'
import styles from './NotFoundInfo.module.scss'

export const NotFoundInfo: FC = () => {
   return (
      <>
         <h1 className={styles.root}>
            <span>😕</span>
            <br />
            Ничего не найдено:(
         </h1>
      </>
   )
}
