import React from 'react';

import { Product } from '../Product';
import { ProductsBox } from './styles';

export const ProductsList = ({ data, setCurrentSale, filteredProducts }) => {

    const handleClick = (e) => {
        const obj = data.find(elem => parseInt(e.target.id) === elem.id);
        
        setCurrentSale((old) => {
            if (!old.find(elem => parseInt(e.target.id) === elem.id)) {
                return [...old, obj];
            } else return old;
        });
    };

    const newData = filteredProducts.length ? filteredProducts : data;

    return (
        <ProductsBox>
            <ul>
                {newData.map((product) => {
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
