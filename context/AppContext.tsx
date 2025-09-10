
import React, { createContext, useReducer, useContext } from 'react';
import type { AppState, AppAction, AppContextType } from '../types';
import { INITIAL_RECOGNITIONS, INITIAL_MILESTONES, CURRENT_USER, USERS } from '../constants';

const initialState: AppState = {
  recognitions: INITIAL_RECOGNITIONS,
  milestones: INITIAL_MILESTONES,
  webhooks: [{ id: 'wh_initial_1', url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX' }],
  currentUser: CURRENT_USER,
  users: USERS,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_RECOGNITION':
      // Simulate sending to webhooks
      state.webhooks.forEach(webhook => {
        console.log(`SIMULATING WEBHOOK POST to ${webhook.url}`);
        console.log('Payload:', action.payload);
        // In a real app:
        // fetch(webhook.url, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(action.payload),
        // }).catch(error => console.error(`Webhook ${webhook.url} failed:`, error));
      });
      return {
        ...state,
        recognitions: [action.payload, ...state.recognitions],
      };
    case 'ADD_WEBHOOK':
      return {
        ...state,
        webhooks: [...state.webhooks, action.payload],
      };
    case 'DELETE_WEBHOOK':
      return {
        ...state,
        webhooks: state.webhooks.filter(wh => wh.id !== action.payload),
      };
    case 'DELETE_USER':
      if (action.payload === state.currentUser.id) {
        console.warn("Attempted to delete the current user. Action denied.");
        return state;
      }
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.payload),
        // Also remove recognitions related to the deleted user for data consistency
        recognitions: state.recognitions.filter(r => r.fromUser.id !== action.payload && r.toUser.id !== action.payload),
        milestones: state.milestones.filter(m => m.user.id !== action.payload),
      };
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
