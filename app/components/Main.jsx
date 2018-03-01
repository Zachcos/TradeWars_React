import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityView from 'CityView';
import PlayerView from 'PlayerView';

import * as actions from '../actions/actions';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentError: ''
    }

    this.handleTransaction = this.handleTransaction.bind(this);
    this.callError = this.callError.bind(this);
  }

  callError(error) {
    this.setState({ currentError: error })
    $("#errorModal").modal()
  }

  handleTransaction(action) {
    const currentPlayer = this.state.currentPlayer;

    const payload = {
      name: action.product.name,
      price: action.product.price,
      quantity: action.quantity,
      totalPrice: action.totalPrice
    }

    var index = currentPlayer.stash.findIndex(function(item) {
      return item.name == payload.name
    })

    if (action.type == "Buy") {
      if (action.totalPrice > currentPlayer.funds) {
        var error = "You can't afford that"
        this.callError(error)
      } else if (action.quantity > action.product.quantityAvailable) {
        var error = "There aren't enough to buy"
        this.callError(error)
      } else if (index != -1) {
        console.log("we found an exisiting product")
      } else {
        console.log("we're going to buy stuff")
      }
    } else if (action.type == "Sell") {
       if (currentPlayer.stash[index] == undefined) {
        var error = "You don't have any of that product to sell!"
        this.callError(error)
      } else if (payload.quantity > currentPlayer.stash[index].quantity) {
        var error = "You don't have that many to sell"
        this.callError(error)
      } else {
        console.log("we're going to sell")
      }
    }
  }

  render () {
    return (
      <div>
        <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" className="navbar-brand">TradeWars</a>
        </nav>
        <div className="container-fluid">
        <div className="modal fade" id="errorModal" tabIndex="-1" role="dialog" aria-labelledby="errorModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="errorModalLabel">Error</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.currentError}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
          <div className="row">
            <CityView
              currentPlayer={this.props.currentPlayer}
              products={this.props.products}
              handleTransaction={this.handleTransaction}
            />
            <PlayerView currentPlayer={this.props.currentPlayer} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    currentPlayer: state.currentPlayer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);