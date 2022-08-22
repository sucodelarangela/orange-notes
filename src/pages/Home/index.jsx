// styles
import './style.sass';

import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
    const url = 'http://localhost:8000/cards';
    const { data: cards, httpConfig } = useFetch(url);

    return (
        <section className='home'>
            <Link className='home__button' to='/criar-card'>
                <FaPlusCircle size='5rem' color='#bbb' />
                <p>Criar card</p>
            </Link>
            {cards && cards.map((card) => (
                <Link className='home__button' /*to={`/cards/${card.id}`}*/ to=''>

                </Link>
            ))}
        </section>
    );
};

export default Home;