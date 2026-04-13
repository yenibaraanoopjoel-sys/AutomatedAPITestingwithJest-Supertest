import React, { useState } from 'react';
import { Layout, CheckSquare, GitPullRequest, DollarSign, ExternalLink } from 'lucide-react';
import './ProjectWorkspace.css';

const ProjectWorkspace = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="workspace-container">
      <div className="workspace-header card-glass">
        <div className="workspace-title">
          <h2>AI Image Generator Web App</h2>
          <span className="status status-running">In Progress</span>
        </div>
        <p className="text-muted">A full-stack project utilizing Stable Diffusion API to generate and share AI art.</p>
        
        <div className="workspace-tabs">
          <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            <Layout size={18} /> Overview
          </button>
          <button className={`tab-btn ${activeTab === 'tasks' ? 'active' : ''}`} onClick={() => setActiveTab('tasks')}>
            <CheckSquare size={18} /> Tasks
          </button>
          <button className={`tab-btn ${activeTab === 'contributions' ? 'active' : ''}`} onClick={() => setActiveTab('contributions')}>
            <GitPullRequest size={18} /> Contributions
          </button>
          <button className={`tab-btn ${activeTab === 'earnings' ? 'active' : ''}`} onClick={() => setActiveTab('earnings')}>
            <DollarSign size={18} /> Earnings (Private)
          </button>
        </div>
      </div>

      <div className="workspace-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="overview-card card-glass">
              <h3>Project Details</h3>
              <p className="text-muted">This project aims to build a responsive React frontend with a Node.js backend to interact with various AI APIs.</p>
              
              <div className="github-section">
                <h4>Linked Repository</h4>
                <a href="#" className="github-link"><ExternalLink size={16}/> github.com/buildx/ai-image-gen</a>
              </div>
            </div>
            
            <div className="overview-card card-glass">
              <h3>Team Members</h3>
              <div className="team-list">
                <div className="team-member">
                  <div className="avatar">A</div>
                  <div>
                    <h4 className="m-0">Alice (Admin)</h4>
                    <span className="text-muted small">Fullstack</span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="avatar">Y</div>
                  <div>
                    <h4 className="m-0">You</h4>
                    <span className="text-muted small">Frontend Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="tasks-tab card-glass">
            <div className="task-header">
              <h3>Active Tasks</h3>
              <button className="btn-outline btn-small">Add Task</button>
            </div>
            <div className="task-board">
              <div className="task-col">
                <h4>To Do</h4>
                <div className="task-card">Set up Redux Store</div>
                <div className="task-card">Design Landing Page</div>
              </div>
              <div className="task-col">
                <h4>In Progress</h4>
                <div className="task-card active">Integrate Stable Diffusion API</div>
              </div>
              <div className="task-col">
                <h4>Done</h4>
                <div className="task-card done">Initialize Repo</div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs placeholders omitted for brevity but they exist in structure */}
        {activeTab === 'earnings' && (
          <div className="earnings-tab card-glass">
            <h3>Your Private Earnings</h3>
            <div className="earnings-summary">
              <div className="earning-stat">
                <span className="text-muted">Earned from this project</span>
                <h2 className="text-gradient">$450.00</h2>
              </div>
            </div>
            <p className="text-muted mt-4">These earnings are visible only to you and the project admin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectWorkspace;
