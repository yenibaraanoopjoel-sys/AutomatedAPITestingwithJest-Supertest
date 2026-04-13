import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Ideas from './pages/Ideas';
import SkillSwap from './pages/SkillSwap';
import ProjectWorkspace from './pages/ProjectWorkspace';
import Wallet from './pages/Wallet';
import Challenges from './pages/Challenges';
import Chat from './pages/Chat';
import VideoSession from './pages/VideoSession';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import MainLayout from './layouts/MainLayout';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/login" element={<><Navbar /><Login /></>} />
          <Route path="/register" element={<><Navbar /><Register /></>} />
          
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/skill-swap" element={<SkillSwap />} />
            <Route path="/projects" element={<ProjectWorkspace />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/video" element={<VideoSession />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
