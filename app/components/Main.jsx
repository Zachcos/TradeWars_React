import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CityView from 'CityView';
import PlayerView from 'PlayerView';
import ProductAPI from '../api/ProductAPI';

import * as actions from '../actions/actions';

export class Main extends React.Component {
  componentWillMount() {
    const newProducts = ProductAPI.setPrices(this.props.products)
    this.props.actions.updateProducts(newProducts)
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);