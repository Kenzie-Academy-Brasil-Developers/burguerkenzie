import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Button } from '../../styles/buttons';
import { FooterStyled } from './styles';

export const CartTotal = () => {
  const { currentSale, setCurrentSale, setTotalItemCart } = useContext(CartContext);

  return (
    <FooterStyled>
      <div className='total-value'>
        <h4>Total</h4>
        <span>{currentSale.reduce((acc: number, cur: { price: number; }) => acc + cur.price, 0)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      </div>
      <Button onClick={() => {
        setCurrentSale([]);
        setTotalItemCart(0);
      }}
        variant='defaultGrey'>Remover todos</Button>
    </FooterStyled>
  );
};
