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
    const otherData = "does this work?"

    this.quantField.value = '';
    this.props.playerTransaction(transactionData, transactionType)
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