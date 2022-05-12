import { Router } from 'express';
import {Auth} from '../midlewares/auth'

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping',ApiController.ping)
export default router;