import React, { createContext, useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthService from "../services/Auth";
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean,
  user: User | null,
  loading: boolean,
  signIn(): Promise<void>,
  signOut(): void
}

/** Responsável por informar se o usuário está logado ou não e redirecionar para o componente correto */
const AuthContext = createContext<AuthContextData>({} as AuthContextData); // Força a tipagem do objeto vazio

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false); // Problem?

  useEffect(() => {
    async function getStorageData() {
      const storagedUser = await AsyncStorage.getItem('@authApp:user'); // Usar multiGet
      const storagedToken = await AsyncStorage.getItem('@authApp:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setLoading(false);
      }
    };

    getStorageData();
  }, [])

  async function signIn() {
    const response = await AuthService.signIn();
    const { token, user } = response;
    setUser(user);

    /** Seta por padrão em todas as requisições um authorizatio no header */
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    await AsyncStorage.setItem('@authApp:user', JSON.stringify(user));
    await AsyncStorage.setItem('@authApp:token', token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => setUser(null))
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

/** Pode-se criar hooks e chama-los no lugar do useContext nos componentes */
// export function useAuth() {
//   const context = useContext(AuthContext);

//   return context;
// }

