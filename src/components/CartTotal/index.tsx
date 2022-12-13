import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { FooterStyled } from './styles';

export const CartTotal = () => {
  const { currentSale, setCurrentSale } = useContext(CartContext);

  return (
    <FooterStyled>
      <div className='total-value'>
        <h4>Total</h4>
        <span>{currentSale.reduce((acc: number, cur: any) => acc + cur.price, 0)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      </div>
      <button onClick={() => setCurrentSale([])} className='btn defaultGrey'>Remover todos</button>
    </FooterStyled>
  );
};
