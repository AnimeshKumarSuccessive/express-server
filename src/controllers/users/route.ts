import { Router } from 'express';
import UserRoutes from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { users } from '../../libs/constant';


const router = Router();

<<<<<<< HEAD
console.log(UserRoutes);

=======
router.get('/', validationHandler(validation.get), usersRoutes.get);
router.post('/', validationHandler(validation.create), usersRoutes.post);
router.put('/:id', validationHandler(validation.update), usersRoutes.put);
router.delete('/:id', validationHandler(validation.delete), usersRoutes.delete);
router.post('/createToken', usersRoutes.createToken);
>>>>>>> c64c9dc33208aa221b794b49d490e800efea4f01

router.get('/', authMiddleWare(users, 'read'), validationHandler(validation.get), UserRoutes.get);
router.post('/', authMiddleWare(users, 'write'), validationHandler(validation.create), UserRoutes.post);
router.put('/', authMiddleWare(users, 'write'), validationHandler(validation.update), UserRoutes.put);
router.delete('/:id', authMiddleWare(users, 'delete'), validationHandler(validation.delete), UserRoutes.delete);
router.post('/createToken', UserRoutes.createToken);
export default router;