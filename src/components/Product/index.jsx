import React from 'react';
import testImg from '../../assets/soOUeeW.png';
import { ProductContent, ProductInfo } from './styles';

export const Product = ({ product }) => {
    return (
        <ProductContent>
            {/* <img draggable='false' src={product.img} alt={product.name} /> */}
            <div className='img-box'>
                <img draggable='false' src={testImg} alt={product.name} />
            </div>
            <ProductInfo>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <button id={product.id} className='btn mediumGreen'>Adicionar</button>
            </ProductInfo>
        </ProductContent>
    );
};
