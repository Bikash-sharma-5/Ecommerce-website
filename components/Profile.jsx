import React, { useState } from "react";
import "./style.css"
import { assets } from '../assets/assets'

// Profile Component
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate software developer.",
    profilePic: "https://in.pinterest.com/pin/579697783313810495/",
  });

  const [editing, setEditing] = useState(false);
  const [newProfile, setNewProfile] = useState(profile);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle form submission to update profile
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(newProfile);
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-content">
        <img
          src={assets.nine}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h3>{profile.name}</h3>
          <p>Email: {profile.email}</p>
          <p>Bio: {profile.bio}</p>
        </div>

        {editing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={newProfile.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={newProfile.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Bio: </label>
              <textarea
                name="bio"
                value={newProfile.bio}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Save Changes</button>
              <button
                type="button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
