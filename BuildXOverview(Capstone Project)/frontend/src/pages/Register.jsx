import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Code, UserPlus } from 'lucide-react';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', skillsKnown: '', skillsToLearn: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card card-glass register-card">
        <div className="auth-header">
          <h2 className="text-gradient">Join BuildX</h2>
          <p>Create an account to collaborate & build</p>
        </div>
        
        <form className="auth-form" onSubmit={handleRegister}>
          <div className="form-row">
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input 
                  type="text" name="name"
                  placeholder="John Doe" 
                  onChange={handleChange} required
                />
              </div>
            </div>
            
            <div className="input-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input 
                  type="email" name="email"
                  placeholder="john@example.com" 
                  onChange={handleChange} required
                />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input 
                type="password" name="password"
                placeholder="••••••••" 
                onChange={handleChange} required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Skills I Know</label>
              <div className="input-wrapper">
                <Code size={18} className="input-icon" />
                <input 
                  type="text" name="skillsKnown"
                  placeholder="React, Node.js, etc." 
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="input-group">
              <label>Skills To Learn</label>
              <div className="input-wrapper">
                <Code size={18} className="input-icon" />
                <input 
                  type="text" name="skillsToLearn"
                  placeholder="Python, AWS, etc." 
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary auth-submit">
            <UserPlus size={18} /> Create Account
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="text-gradient">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
