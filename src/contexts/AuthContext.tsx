import React, { useEffect, createContext, useReducer, useContext, Dispatch } from "react"

type State = {
  isAuthenticated: boolean
}

type Action = {
  type: "LOGIN" | "LOGOUT"
}

type AuthContextType = {
  state: State
  dispatch: Dispatch<Action>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true }
    case "LOGOUT":
      return { ...state, isAuthenticated: false }
    default:
      console.log(`Unknown action: ${action.type}`)
      return state
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: !!localStorage.getItem("token")
  })

  useEffect(() => {
    if (state.isAuthenticated) {
      localStorage.setItem("token", "random_token")
    } else {
      localStorage.removeItem("token")
    }
  }, [state.isAuthenticated])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("Error useAuthState")
  }
  return context
}
