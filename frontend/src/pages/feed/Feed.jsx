// FeedPage.jsx
import React from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/dashboard/Navbar/Navbar';

// Placeholder images (replace with your assets or Unsplash URLs)
const userAvatar = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80";
const friend1 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80";
const friend2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80";
const postImage1 = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600";
const postImage2 = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600";

const samplePosts = [
  {
    id: 1,
    user: "Sarah Johnson",
    avatar: friend1,
    time: "2 hours ago",
    content: "Just hit my 10,000 steps for the day! Feeling energized 💪 Who's joining me tomorrow?",
    image: postImage1,
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    user: "Mike Chen",
    avatar: friend2,
    time: "5 hours ago",
    content: "Completed the 7-Day Sleep Boost challenge today. Sleep score went from 68 → 89! 😴 Highly recommend.",
    likes: 31,
    comments: 5,
  },
  {
    id: 3,
    user: "Lisa Park",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80",
    time: "Yesterday",
    content: "Drank 3 liters of water today — no soda challenge is going strong! 🌊 Who's with me?",
    likes: 27,
    comments: 12,
  },
];



export default function Feed() {
  return (
    <div className="feed-page">
      {/* Back to Dashboard Button */}
      <Navbar />
      <main className="feed-container">
        {/* Create Post Box (like Facebook) */}
        <div className="create-post-card">
          <img src={userAvatar} alt="You" className="create-avatar" />
          <input
            type="text"
            placeholder="Share your progress, challenge wins, or ask for tips..."
            className="create-input"
          />
          <div className="create-actions">
            <button className="action-btn photo-btn">📸 Photo</button>
            <button className="action-btn challenge-btn">🏆 Challenge</button>
            <button className="post-btn">Post</button>
          </div>
        </div>

        {/* Posts Feed */}
        {samplePosts.map(post => (
          <article key={post.id} className="feed-post">
            {/* Post Header */}
            <div className="post-header">
              <img src={post.avatar} alt={post.user} className="post-avatar" />
              <div className="post-meta">
                <h3 className="post-user">{post.user}</h3>
                <span className="post-time">{post.time}</span>
              </div>
            </div>

            {/* Post Content */}
            <div className="post-content">
              <p>{post.content}</p>
              {post.image && (
                <img src={post.image} alt="Post" className="post-image" />
              )}
            </div>

            {/* Reactions & Stats */}
            <div className="post-stats">
              <span className="likes">{post.likes} likes</span>
              <span className="comments">{post.comments} comments</span>
            </div>

            {/* Action Buttons */}
            <div className="post-actions">
              <button className="action-btn like-btn">👍 Like</button>
              <button className="action-btn comment-btn">💬 Comment</button>
              <button className="action-btn share-btn">↗ Share</button>
            </div>

            {/* Simple Comment Input */}
            <div className="comment-input-wrapper">
              <img src={userAvatar} alt="You" className="comment-avatar" />
              <input
                type="text"
                placeholder="Write a comment..."
                className="comment-input"
              />
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}