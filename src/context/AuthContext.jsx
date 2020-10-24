import React, { createContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState('')

  return (
    <AuthContext.Provider value={{ errorMessage }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
