import * as express from 'express';
import * as bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';

export default class Server {
  app: express.Express;

  constructor(private config) {
    this.app = express();
  }

  public boostrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  public run() {
    const { port, env } = this.config;
    this.app.listen(port, (err) => {
      if (err) console.log('Error 404');
      console.log(`Listening on ${port} in ${env} environment`);
    });
    return this;
  }

  public setupRoutes() {
    this.app.get('/health-check', (req, res, next) => {
      res.status(200).json({ status: 200, message: 'I am OK' });
    });

    this.app.post('/data', (req, res, next) => {
      console.log('POST requested..', req.body);
      res.send('I am OK');
    });

    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }
  }