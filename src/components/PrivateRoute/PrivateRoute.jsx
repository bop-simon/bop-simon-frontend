import { Navigate, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children }) {

  const { user } = useUser();
  console.log(user);

  return ( 
    <>
      {user.username ? 
      children : 
      <Navigate 
        to='/auth'/>}
    </>
      
);
}