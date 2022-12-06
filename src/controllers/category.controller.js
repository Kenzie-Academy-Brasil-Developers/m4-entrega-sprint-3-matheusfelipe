import { AppError } from '../error';
import { createCategoryShape, listCategoriesShape } from '../schemas';
import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoriesService,
  getCategoryService,
  updateCategoryService,
} from '../services';

export const getAllCategoriesController = async (req, res) => {
  try {
    await listCategoriesShape.validate();

    const { orderBy } = req.query;
    const [status, categories] = await getAllCategoriesService(orderBy);

    return res.status(status).json(categories);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const getCategoryController = async (req, res) => {
  try {
    await listCategoriesShape.validate();

    const { id } = req.params;
    const [status, category] = await getCategoryService(id);

    return res.status(status).json(category);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const createCategoryController = async (req, res) => {
  try {
    await createCategoryShape.validate(req.body);

    const { name } = req.body;
    const [status, category] = await createCategoryService(name);

    return res.status(status).json(category);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    await createCategoryShape.validate(req.body);

    const { id } = req.params;
    const { name } = req.body;

    const [status, category] = await updateCategoryService(id, name);

    return res.status(status).json(category);
  } catch (err) {
    throw new AppError(err.message, 400);
  }
};

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  await deleteCategoryService(id);
  return res.sendStatus(204);
};
