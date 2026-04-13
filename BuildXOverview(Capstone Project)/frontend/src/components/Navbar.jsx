import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar card-glass">
      <div className="nav-brand">
        <h1 className="text-gradient">BuildX</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item"><Home size={18}/> Home</Link>
        <Link to="/dashboard" className="nav-item"><LayoutDashboard size={18}/> Dashboard</Link>
        <div className="nav-auth">
          <Link to="/login" className="nav-item btn-outline"><LogIn size={18}/> Login</Link>
          <Link to="/register" className="nav-item btn-primary"><UserPlus size={18}/> Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
