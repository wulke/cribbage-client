import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../socket';

export const Game = () => {
  const { gameId } = useParams();
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div>
      <p>Game: {gameId}</p>
      <p>State: {JSON.stringify(gameState)}</p>
    </div>
  );
};