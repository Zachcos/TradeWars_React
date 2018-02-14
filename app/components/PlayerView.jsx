import React from 'react';

export class PlayerView extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <h1 className="text-center mt-5 mb-5">Dirk Spently</h1>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <h4>Player info</h4>
            <ul className="player-info list-unstyled">
              <li>Funds: $600</li>
              <li>Health: 100</li>
              <li>Attack: 10</li>
              <li>Defense: 10</li>
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