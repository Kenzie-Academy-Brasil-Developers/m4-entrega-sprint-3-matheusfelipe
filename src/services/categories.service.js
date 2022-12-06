import database from '../database';

export const getAllCategoriesService = async (orderBy = 'ASC') => {
  const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

  const { rows } = await database.query(`
    SELECT * 
    FROM categories
    ORDER BY name ${direction};
  `);

  return [200, rows];
};

export const getCategoryService = async (id) => {
  const { rows } = await database.query(
    `
    SELECT *
    FROM categories
    WHERE id = $1
  `,
    [id],
  );

  return [200, rows[0]];
};

export const createCategoryService = async (name) => {
  const { rows } = await database.query(
    `
      INSERT INTO categories (name)
      VALUES ($1) 
      RETURNING *;   
    `,
    [name],
  );

  return [201, rows[0]];
};

export const updateCategoryService = async (id, name) => {
  const { rows } = await database.query(
    `
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *;   
    `,
    [name, id],
  );

  return [200, rows[0]];
};

export const deleteCategoryService = async (id) => {
  const deleteOp = await database.query(
    `
      DELETE FROM categories
      WHERE id = $1 
    `,
    [id],
  );
  return deleteOp;
};
