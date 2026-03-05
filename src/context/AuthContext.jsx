import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogged, settIsLogged] = useState(false); //aqui hay que confirmar login
    const[isModalOpen, setIsModalOpen] = useState (false);

    const openLoginModal =() => setIsModalOpen(true);
    const closeLoginModal = () => setIsModalOpen(false);

    return (
        <AuthContext.Provider value={{ isLogged, isModalOpen, openLoginModal, closeLoginModal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);