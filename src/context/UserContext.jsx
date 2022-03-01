import { useContext, createContext, useState } from "react";
import { getUserById } from "../services/user";

const UserContext = createContext()

const UserProvider = ({children}) =>{

    const [user, setUser] = useState({});
    const currentUser = getUserById(id)
    const userId = currentUser ? { id: currentUser.id} : {}

    setUser(userId);

    return <UserContext.UserProvider value={{user, setUser}}>{children}</UserContext.UserProvider>

}
const useUser = () =>{
    const context = useContext(UserContext)
    if (context === undefined){
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }
    return context
}

export {UserProvider, useUser}
