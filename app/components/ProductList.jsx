import React from 'react';
import Product from 'Product';

const ProductList = ({ products }) => {
  const renderList = () => {
    return products.map(product => {
      return <Product product={product} />
    })
  }  
  
  return (
    <div className="product-list">
      {renderList()}
    </div>
  )
}

export default ProductList;