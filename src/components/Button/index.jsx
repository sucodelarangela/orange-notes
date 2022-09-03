// styles
import './style.sass';

const Button = ({ children, handleClick, btnType, type }) => {
    return (
        <button
            className={btnType}
            type={type}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;