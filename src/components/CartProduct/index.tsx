import React from 'react';

import { ProductContent } from './styles';

export const CartProduct = ({ data, onClick }) => {
    return (
        <ProductContent>
            <div className='img-box'>
                <img draggable='false' src={data.img} alt={data.name} />
            </div>
            <div className="product-info">
                <div className="product-desc">
                    <h4>{data.name.length >= 12 ? `${data.name.slice(0, 12)}...` : data.name}</h4>
                    <span>{data.category}</span>
                </div>
                <button id={data.id} onClick={onClick}>Remover</button>
            </div>
        </ProductContent>
    );
};
