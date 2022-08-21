// styles
import Button from '../../components/Button';
import './style.sass';

const Create = () => {
    return (
        <section className="create">
            <div>
                <h2>Título</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ut maxime magni unde fuga id modi expedita, earum reiciendis ducimus optio natus amet sequi quod. Cumque iste voluptatum numquam provident.</p>
            </div>
            <div>
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
            <div>
                <h2>Notas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt minus necessitatibus repellat totam provident quisquam ab omnis cupiditate repudiandae asperiores, optio sequi excepturi doloremque maxime. Obcaecati excepturi tempore a. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio optio eaque debitis, assumenda illo autem eos voluptatibus, veniam, reprehenderit est minima cum sit corrupti sed? Tenetur rerum incidunt molestiae.</p>
            </div>
            <div>
                <Button>Salvar tarefa</Button>
                <Button warn={true}>Excluir tarefa</Button>
            </div>
        </section>
    );
};

export default Create;