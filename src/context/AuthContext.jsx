import { useContext, createContext, useState, useMemo } from "react";
import { logIn } from "../services/auth";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //set the state
    const [auth, setAuth] = useState({})
    //the currentAuth is set to login which takes in the username and the password
    const currentAuth = logIn(username, password)
    // if it is the login function return the username and password else return empty object
    const authUser = currentAuth ? {username: currentAuth.username, password: currentAuth.password} : {}
    setAuth(authUser);


  return (
      <AuthContext.AuthProvider value={{auth, setUser}}>
          {children}
      </AuthContext.AuthProvider>
  )
}
const useAuth = () =>{
    const context = useContext(AuthContext)
    if(context === undefined){
        throw new Error('useAuth needs to be defined in the AuthContext Provider')
    }
    return context
}
export {AuthProvider, useAuth}