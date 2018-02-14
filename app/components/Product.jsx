import React from 'react';

export class Product extends React.Component {
  render() {
    return (
      <div className="input-group input-group-md mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-md">TEST</span>
          <span className="input-group-text" id="inputGroup-sizing-md">$123</span>
        </div>
        <input type="text" className="form-control" />
        <div className="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Max Amount</button>
        </div>
      </div>
    )
  }
}

export default Product;