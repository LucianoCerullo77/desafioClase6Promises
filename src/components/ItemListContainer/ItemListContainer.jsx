import React, {useEffect, useState} from 'react'
import Cards from '../Cards/Cards'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({tittle,products}) => {

  const ItemProducts = [
    {id:'01', name: 'random1', description:"lorem ipsum"},
    {id:'02', name: 'random2', description:"lorem ipsum"},
    {id:'03', name: 'random3', description:"lorem ipsum"},
    {id:'04', name: 'random4', description:"lorem ipsum"},
    {id:'05', name: 'random5', description:"lorem ipsum"},
    {id:'06', name: 'random6', description:"lorem ipsum"}
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
      <Cards/>
      
      </div>
  )
}

export default ItemListContainer