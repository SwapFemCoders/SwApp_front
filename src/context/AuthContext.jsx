import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const[isModalOpen, setIsModalOpen] = useState (false);

    const openAuthModal =() => setIsModalOpen(true);
    const closeAuthModal = () => setIsModalOpen(false);

    return (
        <AuthContext.Provider value={{ isLogged, isModalOpen, openAuthModal, closeAuthModal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);