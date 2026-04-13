import React from 'react';
import { Activity, ShieldAlert, Users, FolderGit2 } from 'lucide-react';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="page-header">
        <h2>Admin Overview</h2>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card card-glass">
          <Users size={24} className="text-primary"/>
          <div className="admin-stat-info">
             <h3>14,320</h3>
             <p>Total Users</p>
          </div>
        </div>
        <div className="admin-stat-card card-glass">
          <FolderGit2 size={24} className="text-secondary"/>
          <div className="admin-stat-info">
             <h3>842</h3>
             <p>Active Projects</p>
          </div>
        </div>
        <div className="admin-stat-card card-glass">
          <Activity size={24} className="text-accent"/>
          <div className="admin-stat-info">
             <h3>$54,200</h3>
             <p>Monthly Tx Volume</p>
          </div>
        </div>
        <div className="admin-stat-card card-glass">
          <ShieldAlert size={24} style={{color: '#ef4444'}}/>
          <div className="admin-stat-info">
             <h3>12</h3>
             <p>Pending Reports</p>
          </div>
        </div>
      </div>

      <div className="admin-tables">
        <div className="admin-section card-glass">
          <h3 className="section-title">User Management</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>john@example.com</td>
                <td>User</td>
                <td><span className="status status-completed">Active</span></td>
                <td><button className="text-primary" style={{background: 'transparent', border: 'none'}}>Edit</button></td>
              </tr>
              <tr>
                <td>jane@example.com</td>
                <td>Admin</td>
                <td><span className="status status-completed">Active</span></td>
                <td><button className="text-primary" style={{background: 'transparent', border: 'none'}}>Edit</button></td>
              </tr>
              <tr>
                <td>spam@example.com</td>
                <td>User</td>
                <td><span className="status status-running" style={{color: 'red', background: 'rgba(239,68,68,0.2)'}}>Flagged</span></td>
                <td><button className="text-primary" style={{background: 'transparent', border: 'none'}}>Review</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="admin-section card-glass">
          <h3 className="section-title">Recent Activity Logs</h3>
          <ul className="activity-logs">
             <li><b>System:</b> Daily backup completed successfully. <span className="text-muted small">10 mins ago</span></li>
             <li><b>Admin Jane:</b> Approved withdrawal request #4992. <span className="text-muted small">45 mins ago</span></li>
             <li><b>System:</b> New challenge "Hackathon" published. <span className="text-muted small">1 hour ago</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
