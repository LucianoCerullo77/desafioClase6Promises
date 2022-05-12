import React from 'react'


const Item = ({Products}) =>  {
  return (
      <div className="card" style={{width: '18rem', margin:'1rem'}}>
          <img src="https://http2.mlstatic.com/D_NQ_NP_979511-MLA31009661542_062019-O.webp" className="card-img-top" alt={Products.name} />
          <div className="card-body">
              <p className="card-text">{Products.name}</p>
              <p className="card-text">{Products.description}</p>
              
          </div>
      </div>
    
  )
}

export default Item