import { Navigate, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children }) {

  const { user, loading } = useUser();
  console.log(user);
  if (loading) {
    return (<p>Loading</p>)
  }

  return ( 
    <>
      {user.username ? 
      children : 
      <Navigate 
        to='/auth'/>}
    </>
      
);
}