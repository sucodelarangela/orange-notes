// styles
import './style.sass';

// dependencies
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useFetch } from '../../hooks/useFetch';

// components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { useDataContext } from '../../hooks/useDataContext';
import { useEffect, useRef } from 'react';
import UrlTitle from '../../components/UrlTitle';
import StatusBar from '../../components/StatusBar';
import { useState } from 'react';

const Create = () => {
    const { id } = useParams();
    const url = `https://orange-juice-server.glitch.me/cards/${id}`;
    // const url = `http://localhost:8000/cards/${id}`;
    const { httpConfig } = useFetch('https://abounding-internal-bench.glitch.me/cards');
    // const { httpConfig } = useFetch('http://localhost:8000/cards/');
    const { data: card, httpConfig: patchConfig, loading } = useFetch(url);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const taskRef = useRef();
    const { title, setTitle, description, setDescription, tasks, setTasks, notes, setNotes } = useDataContext();

    useEffect(() => {
        if (pathname === '/criar-card') {
            setTitle({ name: 'Digite um título', exists: false });
            setDescription({ name: 'Digite uma descrição', exists: false });
            setTasks([]);
            setNotes({ name: 'Adicione observações', exists: false });
        } else {
            setTitle({ name: card ? card.title : '', exists: card ? true : false });
            setDescription({ name: card ? card.description : '', exists: card ? true : false });
            setTasks(card && card.tasks);
            setNotes({ name: card ? card.notes : '', exists: card ? true : false });
        }
    }, [pathname, card, id, url]);

    function handleSubmit(e, infoType) {
        e.preventDefault();
        if (infoType === 'title') setTitle({ name: title, exists: true });
        if (infoType === 'description') setDescription({ name: description, exists: true });
        if (infoType === 'tasks') setTasks(prevTasks => [...prevTasks, { task: taskRef.current.value, checked: false }]);
        if (infoType === 'notes') setNotes({ name: notes, exists: true });
    };

    async function saveTask() {
        const card = {
            title: title.name,
            tasks: tasks,
            description: description.name,
            notes: notes.name
        };

        await httpConfig(card, "POST");

        setTimeout(() => {
            navigate('/home');
        }, 200);
    }

    async function updateTask() {
        const alteredCard = {
            title: title.name,
            description: description.name,
            tasks: tasks,
            notes: notes.name
        };

        await patchConfig(alteredCard, "PATCH");

        setTimeout(() => {
            navigate('/home');
        }, 200);
    }

    async function deleteTask() {
        const taskId = url;

        httpConfig(taskId, "DELETE");

        setTimeout(() => {
            navigate('/home');
        }, 200);
    }

    function handleCheck(e) {
        if (e.target.checked) {
            setTasks(current =>
                current.map((item, i) => {
                    if (i == e.target.value.substr(5)) {
                        return { ...item, checked: true };
                    }

                    return item;
                })
            );
        } else {
            setTasks(current =>
                current.map((item, i) => {
                    if (i == e.target.value.substr(5)) {
                        return { ...item, checked: false };
                    }

                    return item;
                })
            );
        }
    };

    return (
        <section className="create">
            <div className='create__sections'>
                {!title.exists && (
                    <Input
                        type='text'
                        placeholder='Digite um título e tecle enter'
                        handleChange={(e) => setTitle(e.target.value)}
                        value={title.name}
                        handleSubmit={(e) => handleSubmit(e, 'title')}
                    />
                )}
                {title.exists && <h2
                    tabIndex={0}
                    className='create__sections--editable'
                    onClick={() => setTitle({ name: title.name, exists: false })}
                    style={{ cursor: 'pointer' }}>{title.name}</h2>
                }
                {!description.exists && (
                    <Textarea
                        className='save'
                        handleChange={(e) => setDescription(e.target.value)}
                        handleSubmit={(e) => handleSubmit(e, 'description')}
                        value={description.name}
                        placeholder='Digite uma descrição'
                        btnType='saveTask'
                        required
                    ></Textarea>
                )}
                {description.exists && <p
                    tabIndex={0}
                    className='create__sections--editable'
                    onClick={() => setDescription({ name: description.name, exists: false })}
                    style={{ cursor: 'pointer' }}
                >{description.name}</p>}
            </div>
            <div className='create__sections'>
                <h2>Tarefas</h2>
                <form onSubmit={(e) => { handleSubmit(e, 'tasks'); }}>
                    <label className='sr-only' htmlFor="task">Adicione uma nova tarefa e tecle enter</label>
                    <input
                        type='text'
                        id='task'
                        ref={taskRef}
                        className='create__sections--input'
                        placeholder='Adicione uma nova tarefa e tecle enter'
                        required
                    />
                </form>
                {/* Criar componente andamento percentual */}
                {loading && <p>Carregando...</p>}
                {tasks && <StatusBar taskList={tasks} />}
                {tasks && tasks.map((item, i) => (
                    <div id={i}>
                        {item.task.startsWith('http') ?
                            <>
                                <input type="checkbox" name={`item-${i}`} value={`item-${i}`} id={`item-${i}`} onChange={handleCheck} checked={item.checked ? true : false} />
                                <UrlTitle href={item.task}></UrlTitle>
                                <span onClick={() => setTasks(tasks.filter(task => item.task != task.task))}>Deletar</span>
                            </>
                            :
                            <>
                                <input type="checkbox" name={`item-${i}`} value={`item-${i}`} id={`item-${i}`} onChange={handleCheck} checked={item.checked ? true : false} />
                                <label>{item.task}<span onClick={() => setTasks(tasks.filter(task => item.task != task.task))}>Deletar</span></label>
                            </>
                        }
                    </div>
                ))}
                <br />
            </div>
            <div className='create__sections'>
                <h2>Notas</h2>
                {!notes.exists && (
                    <Textarea
                        handleChange={(e) => setNotes(e.target.value)}
                        handleSubmit={(e) => handleSubmit(e, 'notes')}
                        value={notes.name}
                        placeholder='Digite suas observações'
                        btnType='saveTask'
                    ></Textarea>
                )}
                {notes.exists && <p
                    tabIndex={0}
                    className='create__sections--editable'
                    onClick={() => setNotes({ name: notes.name, exists: false })}
                    style={{ cursor: 'pointer' }}
                >{notes.name}</p>}
            </div>
            <div className='create__buttons'>
                <Button handleClick={pathname == '/criar-card' ? saveTask : updateTask} btnType='save-update' >
                    {pathname == '/criar-card' ? 'Salvar tarefa' : 'Atualizar tarefa'}
                </Button>
                {pathname != '/criar-card' && <Button handleClick={deleteTask} btnType='delete'>Excluir tarefa</Button>}
            </div>
        </section >
    );
};

export default Create;
