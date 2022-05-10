import { Card, Button } from "react-bootstrap";
import ItemCounter from "../ItemCounter/ItemCounter";
import React, {useState} from 'react'

function Cards() {
    const [show,setShow] = useState (false)
    // const {greeting, products, productsCounter} = props (Método anterior, no se veía el total counter en el HTML)
    const seeMore = () => {
      setShow (!show)
      console.log("Info was clicked");
    }
  return (
    <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_979511-MLA31009661542_062019-O.webp" />
  <Card.Body>
    <Card.Title>Whey Protein Isolate + Concentrate Protein Blend</Card.Title>
    <Card.Text>
      {show ? <span>Categories: Fitness, Gym. <br/>
      Tags: Health, Weight. <br/>
      This product contains:
      <br/>1293 mg alanine, 634 mg arginine, 2513 mg aspartic acid, 536 mg cysteine, 4241 mg glutamic acid, etc.<br/></span> : ''}
      <Button onClick={seeMore}>{show ? 'See Less Details' : 'See More Details'}</Button>
    </Card.Text>
    <ItemCounter initialValue={1} stock={7}/>
  </Card.Body>
</Card>
  )
}

export default Cards