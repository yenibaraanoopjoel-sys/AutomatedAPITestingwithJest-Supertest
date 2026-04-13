import React from 'react';
import { Briefcase, Coins, CheckCircle, Clock } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p className="text-muted">Welcome back, your platform statistics at a glance.</p>
      </div>

      {/* Summary Stats */}
      <div className="stats-grid">
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{background: 'rgba(99,102,241,0.2)'}}>
            <Coins color="var(--clr-primary)" size={24} />
          </div>
          <div className="stat-info">
            <h3>$1,240</h3>
            <p>Total Earnings</p>
          </div>
        </div>
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{background: 'rgba(168,85,247,0.2)'}}>
            <CheckCircle color="var(--clr-secondary)" size={24} />
          </div>
          <div className="stat-info">
            <h3>12</h3>
            <p>Projects Completed</p>
          </div>
        </div>
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{background: 'rgba(20,184,166,0.2)'}}>
            <Briefcase color="var(--clr-accent)" size={24} />
          </div>
          <div className="stat-info">
            <h3>3</h3>
            <p>Active Collaborations</p>
          </div>
        </div>
        <div className="stat-card card-glass">
          <div className="stat-icon" style={{background: 'rgba(234,179,8,0.2)'}}>
            <Clock color="#eab308" size={24} />
          </div>
          <div className="stat-info">
            <h3>15hr</h3>
            <p>Pending Tasks</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content-grid">
        {/* Recent Projects */}
        <section className="dashboard-section card-glass">
          <div className="section-header">
            <h3>Recent Projects</h3>
            <button className="btn-outline btn-small">View All</button>
          </div>
          <div className="project-list">
            <div className="project-item">
              <div className="project-info">
                <h4>AI Image Generator Web App</h4>
                <p className="text-muted">Role: Frontend Developer</p>
              </div>
              <span className="status status-running">In Progress</span>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h4>E-commerce Dashboard UI</h4>
                <p className="text-muted">Role: UI/UX Designer</p>
              </div>
              <span className="status status-completed">Completed</span>
            </div>
          </div>
        </section>

        {/* Suggested Collaborators */}
        <section className="dashboard-section card-glass">
          <div className="section-header">
            <h3>Suggested Collaborators</h3>
            <button className="btn-outline btn-small">Skill Swap</button>
          </div>
          <div className="collaborator-list">
            <div className="collaborator-card">
              <div className="collab-avatar">S</div>
              <div className="collab-details">
                <h4>Sarah Jenkins</h4>
                <p className="text-gradient">Wants to learn React</p>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Django</span>
                </div>
              </div>
              <button className="btn-primary btn-small">Connect</button>
            </div>
            <div className="collaborator-card">
              <div className="collab-avatar">R</div>
              <div className="collab-details">
                <h4>Raj Patel</h4>
                <p className="text-gradient">Knows AWS, Node.js</p>
                <div className="tags">
                  <span className="tag">AWS</span>
                  <span className="tag">Node.js</span>
                </div>
              </div>
              <button className="btn-primary btn-small">Connect</button>
            </div>
          </div>
        </section>
      </div>

      {/* Ongoing Challenges & Quizzes Placeholder */}
      <section className="dashboard-section card-glass full-width">
        <div className="section-header">
          <h3>Active Challenges</h3>
        </div>
        <div className="challenge-banner">
          <div>
            <h4>Complete the 30 Days of React Challenge!</h4>
            <p className="text-muted">Earn up to 500 XP and a special badge on your profile.</p>
          </div>
          <button className="btn-primary">Join Now</button>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
