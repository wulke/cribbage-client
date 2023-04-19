import React from 'react';
import { socket } from '../../socket';
import { SVGS, toString } from '../../utils/cards';
import cardBack from 'cardsJS/cards/BLUE_BACK.svg';

export const Hand = ({ game, onCardClick }) => {
  // @todo shuffle + dealing animations
  // @todo support for 2/3/4 player games
  // @todo support better throw-to-crib interation
  if (Object.entries(game.playerHands).length !== game.maxPlayers) return <></>;

  return (
    <div className='hands'>
      <h4>Dealer</h4>
      <p>{game.currentDealer}</p>
      <h4>Hands</h4>
      {Object.entries(game.playerHands).filter(([player,]) => player !== socket.id).map(([player,hand]) => 
        <div key={player} className='hand hhand-compact'>
          {hand.map(toString).map((card) => <img key={card} src={cardBack} className='card'/>)}
        </div>
      )}
      <div className='hand hhand-compact active-hand'>
        {game.playerHands[socket.id].map((card) => <img key={card} src={SVGS[toString(card)]} className='card' onClick={() => onCardClick(card)} />)}
      </div>
    </div>
  );
};