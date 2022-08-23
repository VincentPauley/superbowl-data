import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
    }
  }
}

import data from './data';

const app: Express = express();
app.use(cors());

const { PORT } = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log(`server is runnning on port: ${PORT}`);
});
