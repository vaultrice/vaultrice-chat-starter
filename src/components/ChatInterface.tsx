import React from 'react';
import { ChatRoom } from '@vaultrice/react-components';
import type { Credentials } from '@vaultrice/sdk';
import type { User, Room } from '../types';

interface ChatInterfaceProps {
  user: User;
  room: Room;
  credentials: Credentials;
  onChangeRoom: () => void;
  onLeave: () => void;
}

export function ChatInterface({ user, room, credentials, onChangeRoom, onLeave }: ChatInterfaceProps) {
  return (
    <div className="chatroom-wrapper">
      <div className="chat-header">
        <div className="user-info">
          <img src={user.avatarUrl} alt="Avatar" className="user-avatar" />
          <div>
            <h3>{room.icon} {room.name}</h3>
            <p>Chatting as: <strong>{user.name}</strong></p>
          </div>
        </div>
        <div className="chat-actions">
          <button onClick={onChangeRoom} className="change-room-button">
            Change Room
          </button>
          <button onClick={onLeave} className="leave-button">
            Leave & Give Feedback
          </button>
        </div>
      </div>
      
      <div style={{ height: '100vh', maxHeight: '500px' }}>
        <ChatRoom
          id={`vite-react-starter-${room.id}`}
          user={user}
          title={`${room.icon} ${room.name}`}
          subtitle={room.description}
          credentials={credentials}
          persistMessages={true}
          messageHistoryLimit={100}
        />
      </div>
      
      <div className="chat-tips">
        <p>💡 <strong>Pro tip:</strong> Open this app in multiple browser tabs to see real-time features in action!</p>
      </div>
    </div>
  );
}