import React from 'react';

export class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
      purchasePrice: '',
      quantity: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.startTransaction = this.startTransaction.bind(this);
  }

  handleChange(e) {
    const re = /^[0-9\b]+$/;
    const product = this.state.product;

    if (e.target.value == '' || re.test(e.target.value)) {
      var total = (e.target.value * product.price)
      this.setState({
        purchasePrice: total,
        quantity: e.target.value * 1
      })
    }
  }

  startTransaction(e) {
    this.quantField.value = '';
    const transaction = e.target.innerHTML;
    const action = {
      type: transaction,
      product: this.state.product,
      price: this.state.purchasePrice,
      quantity: this.state.quantity
    }
    this.props.handleTransaction(action)
  }

  render() {
    const { product, handleChange } = this.props;

    return (
      <div className="input-group input-group-md mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-md">{product.name}</span>
          <span className="input-group-text" id="inputGroup-sizing-md">${product.price}</span>
        </div>
        <input type="text" className="form-control" ref={(input) => { this.quantField = input }} onChange={this.handleChange} {...product}/>
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