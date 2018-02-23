import React from 'react';
import CityView from 'CityView';
import PlayerView from 'PlayerView';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: {
        name: "Dirk Spently",
        funds: 1000,
        health: 100,
        att: 10,
        def: 10,
        stash: []
      },
      products: [
        {
          name: 'CPU',
          price: 100,
          quantityAvailable: 4
        },
        {
          name: 'GPU',
          price: 200,
          quantityAvailable: 4
        },
        {
          name: 'HHD',
          price: 300,
          quantityAvailable: 4
        },
      ],
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
        var newItem = {
          name: currentPlayer.stash[index].name,
          totalPrice: currentPlayer.stash[index].totalPrice + payload.totalPrice,
          quantity: currentPlayer.stash[index].quantity + payload.quantity
        }

        var newArr = currentPlayer.stash.filter((item) => item.name != payload.name)
        newArr.push(newItem)
        this.setState({
          currentPlayer: {
            ...currentPlayer,
            funds: (currentPlayer.funds - action.totalPrice),
            stash: newArr
          }
        })

      } else {
        var newProductsArr = this.state.products;
        var foundIndex = this.state.products.findIndex(function(product) {
          return product.name == payload.name
        })
        var changedProd = newProductsArr[foundIndex]
        changedProd.quantityAvailable -= payload.quantity;

        newProductsArr.splice(foundIndex, 1, changedProd);

        this.setState ({
          currentPlayer: {
            ...currentPlayer,
            funds: (currentPlayer.funds - action.totalPrice),
            stash: [...this.state.currentPlayer.stash, payload]
          },
          products: newProductsArr
        })
      }
    } else if (action.type == "Sell") {
       if (currentPlayer.stash[index] == undefined) {
        var error = "You don't have any of that product to sell!"
        this.callError(error)
      } else if (payload.quantity > currentPlayer.stash[index].quantity) {
        var error = "You don't have that many to sell"
        this.callError(error)
      } else {
        var newItem = {
          name: currentPlayer.stash[index].name,
          totalPrice: currentPlayer.stash[index].totalPrice - payload.totalPrice,
          quantity: currentPlayer.stash[index].quantity - payload.quantity
        }
        
        var newArr = currentPlayer.stash.filter((item) => item.name != currentPlayer.stash[index].name);
        newArr.push(newItem)
        
        var cleanArr = newArr.filter((item) => item.quantity != 0)
        
        this.setState({
          currentPlayer: {
            ...currentPlayer,
            funds: currentPlayer.funds + (payload.quantity * payload.price),
            stash: cleanArr
          }
        })
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
              currentPlayer={this.state.currentPlayer}
              products={this.state.products}
              handleTransaction={this.handleTransaction}
            />
            <PlayerView currentPlayer={this.state.currentPlayer} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;