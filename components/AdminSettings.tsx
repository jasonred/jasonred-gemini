
import React, { useState } from 'react';
import { WebhookManager } from './WebhookManager';
import { UserManagement } from './UserManagement';
import { UserImport } from './UserImport';

type AdminTab = 'users' | 'import' | 'webhooks';

const TabButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow'
        : 'text-gray-600 hover:bg-gray-200'
    }`}
  >
    {label}
  </button>
);


export const AdminSettings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<AdminTab>('users');

    const renderContent = () => {
        switch (activeTab) {
            case 'users':
                return <UserManagement />;
            case 'import':
                return <UserImport />;
            case 'webhooks':
                return <WebhookManager />;
            default:
                return null;
        }
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Settings</h1>
            <div className="flex space-x-2 border-b border-gray-200 mb-6 pb-2" role="tablist" aria-label="Admin Settings Tabs">
                <TabButton label="User Management" isActive={activeTab === 'users'} onClick={() => setActiveTab('users')} />
                <TabButton label="User Import" isActive={activeTab === 'import'} onClick={() => setActiveTab('import')} />
                <TabButton label="Webhook Management" isActive={activeTab === 'webhooks'} onClick={() => setActiveTab('webhooks')} />
            </div>

            <div role="tabpanel">
                {renderContent()}
            </div>
        </div>
    );
};
