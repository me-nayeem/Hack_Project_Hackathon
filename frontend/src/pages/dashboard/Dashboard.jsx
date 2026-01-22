// Dashboard.jsx
import "./Dashboard.css";
import Navbar from "../../components/dashboard/Navbar/Navbar";
import { cleanAIMessage } from "../..//utils/parseAIInsights";
import HealthInsightsCard from "../../components/dashboard/healthInsight/HealthInsightsCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  getUserDataName,
  getUserData,
  getHealthInsights,
} from "../../services/dashboard.api";

const avatar =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop";
const watchIcon =
  "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=80";
const runningIcon =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=80";
const meditationIcon =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=80";

export default function Dashboard() {
  const [showInsights, setShowInsights] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [healthInsights, setHealthInsights] = useState(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getUserDataName(); // calls your backend
        const name = data.name || data.user?.firstName || "";

        setUserName(name);
      } catch (err) {
        console.error("Failed to load user data:", err);
      }
    };

    loadUser();
  }, []);

  const fetchHealthInsights = async () => {
    setLoadingInsights(true);
    try {
      // 1️⃣ Fetch user health data from backend
      const healthData = await getUserData(); // this returns user health metrics

      // 2️⃣ Send health data to AI backend for analysis
      const insights = await getHealthInsights(healthData);

      // 3️⃣ Set insights to state

      const cleanInsight = cleanAIMessage(insights);
      setHealthInsights(cleanInsight);
      setShowInsights(true);
    } catch (err) {
      console.error("Failed to fetch health insights:", err);
      alert("Failed to load health insights. Please try again.");
    } finally {
      setLoadingInsights(false);
    }
  };

  const user = {
    name: "Arif Hossain",
    level: 12,
    xp: 7400,
    friends: 28,
    challenges: 19,
  };

  const metrics = [
    {
      label: "Steps",
      value: 8420,
      goal: 10000,
      unit: "",
      progress: 84.2,
      icon: "steps-icon",
    },
    {
      label: "Active Minutes",
      value: 42,
      goal: 60,
      unit: "min",
      progress: 70,
      icon: "active-icon",
    },
    {
      label: "Calories Burned",
      value: 420,
      goal: 600,
      unit: "kcal",
      progress: 70,
      icon: "calories-icon",
    },
    {
      label: "Distance",
      value: 2.2,
      goal: 3,
      unit: "km",
      progress: 73.3,
      icon: "distance-icon",
    },
    {
      label: "Water",
      value: 2200,
      goal: 3000,
      unit: "ml",
      progress: 73.3,
      icon: "water-icon",
    },
    {
      label: "BPM",
      value: 72,
      unit: "bpm",
      quality: "Excellent range",
      icon: "heart-icon",
    },
    {
      label: "Sleep Score",
      value: 86,
      quality: "Good quality",
      icon: "sleep-icon",
    },
    {
      label: "Stress",
      value: 28,
      unit: "%",
      quality: "Low. Keep it up!",
      icon: "stress-icon",
    },
  ];

  const todayChallenge = {
    title: "10,000 Steps Challenge",
    progress: 65,
    daysLeft: 2,
  };

  const leaderboard = [
    { rank: 1, name: "Sarah", score: 12500 },
    { rank: 2, name: "Mike", score: 11830 },
    { rank: 3, name: "You", score: 9740, isYou: true },
    { rank: 4, name: "Lisa", score: 8320 },
    { rank: 5, name: "John", score: 7900 },
  ];

  const groups = ["Morning Runners Group", "Meditation Circle"];

  const recentActivities = [
    {
      type: "Running",
      desc: "Completed Morning Run",
      time: "2 hours ago",
      points: 120,
    },
    {
      type: "Meditation",
      desc: "10-minute Mindfulness Session",
      time: "4 hours ago",
      points: 60,
    },
    {
      type: "Water",
      desc: "Drank 8 glasses of water today",
      time: "",
      points: 80,
    },
    {
      type: "Trophy",
      desc: "Achieved 7-day streak",
      time: "Yesterday",
      points: 200,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <main className="dashboard-content">
          {/* Left - Profile */}
          <aside className="profile-sidebar">
            <div className="profile-card">
              <img
                src={avatar}
                alt={user.name}
                className="profile-avatar-large"
              />
              <h1 className="profile-name">{userName || "user.name"}</h1>
              <p className="profile-level">
                Level {user.level} + {user.xp.toLocaleString()} XP
              </p>
              <p className="profile-connections">
                {user.friends} Friends • {user.challenges} Challenges
              </p>
              <div className="btn-feed-profile-card">
                <Link
                  to="/health-profile-form"
                  className="btn btn-primary connect-btn"
                >
                  Fill Your Info & Connect Device
                </Link>
                <Link className="btn btn-primary" to="/feed">
                  Go to Community Feed
                </Link>
              </div>
            </div>
            <div></div>
          </aside>

          {/* Center - Overview + Sleep + Activity */}
          <section className="main-overview">
            <h2 className="section-heading">Overview</h2>

            {/* Insert this RIGHT AFTER: <section className="main-overview"> */}
            <div className="health-insights-wrapper">
              {showInsights ? (
                <HealthInsightsCard
                  healthInsights={healthInsights}
                  loadingInsights={loadingInsights}
                  fetchHealthInsights={fetchHealthInsights}
                  setShowInsights={setShowInsights}
                ></HealthInsightsCard>
              ) : (
                /* Compact button-only version when collapsed */
                <div className="health-insights-teaser">
                  <div className="teaser-content">
                    <h3 className="teaser-title">Your Health Insights</h3>
                    <p className="teaser-text">
                      See personalized summary: what's good, what needs
                      attention, and today's best actions.
                    </p>
                  </div>
                  <button
                    className="btn btn-primary see-details-btn"
                    onClick={fetchHealthInsights}
                    disabled={loadingInsights}
                  >
                    {loadingInsights
                      ? "Loading Insights..."
                      : "See My Health Details"}
                  </button>
                </div>
              )}
            </div>

            <div className="metrics-list">
              {metrics.map((m, i) => {
                let status = { text: "Good", color: "status-good", icon: "✓" };

                if (m.goal) {
                  const pct = (m.value / m.goal) * 100;
                  if (pct >= 90) {
                    status = {
                      text: "Excellent",
                      color: "status-excellent",
                      icon: "★★",
                    };
                  } else if (pct >= 70) {
                    status = { text: "Good", color: "status-good", icon: "✓" };
                  } else if (pct >= 50) {
                    status = { text: "Fair", color: "status-fair", icon: "⚠" };
                  } else {
                    status = {
                      text: "Needs Action",
                      color: "status-bad",
                      icon: "!",
                    };
                  }
                } else {
                  // Non-goal metrics (BPM, Sleep, Stress)
                  if (m.label === "BPM") {
                    if (m.value >= 60 && m.value <= 80)
                      status = { text: "Good", color: "status-good" };
                    else if (m.value < 60)
                      status = {
                        text: "Excellent (Fit)",
                        color: "status-excellent",
                      };
                    else if (m.value <= 90)
                      status = { text: "Fair", color: "status-fair" };
                    else
                      status = {
                        text: "High – Needs Checkup",
                        color: "status-bad urgent",
                        icon: "⚠ Doctor?",
                      };
                  } else if (m.label === "Sleep Score") {
                    if (m.value >= 90)
                      status = { text: "Excellent", color: "status-excellent" };
                    else if (m.value >= 80)
                      status = { text: "Good", color: "status-good" };
                    else if (m.value >= 60)
                      status = { text: "Fair", color: "status-fair" };
                    else
                      status = {
                        text: "Poor – Needs Action",
                        color: "status-bad",
                      };
                  } else if (m.label === "Stress") {
                    if (m.value < 30)
                      status = {
                        text: "Low – Excellent",
                        color: "status-excellent",
                      };
                    else if (m.value < 50)
                      status = { text: "Good", color: "status-good" };
                    else if (m.value < 70)
                      status = { text: "Moderate", color: "status-fair" };
                    else
                      status = {
                        text: "High – Needs Action",
                        color: "status-bad",
                      };
                  }
                }

                return (
                  <div key={i} className="metric-row">
                    <div className="metric-icon-placeholder"></div>{" "}
                    {/* Replace with real icon */}
                    <div className="metric-main">
                      <div className="metric-header">
                        <span className="metric-label">{m.label}</span>
                        <span className={`status-badge ${status.color}`}>
                          {status.icon && (
                            <span className="status-icon">{status.icon}</span>
                          )}
                          {status.text}
                        </span>
                      </div>

                      {m.goal ? (
                        <>
                          <div className="progress-container">
                            <div
                              className={`progress-fill ${
                                status.color.includes("excellent")
                                  ? "excellent"
                                  : status.color.includes("good")
                                    ? "good"
                                    : status.color.includes("fair")
                                      ? "fair"
                                      : "bad"
                              }`}
                              style={{ width: `${(m.value / m.goal) * 100}%` }}
                            ></div>
                          </div>
                          <span className="metric-value">
                            {m.value.toLocaleString()} /{" "}
                            {m.goal.toLocaleString()} {m.unit}
                          </span>
                        </>
                      ) : (
                        <span className="metric-value big">
                          {m.value} {m.unit}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Sleep Stages */}
            <div className="sleep-section">
              <h3 className="subsection-title">Sleep Stages (Last Nights)</h3>
              <div className="sleep-bar-container">
                <div className="sleep-bar">
                  <div className="segment deep" style={{ flex: 2 }}>
                    Deep
                  </div>
                  <div className="segment light" style={{ flex: 3 }}>
                    Light
                  </div>
                  <div className="segment rem" style={{ flex: 2 }}>
                    REM
                  </div>
                  <div className="segment awake" style={{ flex: 1 }}>
                    Awake
                  </div>
                </div>
              </div>
              {/* Optional: real chart image or SVG */}
              {/* <img src="sleep-cycle-example.jpg" alt="Sleep Cycle" className="sleep-chart-img" /> */}
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
              <h3 className="subsection-title">Recent Activity</h3>
              <div className="activity-list">
                {recentActivities.map((act, i) => (
                  <div key={i} className="activity-item">
                    <div className="activity-icon-placeholder"></div>
                    <div className="activity-details">
                      <strong>{act.type}</strong>
                      <p>{act.desc}</p>
                      <span className="activity-time">{act.time}</span>
                    </div>
                    <span className="points-gained">+{act.points}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card sync-card" id="connect">
              <h3>Smartwatch Sync</h3>
              <div className="sync-buttons">
                <button className="btn btn-outline">Manual Sync</button>
                <button className="btn btn-primary" href="#connect">
                  Connect Device
                </button>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="right-sidebar">
            <div className="sidebar-card challenge-card">
              <h3>Today's Challenge</h3>
              <p className="challenge-title">10,000 Steps Challenge</p>
              <div className="progress-container">
                <div
                  className="progress-fill green"
                  style={{ width: `${todayChallenge.progress}%` }}
                ></div>
              </div>
              <p className="challenge-meta">
                {todayChallenge.progress}% • {todayChallenge.daysLeft} days left
              </p>
              <button className="btn btn-primary">Join Now</button>
            </div>

            <div className="sidebar-card badges-progress-card">
              <h3 className="card-title">Your Badges & Progress</h3>

              {/* Current Status */}
              <div className="current-status">
                <div className="points-display">
                  <span className="points-value">1,250</span>
                  <span className="points-label">Points</span>
                </div>
                <div className="streak-info">
                  <div className="streak-current">
                    Current Streak: <strong>7 days</strong>
                  </div>
                  <div className="streak-best">
                    Best Streak: <strong>14 days</strong>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-value">19</span>
                  <span className="stat-label">Challenges Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">Silver</span>
                  <span className="stat-label">Current Tier</span>
                </div>
              </div>

              {/* Progress to next badge */}
              <div className="next-badge-section">
                <h4>Next Goal: Gold Tier</h4>
                <div className="progress-container">
                  <div
                    className="progress-fill gold-progress"
                    style={{ width: "68%" }}
                  ></div>
                </div>
                <p className="progress-text">
                  <strong>68%</strong> there • Need{" "}
                  <strong>750 more points</strong> to unlock Gold
                </p>
              </div>

              {/* Achievable Badges (teaser) */}
              <div className="achievable-badges">
                <h4>Achievable Soon</h4>
                <div className="badges-grid">
                  <div className="badge-teaser locked">
                    <div className="badge-icon">🏆</div>
                    <span>7-Day Streak Master</span>
                    <small>3 days left</small>
                  </div>
                  <div className="badge-teaser almost">
                    <div className="badge-icon">🔥</div>
                    <span>30-Day Consistency</span>
                    <small>62% complete</small>
                  </div>
                  <div className="badge-teaser locked">
                    <div className="badge-icon">🌟</div>
                    <span>100 Challenges</span>
                    <small>81 to go</small>
                  </div>
                </div>
              </div>

              <button className="btn btn-outline view-all-btn">
                View All Badges →
              </button>
            </div>

            <div className="sidebar-card add-contacts-card">
              <h3>Add Three contacts for send health report</h3>
              <input
                className="contactInput"
                type="text"
                placeholder="Enter contact details fo your **"
                required
              />
              <input
                className="contactInput"
                type="text"
                placeholder="contact details of relative"
              />
              <input
                className="contactInput"
                type="text"
                placeholder="contact details of Your Doctor **"
                required
              />
              <button className="btn btn-primary">Add Contacts</button>
            </div>

            <div className="sidebar-card medicine-partner-card">
              <div className="card-icon">💊</div>{" "}
              {/* or use a real SVG / lucide-react pill icon */}
              <h3>Medicine Taking Partner</h3>
              <p className="card-description">
                Never miss a dose. Set reminders for morning, noon, night —
                before or after meals.
              </p>
              <Link
                className="btn btn-primary full-width medicine-take-btn"
                to="/medicine-taking"
              >
                Set Up Medicine Plan
              </Link>
            </div>

            <div className="sidebar-card leaderboard-card">
              <div className="leaderboard-header">
                <h3 className="card-title">Leaderboard</h3>
                <span className="card-subtitle">Top performers this week</span>
              </div>

              <ul className="leaderboard-list">
                <li className="rank-item rank-1">
                  <div className="rank-position">#1</div>
                  <div className="rank-user">
                    <span className="rank-name">Sarah</span>
                    <span className="rank-badge gold">Gold</span>
                  </div>
                  <span className="rank-score">12,500</span>
                </li>

                <li className="rank-item rank-2">
                  <div className="rank-position">#2</div>
                  <div className="rank-user">
                    <span className="rank-name">Mike</span>
                    <span className="rank-badge silver">Silver</span>
                  </div>
                  <span className="rank-score">11,830</span>
                </li>

                <li className="rank-item you-highlight">
                  <div className="rank-position">#3</div>
                  <div className="rank-user">
                    <span className="rank-name">You</span>
                    <span className="rank-badge current">Current</span>
                  </div>
                  <span className="rank-score highlight-score">9,740</span>
                </li>

                <li className="rank-item">
                  <div className="rank-position">#4</div>
                  <div className="rank-user">
                    <span className="rank-name">Lisa</span>
                  </div>
                  <span className="rank-score">8,320</span>
                </li>

                <li className="rank-item">
                  <div className="rank-position">#5</div>
                  <div className="rank-user">
                    <span className="rank-name">John</span>
                  </div>
                  <span className="rank-score">7,900</span>
                </li>
              </ul>

              <button className="btn btn-outline view-full-btn">
                View Full Leaderboard →
              </button>
            </div>

            <div className="sidebar-card groups-card">
              <h3>Community Groups</h3>
              <ul className="groups-list">
                {groups.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
                <li className="view-all">View All Groups →</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
