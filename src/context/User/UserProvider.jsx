import { Children, useState } from "react"
import { UserContext } from "./UserContext"
import UserPath from "../../services/UserPath";

const UserProvider = ({children}) => {
    const user = UserPath().getUserById;

    const userService = UserPath();

    const [isLogged, setIsLogged] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState (false);

    const openAuthModal =() => setIsModalOpen(true);
    const closeAuthModal = () => setIsModalOpen(false);

    const login = async (credentials) => {
    const response = await userService.login(credentials);
    localStorage.setItem("token", response.token);
    setIsLogged(true);
};

    return (
        <UserContext.Provider value={{ isLogged, setIsLogged, login, user,  isModalOpen, openAuthModal, closeAuthModal}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;