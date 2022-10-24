import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

interface ApiError {
  code: string;
  message: string;
}
// logging middleware
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
  }
);

// json middleware
app.use(express.json());

// READ 고양이 전체 데이터 다 조회
app.get('/cats', (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error');
    res.status(200).send({ success: true, data: { cats } });
  } catch (error: any) {
    const err = error as ApiError;
    res.status(400).send({ success: false, error: error.message });
  }
});

// READ 특정 고양이 데이터 조회
app.get('/cats/:id', (req: express.Request, res: express.Response) => {
  try {
    const params = req.params;
    console.log(params);

    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({ success: true, data: { cat } });
  } catch (error: any) {
    const err = error as ApiError;
    res.status(400).send({ success: false, error: error.message });
  }
});

// CREATE 새로운 고양이 추가
app.post('/cats', (req: express.Request, res: express.Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); //CREATE
    res.status(200).send({ success: true, data: { data } });
  } catch (error: any) {
    const err = error as ApiError;
    res.status(400).send({ success: false, error: error.message });
  }
});

// 404 middleware
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
