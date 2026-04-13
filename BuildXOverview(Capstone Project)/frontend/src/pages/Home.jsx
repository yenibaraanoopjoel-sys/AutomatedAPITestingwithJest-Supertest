import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Rocket, Zap, Trophy, CreditCard } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            The Ultimate Ecosystem for <br />
            <span className="text-gradient">Idea Creators & Developers</span>
          </h1>
          <p className="hero-subtitle">
            Integrate learning, collaboration, and monetization. Post innovative ideas, find matching skills, and work on real projects in one unified platform.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary hero-btn">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link to="/ideas" className="btn-outline hero-btn">
              Explore Ideas
            </Link>
          </div>
        </div>
        
        {/* Floating elements to mimic a luxurious technical aesthetic */}
        <div className="hero-visual">
          <div className="glass-card visual-card float-1">
            <Code className="text-gradient" size={40} />
            <p>Skill Matching</p>
          </div>
          <div className="glass-card visual-card float-2">
            <Rocket className="text-gradient" size={40} />
            <p>Project Execution</p>
          </div>
          <div className="glass-card visual-card float-3">
            <Trophy className="text-gradient" size={40} />
            <p>Challenges & Quizzes</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose BuildX?</h2>
        <div className="features-grid">
          <div className="feature-card card-glass">
            <Users size={32} className="feature-icon text-gradient" />
            <h3>Collaborate & Learn</h3>
            <p>Find developers or learners matching your required skills and learn peer-to-peer.</p>
          </div>
          <div className="feature-card card-glass">
            <Zap size={32} className="feature-icon text-gradient" />
            <h3>Real-time Workspaces</h3>
            <p>Chat, share files, and link your Github directly in our dedicated project environments.</p>
          </div>
          <div className="feature-card card-glass">
            <CreditCard size={32} className="feature-icon text-gradient" />
            <h3>Earn Recognition & Money</h3>
            <p>Get paid for contributions through our secure wallet system and climb the leaderboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
