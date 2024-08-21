import express, {Request, Response, NextFunction} from 'express';
import apiRouter from './routes/index';
import dotenv from 'dotenv/config';
import { errType } from './@types/errorType';
const app = express();

app.use(express.json());

app.use('/api/v1', apiRouter);

app.use('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to the movie API' });
});
app.all('*', (req:Request, res:Response, next:NextFunction)=>{
const err = new Error(`Can't find ${req.originalUrl} on the server!`) as any;
err.status = 'Not Found';
err.statusCode = 404;
next(err as errType)
})
app.use((err:errType,req:Request,Res:Response, next:NextFunction)=>{
  err.status = err.status || "Error";
  err.statusCode = err.statusCode || 500;
  Res.status(err.statusCode as number).json({status:err.status, message:err.message})
})
export default app;
