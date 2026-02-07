'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, name?: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
  // Optional: add isLoading if you want to show loading state
  // isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  // const [isLoading, setIsLoading] = useState(true)   // ← uncomment if needed

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('indiaVibesUser')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (err) {
      console.error('Failed to load user from localStorage', err)
    }
    // setIsLoading(false)   // ← uncomment if using loading state
  }, [])

  const login = async (email: string, _password: string, name?: string) => {
    // Mock login – in real app → call your API
    const mockUser: User = {
      id: '1',
      name: name || email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    }

    setUser(mockUser)
    localStorage.setItem('indiaVibesUser', JSON.stringify(mockUser))
  }

  const signup = async (name: string, email: string, _password: string) => {
    // Mock signup – in real app → call your API
    const mockUser: User = {
      id: Math.random().toString(36).substring(7),
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    }

    setUser(mockUser)
    localStorage.setItem('indiaVibesUser', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('indiaVibesUser')
    localStorage.removeItem('indiaVibesFavorites')
  }

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    // isLoading,   // ← uncomment if added
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}