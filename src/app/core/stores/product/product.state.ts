import { Product } from './product.model';

export interface ProductState {
    products: Product[];
}

export const initialState = {
    products: [],
};