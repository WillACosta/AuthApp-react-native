import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as AuthService from "../services/Auth";
import APIKit, { setClientToken } from '../services/api';

import { AuthContextData, User } from '../models/contexts.model';
import { LoginData } from '../models/pages.model';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  useEffect(() => {
    async function getStorageData() {
      const storedToken = await AsyncStorage.getItem('@authApp:token');

      if (storedToken) {
        const fakeUser: User = { name: 'Will', email: 'will@email.com' };
        setUser(fakeUser);

        setLoading(false);
        APIKit.defaults.headers['Authorization'] = `Bearer ${storedToken}`;
      }
    };

    setLoading(true);
    getStorageData();
  }, [])

  async function signIn(payload: LoginData) {
    try {
      setLoading(true);
      setWrongCredentials(false);

      const response = await AuthService.signIn(payload);
      const fakeUser: User = { name: 'Will', email: payload.email };

      setUser(fakeUser);
      const { access_token } = response.data;

      APIKit.defaults.headers['Authorization'] = `Bearer ${access_token}`;
      await AsyncStorage.setItem('@authApp:token', access_token);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      setWrongCredentials(true);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => setUser(null))
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, wrongCredentials }}>
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

