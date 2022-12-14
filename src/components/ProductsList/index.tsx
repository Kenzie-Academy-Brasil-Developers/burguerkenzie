import { Button } from '@mui/material';
import { useContext } from 'react';
import { toast } from 'react-toastify';

import { CartContext, IProducts } from '../../contexts/CartContext';
import { Product } from '../Product';
import { FilterTools, ProductsBox } from './styles';

export const ProductsList = () => {
    const {
        products: data,
        currentSale,
        setCurrentSale,
        setFilteredProducts,
        filteredProducts,
        inputValue,
        setInputValue,
        setTotalItemCart,
    } = useContext(CartContext);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        let obj: IProducts | null = data.find(({ id }) => parseInt(e.currentTarget.id) === id) || null;

        if (!currentSale.find((elem) => parseInt(e.currentTarget.id) === elem.id)) {
            if (obj !== null) {
                toast.success(`${obj.name} foi adicionado ao carrinho`, { autoClose: 800 });
                setTotalItemCart((old) => old + 1);
                setCurrentSale([...currentSale, obj]);
            }
        } else {
            toast.warn('O produto já foi adicionado!');
            setCurrentSale(currentSale);
        }
    };

    const newData = filteredProducts.length ? filteredProducts : data;

    return (
        <ProductsBox>
            {!!filteredProducts.length &&
                <FilterTools>
                    <div>
                        <h3>Resultados para:</h3>
                        <span>{inputValue}</span>
                    </div>
                    <Button
                        onClick={(e) => {
                            setInputValue('');
                            !e.currentTarget.value.length && setFilteredProducts([]);
                        }}
                        type='button'
                        variant='contained'
                        size='large'
                        color='primary'
                    >Limpar busca</Button>
                </FilterTools>}
            <ul>
                {newData.map((product) => {
                    return (
                        <Product
                            product={product}
                            onClick={handleClick}
                            key={product.id}
                        />
                    );
                })}
            </ul>
        </ProductsBox>
    );
};
