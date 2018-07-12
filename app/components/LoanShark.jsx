import React from 'react';
import {connect} from 'react-redux';
export class LoanShark extends React.Component {
  render () {
    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="col-sm-4 offset-sm-1 mt-5">
        <h2 style={{marginBottom: 25}}>Loan Shark</h2>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">${currentPlayer.debt} in debt</span>
          </div>
          <input type="text" placeholder="Enter amount" className="form-control" />
          <div className="input-group-append">
            <button className="btn btn-success" type="button">Pay back</button>
            <button className="btn btn-danger" type="button">Take out</button>
          </div>
        </div>
      </div>
    )
  }
}
export default connect((state => state))(LoanShark);