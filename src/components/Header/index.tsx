import { useContext } from 'react';
import { toast } from 'react-toastify';

import logo from '../../assets/mainLogo.svg';
import { CartContext } from '../../contexts/CartContext';
import { InputSearch } from '../InputSearch';
import { HeaderContainer } from './styles';

export const Header = () => {
    const { products, setFilteredProducts, setInputValue } = useContext(CartContext);

    const handleInput = (e: any) => {
        const inputValue = e.nativeEvent.path[1].children[0].value.toLowerCase();

        if (inputValue.length) {
            const filteredList = products.filter((elem: any) => elem.name.toLowerCase().includes(inputValue));
            setFilteredProducts([...filteredList]);
            setInputValue(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));

            if (!filteredList.length) {
                toast.error('Nenhum produto foi encontrado');
            }
        }

    };

    return (
        <HeaderContainer>
            <div className='container'>
                <img draggable='false' src={logo} alt='Burguer Kenzie' />
                <InputSearch onClick={handleInput} />
            </div>
        </HeaderContainer>
    );
};