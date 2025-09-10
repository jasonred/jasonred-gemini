
import type React from 'react';

export type View = 'feed' | 'send' | 'milestones' | 'webhooks';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  points: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface ECard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Recognition {
  id: string;
  fromUser: User;
  toUser: User;
  message: string;
  points?: number;
  badge?: Badge;
  eCard?: ECard;
  timestamp: string;
}

export interface Milestone {
  id: string;
  user: User;
  type: 'Anniversary' | 'Birthday';
  date: string;
  years?: number;
}

export interface Webhook {
  id: string;
  url: string;
}

export interface AppState {
  recognitions: Recognition[];
  milestones: Milestone[];
  webhooks: Webhook[];
  currentUser: User;
}

export type AppAction =
  | { type: 'ADD_RECOGNITION'; payload: Recognition }
  | { type: 'ADD_WEBHOOK'; payload: Webhook }
  | { type: 'DELETE_WEBHOOK'; payload: string };

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}
