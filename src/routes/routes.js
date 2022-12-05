import { Router } from 'express';
import { getAllCategoriesController } from '../controllers/category.controller';

export const router = Router();

router.get('/categories', getAllCategoriesController);
