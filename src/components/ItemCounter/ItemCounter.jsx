import React, {useState} from 'react'
import { toast } from "react-toastify"
import {Button} from "react-bootstrap"

function ItemCounter ({initialValue, stock}) {
//UseState se usa siempre con CONST**
  const [amount, setAmount] = useState(initialValue)

  const addUpp = () => {
    if(amount < stock){
      setAmount(amount + 1)
    }
    else {
      toast.warn('You cannot buy more than 7 Units', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
  
  const substract = () => {
    if (amount > 0) {
    setAmount(amount - 1)
  }
}

const addOnCart = () => {
  toast.info(`${amount} Products added on cart`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}


React.useEffect(() => {
  console.log(`${amount} Selected items were changes in stock`);

},[amount])



  return (
    <div>
        <Button variant='outline-primary' onClick={substract}>-</Button>
        <span>{amount} Unidades</span>
        <Button variant='outline-primary' onClick={addUpp}>+</Button>
        <br/>
        <Button variant='success' onClick={addOnCart}>Add on Cart</Button>
    </div>
  )
}

export default ItemCounter