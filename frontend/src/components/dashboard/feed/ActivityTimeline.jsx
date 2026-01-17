// src/components/feed/ActivityTimeline.jsx
import React from 'react';
import './ActivityTimeline.css';

const activities = [
  { id: 1, icon: "Running", text: "Completed 5km Morning Run", time: "2 hours ago", points: 120 },
  { id: 2, icon: "Meditation", text: "10-minute Mindfulness Session", time: "4 hours ago", points: 50 },
  { id: 3, icon: "Water", text: "Drank 8 glasses of water", time: "Today", points: 30 },
  { id: 4, icon: "Trophy", text: "Achieved 7-day streak!", time: "Yesterday", points: 200 },
];

const ActivityTimeline = () => {
  return (
    <div className="activity-timeline" aria-labelledby="activity-heading">
      <h3 id="activity-heading">Recent Activity</h3>
      {activities.length === 0 ? (
        <p className="empty-state">No activity yet. Start moving!</p>
      ) : (
        <ul className="activity-list">
          {activities.map(act => (
            <li key={act.id} className="activity-item">
              <div className="activity-icon">{act.icon}</div>
              <div className="activity-content">
                <p className="activity-text">{act.text}</p>
                <span className="activity-time">{act.time}</span>
              </div>
              <div className="activity-points">+{act.points}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityTimeline;