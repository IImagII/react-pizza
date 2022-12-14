import React from 'react'
import ContentLoader from 'react-content-loader'

export const PizzaBlockSkeleton = props => (
   <ContentLoader
      className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}
   >
      <circle cx='137' cy='106' r='100' />
      <rect x='6' y='241' rx='10' ry='10' width='250' height='21' />
      <rect x='2' y='415' rx='0' ry='0' width='95' height='30' />
      <rect x='131' y='395' rx='39' ry='39' width='146' height='61' />
      <rect x='0' y='280' rx='0' ry='0' width='260' height='105' />
   </ContentLoader>
)
