import React, { useState } from "react"
import { useAuthDispatch } from "../contexts/AuthContext"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useAuthDispatch()

  const handleLogin = (): void => {
    if (email && password) {
      dispatch({ type: "LOGIN" })
    } else {
      alert("Please enter both email and password.")
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <h2>Login Form</h2>
      <div>
        <input placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginForm
