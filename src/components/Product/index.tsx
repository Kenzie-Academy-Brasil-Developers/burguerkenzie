import React from 'react';

import { ProductContent, ProductInfo } from './styles';

export const Product = ({ product, onClick }) => {
    return (
        <ProductContent>
            <div className='img-box'>
                <img draggable='false' src={product.img} alt={product.name} />
            </div>
            <ProductInfo>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <button id={product.id} onClick={onClick} className='btn mediumGreen'>Adicionar</button>
            </ProductInfo>
        </ProductContent>
    );
};
