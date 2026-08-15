import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgetPassword";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import MainLayout from "./components/MainLayout";
import Menu from "./pages/Menu";
import Completed from "./pages/Completed";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      {/* Authentication */}
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </>
      )}

      {/* Main Application */}
      {isLoggedIn && (
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/task" element={<Tasks />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/completed" element={<Completed />} />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      )}

      {/* Default route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
