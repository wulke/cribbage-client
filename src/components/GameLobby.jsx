import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { socket } from '../socket';

export const GameLobby = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const onJoinGame = (id) => {
    socket.emit('join_game', id);
    navigate(`/game/${id}`);
  };
  const onNewGame = () => socket.emit('new_game', onJoinGame);
  const onGetGames = (games) => setGames(games);
  const isOpen = ({ status }) => status === 'Open'; // @todo replace with @wulke/cribbage-server/models/GameStatus.OPEN
  const isInProgress = ({ status }) => status === 'In Progress'; // @todo replace with @wulke/cribbage-server/models/GameStats.IN_PROGRESS
  const isComplete = ({ status }) => status === 'Complete'; // @todo replace with @wulke/cribbage-server/models/GameStatus.COMPLETE

  useEffect(() => {
    socket.on('get_games', onGetGames);
    return () => {
      socket.off('get_games', onGetGames);
    }
  }, []);

  useEffect(() => {
    socket.emit('get_games', onGetGames);
  }, [location]);

  return (
    <div>
      <button onClick={onNewGame}>New Game</button>
      <h4>Open Games</h4>
      <ul className='open-games'>
        {games.filter(isOpen).map((game, index) => (<li key={index}>{game.id} [{Object.keys(game.players).length}/{game.maxPlayers}] <button onClick={() => onJoinGame(game.id)}>Join</button></li>))}
      </ul>
      <h4>In Progress Games</h4>
      <ul className='in-progress-games'>
        {games.filter(isInProgress).map((game, index) => (<li key={index}>{game.id} <button onClick={() => navigate(`/game/${game.id}`)}>View</button></li>))}
      </ul>
      <h4>Complete Games</h4>
      <ul className='complete-games'>
        {games.filter(isComplete).map((game, index) => (<li key={index}>{game.id}<button onClick={() => navigate(`/game/${game.id}`)}>View</button></li>))}
      </ul>
    </div>
  );
};