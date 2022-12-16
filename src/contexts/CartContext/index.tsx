import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    totalItemCart: number;
    setTotalItemCart: React.Dispatch<React.SetStateAction<number>>;
    isOpenCart: boolean;
    setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProps) => {

    const [products, setProducts] = useState([] as IProducts[]);
    const [filteredProducts, setFilteredProducts] = useState([] as IProducts[]);
    const [currentSale, setCurrentSale] = useState([] as IProducts[]);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCart, setTotalItemCart] = useState(0);
    const [isOpenCart, setIsOpenCart] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (localStorage.userToken) {
                    const { data } = await instance.get('/products', {
                        headers: { Authorization: `Bearer ${localStorage.userToken}` },
                    });

                    setProducts(data);
                } else {
                    localStorage.clear();
                    navigate('/');
                }
            } catch (err) {
                toast.error('Ops! Aconteceu algo de errado.');
                localStorage.clear();
                navigate('/');
                return err;
            }
        };
        fetchProducts();
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
            totalItemCart,
            setTotalItemCart,
            isOpenCart,
            setIsOpenCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}

