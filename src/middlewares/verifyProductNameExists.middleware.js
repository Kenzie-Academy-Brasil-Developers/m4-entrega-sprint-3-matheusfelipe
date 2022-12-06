import database from '../database';
import { AppError } from '../error';

export const verifyProductNameExistsMiddleWare = async (req, res, next) => {
  const { name } = req.body;

  const { rows } = await database.query(
    `
    SELECT *
    FROM products
    WHERE name = $1
  `,
    [name],
  );

  const productNameExists = rows[0];

  if (productNameExists) {
    throw new AppError('Product already exists', 400);
  }

  return next();
};
