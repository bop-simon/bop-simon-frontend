import { useContext, useEffect, useMemo, createContext, useState } from 'react'
import { getAllUserSongs } from '../services/songs.js'
import { getCurrentUser } from '../services/user'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [userScore, setUserScore] = useState()

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await getCurrentUser()
        const userSongs = await getAllUserSongs()

        if (currentUser.username) {
          setUser({ ...currentUser, score: +currentUser.score, songs: userSongs })
        } else {
          setUser({})
        }
      } catch (e) {
        console.log(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCurrentUser()
  }, [])

  const value = useMemo(() => ({ user, setUser, loading }), [user, loading])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser needs to be defined in the UserContext Provider')
  }
  return context
}

export { UserContext, UserProvider, useUser }
