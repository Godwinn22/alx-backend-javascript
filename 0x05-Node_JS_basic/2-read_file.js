const fs = require('fs');

// Function to count students in a CSV file
const countStudents = (path) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split file data into lines
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      console.log('No students in the database');
      return;
    }

    // Skip the header and process student data
    const students = lines.slice(1).filter((line) => line.trim() !== ''); // Remove empty lines
    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the number of students per field
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Handle error if file cannot be read
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
