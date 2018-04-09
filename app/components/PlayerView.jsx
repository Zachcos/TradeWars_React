import React from 'react';

const PlayerView = ({ currentPlayer, daysRemaining }) => {
  const renderStash = () => {
    return currentPlayer.stash.map(item => {
      var ppu = (item.totalPrice / item.quantity).toFixed(2);

      return (
        <li key={item.name}>
          {item.quantity} {item.name}s @ ${ppu}/unit
        </li>
      )
    })
  }
  
  return (
    <div className="col-sm">
      <h1 className="text-center mt-5 mb-4">{currentPlayer.name}</h1>
      <h3 className="text-center mb-5">{daysRemaining} days remaining</h3>
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