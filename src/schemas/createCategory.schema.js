import * as yup from 'yup';

export const createCategoryShape = yup.object().shape({
  name: yup.string().required('Category name is required'),
});
