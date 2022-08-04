import express, { Express, Request, Response } from 'express';

import data from './data';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log('server is runnning on port 3000');
});
