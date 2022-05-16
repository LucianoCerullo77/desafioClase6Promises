import React from 'react'
import Item from '../Item/Item'

const ItemList = ({/*productsList*/ characters}) => {
    // const {productsList} = props (conviene usar cuando sean mas de 5 elementos)
    


  return (
      <>
      <h3 style={{textAlign:'center'}}>Characters</h3>
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center'}}>
       {/* {productsList.map((Products) => <Item Products={Products} key={Products.id}/> )} */}
       {characters.map((character) => <Item character={character} key={character.id}/>)}
    </div>
      </>
  )
}

export default ItemList