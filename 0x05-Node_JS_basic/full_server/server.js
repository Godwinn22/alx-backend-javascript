// full_server/server.js
import express from 'express';
import router from './routes/index';

const app = express();

// Use the router for handling routes
app.use('/', router);

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;
