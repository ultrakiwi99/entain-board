const io = require('socket.io-client');

export const useSocketConnection = (userName: string) => {
  if (userName) {
    const client = io('http://localhost:3999', { query: { userName } });
    client.on('info', (data: any) => console.log(data));
  }
};
