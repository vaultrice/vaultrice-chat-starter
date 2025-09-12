import React from 'react';
import type { User, Room } from '../types';
import { rooms, getCategories } from '../data/rooms';

interface RoomSelectionScreenProps {
  user: User;
  onRoomSelect: (room: Room) => void;
  onBack: () => void;
}

export function RoomSelectionScreen({ user, onRoomSelect, onBack }: RoomSelectionScreenProps) {
  const categories = getCategories();

  return (
    <div className="room-selection-container">
      <div className="room-selection-header">
        <button onClick={onBack} className="back-button">
          ← Back
        </button>
        <div className="user-welcome">
          <img src={user.avatarUrl} alt="Avatar" className="user-avatar-small" />
          <div>
            <h2>Choose a Room</h2>
            <p>Welcome, <strong>{user.name}</strong>! Select a chat room to join.</p>
          </div>
        </div>
      </div>

      <div className="rooms-grid">
        {categories.map(category => (
          <div key={category} className="room-category">
            <h3 className="category-title">{category}</h3>
            <div className="category-rooms">
              {rooms.filter(room => room.category === category).map(room => (
                <div
                  key={room.id}
                  className="room-card"
                  onClick={() => onRoomSelect(room)}
                >
                  <div className="room-icon">{room.icon}</div>
                  <div className="room-info">
                    <h4 className="room-name">{room.name}</h4>
                    <p className="room-description">{room.description}</p>
                  </div>
                  <div className="room-enter">
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="demo-tip">
        <p>💡 Each room has its own chat history and member list. Try different rooms to see how they work independently!</p>
      </div>
    </div>
  );
}