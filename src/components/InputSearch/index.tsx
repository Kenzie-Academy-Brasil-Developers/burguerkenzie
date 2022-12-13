import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { NavBar } from './styles';

interface IInputSearchProps {
    onClick: (e: any) => void;
}

export const InputSearch = ({ onClick }: IInputSearchProps) => {
    const { setFilteredProducts } = useContext(CartContext);

    return (
        <NavBar>
            <li>
                <input
                    type='text'
                    className='defaultInput'
                    id='search'
                    placeholder='Digitar Pesquisa'
                    onChange={(e) => !e.target.value.length && setFilteredProducts([])}
                />
                <button onClick={onClick} className='btn mediumGreen'>Pesquisar</button>
            </li>
        </NavBar>
    );
};