import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="input-group input-group-md mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-md">{product.name}</span>
        <span className="input-group-text" id="inputGroup-sizing-md">${product.price}</span>
      </div>
      <input type="text" className="form-control" />
      <div className="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Max Amount</button>
      </div>
    </div>
  )
}

export default Product;