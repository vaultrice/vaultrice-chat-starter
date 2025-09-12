import React from 'react';
import { Voting } from '@vaultrice/react-components';
import type { Credentials } from '@vaultrice/sdk';

interface FeedbackScreenProps {
  onComplete: () => void;
  credentials: Credentials;
  userId: string;
}

export function FeedbackScreen({ onComplete, credentials, userId }: FeedbackScreenProps) {
  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>🎉 Thanks for trying our chat!</h2>
        <p>Your feedback helps us improve the experience for everyone.</p>
      </div>
      
      <Voting
        id="chat-experience-poll"
        title="How was your chat experience?"
        description="Rate your overall experience with our real-time chat features"
        choices={[
          { id: 'excellent', label: '🌟 Excellent - Loved it!' },
          { id: 'good', label: '👍 Good - Pretty smooth' },
          { id: 'okay', label: '👌 Okay - Could be better' },
          { id: 'poor', label: '👎 Needs improvement' },
        ]}
        credentials={credentials}
        userId={userId}
      />
      
      <div className="feedback-actions">
        <button onClick={onComplete} className="continue-button">
          Continue
        </button>
      </div>
    </div>
  );
}