import database from '../database';
import { AppError } from '../error';

export const verifyProductExistsMiddleWare = async (req, res, next) => {
  const { id } = req.params;

  const { rows } = await database.query(
    `
    SELECT *
    FROM products
    WHERE id = $1
  `,
    [id],
  );

  const productExists = rows[0];

  if (!productExists) {
    throw new AppError('Product not found', 404);
  }

  req.currentProduct = productExists;

  return next();
};
