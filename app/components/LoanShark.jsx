import React from 'react';
import {connect} from 'react-redux';
export class LoanShark extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amountFieldValue: 0
    }

    this.validateChars = this.validateChars.bind(this);
    this.amountState = this.amountState.bind(this);
  }
  
  validateChars(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

  amountState(e) {
    this.setState({amountFieldValue: this.amountField.value * 1})
  }
  
  render () {
    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="col-sm-4 offset-sm-1 mt-5">
        <h2 style={{marginBottom: 25}}>Loan Shark</h2>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">${currentPlayer.debt} in debt</span>
          </div>
          <input type="text" placeholder="Enter amount" className="form-control" onKeyPress={this.validateChars} onChange={this.amountState} ref={(amountField) => { this.amountField = amountField }} />
          <div className="input-group-append">
            <button className="btn btn-success" type="button">Pay back</button>
            <button className="btn btn-danger" type="button">Take out</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentPlayer: state.currentPlayer
  }
}

export default connect(mapStateToProps)(LoanShark);