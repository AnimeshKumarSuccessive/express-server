import * as express from 'express';
import * as bodyParser from 'body-parser';
import Database from './libs/Database';
import mainRouter from './router';
import { notFoundRoute, errorHandler } from './libs/routes';

export default class Server {

    private app: express.Express;
  
    /**
        * This is constructor
        * @param config
        */
    constructor(private config: any) {
      this.app = express();
    }
  
    get application() {
      return this.app;
    }

    setupRoutes() {
      const { app } = this;
      app.get('/health-check',(req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('health-check api called.');
        res.status(200).json({
          status: 200,
          message: 'I am OK',
        });
      });
      app.use('/api', mainRouter);
      app.use(mainRouter.notFoundRoute);
      app.use(mainRouter.errorHandler);
    }
  
    initBodyParser() {
      this.app.use(bodyParser.urlencoded({extended: true}));
      this.app.use(bodyParser.json());
    }
  
    /**
     * To bootstrap our app
     * @returns
     */
    bootstrap() {
      this.initBodyParser();
      this.setupRoutes();
      return this;
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