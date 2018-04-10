import React from 'react';
import { connect } from 'react-redux';
import CityView from 'CityView';
import PlayerView from 'PlayerView';
import CitySelector from 'CitySelector';
import ProductAPI from '../api/ProductAPI';
import Modal from 'Modal';

import { updateProducts, setCity } from '../actions/actions';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.beginTravel = this.beginTravel.bind(this);
    this.callModal = this.callModal.bind(this);
    this.newGame = this.newGame.bind(this);

    const newProducts = ProductAPI.randomizeData(this.props.products)
    this.props.updateProducts(newProducts)
  }

  callModal(msg) {
    $("#modal-msg").html(msg)
    $("#modal-label").html("Game Over")
    $("#modal").modal();
  }

  beginTravel(city) {
    const newProducts = ProductAPI.randomizeData(this.props.products)
    this.props.updateProducts(newProducts);
    this.props.setCity(city);
  }

  newGame() {
    console.log("we're starting a new game")
  }

  render () {
    const checkDaysRemaining = () => {
      if (this.props.daysRemaining < 0) {
        this.callModal("The game is over!")
        return (
          <div className="d-flex align-items-center justify-content-center">
            <h3 className="text-center mt-4 mr-5">Game over</h3>
            <button className="btn btn-success" style={{marginTop: '18px'}} onClick={this.newGame}>Start Over</button>
          </div>
        )
      } else {
        return <h3 className="text-center mt-4">{this.props.daysRemaining} days remaining</h3>
      }
    }

    return (
      <div>
        <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" className="navbar-brand">TradeWars</a>
        </nav>
        <div className="container-fluid">
          <Modal />
          <div className="row">
            <CityView products={this.props.products} currentCity={this.props.currentCity} />
            <PlayerView currentPlayer={this.props.currentPlayer} />
          </div>
          <div className="row" style={{marginTop: 50}}>
            <CitySelector beginTravel={this.beginTravel} currentCity={this.props.currentCity} />
          </div>
          <div className="row">
            <div className="col-sm-4 offset-sm-4">
              {checkDaysRemaining()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    currentPlayer: state.currentPlayer,
    currentCity: state.gameData.currentCity,
    daysRemaining: state.gameData.daysRemaining
  }
}

const actions = { updateProducts, setCity }

export default connect(mapStateToProps, actions)(Main);