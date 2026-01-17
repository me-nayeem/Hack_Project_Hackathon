// src/pages/ProfilePage.jsx
import React from 'react';
import './ProfilePage.css';
import Navbar from '../dashboard/Navbar/Navbar';
import { IoMdAttach } from "react-icons/io";

const user = {
  name: "Arif Hossain",
  avatar: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png",
  cover: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png",
  bio: "Fitness enthusiast • 12-week streak • Running & Yoga lover",
  level: 12,
  totalPoints: 8740,
  streak: 12,
  joinedDate: "January 2023"
};

const posts = [
  { id: 1, type: "workout", text: "Just crushed a 10K run in the morning!", emoji: "😒", time: "2h ago", likes: 42 },
  { id: 2, type: "sleep", text: "Best sleep score in months — 92/100!", emoji: "😒", time: "5h ago", likes: 28 },
  { id: 3, type: "water", text: "Hit my 3L water goal for 15 days straight", emoji: "⏰", time: "Yesterday", likes: 51 },
  { id: 4, type: "achievement", text: "Unlocked 'Marathon Ready' badge!", emoji: "🦾", time: "3 days ago", likes: 89 },
];

const ProfilePage = () => {
  return (
    <>
    <Navbar/>
    <div className="profile-page">
      {/* Cover Photo + Avatar */}
      <div className="profile-header">
        <div className="cover-photo">
          <img src={user.cover} alt="Cover" />
        </div>
        <div className="profile-info">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
          <div className="profile-details">
            <h1>{user.name}</h1>
            <p className="bio">{user.bio}</p>
            <div className="profile-stats">
              <div className="stat">
                <strong>{user.streak}</strong> day streak
              </div>
              <div className="stat">
                <strong>{user.totalPoints.toLocaleString()}</strong> points
              </div>
              <div className="stat">
                Level <strong>{user.level}</strong>
              </div>
            </div>
          </div>
          <button className="btn-edit-profile">Edit Profile</button>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="profile-content">
        {/* Left Sidebar */}
        <aside className="profile-sidebar">
          <div className="widget">
            <h3>About</h3>
            <p>Passionate about building sustainable healthy habits. Morning runner, evening yogi.</p>
            <ul className="about-list">
              <li>Joined {user.joinedDate}</li>
              <li>28 friends tracking together</li>
              <li>19 challenges completed</li>
            </ul>
          </div>

          <div className="widget achievements">
            <h3>Recent Badges</h3>
            <div className="badges">
              <span className="badge gold">Trophy Marathon Ready</span>
              <span className="badge silver">Shield 30-Day Streak</span>
              <span className="badge bronze">Droplet Hydration Hero</span>
            </div>
          </div>
        </aside>

        {/* Right Feed - Health Posts */}
        <main className="profile-feed">
          <div className="create-post">
            <img src={user.avatar} alt="" className="small-avatar" />
            <input type="text" placeholder="Share your health win today..." />
            <IoMdAttach />
            <button className="btn-post">Post</button>
          </div>

          {posts.map(post => (
            <div key={post.id} className="health-post">
              <div className="post-header">
                <img src={user.avatar} alt="" className="small-avatar" />
                <div>
                  <strong>{user.name}</strong>
                  <span className="post-time">{post.time}</span>
                </div>
              </div>
              <div className="post-content">
                <div className='post-content-text'>
                <span className="post-emoji">{post.emoji}</span>
                <p>{post.text}</p>
                </div>
                <img src={user.avatar} alt="" />
              </div>
              <div className="post-actions">
                <button className="like-btn">
                  Heart {post.likes} Likes
                </button>
                <button>Comment</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;