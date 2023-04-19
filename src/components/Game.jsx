import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { socket } from '../socket';
import { toString } from '../utils/cards';
import { Crib } from './game/Crib';
import { CutForDeal } from './game/CutForDeal';
import { Hand } from './game/Hand';

const OpenGame = ({ onLeave, onReady }) => {
  return (
    <div display="flex" flex-direction="row">
      <button onClick={onReady}>Ready</button>
      <button onClick={onLeave}>Leave</button>
    </div>
  );
};

const InGame = ({ game }) => {
  const [onCardClick, setOnCardClick] = useState(() => (card) => console.info(`Clicked card: ${toString(card)}`));
  const throwToCrib = (card) => socket.emit('throw_to_crib', game.id, card, () => console.info(`Throwing ${card} to crib.`));

  useEffect(() => {
    console.info(`State changed: ${game.state}`);
    switch(game.state) {
      case 'Cut For Dealer':
        break;
      case 'New Hand':
        if (game.nextDealer === socket.id) {
          console.info('I am the dealer, dealing new hand...');
          socket.emit('new_hand', game.id, console.debug);
        }
        break;
      case 'Throw Crib':
        setOnCardClick(() => throwToCrib);
        break;
      default:
        console.warn(`Unknown state: ${game.state}`);
        break;
    }
  }, [game.state]);

  // @todo layout hand + board
  return (
    <div>
      <CutForDeal game={game} />
      <Hand game={game} onCardClick={onCardClick} />
      <Crib game={game} />
    </div>
  );
};

export const Game = () => {
  // @todo Game Not Found error page
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState({});
  const onGetGame = (game) => {
    // @todo mask opposing player cards
    setGame(game);
  };
  const leaveGame = () => {
    // @todo check that game is not in progress?
    socket.emit('leave_game', gameId, () => {});
    navigate('/lobby');
  };
  const onReady = () => socket.emit('player_ready', gameId, () => {});

  useEffect(() => {
    socket.on('get_game', onGetGame);
    return () => {
      socket.off('get_game', onGetGame);
    };
  }, []);

  return (
    <div>
      <p>Game: {gameId}</p>
      <p>State: {JSON.stringify(game)}</p>
      {game?.status === "Open" && (
        <OpenGame onLeave={leaveGame} onReady={onReady} />
      )}
      {game?.status === "In Progress" && (
        <InGame game={game} />
      )}
      {game?.status === "Complete" && (
        <></>
      )}
    </div>
  );
};