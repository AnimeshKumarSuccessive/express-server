import { Router } from 'express';
import TraineeRoutes  from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const router = Router();

router.get('/', authMiddleWare(TraineeRoutes, 'read'), validationHandler(validation.get), TraineeRoutes.get);
router.post('/', authMiddleWare(TraineeRoutes, 'write'), validationHandler(validation.create), TraineeRoutes.post);
router.put('/', authMiddleWare(TraineeRoutes, 'write'), validationHandler(validation.update), TraineeRoutes.put);
router.delete('/:id', authMiddleWare(TraineeRoutes, 'delete'), validationHandler(validation.delete), TraineeRoutes.delete);
router.post('/createToken', TraineeRoutes.createToken);

export default router;