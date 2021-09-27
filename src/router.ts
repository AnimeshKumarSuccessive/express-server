import { Router } from 'express';
import { traineeRouter, usersRouter } from './controllers';


const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/users', usersRouter);

export default mainRouter;