import { getAllCategoriesService } from '../services/categories.service';

export const getAllCategoriesController = async (req, res) => {
  const { orderBy } = req.query;
  const [status, categories] = await getAllCategoriesService(orderBy);
  return res.status(status).json(categories);
};
