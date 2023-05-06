import React from 'react';
import cardBack from 'cardsJS/cards/Blue_Back.svg';

export const Crib = ({ game }) => {
  // @todo dynamically display the card face if game.state === GameState.COUNT_CRIB
  return (
    <div className='crib'>
      <h4>Crib</h4>
      <div className='hand hhand-compact'>
        {game.crib.map((card) => <img key={card} src={cardBack} className="card" />)}
      </div>
    </div>
  );
};