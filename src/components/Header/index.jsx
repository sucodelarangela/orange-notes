import { NavLink } from 'react-router-dom';

import './style.sass';

const Header = () => {
    return (
        <header className='header'>
            <h1>Orange.Notes🍊</h1>
            <nav className='header__nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/criar-card'>Criar tarefa</NavLink>
                <NavLink to='#'>Perfil</NavLink>
            </nav>
        </header>
    );
};

export default Header;