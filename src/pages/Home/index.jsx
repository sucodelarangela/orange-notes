// styles
import './style.sass';

import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

const Home = () => {
    return (
        <section className='home'>
            <Link className='home__button' to='/criar-card'>
                <FaPlusCircle size='5rem' color='#bbb' />
                <p>Criar card</p>
            </Link>
        </section>
    );
};

export default Home;