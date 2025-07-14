/// BondTrack - React Starter with 4 Web APIs, Styled UI, and Auto Dark Mode + Multi-Page Router

// File: src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InvestmentFormPage from "./pages/InvestmentFormPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>💰 BondTrack</h1>
          <p className="subtitle">
            Track your fixed income investments smartly
          </p>
          <nav className="nav">
            <Link to="/">🏠 Home</Link>
            <Link to="/dashboard">📊 Dashboard</Link>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<InvestmentFormPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <footer className="footer">
          © 2025 BondTrack • Financial Freedom Simplified
        </footer>
      </div>
    </Router>
  );
}

export default App;
