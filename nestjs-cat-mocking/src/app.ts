import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

// 미들웨어
// next 함수: 프론트 => 미들웨어를 거치고 next 함수로 라우터를 찾음, 찾아서 실행
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
  }
);

app.get(
  '/cats/som',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log('this is som middleware');
    next();
  }
);

// 라우터
app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get(
  '/cats/blue',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send({ blue: Cat[0] });
  }
);

app.get('/cats/som', (req: express.Request, res: express.Response) => {
  res.send({ som: Cat[1] });
});

// end-point 일치하는 것이 없을 때
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    res.send({ error: '404 not found error' });
    next();
  }
);

app.listen(8000, () => {
  console.log('server is on 8000 port');
});
