import React from 'react';
import 'cardsJS/cards.css';
import cardBack from 'cardsJS/cards/BLUE_BACK.svg';
import { socket } from '../../socket';
import { toString, SVGS } from '../../utils/cards';

const Cuts = ({ game }) => {
  return (
    <>
      <h4>Cut for deal</h4>
      <div className='hand hhand'>
        {Object.values(game.playerCuts).map(toString).map((card) => <img key={card} src={SVGS[card]} className='card' />)}
      </div>
    </>
  );
};

export const CutForDeal = ({ game }) => {
  // @todo some notification if the cuts were equal and we are re-cutting
  if (game.state !== 'Cut For Dealer') {
    return <Cuts game={game} />;
  };

  const onCut = (index) => socket.emit('cut_for_dealer', game.id, index, () => console.info('cut'));

  return (
    <>
      <Cuts game={game} />
      <div className='hand hhand-compact active-hand'>
        {game.deck.deck.map((card, index) => (<img key={card} src={cardBack} className='card' onClick={() => onCut(index)}/>))}
      </div>
    </>
  )
};