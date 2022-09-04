const Input = ({ type, handleChange, placeholder, value, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                {placeholder}
                <input
                    type={type}
                    className='create__sections--input'
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                />
            </label>
        </form>
    );
};

export default Input;