import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgetPassword";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Completed from "./pages/Completed";

import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      {/* Public routes */}

      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/forgotPassword" element={<ForgotPassword />} />

      {/* Protected application routes */}

      <Route element={<MainLayout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/task"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/menu"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/completed"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Completed />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Unknown URL */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
