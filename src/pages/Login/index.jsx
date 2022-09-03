import './style.sass';

import Button from '../../components/Button';

const Login = () => {
    return (
        <section className='login'>
            <div className='login__info'>
                <h2>Orange.notes</h2>
                <p>Organize e gerencie os seus estudos</p>
            </div>
            <form className='login__form'>
                <p>Já tem conta? Faça seu login:</p>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id='email'
                    placeholder='Insira seu e-mail'
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id='password'
                    placeholder='Insira sua senha'
                />
                <Button btnType='loginBtn'>Entrar</Button>
            </form>
        </section>
    );
};

export default Login;