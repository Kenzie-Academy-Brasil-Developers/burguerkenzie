import { createContext, useEffect, useState } from 'react';

import { instance } from '../../services/api';

interface ICartProps {
    children: React.ReactNode;
}

export interface IProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface ICartContext {
    products: IProducts[];
    setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
    filteredProducts: IProducts[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
    currentSale: IProducts[];
    setCurrentSale: React.Dispatch<React.SetStateAction<IProducts[]>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProps) => {

    const [products, setProducts] = useState([] as IProducts[]);
    const [filteredProducts, setFilteredProducts] = useState([] as IProducts[]);
    const [currentSale, setCurrentSale] = useState([] as IProducts[]);
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

