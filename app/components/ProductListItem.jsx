import React from 'react';
import { productTransaction, playerTransaction } from '../actions/actions';
import { connect } from 'react-redux';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.startTransaction = this.startTransaction.bind(this);
    this.callError = this.callError.bind(this);
  }

  callError(msg) {
    $("#modal-msg").html(msg)
    $("#errorModal").modal()
  }

  startTransaction(event) {
    event.preventDefault();
    const transactionType = event.target.innerHTML;
    const { product, currentPlayer } = this.props;

    const transactionData = {
      id: product.id,
      name: product.name,
      quantity: this.quantField.value * 1,
      totalPrice: product.price * this.quantField.value
    }

    if (transactionType === "Buy") {
      if (this.quantField.value > product.quantityAvailable) {
        this.callError("There aren't enough of that product to buy")
      } else if (transactionData.totalPrice > currentPlayer.funds) {
        this.callError("You don't have enough money for that!")
      } else {
        this.props.playerTransaction(transactionData, transactionType)
      }
    } else if (transactionType === "Sell") {
      console.log("Sale validity checks will go here")
    }
    this.quantField.value = '';
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
      <input type="text" className="form-control" ref={(quantField) => { this.quantField = quantField }} />
      <div className="input-group-append">
        {/* <button className="btn btn-outline-secondary" type="button">Max.</button> */}
        <button className="btn btn-success" type="button" onClick={this.startTransaction}>Buy</button>
        <button className="btn btn-danger" type="button" onClick={this.startTransaction}>Sell</button>
      </div>
    </div>
    )
  }
}

const actions = { productTransaction, playerTransaction };

export default connect((state => state), actions)(ProductListItem);