import { Router } from 'express';
import TraineeRoutes  from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';

const router = Router();

router.get('/', validationHandler(validation.get), TraineeRoutes.get);
router.post('/', validationHandler(validation.create), TraineeRoutes.post);
router.put('/', validationHandler(validation.update), TraineeRoutes.put);
router.delete('/:id', validationHandler(validation.delete), TraineeRoutes.delete);
router.post('/createToken', TraineeRoutes.createToken);

export default router;