import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

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

const { PORT } = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log(`server is runnning on port: ${PORT}`);
});
