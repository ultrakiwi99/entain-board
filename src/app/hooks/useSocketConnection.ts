const io = require('socket.io-client');

export const useSocketConnection = () => {
  console.log('starting socket connection');

  const client = io('http://localhost:3999');
  client.on('info', (data: any) => console.log(data));
};
