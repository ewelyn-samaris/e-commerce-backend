import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();

router.get('/', new ProductController().hello);

export default router;