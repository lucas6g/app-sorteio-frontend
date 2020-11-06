import React, { createContext, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  //é possivel passar no useState uma funcao que busca os dados para inicializar o estado
  //funcao para inicio do estado

  const [isLogin, setIsLogin] = useState(false)

  async function signup({ userName, email, password }) {
    const userInfo = {
      user_name: userName,
      email: email,
      password: password,
    }

    const response = await api.post('/signup', userInfo)

    const { token, insertedUser: user } = response.data

    localStorage.setItem('@Sorteio Validado:token', token)
    localStorage.setItem('@Sorteio Validado:user', JSON.stringify(user))
  }

  async function signin({ email, password }) {
    const userInfo = {
      email: email,
      password: password,
    }

    const response = await api.post('/signin', userInfo)

    const { token, user } = response.data

    localStorage.setItem('@Sorteio Validado:token', token)
    localStorage.setItem('@Sorteio Validado:user', JSON.stringify(user))
  }

  return (
    <AuthContext.Provider value={{ signup, isLogin, setIsLogin, signin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
