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
    const update = {
      id: product.id,
      price: product.price,
      quantity: this.quantField.value,
      totalPrice: product.price * this.quantField.value
    }

    this.quantField.value = '';
    if (type === "Buy") {
      this.props.actions.purchase(update)
    } else if (type === "Sell") {
      console.log("we're going to be selling now")
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