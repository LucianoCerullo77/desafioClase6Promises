import React from 'react'

const ItemList = ({productsList}) => {
    // const {productsList} = props (conviene usar cuando sean mas de 5 elementos)


  return (
    <div>
        <h3>Products List</h3>
        {productsList.map((Products) => <p key={Products.id}>{Products.name}</p>)}
    </div>
  )
}

export default ItemList