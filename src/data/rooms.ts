import type { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'Open chat for everyone to discuss anything',
    icon: '💬',
    category: 'Community'
  },
  {
    id: 'tech-talk',
    name: 'Tech Talk',
    description: 'Discuss the latest in technology and development',
    icon: '💻',
    category: 'Technology'
  },
  {
    id: 'design-studio',
    name: 'Design Studio',
    description: 'Share and discuss design ideas, UI/UX, and creativity',
    icon: '🎨',
    category: 'Creative'
  },
  {
    id: 'random',
    name: 'Random Chat',
    description: 'Casual conversations and random thoughts',
    icon: '🎲',
    category: 'Social'
  },
  {
    id: 'feedback',
    name: 'Feedback & Ideas',
    description: 'Share feedback and suggestions for improvement',
    icon: '💡',
    category: 'Product'
  },
  {
    id: 'gaming',
    name: 'Gaming Lounge',
    description: 'Discuss games, share clips, and find gaming buddies',
    icon: '🎮',
    category: 'Entertainment'
  }
];

export const getCategories = () => Array.from(new Set(rooms.map(room => room.category)));