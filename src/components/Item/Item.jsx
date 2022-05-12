import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCounter from '../ItemCounter/ItemCounter'


const Item = ({Products}) =>  {

    const [show,setShow] = useState (false)
    // const {greeting, products, productsCounter} = props (Método anterior, no se veía el total counter en el HTML)
    const seeMore = () => {
      setShow (!show)
      console.log("The Info Button was clicked");
    }

  return (
      <div>
    <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_979511-MLA31009661542_062019-O.webp" />
  <Card.Body>
    <Card.Title>{Products.name}</Card.Title>
    <Card.Text>
      {show ? <span>{Products.description} <br/>
      {Products.tags}<br/></span> : ''}
      <Button onClick={seeMore}>{show ? 'See Less Details' : 'See More Details'}</Button>
    </Card.Text>
    <ItemCounter initialValue={1} stock={7}/>
  </Card.Body>
</Card>
    </div>
  )
}

export default Item