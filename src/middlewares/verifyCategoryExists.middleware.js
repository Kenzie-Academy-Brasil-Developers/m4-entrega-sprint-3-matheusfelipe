import database from '../database';
import { AppError } from '../error';

export const verifyCategoryExistsMiddleWare = async (req, res, next) => {
  const { id } = req.params;

  const { rows } = await database.query(
    `
    SELECT *
    FROM categories
    WHERE id = $1
  `,
    [id],
  );

  const categoryExists = rows[0];

  if (!categoryExists) {
    throw new AppError('Category not found', 404);
  }

  return next();
};
