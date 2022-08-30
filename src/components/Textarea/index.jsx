import Button from "../Button";

const Textarea = ({ handleSubmit, value, handleChange, placeholder }) => {
    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                {placeholder}
                <textarea
                    spellCheck='false'
                    className='create__sections--textarea'
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}>
                </textarea>
            </label>
            <Button type='submit'>Salvar</Button>
        </form>
    );
};

export default Textarea;