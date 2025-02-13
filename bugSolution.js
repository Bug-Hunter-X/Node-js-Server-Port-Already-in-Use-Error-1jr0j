const http = require('http');
const net = require('net');

function isPortAvailable(port) {
  return new Promise((resolve, reject) => {
    const tester = net.createServer().once('error', err => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        reject(err);
      }
    }).once('listening', () => {
      tester.close(resolve.bind(null, true));
    }).listen(port);
  });
}

async function startServer(port) {
  const portAvailable = await isPortAvailable(port);
  if (portAvailable) {
    const requestListener = (request, response) => {
      response.writeHead(200);
      response.end('Hello, World!');
    };

    const server = http.createServer(requestListener);
    server.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } else {
    console.error(`Port ${port} is already in use.`);
  }
}

startServer(8080);