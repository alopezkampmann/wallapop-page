import { createContext } from 'react';
import {Product} from './product/types';

export interface ProductActions {
    type: 'add_product' | 'remove_product';
    payload: Product;
};

export interface ProductState {
    products: {[key: string]: Product[]};
}

export const inicialProductState: ProductState = {
    products: {} 
}

export const productReducer = (state: ProductState, action: ProductActions) => {
    let product = action.payload;
    let products = { ...state.products };

    switch (action.type) {
        case 'add_product':
            if (products[product.title]) {
                products[product.title].push(product);
            } else {
                products[product.title] = [product];
            }

            return { ...state, products };
        case 'remove_product':
            products[product.title].pop();

            if (products[product.title].length === 0) delete products[product.title];

            return { ...state, products };
        default:
            return state;
    }
}

export interface ProdcutContextProps {
    productState: ProductState;
    productDispatch: React.Dispatch<ProductActions>
}

const FavProductContext = createContext<ProdcutContextProps>({
    productState: inicialProductState,
    productDispatch: () => {}
})

export const FavProductContextConsumer = FavProductContext.Consumer;
export const FavProductContextProvider = FavProductContext.Provider;

export default FavProductContext;