// styles
import '../Create/style.sass';

// dependencies
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { FaWindowClose } from 'react-icons/fa';

// components
import Button from '../../components/Button';

const Card = () => {
    const { id } = useParams();
    const url = `http://localhost:8000/cards/${id}`;
    const { data: card, loading, error } = useFetch(url);

    return (
        <section className="create">
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            {card && (
                <>
                    <Link to='/'>
                        <FaWindowClose className='create__close' size='1.75rem' />
                    </Link>
                    <div className='create__sections'>
                        <h2 /*onClick={() => setTitle({ exists: false })}*/>{card.title}</h2>
                        <p /*onClick={() => setDescription({ exists: false })}*/>{card.description}</p>
                    </div>
                    <div className='create__sections'>
                        <h2>Tarefas</h2>
                        {card.tasks.map((item) => (
                            <div key={item.id}>
                                <input type="checkbox" name={`task${item.id}`} value={`task${item.id}`} id={`task${item.id}`} />
                                {
                                    item.task.startsWith('http') ?
                                        <a className='create__sections--link' href={item.task}>{item.task}</a>
                                        :
                                        <label>{item.task}</label>
                                }
                            </div>
                        ))}
                    </div>
                    <div className='create__sections'>
                        <h2>Notas</h2>
                        <p /*onClick={() => setNotes({ exists: false })}*/>{card.notes}</p>
                    </div>
                    <div className='create__buttons'>
                        <Button>Salvar tarefa</Button>
                        <Button warn={true}>Excluir tarefa</Button>
                    </div>
                </>
            )}
        </section>
    );
};

export default Card;