import React, { useEffect } from "react"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import { useAuthState } from "./../contexts/AuthContext"
import LoginForm from "./LoginForm"
import PrivatePage from "./PrivatePage"

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuthState()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
    }
  }, [isAuthenticated, navigate])

  return (
    <Routes>
      <Route path="/login" element={!isAuthenticated ? <LoginForm /> : <Navigate to="/private" />} />
      <Route path="/private" element={isAuthenticated ? <PrivatePage /> : <Navigate to="/login" />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default AppContent
