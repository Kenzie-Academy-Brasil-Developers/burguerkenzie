import { useContext } from 'react';
import { Cart } from '../../components/Cart';
import { Header } from '../../components/Header';
import { ProductsList } from '../../components/ProductsList';
import { CartContext } from '../../contexts/CartContext';
import { MainContainer } from './styles';

export const Home = () => {
    const { isOpenCart } = useContext(CartContext);

    return (
        <>
            <Header />
            <MainContainer className='container'>
                <ProductsList />
                {isOpenCart && <Cart />}
            </MainContainer>
        </>
    );
};
