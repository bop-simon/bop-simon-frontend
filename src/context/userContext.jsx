import { useContext, createContext, useState } from "react";
import { getAllUsers } from "../services/user";

const UserContext = createContext()

const UserProvider = ({children}) =>{
    const currentUser = getAllUsers();
    
    const [users, setUsers] = useState(
        //in state if it is the current user then spread the info otherwise return empty obj
        //because this should, hypothetically, grab the username, fav songs, bio, and score if we spread it
        currentUser ? {...currentUser} : {}
    );

    return <UserContext.UserProvider value={{users, setUsers}}>{children}</UserContext.UserProvider>

}
const useUser = () =>{
    const context = useContext(UserContext)
    if (context === undefined){
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }
    return context
}

export {UserProvider, useUser}