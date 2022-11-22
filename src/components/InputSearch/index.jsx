import { NavBar } from './styles';

export const InputSearch = ({ onClick, setFilteredProducts }) => {
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