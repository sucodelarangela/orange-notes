import { NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';

import './style.sass';

const Header = () => {
    return (
        <header className='header'>
            <h1>Orange.Notes🍊</h1>
            <Menu className='header__menu' as='div'>
                <Menu.Button>Menu</Menu.Button>
                {/* <nav className='header__nav'> */}
                <Menu.Items className='header__nav'>
                    <Menu.Item>
                        {({ active }) => (<NavLink className={active ? 'active' : ''} to='/'>Home</NavLink>)}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (<NavLink className={active ? 'active' : ''} to='/criar-card'>Criar tarefa</NavLink>)}
                    </Menu.Item>
                </Menu.Items>
                {/* <NavLink to='#'>Perfil</NavLink> */}
                {/* </nav> */}
            </Menu>
        </header >
    );
};

export default Header;