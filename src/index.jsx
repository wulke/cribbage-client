import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GameLobby } from './components/GameLobby';
import { Game } from './components/Game';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // @todo create Index element when on index / aka Home
      // {
      //   index: true,
      //   element: <Index />
      // },
      {
        path: "lobby",
        element: <GameLobby />
      },
      {
        path: "game/:gameId",
        element: <Game />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
