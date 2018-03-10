import React from 'react';
import ProductListItem from 'ProductListItem';

const ProductList = ({ products }) => {
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