import { InputSearch } from '../InputSearch';
import { HeaderContainer } from './styles';

import logo from '../../assets/mainLogo.svg';

export const Header = () => {
    return (
        <HeaderContainer>
            <div className='container'>
                <img draggable='false' src={logo} alt='Burguer Kenzie' />
                <InputSearch />
            </div>
        </HeaderContainer>
    );
};