import React from 'react';

import { FooterStyled } from './styles';

export const CartTotal = ({ currentSale, setCurrentSale }) => {
  return (
    <FooterStyled>
      <div className="total-value">
        <h4>Total</h4>
        <span>{currentSale.reduce((acc, cur) => acc + cur.price, 0)
        .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      </div>
      <button onClick={() => setCurrentSale([])} className='btn defaultGrey'>Remover todos</button>
    </FooterStyled>
  );
};
