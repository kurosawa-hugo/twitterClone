import React, {useState, useEffect} from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
            setUser(user)
    })
  },[])
  return (
    <AuthContext.Provider value={user}>
       {children}
    </AuthContext.Provider>
  )

}

export {
  AuthContext,
  AuthProvider
}