// styles
import './style.sass';

import { Link } from 'react-router-dom';
import { FaPlusCircle, FaTasks } from 'react-icons/fa';
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
                <Link className='home__card' to={`/cards/${card.id}`}>
                    <h3 className='home__card--title'>{card.title}</h3>
                    <p className='home__card--desc' maxLength='40'>{`${card.description.substring(0, 50)}...`}</p>
                    <p className='home__card--tasks'><FaTasks /><span>{card.tasks.length}</span></p>
                </Link>
            ))}
        </section>
    );
};

export default Home;