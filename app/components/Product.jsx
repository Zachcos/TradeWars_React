import React from 'react';

const Product = ({ product, handleChange }) => {
  return (
    <div className="input-group input-group-md mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-md">{product.name}</span>
        <span className="input-group-text" id="inputGroup-sizing-md">${product.price}</span>
      </div>
      <input type="text" className="form-control" onChange={handleChange} {...product}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Max.</button>
        <button className="btn btn-success" type="button">Buy</button>
        <button className="btn btn-danger" type="button">Sell</button>

      </div>
    </div>
  )
}

export default Product;