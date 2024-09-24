const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const path = process.argv[2]; // Get the database path from command line arguments

// Create an HTTP server
const port = 1245;
const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    // Handle the root url
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write('This is the list of our students\n');
    try {
      // Call the countStudents function to get and display student data
      const data = await countStudents(path);
      res.end(data);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
    });
    res.end('404 Not Found');
  }
});

// The server listens on port 1245
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}/`);
});

// Export the app (the HTTP server)
module.exports = app;
