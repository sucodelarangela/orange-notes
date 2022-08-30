import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const useDataContext = () => {
    const context = useContext(DataContext);

    // se não houver ontexto (erro, bug, etc)
    if (!context) console.log('Contexto não encontrado');

    return context;
};