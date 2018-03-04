import React from 'react';
import ProductListItem from 'ProductListItem';

const ProductList = ({ products, handleTransaction }) => {
  const renderList = () => {
    return products.map(product => {
      return <ProductListItem product={product} key={product.id} />
    })
  }  
  
  return (
    <div className="product-list">
      {renderList()}
    </div>
  )
}

export default ProductList;