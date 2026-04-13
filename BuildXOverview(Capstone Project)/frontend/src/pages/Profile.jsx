import React from 'react';
import { Settings, User, Mail, Github, Bell, Shield, LogOut } from 'lucide-react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="page-header">
        <h2>Profile Settings</h2>
      </div>

      <div className="profile-layout">
        {/* Settings Sidebar */}
        <div className="profile-nav card-glass">
          <ul className="settings-list">
            <li className="active"><User size={18}/> Personal Info</li>
            <li><Shield size={18}/> Security</li>
            <li><Bell size={18}/> Notifications</li>
            <li><Github size={18}/> Integrations</li>
            <li className="danger-link mt-auto"><LogOut size={18}/> Logout</li>
          </ul>
        </div>

        {/* Settings Content */}
        <div className="profile-content card-glass">
          <div className="profile-header-info border-bottom">
            <div className="avatar-large">Y</div>
            <div className="profile-meta">
              <h3>Your Name</h3>
              <p className="text-muted">you@example.com</p>
              <button className="btn-outline btn-small mt-2">Change Avatar</button>
            </div>
          </div>

          <form className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Your Name" />
            </div>
            
            <div className="form-group">
              <label>Bio</label>
              <textarea rows={4} defaultValue="Full-stack developer passionate about building cool web apps and learning Web 3.0." />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Skills I Know (Comma separated)</label>
                <input type="text" defaultValue="React, Node.js, Express, MongoDB" />
              </div>
              <div className="form-group">
                <label>Skills to Learn</label>
                <input type="text" defaultValue="Python, Machine Learning, Web3" />
              </div>
            </div>

            <div className="form-actions mt-4">
               <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
