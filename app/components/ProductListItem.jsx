import React from 'react';
import { productTransaction, playerTransaction } from '../actions/actions';
import { connect } from 'react-redux';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantFieldValue: 0
    }

    this.startTransaction = this.startTransaction.bind(this);
    this.callError = this.callError.bind(this);
    this.validateChars = this.validateChars.bind(this);
    this.quantState = this.quantState.bind(this);
  }

  callError(msg) {
    $("#modal-msg").html(msg)
    $("#modal-label").html("Error")
    $("#modal").modal();
  }

  validateChars(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

  quantState(e) {
    this.setState({quantFieldValue: this.quantField.value * 1})
  }

  startTransaction(event) {
    event.preventDefault();
    this.setState({quantFieldValue: 0})
    const transactionType = event.target.innerHTML;
    const { product, currentPlayer } = this.props;

    const transactionData = {
      id: product.id,
      name: product.name,
      quantity: this.quantField.value * 1,
      totalPrice: product.price * this.quantField.value
    }

    if (transactionType === "Buy") {
      if (this.state.quantFieldValue === 0) {
        return;
      } else if (this.quantField.value > product.quantityAvailable) {
        this.callError("There aren't enough of that product to buy")
      } else if (transactionData.totalPrice > currentPlayer.funds) {
        this.callError("You don't have enough money for that!")
      } else {
        this.props.playerTransaction(transactionData, transactionType)
        this.props.productTransaction(transactionData, transactionType)
      }
      this.quantField.value = '';
    } else if (transactionType === "Sell") {
      const existingProduct = currentPlayer.stash.find(prod => prod.id === transactionData.id);
      if (this.state.quantFieldValue === 0) {
        return;
      } else if (existingProduct === undefined) {
        this.callError("You don't have any of that product!")
      } else if (this.quantField.value > existingProduct.quantity) {
        this.callError("You don't have that many to sell!")
      } else {
        this.props.playerTransaction(transactionData, transactionType)
        this.props.productTransaction(transactionData, transactionType)
      }
      this.quantField.value = '';
    }
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
      <input type="text" className="form-control" onKeyPress={this.validateChars} onChange={this.quantState} ref={(quantField) => { this.quantField = quantField }} />
      <div className="input-group-append">
        <button className="btn btn-success" type="button" onClick={this.startTransaction}>Buy</button>
        <button className="btn btn-danger" type="button" onClick={this.startTransaction}>Sell</button>
      </div>
    </div>
    )
  }
}

const actions = { productTransaction, playerTransaction };

export default connect((state => state), actions)(ProductListItem);