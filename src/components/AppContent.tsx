import React, { useEffect } from "react"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import { useAuth } from "./../contexts/AuthContext"
import LoginForm from "./LoginForm"
import PrivatePage from "./PrivatePage"

const AppContent: React.FC = () => {
  const { state } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/login")
    }
  }, [state.isAuthenticated, navigate])

  return (
    <Routes>
      <Route path="/login" element={!state.isAuthenticated ? <LoginForm /> : <Navigate to="/private" />} />
      <Route path="/private" element={state.isAuthenticated ? <PrivatePage /> : <Navigate to="/login" />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default AppContent
