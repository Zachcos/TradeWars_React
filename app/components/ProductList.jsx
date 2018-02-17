import React from 'react';
import Product from 'Product';

const ProductList = ({ products, handleTransaction }) => {
  const renderList = () => {
    return products.map(product => {
      return <Product product={product} key={product.name} handleTransaction={handleTransaction} />
    })
  }  
  
  return (
    <div className="product-list">
      {renderList()}
    </div>
  )
}

export default ProductList;