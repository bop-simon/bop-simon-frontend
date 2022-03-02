import { useContext, useEffect, useMemo, createContext, useState } from "react";
import { getCurrentUser} from "../services/user";

//this is a small change

const UserContext = createContext()

const UserProvider = ({children}) =>{
    const [user, setUser] = useState({});
    console.log('USER IN CONTEXT', user)

    useEffect(() => {
      const fetchCurrentUser = async() => {
        const currentUser = await getCurrentUser()
        currentUser.id ?
        setUser(currentUser) :
        setUser({})
      } 
      fetchCurrentUser()
    }, [])

    const value = useMemo(() => ({ user, setUser }), [user]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
const useUser = () =>{
    const context = useContext(UserContext)
    if (context === undefined){
        throw new Error('useUser needs to be defined in the UserContext Provider')
    }
    return context
}

export {UserContext, UserProvider, useUser}
