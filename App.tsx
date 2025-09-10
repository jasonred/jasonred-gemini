
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { RecognitionFeed } from './components/RecognitionFeed';
import { SendRecognition } from './components/SendRecognition';
import { Milestones } from './components/Milestones';
import { WebhookManager } from './components/WebhookManager';
import { AppProvider } from './context/AppContext';
import type { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('feed');

  const renderView = () => {
    switch (currentView) {
      case 'feed':
        return <RecognitionFeed />;
      case 'send':
        return <SendRecognition />;
      case 'milestones':
        return <Milestones />;
      case 'webhooks':
        return <WebhookManager />;
      default:
        return <RecognitionFeed />;
    }
  };

  return (
    <AppProvider>
      <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
        <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {renderView()}
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
