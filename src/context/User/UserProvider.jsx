import { Children, useState } from "react"
import { UserContext } from "./UserContext"
import UserPath from "../../services/UserPath";

const UserProvider = ({children}) => {
    const user = UserPath().getUserById;
    const [isLogged, setIsLogged] = useState(false); 

    const logIn =()=> {
        setIsLogged(true)
    }

    return (
        <UserContext.Provider value={{ isLogged, logIn, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
