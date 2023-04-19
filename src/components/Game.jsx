import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { socket } from '../socket';
import { CutForDeal } from './game/CutForDeal';

const OpenGame = ({ onLeave, onReady }) => {
  return (
    <div display="flex" flex-direction="row">
      <button onClick={onReady}>Ready</button>
      <button onClick={onLeave}>Leave</button>
    </div>
  );
};

const InGame = ({ game }) => {
  // @todo layout hand + board
  return (
    <div>
      <CutForDeal game={game} />
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

  useEffect(() => {
    console.info(`State changed: ${game.state}`);
  }, [game.state]);

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