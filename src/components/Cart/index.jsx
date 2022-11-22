import React from 'react';
import { CartBox, CartContent, CartHeader } from './styles';

export const Cart = ({ currentSale }) => {
    return (
        <CartBox>
            <CartHeader>Carrinho de compras</CartHeader>
            {!currentSale.length
                ? <CartContent heightSize='158px'>
                    <h4>Sua sacola está vazia</h4>
                    <span>Adicione itens</span>
                </CartContent>
                : <CartContent heightSize='305px'>
                    {currentSale.map((product) => {
                        return (
                            <CartProduct
                                data={product}
                                key={product.id}
                            />
                        );
                    })}
                </CartContent>
            }
        </CartBox>
    );
};
