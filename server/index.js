const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.write('Hello Node');
  res.end();
});

server.listen(8080);

//Basic server
 //end() shuts off the stream
 //server listens on port 8080


