import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { CartProduct } from '../CartProduct';
import { CartTotal } from '../CartTotal';
import { CartBox, CartContent, CartHeader } from './styles';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { IconButton } from '@mui/material';

export const Cart = () => {
    const { currentSale, setCurrentSale, setTotalItemCart, setIsOpenCart } = useContext(CartContext);

    const removeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newList = currentSale.filter((elem) => parseInt(e.currentTarget.id) !== elem.id);
        setTotalItemCart((old) => old - 1);
        setCurrentSale([...newList]);
    };

    return (
        <CartBox>
            <div>
                <CartHeader>
                    <h3>Carrinho de compras</h3>
                    <IconButton
                        aria-label='close-modal'
                        sx={
                            { '&:hover': { backgroundColor: '#ffffff1c' } }
                        }
                        onClick={() => setIsOpenCart(false)}
                    >
                        <CloseTwoToneIcon sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                    </IconButton>
                </CartHeader>
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
            </div>
        </CartBox>
    );
};
