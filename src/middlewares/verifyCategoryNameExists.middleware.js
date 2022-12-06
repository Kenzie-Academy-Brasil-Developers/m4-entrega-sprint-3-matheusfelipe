import database from '../database';
import { AppError } from '../error';

export const verifyCategoryNameExistsMiddleWare = async (req, res, next) => {
  const { name } = req.body;

  const { rows } = await database.query(
    `
    SELECT *
    FROM categories
    WHERE name = $1
  `,
    [name],
  );

  const categoryExists = rows[0];

  if (categoryExists) {
    throw new AppError('Category already exists', 400);
  }

  return next();
};
