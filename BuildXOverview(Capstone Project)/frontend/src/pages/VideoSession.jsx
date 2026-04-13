import React, { useState } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, MonitorUp, PhoneOff, Maximize, MessageSquare } from 'lucide-react';
import './VideoSession.css';

const VideoSession = () => {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="video-session-container">
      <div className="video-header">
        <h2>Weekly Sync - AI Image Gen Project</h2>
        <span className="status status-running">Live • 00:15:32</span>
      </div>

      <div className="video-main-layout">
        <div className="video-grid">
          <div className="video-feed speaker">
            {cameraOn ? (
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Speaker" className="feed-img" />
            ) : (
              <div className="camera-off-placeholder">
                <div className="avatar large-avatar">Y</div>
              </div>
            )}
            <div className="feed-label">You</div>
          </div>
          <div className="video-feed">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Participant" className="feed-img" />
            <div className="feed-label">Alice (Admin)</div>
          </div>
          <div className="video-feed">
            <div className="camera-off-placeholder">
              <div className="avatar large-avatar">B</div>
            </div>
            <div className="feed-label">Bob (Frontend) <MicOff size={14} style={{marginLeft: '5px', color:'red'}}/></div>
          </div>
          <div className="video-feed">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" alt="Participant" className="feed-img" />
            <div className="feed-label">Emma (Design)</div>
          </div>
        </div>

        <div className="video-sidebar card-glass">
          <div className="sidebar-header">
            <h3>Meeting Chat</h3>
          </div>
          <div className="video-chat-messages">
             <div className="vc-msg"><b>Alice:</b> Can everyone see my screen?</div>
             <div className="vc-msg"><b>Bob:</b> Yes, looks good.</div>
          </div>
          <div className="vc-input">
            <input type="text" placeholder="Type a message..." />
            <button className="icon-btn-solid text-gradient"><MessageSquare size={16}/></button>
          </div>
          <div className="ai-summary-box">
             <button className="btn-outline w-full">Generate AI Summary</button>
          </div>
        </div>
      </div>

      <div className="video-controls">
        <button 
          className={`control-btn ${!micOn ? 'danger' : ''}`}
          onClick={() => setMicOn(!micOn)}
        >
          {micOn ? <Mic size={24}/> : <MicOff size={24}/>}
        </button>
        <button 
          className={`control-btn ${!cameraOn ? 'danger' : ''}`}
          onClick={() => setCameraOn(!cameraOn)}
        >
          {cameraOn ? <VideoIcon size={24}/> : <VideoOff size={24}/>}
        </button>
        <button className="control-btn"><MonitorUp size={24}/></button>
        <button className="control-btn"><Maximize size={24}/></button>
        <button className="control-btn end-call"><PhoneOff size={24}/></button>
      </div>
    </div>
  );
};

export default VideoSession;
