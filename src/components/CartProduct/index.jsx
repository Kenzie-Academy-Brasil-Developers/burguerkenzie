import React from 'react';

import testImg from '../../assets/soOUeeW.png';
import { ProductContent } from './styles';

export const CartProduct = ({ data }) => {
    return (
        <ProductContent>
            <div className='img-box'>
                <img draggable='false' src={testImg} alt={data.name} />
            </div>
            <div className="product-info">
                <div className="product-desc">
                    <h4>{data.name.length >= 12 ? `${data.name.slice(0, 12)}...` : data.name}</h4>
                    <span>{data.category}</span>
                </div>
                <button>Remover</button>
            </div>
        </ProductContent>
    );
};
