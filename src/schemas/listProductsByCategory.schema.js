import * as yup from 'yup';
import { productsByCategoryShape } from './productsByCategory.schema';

export const listProductsByCategoryShape = yup.array(productsByCategoryShape);
