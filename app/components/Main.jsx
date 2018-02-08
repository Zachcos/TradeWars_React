import React from 'react';

export class Main extends React.Component {
  render () {
    return (
      <div>
        <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" className="navbar-brand">TradeWars</a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">City View</div>
            <div className="col-sm">Player View</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;