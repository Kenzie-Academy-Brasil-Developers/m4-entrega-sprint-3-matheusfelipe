import database from '../database';

export const getAllCategoriesService = async (orderBy = 'ASC') => {
  const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
  const { rows } = await database.query(
    `SELECT * FROM categories ORDER BY name ${direction}`,
  );
  return [200, rows];
};
