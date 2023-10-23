import React from 'react'
import Title from './utils/Title'
import Item from './utils/Item'

const Sales = ({ifExists,endpoint: {title,items}}) => {
  return (
    <>
    <div className='nike-container mt-5'>
        <Title title={title}/>
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists? 'grid-cols-3  xl:grid-cols-2 sm:grid-cols-1':' grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((items,i)=>(<Item {...items} key={i} ifExists={ifExists}/>))}
            
        </div>
    </div>
    </>
  )
}

export default Sales