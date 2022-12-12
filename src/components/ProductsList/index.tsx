import React from 'react';
import { toast } from 'react-toastify';

import { Product } from '../Product';
import { FilterTools, ProductsBox } from './styles';

export const ProductsList = ({ data, setCurrentSale, setFilteredProducts, filteredProducts, inputValue }) => {

    const handleClick = (e) => {
        const obj = data.find(elem => parseInt(e.target.id) === elem.id);

        setCurrentSale((old) => {
            if (!old.find(elem => parseInt(e.target.id) === elem.id)) {
                toast.success(`${obj.name} foi adicionado ao carrinho`, {autoClose: 800});
                return [...old, obj];
            } else {
                toast.warn('O produto já foi adicionado!');
                return old;
            }
        });
    };

    const newData = filteredProducts.length ? filteredProducts : data;

    return (
        <ProductsBox>
            {!!filteredProducts.length &&
                <FilterTools>
                    <div>
                        <h3>Resultados para:</h3>
                        <span>{inputValue}</span>
                    </div>
                    <button
                        onClick={(e) => !e.target.value.length && setFilteredProducts([])}
                        className='btn mediumGreen'
                    >Limpar busca</button>
                </FilterTools>}
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