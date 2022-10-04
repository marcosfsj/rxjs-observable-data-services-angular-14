import { Product } from './to-do-custom-store.model';

export interface ProductState {
    products: Product[];
}

export const initialState = {
    products: [],
};