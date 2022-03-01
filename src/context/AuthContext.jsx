import { useContext, createContext, useState, useMemo } from "react";
import { getClient, signUp, signIn, signOut } from "../services/auth";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})

    const currentAuth = getClient()

    //would we possibly need a turnery here? like, if it is not currentAuth then go back to the {}? 
    //? {...currentAuth} : {}
    setAuth(currentAuth);

  async function signUpUser(username, password){
      const newUser = await signUp(username, password);
      setAuth(newUser);
  }

  async function signInUser(username, password){
      const returningUser = await signIn(username, password);
      setAuth(returningUser)
  }

  async function signOutUser(){
      await signOut();
      history.push('/home');
  }

//You may rely on useMemo as a performance optimization, not as a semantic guarantee
  const operations = useMemo(() => ({ auth, signUpUser, signInUser, signOutUser}),[auth])

  return (
      <AuthContext.AuthProvider value={operations}>
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