import express from 'express';
import apiRouter from './routes/index';
import dotenv from 'dotenv/config';
const app = express();

app.use(express.json());

app.use('/api/v1', apiRouter);

app.use('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to the movie API' });
});

export default app;
