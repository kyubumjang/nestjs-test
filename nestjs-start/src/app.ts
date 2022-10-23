import * as express from 'express';

const app: express.Express = express();
const port: number = 8000;

// router
app.get('/test', (req: express.Request, res: express.Response) => {
  console.log(req);

  res.send({ hello: 'world!' });
});

app.post('/test', (req: express.Request, res: express.Response) => {
  res.send({ person: 'kyubum' });
});

// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
