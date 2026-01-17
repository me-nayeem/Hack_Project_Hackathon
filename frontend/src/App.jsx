// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Store from "./pages/store/Store";
import ProfilePage from "./components/profile/ProfilePage";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Challenge from "./pages/challenge/Challenge";
import Learn from "./pages/learn/Learn";
import Consultant from "./pages/consultant/Consultant";
import AskAI from "./pages/askai/AskAI";
import Feed from "./pages/feed/Feed";
import MedicineTaking from "./pages/medicineplan/MedicineTaking";
import HealthProfileForm from "./pages/healthform/HealthProfileForm";


import ProtectedRoute from "./data/ProtectedRoute";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/store"
          element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/challenge"
          element={
            <ProtectedRoute>
              <Challenge />
            </ProtectedRoute>
          }
        />

        <Route
          path="/learn"
          element={
            <ProtectedRoute>
              <Learn />
            </ProtectedRoute>
          }
        />

        <Route
          path="/consultant"
          element={
            <ProtectedRoute>
              <Consultant />
            </ProtectedRoute>
          }
        />

        <Route
          path="/askai"
          element={
            <ProtectedRoute>
              <AskAI />
            </ProtectedRoute>
          }
        />

        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />

        <Route
          path="/medicine-taking"
          element={
            <ProtectedRoute>
              <MedicineTaking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/health-profile-form"
          element={
            <ProtectedRoute>
              <HealthProfileForm />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
