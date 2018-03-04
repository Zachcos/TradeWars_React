import React from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.startTransation = this.startTransation.bind(this);
  }

  startTransation(event) {
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
    this.props.actions.testAction(update)
  }
  
  render() {
    const { product, handleTransaction } = this.props;

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
        <button className="btn btn-success" type="button" onClick={this.startTransation}>Buy</button>
        <button className="btn btn-danger" type="button" onClick={handleTransaction}>Sell</button>
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