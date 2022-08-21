// styles
import './style.sass';

const Button = ({ children, handleClick, warn, type }) => {
    return (
        <button
            className={warn ? 'delete' : ''}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;