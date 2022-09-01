// styles
import './style.sass';

import { Link } from 'react-router-dom';
import { FaPlusCircle, FaTasks } from 'react-icons/fa';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
    const url = 'http://localhost:8000/cards';
    const { data: cards, loading, error } = useFetch(url);

    return (
        <section className='home'>
            <Link className='home__button' to='/criar-card'>
                <FaPlusCircle size='80' color='#bbb' />
                <p>Criar card</p>
            </Link>
            {loading && <p className='home__msg'>Carregando...</p>}
            {error && <p className='home__msg'>{error}</p>}
            {cards && cards.map((card) => (
                <Link
                    className='home__card'
                    to={`/cards/${card.id}`}
                    key={card.id}
                >
                    <h3 className='home__card--title'>{card.title}</h3>
                    <p className='home__card--desc' maxLength='40'>{`${card.description.substring(0, 50)}...`}</p>
                    <p className='home__card--tasks'><FaTasks /><span>{card.tasks.length}</span></p>
                </Link>
            ))}
        </section>
    );
};

export default Home;