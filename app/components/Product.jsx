import React from 'react';

export class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product
    }

    this.startTransaction = this.startTransaction.bind(this);
  }
  
  startTransaction(e) {
    if (this.quantField.value.length != 0) {
      const re = /^[0-9\b]+$/;
      if (this.quantField.value == '' || re.test(this.quantField.value)) {
        const action = {
          product: this.state.product,
          quantity: this.quantField.value,
          totalPrice: this.quantField.value * this.state.product.price
        }

        console.log(action)
      }
    }
  }

  render() {
    const { product, handleChange } = this.props;

    return (
      <div className="input-group input-group-md mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-md">{product.name}</span>
          <span className="input-group-text" id="inputGroup-sizing-md">${product.price}</span>
        </div>
        <input type="text" className="form-control" ref={(input) => { this.quantField = input }} {...product}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Max.</button>
          <button className="btn btn-success" type="button" onClick={this.startTransaction}>Buy</button>
          <button className="btn btn-danger" type="button" onClick={this.startTransaction}>Sell</button>
  
        </div>
      </div>
    )
  }
}

export default Product;