import React, { createContext, useReducer, useContext, Dispatch } from "react"

type State = {
  isAuthenticated: boolean
}

type Action = {
  type: "LOGIN" | "LOGOUT"
}

const AuthStateContext = createContext<State | undefined>(undefined)
const AuthDispatchContext = createContext<Dispatch<Action> | undefined>(undefined)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", "random_token")
      return { ...state, isAuthenticated: true }
    case "LOGOUT":
      localStorage.removeItem("token")
      return { ...state, isAuthenticated: false }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: !!localStorage.getItem("token")
  })

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

export const useAuthState = (): State => {
  const context = useContext(AuthStateContext)
  if (!context) {
    throw new Error("Error useAuthState")
  }
  return context
}

export const useAuthDispatch = (): Dispatch<Action> => {
  const context = useContext(AuthDispatchContext)
  if (!context) {
    throw new Error("Error useAuthDispatch")
  }
  return context
}
