// styles
import './style.sass';

const Button = ({ children, handleClick, warn }) => {
    return (
        <button className={warn ? 'delete' : ''} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;