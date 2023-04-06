import React, { useState, useEffect } from 'react';
import { socket } from '../socket';
import { ConnectionState } from '../components/ConnectionState';
import { ConnectionManager } from '../components/ConnectionManager';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/SideBar';

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [serverId, setServerId] = useState(null);

  useEffect(() => {
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => {
      setIsConnected(false);
      setServerId(null);
    };
    const onServerId = (id) => setServerId(id);

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('server_id', onServerId);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('server_id', onServerId);
    };
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } serverId={ serverId } />
      <ConnectionManager />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default App;
