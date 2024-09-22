// Display the initial message

console.log('Welcome to Holberton School, what is your name?');
// Listen for data input (user's name)
process.stdin.on('data', (data) => {
  // Trim to remove extra new lines/spaces
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // End the input process (optional for interactive mode)
  process.stdin.end();
});

// Handle the end of the program (when the input ends)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
