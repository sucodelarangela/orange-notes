import './style.sass';

import Button from '../../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useState } from 'react';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [mailError, setMailError] = useState('none');
    const [passError, setPassError] = useState('none');

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    function validate(e, infoType) {
        if (infoType == 'email') {
            e.target.validity.valueMissing || e.target.validity.typeMismatch ? setMailError('block') : setMailError('none');
        }
        if (infoType == 'password') {
            e.target.validity.valueMissing || e.target.validity.patternMismatch ? setPassError('block') : setPassError('none');
        }
    };

    return (
        <section className='login'>
            <div className='login__info'>
                <h2>Orange.notes</h2>
                <p>Organize e gerencie os seus estudos</p>
            </div>
            <form onSubmit={handleSubmit} className='login__form'>
                <p>Já tem conta? Faça seu login:</p>
                <label htmlFor="email">E-mail</label>
                <p className='error' style={{ display: mailError }}>Verifique o e-mail</p>
                <input
                    type="email"
                    id='email'
                    placeholder='Insira seu e-mail'
                    onBlur={(e) => validate(e, 'email')}
                    required
                />
                <label htmlFor="password">Senha</label>
                <p className='error' style={{ display: passError }}>A senha deve conter entre 6 e 12 caracteres e deve incluir, pelo menos, uma letra maiúscula, um número e não deve conter símbolos.</p>
                <input
                    type="password"
                    id='password'
                    placeholder='Insira sua senha'
                    pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^&*_=+-]).{6,12}$'
                    onBlur={(e) => validate(e, 'password')}
                    required
                />
                <Button btnType='loginBtn'>Entrar</Button>
            </form>
        </section>
    );
};

export default Login;;;