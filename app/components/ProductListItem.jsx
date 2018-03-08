import React from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.startTransaction = this.startTransaction.bind(this);
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
        console.log("there aren't enough of that product!")
      } else if (payload.totalPrice > currentPlayer.funds) {
        console.log("you don't have enough money")
      } else {
        const adjustedPlayer = currentPlayer;
        const foundPrev = adjustedPlayer.stash.findIndex((prod) => prod.id === payload.id)

        adjustedPlayer.funds -= payload.totalPrice

        const adjustedProduct = product;
        adjustedProduct.quantityAvailable -= payload.quantity;
        
        if (foundPrev !== -1) {
          adjustedPlayer.stash[foundPrev].quantity += payload.quantity
          adjustedPlayer.stash[foundPrev].totalPrice += payload.totalPrice
        } else if (foundPrev === -1) {
          adjustedPlayer.stash.push(payload)
        }

        this.props.actions.productTransaction(adjustedProduct)
        this.props.actions.playerTransaction(adjustedPlayer)
      }
    } else if (type === "Sell") {
      const adjustedPlayer = currentPlayer;
      const foundPrev = adjustedPlayer.stash.findIndex((prod) => prod.id === payload.id)

      if (foundPrev === -1) {
        console.log ("you don't own any of this product")
      } else if (payload.quantity > product.quantityAvailable) {
        console.log("you don't that many to sell")
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
        this.props.actions.productTransaction(adjustedProduct)
        this.props.actions.playerTransaction(adjustedPlayer)
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect((state => state), mapDispatchToProps)(ProductListItem);