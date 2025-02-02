const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a successful response
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Simulate an error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      // The crucial missing part: handle the error properly!
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});