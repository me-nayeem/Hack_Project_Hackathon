// src/components/sidebar/RightWidgets.jsx
import React from 'react';
import './RightWidgets.css';

const todayChallenge = {
  title: "10,000 Steps Challenge",
  progress: 68,
  endsIn: "2 days left"
};

const leaderboard = [
  { rank: 1, name: "Sarah", avatar: "S", points: 12450 },
  { rank: 2, name: "Mike", avatar: "M", points: 11890 },
  { rank: 3, name: "You", avatar: "A", points: 8740, isYou: true },
  { rank: 4, name: "Lisa", avatar: "L", points: 8320 },
  { rank: 5, name: "John", avatar: "J", points: 7990 },
];

const RightWidgets = () => {
  return (
    <>
      {/* Today's Challenge */}
      <div className="widget challenge-widget">
        <h3>Today's Challenge</h3>
        <h4>{todayChallenge.title}</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${todayChallenge.progress}%` }}></div>
        </div>
        <p className="progress-text">{todayChallenge.progress}% • {todayChallenge.endsIn}</p>
        <button className="btn-primary full-width" onClick={() => window.location.href = '/challenge'}>Join Now</button>
      </div>

      {/* Leaderboard */}
      <div className="widget leaderboard-widget">
        <h3>Leaderboard</h3>
        <ol className="leaderboard-list">
          {leaderboard.map(user => (
            <li key={user.rank} className={user.isYou ? 'is-you' : ''}>
              <span className="rank">#{user.rank}</span>
              <div className="leader-avatar">{user.avatar}</div>
              <span className="leader-name">{user.name}</span>
              <span className="leader-points">{user.points.toLocaleString()}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Community */}
      <div className="widget community-widget">
        <h3>Community</h3>
        <div className="community-links">
          <a href="#">Morning Runners Group</a>
          <a href="#">Meditation Circle</a>
          <a href="#">View All Groups →</a>
        </div>
      </div>
    </>
  );
};

export default RightWidgets;