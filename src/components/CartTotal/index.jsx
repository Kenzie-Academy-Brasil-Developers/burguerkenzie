import React from 'react'

import { FooterStyled } from './styles';

export const CartTotal = () => {
  return (
    <FooterStyled>
        <div className="total-value">
            <h4>Total</h4>
            <span>R$ 40,00</span>
        </div>
        <button className='btn defaultGrey'>Remover todos</button>
    </FooterStyled>
  )
}
