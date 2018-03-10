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

    this.callError = this.callError.bind(this);
  }

  callError(error) {
    this.setState({ currentError: error })
    $("#errorModal").modal()
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