import React from 'react';
import { connect } from 'react-redux';
import CityView from 'CityView';
import PlayerView from 'PlayerView';
import CitySelector from 'CitySelector';
import ProductAPI from '../api/ProductAPI';
import Modal from 'Modal';
import LoanShark from 'LoanShark';

import { updateProducts, setCity, newGame } from '../actions/actions';

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
    $(".product-list button").prop("disabled", false)
    const newProducts = ProductAPI.randomizeData(this.props.products)
    this.props.updateProducts(newProducts)
    this.props.newGame();
  }

  render () {
    const checkDaysRemaining = () => {
      if (this.props.daysRemaining < 0) {
        $(".product-list button").prop("disabled", true)
        const finalScore = this.props.currentPlayer.funds;
        this.callModal(`<p>Your final score was: ${finalScore}</p>`)
        return (
          <div className="col-sm-4 offset-sm-4 d-flex justify-content-around">
            <button className="btn btn-success" onClick={this.newGame}>Start Over</button>
          </div>
        )
      } else if (this.props.daysRemaining === 0) {
        return (
          <div className="col-sm-4 offset-sm-4 d-flex justify-content-around">
            <button type="button" className="btn btn-danger" onClick={() => this.beginTravel("Game Over")}>End Game</button>
          </div>
        )
      } else {
        return (
          <div className="col-sm-4 offset-sm-4">
            <CitySelector beginTravel={this.beginTravel} currentCity={this.props.currentCity} />
            <h3 className="text-center mt-4">{this.props.daysRemaining} days remaining</h3>
          </div>
        )
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
            {checkDaysRemaining()}
          </div>
          <div className="row">
            <LoanShark />
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

const actions = { updateProducts, setCity, newGame }

export default connect(mapStateToProps, actions)(Main);