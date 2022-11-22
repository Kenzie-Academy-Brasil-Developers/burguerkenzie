import React from 'react';

import { Product } from '../Product';
import { ProductsBox } from './styles';

export const ProductsList = ({ data }) => {
    return (
        <ProductsBox>
            <ul>
                {data.map((product) => {
                    return (
                        <Product
                            product={product}
                            key={product.id}
                        />
                    );
                })}
            </ul>
        </ProductsBox>
    );
};
