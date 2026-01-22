// ProfileCard.jsx
import React from "react";
import "./ProfileCard.css";
import { useState } from "react";

import ConnectDeviceModal from "../device/ConnectDeviceModal";

const ProfileCard = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
    <aside className="profile-card" aria-labelledby="profile-heading">
      <h2 id="profile-heading" className="sr-only">
        User Profile
      </h2>
      <img src='https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png' alt="" className="profile-avatar" onClick={ () => {
        window.location.href = '/profile';
      }}/>
      <h3 className="profile-name">{user.name}</h3>
      <p className="profile-level">
        Level {user.level} • {user.points.toLocaleString()} XP
      </p>

      <div className="profile-stats">
        <div>
          <strong>{user.friends}</strong> Friends
        </div>
        <div>
          <strong>{user.completedChallenges}</strong> Challenges
        </div>
      </div>

      <div className="profile-actions">
        <button className="btn-outline">Edit Profile</button>
        <button
              className="btn-primary"
              onClick={() => {setIsModalOpen(true)
              }}
            >
              Connect Device
            </button>
      </div>
      {isModalOpen && (
        <ConnectDeviceModal onClose={() => setIsModalOpen(false)} />
      )}
    </aside>
    </>
  );
};

export default ProfileCard;
