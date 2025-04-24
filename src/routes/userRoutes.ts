import { Router } from 'express';
import { create, findAll, findOne, update, remove } from '../controllers/user.controller';

const router = Router();

router.post('/users', create);
router.get('/users', findAll);
router.get('/users/:id', findOne);
router.put('/users/:id', update);
router.delete('/users/:id', remove);

export default router;
