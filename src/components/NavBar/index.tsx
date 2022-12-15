import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Button } from '../../styles/buttons';
import { DefaultInput } from '../../styles/inputs';
import { NavBarContainer } from './styles';

import searchImage from '../../assets/search.svg';

interface IInputSearchProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const NavBar = ({ onClick }: IInputSearchProps) => {
    const { setFilteredProducts } = useContext(CartContext);

    return (
        <NavBarContainer>
            <li>
                <DefaultInput
                    type='text'
                    id='search'
                    placeholder='Digitar Pesquisa'
                    onChange={(e) => !e.target.value.length && setFilteredProducts([])}
                />
                <Button onClick={onClick} variant='mediumGreen'><img src={searchImage} /> </Button>
            </li>
        </NavBarContainer>
    );
};