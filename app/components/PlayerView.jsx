import React from 'react';

const PlayerView = ({ currentPlayer }) => {
  const renderStash = () => {
    return currentPlayer.stash.map(item => {
      var ppu = (item.price / item.quantity);

      return (
        <li key={item.name}>
          {item.quantity} {item.name}s @ ${ppu}/unit
        </li>
      )
    })
  }
  
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
            {renderStash()}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlayerView;