// src/pages/ChallengePage.jsx
import React, { useState } from 'react';
import './ChallengePage.css';

const challenge = {
  id: 87,
  title: "10,000 Steps Challenge",
  emoji: "Running",
  description: "Walk or run 10,000 steps today to stay active and earn bonus points!",
  goal: 10000,
  current: 6840,
  participants: 2847,
  endsIn: "2 days left",
  reward: "150 points + Marathon Ready badge",
  joined: false
};

const ChallengePage = () => {
  const [hasJoined, setHasJoined] = useState(challenge.joined);
  const progress = (challenge.current / challenge.goal) * 100;

  const handleJoin = () => {
    setHasJoined(true);
  };

  return (
    <div className="challenge-page">
      <div className="challenge-hero">
        <div className="challenge-card">
          <div className="challenge-header">
            <h1>
              <span className="challenge-emoji">{challenge.emoji}</span>
              {challenge.title}
            </h1>
            <p className="challenge-desc">{challenge.description}</p>
          </div>

          {/* Big Progress */}
          <div className="challenge-progress">
            <div className="progress-large">
              <div 
                className="progress-fill-large"
                style={{ width: `${progress}%` }}
              />
              <div className="progress-text-large">
                <span className="current-steps">{challenge.current.toLocaleString()}</span>
                <span className="goal-steps">/ {challenge.goal.toLocaleString()} steps</span>
              </div>
            </div>
            <div className="progress-meta">
              <strong>{Math.round(progress)}%</strong> • {challenge.endsIn}
            </div>
          </div>

          {/* CTA */}
          {!hasJoined ? (
            <button className="btn-join-huge" onClick={handleJoin}>
              Join Challenge Now
            </button>
          ) : (
            <div className="joined-state">
              <span className="check-icon">Check</span>
              <strong>You're in! Keep walking!</strong>
              <p>Live tracking enabled • Auto-sync from your device</p>
            </div>
          )}

          {/* Stats */}
          <div className="challenge-stats">
            <div className="stat">
              <strong>{challenge.participants.toLocaleString()}</strong>
              <span>Participants</span>
            </div>
            <div className="stat">
              <strong>{challenge.reward}</strong>
              <span>Reward</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Preview */}
      <div className="leaderboard-preview">
        <h2>Top Performers</h2>
        <div className="leaderboard-list">
          {[
            { rank: 1, name: "Sarah", steps: 12450, avatar: "S" },
            { rank: 2, name: "Rahim", steps: 11890, avatar: "R" },
            { rank: 3, name: "You", steps: 6840, avatar: "A", isYou: true },
          ].map(user => (
            <div key={user.rank} className={`leader-item ${user.isYou ? 'you' : ''}`}>
              <span className="rank">#{user.rank}</span>
              <div className="avatar-sm">{user.avatar}</div>
              <span className="name">{user.name}</span>
              <span className="steps">{user.steps.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <button className="btn-view-all">View Full Leaderboard</button>
      </div>
    </div>
  );
};

export default ChallengePage;