import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({tittle,products}) => {

  const ItemProducts = [
    {id:'01', name: 'First Product', description:"Example Text", tags:"Weight, Health"},
    {id:'02', name: 'Second Product', description:"Example Text", tags:"Weight, Health"},
    {id:'03', name: 'Third Product', description:"Example Text", tags:"Weight, Health"},
    {id:'04', name: 'Fourth Product', description:"Example Text", tags:"Weight, Health"},
    {id:'05', name: 'Fifth Product', description:"Example Text", tags:"Weight, Health"},
    {id:'06', name: 'Sexth Product', description:"Example Text", tags:"Weight, Health"}
  ]

  const [productsList, setproductsList] = useState([])




  const getProd = new Promise ((resolve, reject ) => {
    let condition = true

    setTimeout(()=> {
     if (condition) {
       resolve(ItemProducts)
     } else{
       reject("Error > Something went wrong")
     }
    },3000)
  });

  useEffect(() => {
    getProd
    .then((res) => setproductsList(res) )
      .catch((error) => console.log(error))

  }, [])
  
  console.log('Lista de Productos', productsList);
  
  return (
  <div>
      <h1 style={{textAlign:'center', paddingTop:'2rem'}}>{tittle}</h1>
      <ItemList productsList={productsList} />
      
      </div>
  )
}

export default ItemListContainer