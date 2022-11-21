import { NavBar } from './styles';

export const InputSearch = () => {
    return (
        <NavBar>
            <li>
                <input
                    type='text'
                    className='defaultInput'
                    id='search'
                    placeholder='Digitar Pesquisa'
                />
                <button className='btn mediumGreen'>Pesquisar</button>
            </li>
        </NavBar>
    );
};