import React, { createContext, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  //é possivel passar no useState uma funcao que busca os dados para inicializar o estado
  const [userData, setUserData] = useState({}) //funcao para inicio do estado

  async function signup({ userName, email, password }) {
    const userInfo = {
      user_name: userName,
      email: email,
      password: password,
    }

    const response = await api.post('/signup', userInfo)

    const { token, insertedUser: user } = response.data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    const data = {
      token,
      user,
    }
    setUserData(data)
  }

  return (
    <AuthContext.Provider value={{ signup, userData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
