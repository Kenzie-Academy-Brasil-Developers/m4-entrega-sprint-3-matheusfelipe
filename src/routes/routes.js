import { Router } from 'express';
import {
  getAllCategoriesController,
  createCategoryController,
  getAllProductsController,
  createProductController,
  getProductController,
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
  updateProductController,
  deleteProductController,
  getProductsByCategoryController,
} from '../controllers';
import {
  verifyCategoryExistsMiddleWare,
  verifyCategoryNameExistsMiddleWare,
  verifyProductExistsMiddleWare,
  verifyProductNameExistsMiddleWare,
} from '../middlewares';

export const router = Router();

router.get('/categories', getAllCategoriesController);
router.get(
  '/categories/:id',
  verifyCategoryExistsMiddleWare,
  getCategoryController,
);
router.post(
  '/categories',
  verifyCategoryNameExistsMiddleWare,
  createCategoryController,
);
router.patch(
  '/categories/:id',
  verifyCategoryExistsMiddleWare,
  updateCategoryController,
);
router.delete(
  '/categories/:id',
  verifyCategoryExistsMiddleWare,
  deleteCategoryController,
);

router.get('/products', getAllProductsController);
router.get(
  '/products/:id',
  verifyProductExistsMiddleWare,
  getProductController,
);
router.post(
  '/products',
  verifyProductNameExistsMiddleWare,
  createProductController,
);
router.patch(
  '/products/:id',
  verifyProductExistsMiddleWare,
  updateProductController,
);
router.delete(
  '/products/:id',
  verifyProductExistsMiddleWare,
  deleteProductController,
);

router.get('/products/category/:categoryId', getProductsByCategoryController);
