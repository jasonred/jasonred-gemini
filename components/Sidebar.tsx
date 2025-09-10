
import type React from 'react';
import type { View } from '../types';
import { FeedIcon, SendIcon, MilestoneIcon, WebhookIcon } from '../constants';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const NavItem: React.FC<{
  icon: React.FC<{ className?: string }>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-white bg-blue-600'
        : 'text-gray-600 hover:bg-gray-200'
    }`}
  >
    <Icon className="w-6 h-6 mr-3" />
    <span>{label}</span>
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  return (
    <aside className="flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Kudos</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <NavItem
          icon={FeedIcon}
          label="Feed"
          isActive={currentView === 'feed'}
          onClick={() => setCurrentView('feed')}
        />
        <NavItem
          icon={SendIcon}
          label="Send Recognition"
          isActive={currentView === 'send'}
          onClick={() => setCurrentView('send')}
        />
        <NavItem
          icon={MilestoneIcon}
          label="Milestones"
          isActive={currentView === 'milestones'}
          onClick={() => setCurrentView('milestones')}
        />
        <NavItem
          icon={WebhookIcon}
          label="Webhooks"
          isActive={currentView === 'webhooks'}
          onClick={() => setCurrentView('webhooks')}
        />
      </nav>
    </aside>
  );
};
