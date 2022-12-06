import * as yup from 'yup';

export const updateProductShape = yup.object().shape({
  name: yup.string().optional(),
  price: yup.number().optional(),
  category_id: yup.number().nullable().optional(),
});
