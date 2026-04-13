import React from 'react';
import { UserPlus, Star } from 'lucide-react';
import './SkillSwap.css';

const SkillSwap = () => {
  return (
    <div className="skillswap-container">
      <div className="page-header">
        <div>
          <h2>Skill Swap</h2>
          <p className="text-muted">Connect for peer-to-peer learning based on mutual interests.</p>
        </div>
      </div>

      <div className="skills-overview card-glass">
        <div className="skills-section my-skills">
          <h3>Skills I Know</h3>
          <div className="tags">
            <span className="tag known">React</span>
            <span className="tag known">CSS</span>
            <span className="tag known">Figma</span>
          </div>
        </div>
        <div className="skills-section learn-skills">
          <h3>Skills I Want To Learn</h3>
          <div className="tags">
            <span className="tag to-learn">Node.js</span>
            <span className="tag to-learn">Python</span>
            <span className="tag to-learn">AWS</span>
          </div>
        </div>
      </div>

      <h3 className="section-title">Suggested Matches</h3>
      <div className="matches-grid">
        {/* Match Card 1 */}
        <div className="match-card card-glass">
          <div className="match-header">
            <div className="avatar match-avatar">T</div>
            <div className="match-info">
              <h4>Tom Hardy</h4>
              <p className="text-muted small">Backend Developer</p>
            </div>
            <div className="match-score">
              <Star size={14} className="text-accent" /> 95% Match
            </div>
          </div>
          <div className="match-body">
            <div className="match-detail">
              <span className="detail-label">Tom Knows:</span>
              <span className="text-gradient font-bold">Node.js, AWS</span> (You want to learn)
            </div>
            <div className="match-detail">
              <span className="detail-label">Tom Wants to Learn:</span>
              <span className="text-primary font-bold">React</span> (You know)
            </div>
          </div>
          <button className="btn-primary full-width">
            <UserPlus size={18} /> Connect for Session
          </button>
        </div>

        {/* Match Card 2 */}
        <div className="match-card card-glass">
          <div className="match-header">
            <div className="avatar match-avatar">E</div>
            <div className="match-info">
              <h4>Emma Watson</h4>
              <p className="text-muted small">Data Scientist</p>
            </div>
            <div className="match-score">
              <Star size={14} className="text-accent" /> 80% Match
            </div>
          </div>
          <div className="match-body">
            <div className="match-detail">
              <span className="detail-label">Emma Knows:</span>
              <span className="text-gradient font-bold">Python</span> (You want to learn)
            </div>
            <div className="match-detail">
              <span className="detail-label">Emma Wants to Learn:</span>
              <span className="text-primary font-bold">Figma</span> (You know)
            </div>
          </div>
          <button className="btn-primary full-width">
            <UserPlus size={18} /> Connect for Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSwap;
