import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { fetchUserDetail } from '../services/api';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      localStorage.setItem('token', response.data.token);
      // Fetch user details after login to determine userType
      const userDetails = await fetchUserDetail(response.data.token);
      const userType = userDetails.user.userType;
      onLogin(userDetails.user); // Call onLogin with user details
      if (userType === 'buyer') {
        navigate('/buyer');
      } else if (userType === 'seller') {
        navigate('/seller');
      } else {
        console.error('Unknown user type:', userType);
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
