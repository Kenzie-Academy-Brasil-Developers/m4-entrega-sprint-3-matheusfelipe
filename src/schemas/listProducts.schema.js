import * as yup from 'yup';
import { createProductShape } from './createProduct.schema';

export const listProductsShape = yup.array(createProductShape);
