import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const recoveredAuth = localStorage.getItem('authenticated');

        if (recoveredAuth) {
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    const login = () => {
        const logged = true;

        localStorage.setItem('authenticated', JSON.stringify(logged));

        setAuthenticated(true);
        navigate('/home');
    };

    return (
        <AuthContext.Provider value={{
            authenticated,
            setAuthenticated,
            loading,
            setLoading,
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
};