import React from 'react';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product
    }

    this.startTransaction = this.startTransaction.bind(this);
  }
  
  startTransaction(e) {
    console.log("we hit the buy button")
  }

  render() {
    const { product } = this.props;

    return (
      <div className="input-group input-group-md mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-md">{product.name}</span>
          <span className="input-group-text" id="inputGroup-sizing-md">${product.price}</span>
          <span className="input-group-text" id="inputGroup-sizing-md">{product.quantityAvailable} avail.</span>
        </div>
        <input type="text" className="form-control" ref={(input) => { this.quantField = input }} {...product}/>
        <div className="input-group-append">
          {/* <button className="btn btn-outline-secondary" type="button">Max.</button> */}
          <button className="btn btn-success" type="button" onClick={this.startTransaction}>Buy</button>
          <button className="btn btn-danger" type="button" onClick={this.startTransaction}>Sell</button>
  
        </div>
      </div>
    )
  }
}

export default ProductListItem;