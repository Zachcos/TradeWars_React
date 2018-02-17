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
          price: 100
        },
        {
          name: 'GPU',
          price: 200
        },
        {
          name: 'HHD',
          price: 300
        },
      ]
    }

    this.handleTransaction = this.handleTransaction.bind(this);
  }

  handleTransaction(action) {
    const currentPlayer = this.state.currentPlayer;
    const payload = {
      name: action.name,
      quantity: action.quantity,
      price: action.price
    }
    
    if (action.type == "Buy") {
      if (action.price > currentPlayer.funds) {
        console.log("you can't afford that")
      } else {
        this.setState ({
          currentPlayer: {
            ...currentPlayer, 
            stash: [...this.state.currentPlayer.stash, payload]
          }
        })
      }
    } else if (action.type == "Sell") {
      console.log('we sold some shit')
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