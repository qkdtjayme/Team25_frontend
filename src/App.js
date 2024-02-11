// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Exercise from './components/Exercise';
import UserProfile from './components/UserProfile';
import Webcam from 'react-webcam';
import './App.css';

const App = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  const handleExerciseClick = () => {
    setShowCamera(true);
  };

  const handleCloseCamera = () => {
    setShowCamera(false);
  };

  const handleProfileClick = () => {
    setShowUserProfile(true);
  };

  const handleCloseProfile = () => {
    setShowUserProfile(false);
  };

  return (
    <div className="App">
      <Navbar onProfileClick={handleProfileClick} />
      <div className="exercise-list">
        {[...Array(9)].map((_, index) => (
          <Exercise
            key={index}
            name={`Exercise ${index + 1}`}
            details="Short details"
            onClick={handleExerciseClick}
          />
        ))}
      </div>
      {showCamera && (
        <div className="camera-popup">
          <button onClick={handleCloseCamera}>Go Back</button>
          <Webcam />
        </div>
      )}
      {showUserProfile && (
        <div className="modal-overlay">
          <div className="modal">
            <UserProfile onClose={handleCloseProfile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
