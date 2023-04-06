import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div id="sidebar">
      <ul>
        <li>
          <Link to={`lobby`}>Game Lobby</Link>
        </li>
      </ul>
    </div>
  );
};