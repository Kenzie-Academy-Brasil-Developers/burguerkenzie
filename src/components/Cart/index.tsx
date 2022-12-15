import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { CartProduct } from '../CartProduct';
import { CartTotal } from '../CartTotal';
import { CartBox, CartContent, CartHeader } from './styles';

export const Cart = () => {
    const { currentSale, setCurrentSale, setTotalItemCart } = useContext(CartContext);

    const removeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newList = currentSale.filter((elem) => parseInt(e.currentTarget.id) !== elem.id);
        setTotalItemCart((old) => old - 1);
        setCurrentSale([...newList]);
    };

    return (
        <CartBox>
            <CartHeader>Carrinho de compras</CartHeader>
            {!currentSale.length
                ? <CartContent heightSize='158px'>
                    <h4>Sua sacola está vazia</h4>
                    <span>Adicione itens</span>
                </CartContent>
                : <CartContent heightSize='305px'>
                    <ul>
                        {currentSale.map((product) => {
                            return (
                                <CartProduct
                                    data={product}
                                    onClick={removeProduct}
                                    key={product.id}
                                />
                            );
                        })}
                    </ul>
                </CartContent>
            }
            {!!currentSale.length && <CartTotal />}
        </CartBox>
    );
};
