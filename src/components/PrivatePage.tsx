import React from "react"
import { useAuth } from "../contexts/AuthContext"

const PrivatePage: React.FC = () => {
  const { dispatch } = useAuth()

  const handleLogout = (): void => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Hi Marcus, I hope this task gives you an idea about my skills.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default PrivatePage
