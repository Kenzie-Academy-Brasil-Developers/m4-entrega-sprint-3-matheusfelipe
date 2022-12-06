import * as yup from 'yup';
import { createCategoryShape } from './createCategory.schema';

export const listCategoriesShape = yup.array(createCategoryShape);
