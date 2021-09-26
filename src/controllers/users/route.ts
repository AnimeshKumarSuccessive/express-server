import { Router } from 'express';
import usersRoutes  from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';

const router = Router();

router.get('/', validationHandler(validation.get), usersRoutes.get);
router.post('/', validationHandler(validation.create), usersRoutes.post);
router.put('/:id', validationHandler(validation.update), usersRoutes.put);
router.delete('/:id?', validationHandler(validation.delete), usersRoutes.delete);
router.post('/createToken', usersRoutes.createToken);

export default router;