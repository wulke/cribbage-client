import React from 'react';

export const ConnectionState = ({ isConnected, serverId }) => {
  return <p>State: { `${isConnected} (${serverId})` }</p>;
}