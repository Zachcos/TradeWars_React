import React from 'react';

const ProductListItem = ({ product, handleTransaction }) => {
  return (
    <div className="input-group input-group-md mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-md">{product.name}</span>
        <span className="input-group-text" id="inputGroup-sizing-md">${product.price}</span>
        <span className="input-group-text" id="inputGroup-sizing-md">{product.quantityAvailable} avail.</span>
      </div>
      <input type="text" className="form-control" />
      <div className="input-group-append">
        {/* <button className="btn btn-outline-secondary" type="button">Max.</button> */}
        <button className="btn btn-success" type="button" onClick={handleTransaction}>Buy</button>
        <button className="btn btn-danger" type="button" onClick={handleTransaction}>Sell</button>

      </div>
    </div>
  )
}

export default ProductListItem;