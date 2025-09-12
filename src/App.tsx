import React, { useState, useEffect } from 'react';
import type { User, Room, AppView } from './types';
import { storage } from './utils/storage';
import { WelcomeScreen } from './components/WelcomeScreen';
import { RoomSelectionScreen } from './components/RoomSelectionScreen';
import { ChatInterface } from './components/ChatInterface';
import { FeedbackScreen } from './components/FeedbackScreen';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [view, setView] = useState<AppView>('welcome');

  useEffect(() => {
    const savedUser = storage.getUser();
    const savedRoom = storage.getRoom();
    
    if (savedUser) {
      setCurrentUser(savedUser);
      
      if (savedRoom) {
        setSelectedRoom(savedRoom);
        setView('chat');
      } else {
        setView('room-selection');
      }
    }
  }, []);

  const handleJoinChat = (user: User) => {
    storage.saveUser(user);
    setCurrentUser(user);
    setView('room-selection');
  };

  const handleRoomSelect = (room: Room) => {
    storage.saveRoom(room);
    setSelectedRoom(room);
    setView('chat');
  };

  const handleBackToRoomSelection = () => {
    storage.clearRoom();
    setSelectedRoom(null);
    setView('room-selection');
  };

  const handleBackToWelcome = () => {
    storage.clearAll();
    setCurrentUser(null);
    setSelectedRoom(null);
    setView('welcome');
  };

  const handleLeaveChat = () => {
    setView('feedback');
  };

  const handleFeedbackComplete = () => {
    storage.clearAll();
    setCurrentUser(null);
    setSelectedRoom(null);
    setView('welcome');
  };

  const credentials = {
    projectId: import.meta.env.VITE_VAULTRICE_PROJECTID,
    apiKey: import.meta.env.VITE_VAULTRICE_APIKEY,
    apiSecret: import.meta.env.VITE_VAULTRICE_APISECRET
  };

  const renderCurrentView = () => {
    switch (view) {
      case 'room-selection':
        return (
          <RoomSelectionScreen
            user={currentUser!}
            onRoomSelect={handleRoomSelect}
            onBack={handleBackToWelcome}
          />
        );
      case 'chat':
        return (
          <ChatInterface
            user={currentUser!}
            room={selectedRoom!}
            credentials={credentials}
            onChangeRoom={handleBackToRoomSelection}
            onLeave={handleLeaveChat}
          />
        );
      case 'feedback':
        return (
          <FeedbackScreen
            onComplete={handleFeedbackComplete}
            credentials={credentials}
            userId={currentUser!.id}
          />
        );
      case 'welcome':
      default:
        return <WelcomeScreen onJoin={handleJoinChat} />;
    }
  };

  return (
    <div className="app-container">
      {renderCurrentView()}
    </div>
  );
}

export default App;