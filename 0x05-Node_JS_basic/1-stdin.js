// Display the initial message

process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Listen for data input (user's name)
process.stdin.on('data', (data) => {
  // Trim to remove extra new lines/spaces
//   const name = data.toString().trim();
  process.stdout.write(`Your name is: ${data}`);

  // End the input process (optional for interactive mode)
  process.stdin.end();
});

// Handle the end of the program (when the input ends)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
