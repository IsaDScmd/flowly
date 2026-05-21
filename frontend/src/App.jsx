import { Routes, Route, Navigate } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Boards from "./pages/Boards"
import Settings from "./pages/Settings"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="/boards" element={<MainLayout />}>
        <Route index element={<Boards />} />
      </Route>

      <Route path="/settings" element={<MainLayout />}>
        <Route index element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App