import React from 'react';

export class PlayerView extends React.Component {
  render() {
    var currentPlayer = this.props.currentPlayer;

    return (
      <div className="col-sm">
        <h1 className="text-center mt-5 mb-5">{currentPlayer.name}</h1>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <h4>Player info</h4>
            <ul className="player-info list-unstyled">
              <li>Funds: ${currentPlayer.funds}</li>
              <li>Health: {currentPlayer.health}</li>
              <li>Attack: {currentPlayer.att}</li>
              <li>Defense: {currentPlayer.def}</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h4>Stash</h4>
            <ul className="player-stash list-unstyled">
              <li>GPUs: 12 @ $683/unit</li>
              <li>RAM: 12 @ $123/unit</li>
              <li>Software: 12 @ $866/unit</li>
              <li>HHDs: 12 @ $634/unit</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerView;