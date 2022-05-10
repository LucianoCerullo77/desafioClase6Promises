import React from 'react'
import Cards from '../Cards/Cards'


const ItemListContainer = ({tittle,products}) => {
  
  return (
  <div>
      <h1>{tittle}</h1>
      <h2>{products}</h2>
      <Cards/>
      
      </div>
  )
}

export default ItemListContainer