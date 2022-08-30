import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState({ name: '', exists: false });
    const [notes, setNotes] = useState({ name: '', exists: false });

    return (
        <DataContext.Provider
            value={{
                title,
                setTitle,
                description,
                setDescription,
                notes,
                setNotes
            }}
        >
            {children}
        </DataContext.Provider>
    );
};