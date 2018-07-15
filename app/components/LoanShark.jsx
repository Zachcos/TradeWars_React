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
    this.startLoanTransaction = this.startLoanTransaction.bind(this);
  }
  
  validateChars(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key < 48 || key > 57) {
      e.preventDefault();
    }
  }

  startLoanTransaction(e) {
    e.preventDefault();
    this.setState({amountFieldValue: 0})
    const { currentPlayer } = this.props;
    const transactionType = e.target.innerHTML

    const transactionData = {
      amount: this.amountField.value * 1
    }

    if (transactionType === "Pay back") {
      if (this.amountField.value > currentPlayer.funds) {
        console.log("You don't have enough money")
      } else if (this.amountField.value > currentPlayer.debt) {
        console.log("That's more debt than you have to your name!")
      } else {
        console.log(`You paid ${this.amountField.value} towards your loan`)
      }
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
            <button className="btn btn-success" type="button" onClick={this.startLoanTransaction}>Pay back</button>
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