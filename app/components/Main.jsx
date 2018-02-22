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
      ]
    }

    this.handleTransaction = this.handleTransaction.bind(this);
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

    console.log("index: " + index)
    var foundItem = currentPlayer.stash.find((item) => item.name == payload.name);
    
    if (action.type == "Buy") {
      if (action.totalPrice > currentPlayer.funds) {
        console.log("you can't afford that")
      } else if (action.quantity > action.product.quantityAvailable) {
        console.log("there aren't enough to buy")
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
        this.setState ({
          currentPlayer: {
            ...currentPlayer,
            funds: (currentPlayer.funds - action.totalPrice),
            stash: [...this.state.currentPlayer.stash, payload]
          }
        })
      }
    } else if (action.type == "Sell") {
      if (payload.quantity > foundItem.quantity) {
        console.log("you don't have that many to sell")
      } else {
        var newItem = {
          name: foundItem.name,
          totalPrice: foundItem.totalPrice - payload.totalPrice,
          quantity: foundItem.quantity - payload.quantity
        }
        
        var newArr = currentPlayer.stash.filter((item) => item.name != foundItem.name);
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