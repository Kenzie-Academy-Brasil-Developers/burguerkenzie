import { InputSearch } from '../InputSearch';
import { HeaderContainer } from './styles';

import logo from '../../assets/mainLogo.svg';

export const Header = ({ products, setFilteredProducts, setInputValue }) => {

    const handleInput = (e) => {
        const inputValue = e.nativeEvent.path[1].children[0].value.toLowerCase();
        const filteredList = products.filter(elem => elem.name.toLowerCase().includes(inputValue));
        setFilteredProducts([...filteredList]);
        setInputValue(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    };

    return (
        <HeaderContainer>
            <div className='container'>
                <img draggable='false' src={logo} alt='Burguer Kenzie' />
                <InputSearch onClick={handleInput} setFilteredProducts={setFilteredProducts} />
            </div>
        </HeaderContainer>
    );
};