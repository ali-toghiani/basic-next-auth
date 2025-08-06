'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { UserContextType } from "@/types/User"
import { LocalStorageKeys } from '@/consts/local-storage-keys';

export const UserContext = createContext<UserContextType>({
  user: null,
  loading: false,
  error: null,
  setUser: () => {},
  setLoading: () => {},
  setError: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextType['user']>(null);
  const [loading, setLoading] = useState<UserContextType['loading']>(false);
  const [error, setError] = useState<UserContextType['error']>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(LocalStorageKeys.USER);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(user));
      document.cookie = `user=${JSON.stringify(user)}; path=/; max-age=86400; HttpOnly; Secure; SameSite=Strict`;
    } else {
      localStorage.removeItem(LocalStorageKeys.USER);
      document.cookie = 'user=; path=/; max-age=0';
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loading, error, setUser, setLoading, setError }}>
      {children}
    </UserContext.Provider>
  );
}