import React from 'react';
import Product from 'Product';

const ProductList = ({ products, handleChange }) => {
  const renderList = () => {
    return products.map(product => {
      return <Product product={product} handleChange={handleChange} />
    })
  }  
  
  return (
    <div className="product-list">
      {renderList()}
    </div>
  )
}

export default ProductList;