// full_server/controllers/StudentsController.js
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);

      let response = 'This is the list of our students\n';
      const fields = Object.keys(students).sort();

      for (const field of fields) {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }

      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);

      if (students[major]) {
        res.status(200).send(`List: ${students[major].join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
