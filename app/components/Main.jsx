import React from 'react';
import { connect } from 'react-redux';
import CityView from 'CityView';
import PlayerView from 'PlayerView';
import CitySelector from 'CitySelector';
import ProductAPI from '../api/ProductAPI';
import Modal from 'Modal';

import { updateProducts } from '../actions/actions';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.beginTravel = this.beginTravel.bind(this);

    const newProducts = ProductAPI.randomizeData(this.props.products)
    this.props.updateProducts(newProducts)
  }

  beginTravel() {
    const newProducts = ProductAPI.randomizeData(this.props.products)
    this.props.updateProducts(newProducts)
  }
  
  render () {
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
            <CitySelector beginTravel={this.beginTravel} />
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
    currentCity: state.currentCity
  }
}

const actions = { updateProducts }

export default connect(mapStateToProps, actions)(Main);