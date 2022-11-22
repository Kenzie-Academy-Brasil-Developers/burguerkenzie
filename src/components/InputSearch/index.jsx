import { NavBar } from './styles';

export const InputSearch = ({ onClick }) => {
    return (
        <NavBar>
            <li>
                <input
                    type='text'
                    className='defaultInput'
                    id='search'
                    placeholder='Digitar Pesquisa'
                />
                <button onClick={onClick} className='btn mediumGreen'>Pesquisar</button>
            </li>
        </NavBar>
    );
};