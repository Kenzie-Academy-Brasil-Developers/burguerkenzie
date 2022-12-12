import { createContext, useEffect, useState } from 'react';
import { instance } from '../../services/api';

interface ICartProps {
    children: React.ReactNode;
}

interface ICartContext {
    products: never[];
    setProducts: React.Dispatch<React.SetStateAction<never[]>>;
    filteredProducts: never[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<never[]>>;
    currentSale: never[];
    setCurrentSale: React.Dispatch<React.SetStateAction<never[]>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProps) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        instance.get('/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <CartContext.Provider value={{
            products,
            setProducts,
            filteredProducts,
            setFilteredProducts,
            currentSale,
            setCurrentSale,
            inputValue,
            setInputValue,
        }}>
            {children}
        </CartContext.Provider>
    );
}

