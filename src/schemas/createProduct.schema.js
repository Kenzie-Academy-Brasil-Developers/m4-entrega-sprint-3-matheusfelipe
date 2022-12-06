import * as yup from 'yup';

export const createProductShape = yup.object().shape({
  name: yup.string().required('Product name is required'),
  price: yup.number().required('Product price is required'),
  category_id: yup.number().nullable(),
});
