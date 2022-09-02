import { NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';

import './style.sass';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__logo'><img src="/on-logo.svg" aria-hidden='true' alt="" /> Orange.notes</h1>
            <Menu className='header__menu' as='div'>
                <Menu.Button className='header__button menu'>Menu</Menu.Button>
                <Menu.Items className='header__nav'>
                    <Menu.Item>
                        {({ active }) => (<NavLink className={active ? 'active' : ''} to='/'>Home</NavLink>)}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (<NavLink className={active ? 'active' : ''} to='/criar-card'>Criar tarefa</NavLink>)}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </header >
    );
};

export default Header;