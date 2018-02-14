import React from 'react';
import ProductList from 'ProductList';

export class CityView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: 'CPUs',
          price: 100
        },
        {
          name: 'GPUs',
          price: 200
        },
        {
          name: 'HHDs',
          price: 300
        },
      ]
    }
  }
  
  render() {
    return (
        <div className="col-sm">
          <h1 className="text-center mt-5 mb-5">Portland</h1>
          <div className="col-sm-8 offset-sm-2">
            <ProductList products={this.state.products}/>
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