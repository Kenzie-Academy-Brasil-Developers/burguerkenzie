import React from 'react';

import { Product } from '../Product';
import { ProductsBox } from './styles';

export const ProductsList = ({ data, setCurrentSale }) => {

    const handleClick = (e) => {
        const obj = data.find(elem => parseInt(e.target.id) === elem.id);
        
        setCurrentSale((old) => {
            if (!old.find(elem => parseInt(e.target.id) === elem.id)) {
                return [...old, obj];
            } else return old;
        });
    };

    return (
        <ProductsBox>
            <ul>
                {data.map((product) => {
                    return (
                        <Product
                            product={product}
                            onClick={handleClick}
                            key={product.id}
                        />
                    );
                })}
            </ul>
        </ProductsBox>
    );
};
