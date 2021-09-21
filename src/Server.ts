import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as route  from './libs/routes';
import router from './router';


export default class Server {
    app: express.Express;

    /**
     * This is Constructor
     * @param config 
     */
    constructor(private config: any) {

        this.app = express();
    }

    setupRoutes() {
        this.app.get('/health-check', (req, res) => {
            res.send("I am OK")
        })

        this.app.use(route.notFoundRoute);
        this.app.use(route.errorHandler);
        this.app.use(bodyParser.json());
    }

    initBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    /**
     * This Method use to set in initial route
     * @returns
     */
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }


    run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            const message = `|| App is running at port '${port}' in '${env}' mode ||`;
            console.log(message);
        });

        return this;
    }
    
}