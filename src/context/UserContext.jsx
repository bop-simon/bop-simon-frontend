import { useContext, createContext, useState } from "react";
import { getUserById } from "../services/user";

const UserContext = createContext()

const UserProvider = ({children}) =>{
    //this is the state
    const [user, setUser] = useState({});
    //current user is the getId function, which takes in an id
    const currentUser = getUserById(id)
    //userId is-- if it is the getId function return the id else return empty object
    const userId = currentUser ? { id: currentUser} : {}
    //setUser to the userId
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
