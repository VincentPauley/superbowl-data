import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server!');
});

app.listen(port, () => {
  console.log('server is runnning on port 3000');
});
