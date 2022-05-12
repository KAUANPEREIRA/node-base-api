import { Router } from 'express';
import {Auth} from '../midlewares/auth'

import * as ApiController from '../controllers/apiController';
import * as emailController from '../controllers/emailController'
//se atentar sempre nas importações

const router = Router();

router.get('/ping',ApiController.ping)
router.post('/contato',emailController.contato)

export default router;
