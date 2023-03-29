import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../socket';

export const GameLobby = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const onJoinGame = (id) => {
    socket.emit('join_game', id);
    navigate(`/game/${id}`);
  }
  const onNewGame = () => socket.emit('new_game', onJoinGame);

  useEffect(() => {
    const onGetGames = (games) => setGames(games);

    socket.on('get_games', onGetGames);

    return () => {
      socket.off('get_games', onGetGames);
    }
  }, []);

  return (
    <div>
      <button onClick={onNewGame}>New Game</button>
      <ul>
        {games.map(({ id, players }, index) => (<li key={index}>{id} [{players.length}/?] <button onClick={() => onJoinGame(id)}>Join</button></li>))}
      </ul>
    </div>
  );
};