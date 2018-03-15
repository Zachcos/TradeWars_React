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
    const type = event.target.innerHTML;
    const { product, currentPlayer } = this.props; 

    const payload = {
      id: product.id,
      name: product.name,
      quantity: this.quantField.value * 1,
      totalPrice: product.price * this.quantField.value
    }

    this.quantField.value = '';
    if (type === "Buy") {
      if (payload.quantity > product.quantityAvailable) {
        this.callError("There aren't enough of that product")
      } else if (payload.totalPrice > currentPlayer.funds) {
        this.callError("You don't have enough money for this purchase")
      } else {
        // const adjustedPlayer = {...currentPlayer};
        const foundPrev = currentPlayer.stash.findIndex((prod) => prod.id === payload.id)

        const adjustedPlayerFunds = currentPlayer.funds -= payload.totalPrice
        const adjustedProductQuantity = product.quantityAvailable -= payload.quantity;
        
        if (foundPrev !== -1) {
          const adjustedPlayerQuantity = currentPlayer.stash[foundPrev].quantity += payload.quantity
          const adjustdPlayerTotalPrice = currentPlayer.stash[foundPrev].totalPrice += payload.totalPrice
        } else if (foundPrev === -1) {
          // const newItem = adjustedPlayer.stash.push(payload)
        }

        const adjustedPlayer = {
          ...currentPlayer,
          funds: adjustedPlayerFunds
        }
        const adjustedProduct = {
          ...product,
          quantityAvailable: adjustedProductQuantity
        }

        console.log(adjustedPlayer)
        this.props.productTransaction(adjustedProduct)
        this.props.playerTransaction(adjustedPlayer)
      }
    } else if (type === "Sell") {
      const adjustedPlayer = currentPlayer;
      const foundPrev = adjustedPlayer.stash.findIndex((prod) => prod.id === payload.id)

      if (foundPrev === -1) {
        this.callError("You don't own any of this product")
      } else if (payload.quantity > currentPlayer.stash[foundPrev].quantity) {
        this.callError("You don't have that many to sell")
      } else {
        adjustedPlayer.funds += payload.totalPrice

        const newArr = adjustedPlayer.stash;
        newArr.map(prod => {
          if (prod.id === payload.id) {
            prod.quantity -= payload.quantity
            prod.totalPrice -= payload.totalPrice
          }
        })
        const cleanedArr = newArr.filter(prod => prod.quantity !== 0)
        adjustedPlayer.stash = cleanedArr

        const adjustedProduct = product;
        adjustedProduct.quantityAvailable += payload.quantity;
        this.props.productTransaction(adjustedProduct)
        this.props.playerTransaction(adjustedPlayer)
      }
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