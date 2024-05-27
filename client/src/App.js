import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import BuyerDashboard from './pages/BuyerDashboard';
import SellerDashboard from './pages/SellerDashboard';
import PropertyDetails from './components/PropertyDetails';
import LandingPage from './pages/LandingPage'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUserType(user.userType);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType('');
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} userType={userType} />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/buyer" element={isAuthenticated ? <BuyerDashboard /> : <Navigate to="/login" />} />
          <Route path="/seller" element={isAuthenticated ? <SellerDashboard /> : <Navigate to="/login" />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
