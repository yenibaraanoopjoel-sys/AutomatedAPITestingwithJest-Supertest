import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { 
  Home, Lightbulb, Users, Trophy, FolderGit2, 
  MessageSquare, Wallet, User as UserIcon, Bell, Search 
} from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar card-glass">
        <div className="sidebar-brand">
          <h1 className="text-gradient">BuildX</h1>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link active"><Home size={20}/> Dashboard</Link>
          <Link to="/ideas" className="sidebar-link"><Lightbulb size={20}/> Ideas</Link>
          <Link to="/skill-swap" className="sidebar-link"><Users size={20}/> Skill Swap</Link>
          <Link to="/challenges" className="sidebar-link"><Trophy size={20}/> Challenges</Link>
          <Link to="/projects" className="sidebar-link"><FolderGit2 size={20}/> Projects</Link>
          <Link to="/chat" className="sidebar-link"><MessageSquare size={20}/> Chat</Link>
          <Link to="/wallet" className="sidebar-link"><Wallet size={20}/> Wallet</Link>
          <Link to="/profile" className="sidebar-link"><UserIcon size={20}/> Profile</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="main-content-area">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Search projects, users, challenges..." />
          </div>
          <div className="topbar-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <div className="user-profile-menu">
              <div className="avatar">A</div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
