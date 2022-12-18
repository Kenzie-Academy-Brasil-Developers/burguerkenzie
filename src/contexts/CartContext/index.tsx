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
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    isError: boolean;
    setIsError: React.Dispatch<React.SetStateAction<boolean>>;
    removeProduct: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProps) => {

    const [products, setProducts] = useState([] as IProducts[]);
    const [filteredProducts, setFilteredProducts] = useState([] as IProducts[]);
    const [currentSale, setCurrentSale] = useState([] as IProducts[]);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCart, setTotalItemCart] = useState(0);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isError, setIsError] = useState(false);

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


    useEffect(() => {
        const handleSearch = () => {
            const searchValue = inputValue.toLowerCase();

            if (searchValue.length) {
                const filteredList = products.filter((elem) => elem.name.toLowerCase().includes(searchValue));
                setFilteredProducts([...filteredList]);
                setInputValue(searchValue.charAt(0).toUpperCase() + searchValue.slice(1));
                setIsError(false);

                if (!filteredList.length) {
                    setIsError(true);
                }

            } else {
                setFilteredProducts([]);
            }
        }
        handleSearch();
    }, [inputValue]);
       
    const removeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newList = currentSale.filter((elem) => parseInt(e.currentTarget.id) !== elem.id);
        setTotalItemCart((old) => old - 1);
        setCurrentSale([...newList]);
    };

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
            isExpanded,
            setIsExpanded,
            isError,
            setIsError,
            removeProduct,
        }}>
            {children}
        </CartContext.Provider>
    );
}

