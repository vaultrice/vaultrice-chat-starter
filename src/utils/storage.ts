import type { User, Room } from '../types';

const STORAGE_KEYS = {
  USER: 'vaultrice-chat-user',
  ROOM: 'vaultrice-selected-room'
} as const;

export const storage = {
  saveUser: (user: User) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  getUser: (): User | null => {
    const saved = localStorage.getItem(STORAGE_KEYS.USER);
    return saved ? JSON.parse(saved) : null;
  },

  saveRoom: (room: Room) => {
    localStorage.setItem(STORAGE_KEYS.ROOM, JSON.stringify(room));
  },

  getRoom: (): Room | null => {
    const saved = localStorage.getItem(STORAGE_KEYS.ROOM);
    return saved ? JSON.parse(saved) : null;
  },

  clearUser: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
  },

  clearRoom: () => {
    localStorage.removeItem(STORAGE_KEYS.ROOM);
  },

  clearAll: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.ROOM);
  }
};