import React from 'react';
import { Search, Trophy, Terminal, Code, Award, CheckCircle } from 'lucide-react';
import './Challenges.css';

const Challenges = () => {
  return (
    <div className="challenges-container">
      <div className="page-header">
        <div>
          <h2>Challenges & Quizzes</h2>
          <p className="text-muted">Test your skills, compete, and climb the leaderboard.</p>
        </div>
      </div>

      {/* Overview Banner */}
      <div className="challenge-banner card-glass">
        <div className="banner-content">
          <Trophy size={48} className="text-accent" />
          <div className="banner-text">
            <h3>Global Monthly Hackathon</h3>
            <p>Build a decentralized finance application in 48 hours. Winners get $5,000 and premium badges.</p>
          </div>
        </div>
        <button className="btn-primary">Register Now</button>
      </div>

      <div className="two-col-layout">
        <div className="challenges-grid">
          <h3 className="section-title">Active Challenges</h3>
          
          {/* Challenge 1 */}
          <div className="challenge-card card-glass">
            <div className="chal-header">
              <div className="chal-icon">
                <Code size={24} className="text-primary"/>
              </div>
              <div className="chal-info">
                <h4>100 Days of React</h4>
                <p className="text-muted small">Ends in 12 Days</p>
              </div>
            </div>
            <p className="chal-desc">Build 100 components using React Hooks and Context.</p>
            <div className="chal-footer">
              <div className="rewards">
                <Award size={16} className="text-accent"/> 500 XP
              </div>
              <button className="btn-outline btn-small">View Details</button>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="challenge-card card-glass">
            <div className="chal-header">
              <div className="chal-icon">
                <Terminal size={24} className="text-secondary"/>
              </div>
              <div className="chal-info">
                <h4>Secure the API Server</h4>
                <p className="text-muted small">Ends in 2 Days</p>
              </div>
            </div>
            <p className="chal-desc">Find and patch the vulnerabilities in the provided Node.js express server.</p>
            <div className="chal-footer">
              <div className="rewards">
                <Award size={16} className="text-accent"/> 1000 XP + $50
              </div>
              <button className="btn-outline btn-small">View Details</button>
            </div>
          </div>

        </div>

        {/* Leaderboard */}
        <div className="leaderboard-section card-glass">
          <h3 className="section-title">Leaderboard</h3>
          <div className="leader-list">
            <div className="leader-row rank-1">
              <span className="rank text-accent font-bold">1</span>
              <div className="avatar micro">J</div>
              <span className="leader-name">Johnathan Developer</span>
              <span className="leader-score">12,400 XP</span>
            </div>
            <div className="leader-row rank-2">
              <span className="rank font-bold" style={{color: 'silver'}}>2</span>
              <div className="avatar micro">M</div>
              <span className="leader-name">Maria Frontend</span>
              <span className="leader-score">11,250 XP</span>
            </div>
            <div className="leader-row rank-3">
              <span className="rank font-bold" style={{color: '#cd7f32'}}>3</span>
              <div className="avatar micro">A</div>
              <span className="leader-name">Alex Sysadmin</span>
              <span className="leader-score">10,900 XP</span>
            </div>
            <div className="leader-row">
              <span className="rank">4</span>
              <div className="avatar micro">T</div>
              <span className="leader-name">Tom Hacker</span>
              <span className="leader-score">9,500 XP</span>
            </div>
          </div>
          <button className="btn-outline btn-small w-full mt-4">View All Rankings</button>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
