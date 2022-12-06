import * as yup from 'yup';

export const productsByCategoryShape = yup.object().shape({
  name: yup.string(),
  price: yup.number(),
  category: yup.string(),
});
