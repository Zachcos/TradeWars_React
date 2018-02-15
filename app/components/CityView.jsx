import React from 'react';
import ProductList from 'ProductList';

const CityView = ({ currentPlayer, products, handleChange }) => {
  return (
    <div className="col-sm">
      <h1 className="text-center mt-5 mb-5">Portland</h1>
      <div className="col-sm-8 offset-sm-2">
        <ProductList products={products}/>
        <input type="text" onChange={handleChange} />
      </div>
    </div> 
  )
}

export default CityView;