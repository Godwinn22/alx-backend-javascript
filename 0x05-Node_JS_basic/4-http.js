const http = require('http');

// Create an HTTP server
const port = 1245;
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response body
  res.end('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app (the HTTP server)
module.exports = app;
