import database from '../database';

export const getAllProductsService = async (orderBy = 'ASC') => {
  const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

  const { rows } = await database.query(`
    SELECT * 
    FROM products
    ORDER BY name ${direction};
  `);

  return [200, rows];
};

export const getProductService = async (id) => {
  const { rows } = await database.query(
    `
    SELECT *
    FROM products
    WHERE id = $1
  `,
    [id],
  );

  return [200, rows[0]];
};

export const createProductService = async (name, price, category_id) => {
  const { rows } = await database.query(
    `
    INSERT INTO products (name, price, category_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
    [name, price, category_id],
  );

  return [201, rows[0]];
};

export const updateProductService = async (
  id,
  name,
  price,
  category_id,
  currentProduct,
) => {
  const nameUpdate = name || currentProduct.name;
  const priceUpdate = price || currentProduct.price;
  const category_idUpdate = category_id || currentProduct.category_id;

  const { rows } = await database.query(
    `
      UPDATE products
      SET name = $1, price = $2, category_id = $3
      WHERE id = $4
      RETURNING *;   
    `,
    [nameUpdate, priceUpdate, category_idUpdate, id],
  );
  return [200, rows[0]];
};

export const deleteProductService = async (id) => {
  const deleteOp = await database.query(
    `
      DELETE FROM products
      WHERE id = $1 
    `,
    [id],
  );
  return deleteOp;
};

export const getProductsByCategoryService = async (categoryId) => {
  const { rows } = await database.query(
    `
    SELECT 
	    p.name,
	    p.price,
	    c.name AS category
    FROM
	    products p
    JOIN
	    categories c ON p.category_id = c.id
    WHERE 
	    c.id = $1;
  `,
    [categoryId],
  );

  return [200, rows];
};
