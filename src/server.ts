import * as express from 'express';
import * as bodyParser from 'body-parser';
import Database from './libs/Database';
import mainRouter from './router';
import { notFoundRoute, errorHandler } from './libs/routes';

export default class Server {
  app: express.Express;

  constructor(private config) {
    this.app = express();
  }

  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }
  public setupRoutes() {
    this.app.get('/health-check', (req, res, next) => {
      res.status(200).json({ status: 200, message: 'I am OK' });
    });
    this.app.use('/api', mainRouter)
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public async run() {
    const { port, env, mongoURL } = this.config;
    try {
      await Database.open(mongoURL);
      this.app.listen(port, () => {
        const message = `|| App is running at port '${port}' in '${env}' mode ||`;
        console.log(message);      
    });

    } catch(error){
        console.log("inside catch", error);
    };
    return this;
  }
  }