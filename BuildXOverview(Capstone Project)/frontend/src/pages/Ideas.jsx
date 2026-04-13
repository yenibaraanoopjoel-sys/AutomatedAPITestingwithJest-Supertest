import React, { useState } from 'react';
import { Search, Filter, Plus, Code, Users } from 'lucide-react';
import './Ideas.css';

const Ideas = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="ideas-container">
      <div className="page-header">
        <div>
          <h2>Idea Board</h2>
          <p className="text-muted">Explore innovative projects and collaborate.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowPostModal(true)}>
          <Plus size={18} /> Post Idea
        </button>
      </div>

      <div className="ideas-toolbar">
        <div className="search-bar">
          <Search size={18} className="text-muted" />
          <input type="text" placeholder="Search ideas by title or tech stack..." />
        </div>
        <div className="filters">
          <button className="btn-outline"><Filter size={18} /> Filters</button>
          <select className="dropdown">
            <option>All Categories</option>
            <option>Web 3.0</option>
            <option>AI / ML</option>
            <option>Fintech</option>
          </select>
        </div>
      </div>

      <div className="ideas-grid">
        {/* Idea Card 1 */}
        <div className="idea-card card-glass">
          <div className="idea-header">
            <h3>AI-Powered Resume Builder</h3>
            <span className="category-badge">AI / ML</span>
          </div>
          <p className="idea-desc">An application that uses NLP to optimize user resumes against specific job descriptions.</p>
          <div className="idea-meta">
            <div className="meta-item"><Code size={16} className="text-primary"/> Python, React, NLP</div>
            <div className="meta-item"><Users size={16} className="text-primary"/> Looking for Frontend Eng.</div>
          </div>
          <div className="idea-footer">
            <div className="creator">
              <div className="avatar micro">J</div>
              <span className="text-muted small">Posted by John D.</span>
            </div>
            <button className="btn-outline btn-small">View Project</button>
          </div>
        </div>

        {/* Idea Card 2 */}
        <div className="idea-card card-glass">
          <div className="idea-header">
            <h3>Decentralized Crowdfunding</h3>
            <span className="category-badge">Web 3.0</span>
          </div>
          <p className="idea-desc">A smart contract based platform for raising capital transparently on the Ethereum network.</p>
          <div className="idea-meta">
            <div className="meta-item"><Code size={16} className="text-primary"/> Solidity, Next.js, Ethers</div>
            <div className="meta-item"><Users size={16} className="text-primary"/> Looking for Smart Contract Dev</div>
          </div>
          <div className="idea-footer">
            <div className="creator">
              <div className="avatar micro">A</div>
              <span className="text-muted small">Posted by Alice W.</span>
            </div>
            <button className="btn-outline btn-small">View Project</button>
          </div>
        </div>
      </div>

      {showPostModal && (
        <div className="modal-overlay">
          <div className="modal-content card-glass">
            <h3>Post a New Idea</h3>
            <form className="post-idea-form">
              <input type="text" placeholder="Project Title" required />
              <textarea placeholder="Detailed Description" rows={4} required></textarea>
              <input type="text" placeholder="Required Tech Stack (comma separated)" required />
              <input type="text" placeholder="Collaboration Preferences (e.g., Looking for Backend Dev)" required />
              <div className="modal-actions">
                <button type="button" className="btn-outline" onClick={() => setShowPostModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Post Idea</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ideas;
