export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export type AppView = 'welcome' | 'room-selection' | 'chat' | 'feedback';