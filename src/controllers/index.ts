import { Router } from 'express';
import  TraineeRoutes  from './trainee';

const router = Router();

router.use('/trainee', TraineeRoutes.get);
router.use('/trainee', TraineeRoutes.post);

export default TraineeRoutes;