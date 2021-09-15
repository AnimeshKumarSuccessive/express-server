import * as express from 'express';

export default class Server {
  app: express.Express;

  constructor(private config){
   this.app = express();
  }

  setupRoutes(){
  this.app.get('/health-check', function (req, res) {
    res.send('I am OK')
  })
  }

  bootstrap(){
    this.setupRoutes()
    return this;
  }
  
  run(){
    this.app.listen(9000, ()=>{
      console.log('App started successfully');
    })
    return this;
  }
}