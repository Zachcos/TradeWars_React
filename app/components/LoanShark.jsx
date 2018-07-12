import React from 'react';

const LoanShark = ({currentPlayer}) => {
  return (
    <div className="col-sm-8 offset-sm-2">
      <h2>Loan Shark</h2>
      <br />
      <p>You are ${currentPlayer.debt} in debt.</p>
    </div>
  )
}
export default LoanShark;