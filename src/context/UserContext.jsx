import { useContext, useEffect, useMemo, createContext, useState } from "react";
import { getCurrentUser} from "../services/user";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    //this is the state
    const [user, setUser] = useState({});
    console.log('USER IN CONTEXT', user)

    return ( 
    <UserContext.UserProvider value={{user, setUser}}>{children}</UserContext.UserProvider>
    )
}
const useUser = () =>{
    const context = useContext(UserContext)
    if (context === undefined){
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }
    return context
}
export { UserContext, UserProvider, useUser }
