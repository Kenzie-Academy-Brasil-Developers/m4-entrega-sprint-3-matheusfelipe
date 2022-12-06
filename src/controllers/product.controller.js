import { AppError } from '../error';
import {
  createProductShape,
  listProductsByCategoryShape,
  listProductsShape,
  updateProductShape,
} from '../schemas';
import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  getProductsByCategoryService,
  getProductService,
  updateProductService,
} from '../services';

export const getAllProductsController = async (req, res) => {
  try {
    await listProductsShape.validate();

    const { orderBy } = req.query;

    const [status, categories] = await getAllProductsService(orderBy);
    return res.status(status).json(categories);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const getProductController = async (req, res) => {
  try {
    await listProductsShape.validate();

    const { id } = req.params;
    const [status, product] = await getProductService(id);

    return res.status(status).json(product);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const createProductController = async (req, res) => {
  try {
    await createProductShape.validate(req.body);

    const { name, price, category_id } = req.body;

    const [status, product] = await createProductService(
      name,
      price,
      category_id,
    );

    return res.status(status).json(product);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const updateProductController = async (req, res) => {
  try {
    await updateProductShape.validate(req.body);

    const { id } = req.params;
    const { name, price, category_id } = req.body;
    const { currentProduct } = req;

    const [status, product] = await updateProductService(
      id,
      name,
      price,
      category_id,
      currentProduct,
    );

    return res.status(status).json(product);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  await deleteProductService(id);
  return res.sendStatus(204);
};

export const getProductsByCategoryController = async (req, res) => {
  try {
    await listProductsByCategoryShape.validate();

    const { categoryId } = req.params;
    const [status, products] = await getProductsByCategoryService(categoryId);

    return res.status(status).json(products);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};
