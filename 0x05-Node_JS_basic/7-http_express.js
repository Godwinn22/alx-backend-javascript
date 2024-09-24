const express = require('express');
const countStudents = require('./3-read_file_async');
// Import the refactored countStudents function
const path = process.argv[2]; // Get the database path from the command line

const app = express();

// Root route ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students route ('/students')
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');

  try {
    // Call countStudents and wait for the result
    const data = await countStudents(path);

    // Send the result to the response stream
    res.write(data);
    res.end();
  } catch (error) {
    // Handle the error by writing the error message to the response
    res.write(error.message);
    res.end();
  }
});

// Set the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on http://localhost:1245');
});

// Export the app
module.exports = app;
