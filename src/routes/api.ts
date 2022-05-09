import { Router } from 'express';
import {Auth} from '../midlewares/auth'

import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list',Auth.private, ApiController.list);//tornando rota privada 

export default router;