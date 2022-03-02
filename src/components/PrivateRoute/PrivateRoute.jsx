import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {

  const { user } = useUser();
  console.log(user);

  return ( 
    <Route 
      {...rest}
      render={({ location }) => 
        user ? 
        children : 
        <Redirect 
          to={{
            pathname: '/auth', 
            state: { from: location }
          }}
        />
      }
      />);
}