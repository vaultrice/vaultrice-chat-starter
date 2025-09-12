import React, { useState } from 'react';
import type { User } from '../types';

interface WelcomeScreenProps {
  onJoin: (user: User) => void;
}

export function WelcomeScreen({ onJoin }: WelcomeScreenProps) {
  const [name, setName] = useState('');

  const handleJoin = () => {
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    const newUser: User = {
      id: "user-" + Math.random().toString(36).substring(2, 15),
      name: name.trim(),
      avatarUrl: `https://i.pravatar.cc/150?u=${name.trim()}`
    };
    onJoin(newUser);
  };

  return (
    <div className="welcome-container">
      <h2>🚀 Real-Time Chat Experience</h2>
      <p>Join our interactive chat room and share your feedback!</p>
      
      <div className="features-grid">
        <div className="feature-item">
          <span className="feature-icon">💬</span>
          <span>Real-time messaging</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">👥</span>
          <span>Live presence</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">✍️</span>
          <span>Typing indicators</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🗳️</span>
          <span>Interactive polls</span>
        </div>
      </div>

      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name to get started"
          onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
        />
        <button onClick={handleJoin}>Join Chat</button>
      </div>
      
      <p className="demo-note">
        💡 Try opening this in multiple tabs to see real-time features in action!
      </p>
    </div>
  );
}