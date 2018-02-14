import React from 'react';
import ProductList from 'ProductList';

export class CityView extends React.Component {
  render() {
    return (
        <div className="col-sm">
          <h1 className="text-center mt-5 mb-5">Portland</h1>
          <div className="col-sm-8 offset-sm-2">
            <ProductList />
          </div>
          <div className="col-sm text-center mt-5">
            <button type="button" className="btn btn-success mr-2">Buy Parts</button>
            <button type="button" className="btn btn-danger">Sell Parts</button>
          </div>
        </div> 
    )
  }
}

export default CityView;