"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface MockUser {
  id: string
  name: string
  email: string
  image: string
}

interface MockAuthContextType {
  user: MockUser | null
  isLoading: boolean
  signOut: () => void
}

const MockAuthContext = createContext<MockAuthContextType>({
  user: null,
  isLoading: true,
  signOut: () => {}
})

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for mock user in localStorage
    const mockUserData = localStorage.getItem('mockUser')
    if (mockUserData) {
      try {
        const userData = JSON.parse(mockUserData)
        setUser(userData)
      } catch (error) {
        console.error('Error parsing mock user data:', error)
        localStorage.removeItem('mockUser')
      }
    }
    setIsLoading(false)
  }, [])

  const signOut = () => {
    localStorage.removeItem('mockUser')
    setUser(null)
    router.push('/login')
  }

  return (
    <MockAuthContext.Provider value={{ user, isLoading, signOut }}>
      {children}
    </MockAuthContext.Provider>
  )
}

export function useMockAuth() {
  const context = useContext(MockAuthContext)
  if (!context) {
    throw new Error('useMockAuth must be used within a MockAuthProvider')
  }
  return context
}

// Hook that mimics useSession from next-auth
export function useMockSession() {
  const { user, isLoading } = useMockAuth()
  
  return {
    data: user ? { user } : null,
    status: isLoading ? 'loading' : user ? 'authenticated' : 'unauthenticated'
  }
}

// Export alias for compatibility
export const AuthProvider = MockAuthProvider