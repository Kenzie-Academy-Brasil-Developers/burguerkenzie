import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/CartContext';

import { Product } from '../Product';
import { FilterTools, ProductsBox } from './styles';

export const ProductsList = () => {
    const { products: data, setCurrentSale, setFilteredProducts, filteredProducts, inputValue } = useContext(CartContext);

    const handleClick = (e: any) => {
        const obj: any = data.find(({ id }) => parseInt(e.target.id) === id);

        setCurrentSale((old: any) => {
            if (!old.find((elem: any) => parseInt(e.target.id) === elem.id)) {
                toast.success(`${obj.name} foi adicionado ao carrinho`, { autoClose: 800 });
                return [...old, obj];
            } else {
                toast.warn('O produto já foi adicionado!');
                return old;
            }
        });
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
                    <button
                        onClick={(e: any) => !e.target.value.length && setFilteredProducts([])}
                        className='btn mediumGreen'
                    >Limpar busca</button>
                </FilterTools>}
            <ul>
                {newData.map((product: any) => {
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
