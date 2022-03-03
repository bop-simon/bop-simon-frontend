import { useContext, useEffect, useMemo, createContext, useState } from "react";
import { getAllProfiles, getProfileById } from "../services/profile";
import { getCurrentUser} from "../services/user";

const UserContext = createContext()

const UserProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    console.log('USER IN CONTEXT', user)

    // const [userLevel, setUserLevel] = useState(0)
   
    useEffect(() => {
      const fetchCurrentUser = async() => {
        console.log('hey hi helooooooo')
        const currentUser = await getCurrentUser()
        console.log("current user", currentUser)
        if (currentUser.username) {
          setUser(currentUser)
        } else {
          setUser({})
        }
        setLoading(false)
      } 
      fetchCurrentUser()
    }, [])

    
    // useEffect(() => {
    //   const fetchLevel = async () => {
    //     const oneProfile = await getProfileById(id)
    //     console.log('profile', oneProfile)
    //     if(oneProfile){
    //       setLevel(oneProfile)
    //     } else {
    //       setLevel(0)
    //     }
    //   }
    //   fetchLevel()
    // }, [])

    const value = useMemo(() => ({ user, setUser, loading }), [user, loading]);

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
