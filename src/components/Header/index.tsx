import logo from '../../assets/mainLogo.svg';
import { NavBar } from '../NavBar';
import { HeaderContainer } from './styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <div className='container'>
                <img draggable='false' src={logo} alt='Burguer Kenzie' />
                <NavBar />
            </div>
        </HeaderContainer>
    );
};