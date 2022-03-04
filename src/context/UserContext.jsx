import { useContext, useEffect, useMemo, createContext, useState } from "react";
import { getAllProfiles, getProfileById } from "../services/profile";
import { getCurrentUser} from "../services/user";

const UserContext = createContext()

const UserProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [userScore, setUserScore] = useState();

    useEffect(() => {
      const fetchCurrentUser = async() => {
      try {
          const currentUser = await getCurrentUser()

          if (currentUser.username) {
            setUser(currentUser)
            // setLoading(false)
          } else {
            setUser({})
            // setLoading(false)
          }
        } catch(e) {
          console.log(e.message)
        } finally {
          setLoading(false)
        }
      }

      fetchCurrentUser()
    }, [])

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
