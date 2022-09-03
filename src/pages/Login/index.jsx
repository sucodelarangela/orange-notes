import './style.sass';

import Button from '../../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    return (
        <section className='login'>
            <div className='login__info'>
                <h2>Orange.notes</h2>
                <p>Organize e gerencie os seus estudos</p>
            </div>
            <form onSubmit={handleSubmit} className='login__form'>
                <p>Já tem conta? Faça seu login:</p>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id='email'
                    placeholder='Insira seu e-mail'
                    required
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id='password'
                    placeholder='Insira sua senha'
                    required
                />
                <Button btnType='loginBtn'>Entrar</Button>
            </form>
        </section>
    );
};

export default Login;