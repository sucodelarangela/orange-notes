// styles
import './style.sass';

// dependencies
import { useState } from 'react';

// components
import Button from '../../components/Button';

const Create = () => {
    const [title, setTitle] = useState({ name: '', exists: false });
    const [description, setDescription] = useState({ name: '', exists: false });
    const [notes, setNotes] = useState({ name: '', exists: false });

    function handleSubmit(e, infoType) {
        e.preventDefault();
        if (infoType === 'title') setTitle({ name: title, exists: true });
        if (infoType === 'description') setDescription({ name: description, exists: true });
        if (infoType === 'notes') setNotes({ name: notes, exists: true });
    };

    return (
        <section className="create">
            <div className='create__sections'>
                <form onSubmit={(e) => handleSubmit(e, 'title')}>
                    {!title.exists && (
                        <input type="text" className='create__sections--input' onChange={(e) => setTitle(e.target.value)} placeholder='Digite um título' />
                    )}
                    {title.exists && <h2 onClick={() => setTitle({ exists: false })}>{title.name}</h2>}
                </form>
                <form onSubmit={(e) => handleSubmit(e, 'description')}>
                    {!description.exists && (
                        <>
                            <textarea className='create__sections--textarea' onChange={(e) => setDescription(e.target.value)} placeholder='Digite uma descrição'></textarea>
                            {description.length > 0 && <Button type='submit'>Salvar</Button>}
                        </>
                    )}
                    {description.exists && <p onClick={() => setDescription({ exists: false })}>{description.name}</p>}
                </form>
            </div>
            <div className='create__sections'>
                <h2>Tarefas</h2>
                {/* Criar componente andamento percentual */}
                {/* Para os checkbox, criar componente */}
                <div>
                    <input type="checkbox" name="" id="" />
                    <span>Tarefa 1</span>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <span>Tarefa 2</span>
                </div>
                <Button>Criar tarefa</Button>
            </div>
            <div className='create__sections'>
                <h2>Notas</h2>
                <form onSubmit={(e) => handleSubmit(e, 'notes')}>
                    {!notes.exists && (
                        <>
                            <textarea className='create__sections--textarea' onChange={(e) => setNotes(e.target.value)} placeholder='Digite suas observações'></textarea>
                            {notes.length > 0 && <Button type='submit'>Salvar</Button>}
                        </>
                    )}
                    {notes.exists && <p onClick={() => setNotes({ exists: false })}>{notes.name}</p>}
                </form>
            </div>
            <div className='create__buttons'>
                <Button>Salvar tarefa</Button>
                <Button warn={true}>Excluir tarefa</Button>
            </div>
        </section>
    );
};

export default Create;