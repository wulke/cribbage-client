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

const InProgressGame = ({ game }) => {
  return (
    <>
      <CutForDeal game={game} />
    </>
  );
};

export const Game = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const onGetGame = (game) => setGame(game);
  const leaveGame = () => {
    // @todo check that game is not in progress?
    socket.emit('leave_game', gameId, () => {});
    navigate('/lobby');
  };
  const onReady = () => socket.emit('player_ready', gameId, () => {});

  useEffect(() => {
    socket.on('get_game', onGetGame);
    socket.emit('get_game', gameId, onGetGame);
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
        <InProgressGame game={game} />
      )}
    </div>
  );
};