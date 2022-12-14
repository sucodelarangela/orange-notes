import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from '@headlessui/react';

import './style.sass';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className='header'>
            <div className="header__logo">
                <img src="/on-logo.svg" aria-hidden='true' alt="" />
                <h1>Orange.notes</h1>
            </div>

            {
                pathname != '/' ?
                    < Menu className='header__menu' as='div'>
                        <Menu.Button className='header__button menu'>Menu</Menu.Button>
                        <Menu.Items className='header__nav'>
                            <Menu.Item>
                                {({ active }) => (<NavLink className={active ? 'active' : ''} to='/home'>Home</NavLink>)}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (<NavLink className={active ? 'active' : ''} to='/criar-card'>Criar tarefa</NavLink>)}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                    :
                    ''
            }
        </header >
    );
};

export default Header;