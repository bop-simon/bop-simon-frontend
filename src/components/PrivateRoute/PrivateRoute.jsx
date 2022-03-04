import { Navigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'

export default function PrivateRoute({ children }) {
  const { user, loading } = useUser()
  console.log(loading)

  if (loading) {
    return <p>Loading</p>
  }

  return <>{user?.username ? children : <Navigate to="/auth" />}</>
}
