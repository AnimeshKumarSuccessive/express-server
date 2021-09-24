import { Router } from 'express';
import TraineeRoutes  from './controller';

const router = Router();

router.get('/', TraineeRoutes.get);
router.post('/', TraineeRoutes.post);
router.put('/', TraineeRoutes.put);
router.delete('/:id', TraineeRoutes.delete);

export default router;