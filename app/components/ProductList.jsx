import React from 'react';
import Product from 'Product';

const ProductList = ({ products, handleChange, handleTransaction }) => {
  const renderList = () => {
    return products.map(product => {
      return <Product product={product} handleChange={handleChange} handleTransaction={handleTransaction} />
    })
  }  
  
  return (
    <div className="product-list">
      {renderList()}
    </div>
  )
}

export default ProductList;