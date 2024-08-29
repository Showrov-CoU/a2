import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoute } from './modules/product/product.route';
const app: Application = express();
//const port = 3000;

app.use(express.json());
app.use(cors());

app.use(productRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.json({ value: a });
});

export default app;
