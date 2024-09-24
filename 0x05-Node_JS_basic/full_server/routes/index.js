// full_server/routes/index.js
import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();

// Home route
router.get('/', AppController.getHomepage);

// Students route
router.get('/students', StudentsController.getAllStudents);

// Students by major route
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
