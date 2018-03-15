import React from 'react';
import { connect } from 'react-redux';
import CityView from 'CityView';
import PlayerView from 'PlayerView';
import ProductAPI from '../api/ProductAPI';

import { updateProducts } from '../actions/actions';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.beginTravel = this.beginTravel.bind(this);
  }
  componentWillMount() {
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
                <p id="modal-msg"></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
          <div className="row">
            <CityView products={this.props.products} />
            <PlayerView currentPlayer={this.props.currentPlayer} />
          </div>
          <button className="btn btn-debug" onClick={this.beginTravel}>Travel</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    currentPlayer: state.currentPlayer,
    isLoading: state.isLoading
  }
}

const actions = { updateProducts }

export default connect(mapStateToProps, actions)(Main);