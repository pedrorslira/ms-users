import { Router } from 'express';
import { create, findAll, findOne, update, remove } from '../controllers/user.controller';
import { validateDto } from '../middlewares/validation.middleware';
import { UserDto } from '../dtos/user/user.dto';

const router = Router();

router.post('/users', validateDto(UserDto), create);
router.get('/users', findAll);
router.get('/users/:id', findOne);
router.put('/users/:id', validateDto(UserDto), update);
router.delete('/users/:id', remove);

export default router;
