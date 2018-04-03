import React from 'react';
import ProductList from 'ProductList';

const CityView = ({ currentPlayer, products, currentCity, handleTransaction }) => {
  return (
    <div className="col-sm">
      <h1 className="text-center mt-5 mb-5">{currentCity}</h1>
      <div className="col-sm-8 offset-sm-2">
        <ProductList products={products} handleTransaction={handleTransaction}/>
      </div>
    </div> 
  )
}

export default CityView;