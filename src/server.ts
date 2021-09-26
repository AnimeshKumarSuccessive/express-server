import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as route  from './libs/routes';
import Database from './libs/Database';
import router from './router';
import NotFoundRoute from './libs/routes/NotFoundRoute';


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
  
    middleware1(req: express.Request, res: express.Response, next: express.NextFunction) {
      console.log('middleWare1');
      next();
    }
  
    middleware2(req: express.Request, res: express.Response, next: express.NextFunction) {
      console.log('middleWare2');
      next();
    }

    setupRoutes() {
      const { app } = this;
      
  
      // Route 1
      app.get('/health-check', this.middleware1, this.middleware2, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('health-check api called.');
        res.status(200).json({
          status: 200,
          message: 'I am OK',
        });
      });
  
      // Route 2
      app.post('/data', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('post request', req.body);
        res.send('I am OK');
      });
  
      app.use('/api', router);
      app.use(route.notFoundRoute);
      app.use(route.errorHandler);
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