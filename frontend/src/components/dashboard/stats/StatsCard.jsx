import './StatsCard.css';

const stats = [
  { label: 'Steps', value: '8,420', progress: 84, subtitle: 'of 10,000 goal', color: '#14b8a6' },
  { label: 'Active Minutes', value: '42', progress: 70, subtitle: 'of 60 min goal', color: '#f472b6' },
  { label: 'Calories Burned', value: '420', progress: 70, subtitle: 'of 600 kcal goal', color: '#fb923c' },
  { label: 'Water Intake', value: '2,200 ml', progress: 73, subtitle: 'of 3,000 ml goal', color: '#3b82f6' },
  { label: 'HRV', value: '72 ms', progress: 90, subtitle: 'Excellent range', color: '#8b5cf6' },
  { label: 'Sleep Score', value: '86', progress: 86, subtitle: 'Good sleep quality', color: '#6366f1' },
  { label: 'Stress Level', value: 'Low', progress: 28, subtitle: '28% • Keep it up!', color: '#10b981', reverse: true },
  { label: 'Today’s Challenge', value: '68%', progress: 68, subtitle: '2 days left', color: '#14b8a6' },
];

const StatsCard = () => {
  return (
    <div className="modern-stats-list">
      {stats.map((stat, i) => (
        <div key={i} className="stat-row">
          <div className="stat-content">
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-subtitle">{stat.subtitle}</div>
          </div>

          <div className="stat-progress">
            <div 
              className="progress-bar"
              style={{
                '--progress': `${stat.progress}%`,
                '--color': stat.color
              }}
            >
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;