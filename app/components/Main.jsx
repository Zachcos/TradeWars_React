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
          name: 'CPUs',
          price: 100
        },
        {
          name: 'GPUs',
          price: 200
        },
        {
          name: 'HHDs',
          price: 300
        },
      ],
      testValue: ''
    }

    this.handleTransaction = this.handleTransaction.bind(this);
  }

  handleTransaction(action) {
    if (action.transactionType == "Buy") {
      console.log('we bought some shit' + action.price)
    } else if (action.transactionType == "Sell") {
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