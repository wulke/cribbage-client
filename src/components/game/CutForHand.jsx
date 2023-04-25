import React from 'react';
import 'cardsJS/cards.css';
import cardBack from 'cardsJS/cards/BLUE_BACK.svg';
import { socket } from '../../socket';
import { toString, SVGS } from '../../utils/cards';

const Cut = ({ game }) => {
  return (
    <>
      <h4>Cut</h4>
      <div className='hand hhand'>
        {game.cut && <img src={SVGS[toString(game.cut)]} className='card' />}
      </div>
    </>
  );
};

export const CutForHand = ({ game }) => {
  // @todo some notification if the cuts were equal and we are re-cutting
  // @todo have server dictate who is cutting to keep logic in a single place
  if (game.state !== 'Cut For Hand' || game.nextDealer !== socket.id) {
    return <Cut game={game} />;
  };

  const onCut = (index) => socket.emit('cut_for_hand', game.id, index, () => console.info('cut'));

  return (
    <>
      <Cut game={game} />
      <div className='hand hhand-compact active-hand'>
        {game.deck.deck.map((card, index) => (<img key={card} src={cardBack} className='card' onClick={() => onCut(index)}/>))}
      </div>
    </>
  )
};