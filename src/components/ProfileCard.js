// src/components/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="card-container">
      <div className="card-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-pattern-top.svg)` }}></div>

      <div className="card">
        <img src="/assets/image-profile.jpg" alt="Profile" className="profile-image" />
        <h1 className="profile-name">
          Victor Crest <span className="profile-age">26</span>
        </h1>
        <p className="profile-location">London</p>

        <div className="stats">
          <div className="stat">
            <h2>80K</h2>
            <p>Followers</p>
          </div>
          <div className="stat">
            <h2>803K</h2>
            <p>Likes</p>
          </div>
          <div className="stat">
            <h2>1.4K</h2>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
