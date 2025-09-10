
import React, { useState, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { USERS, BADGES, ECARDS } from '../constants';
import type { User, Badge, ECard } from '../types';
import { generateRecognitionMessage } from '../services/geminiService';

export const SendRecognition: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [recipient, setRecipient] = useState<User | null>(null);
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [points, setPoints] = useState(0);
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [selectedECard, setSelectedECard] = useState<ECard | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const availableUsers = USERS.filter(u => u.id !== state.currentUser.id);

  const handleGenerateMessage = useCallback(async () => {
    if (!reason || !recipient) {
      setError('Please select a recipient and provide a reason first.');
      return;
    }
    setError('');
    setIsGenerating(true);
    try {
      const generatedMessage = await generateRecognitionMessage(reason, recipient.name, state.currentUser.name);
      setMessage(generatedMessage);
    } catch (err) {
      setError('Failed to generate message. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  }, [reason, recipient, state.currentUser.name]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !message) {
      setError('A recipient and message are required.');
      return;
    }
    
    dispatch({
      type: 'ADD_RECOGNITION',
      payload: {
        id: `rec_${Date.now()}`,
        fromUser: state.currentUser,
        toUser: recipient,
        message,
        points: points > 0 ? points : undefined,
        badge: selectedBadge || undefined,
        eCard: selectedECard || undefined,
        timestamp: new Date().toISOString(),
      }
    });

    setToast('Recognition sent successfully!');
    setTimeout(() => setToast(''), 3000);

    // Reset form
    setRecipient(null);
    setMessage('');
    setReason('');
    setPoints(0);
    setSelectedBadge(null);
    setSelectedECard(null);
    setError('');
  };

  return (
    <div className="max-w-4xl mx-auto">
       {toast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
          {toast}
        </div>
      )}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Send Recognition</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-8">
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">1. Who do you want to recognize?</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={recipient?.id || ''}
            onChange={(e) => setRecipient(USERS.find(u => u.id === e.target.value) || null)}
          >
            <option value="" disabled>Select a colleague</option>
            {availableUsers.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>

        <div>
            <label htmlFor="reason" className="block text-lg font-medium text-gray-700 mb-2">2. What are you recognizing them for?</label>
            <div className="flex items-center space-x-2">
                <input
                    id="reason"
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="e.g., helping with the project launch, being a great mentor"
                    className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                    type="button"
                    onClick={handleGenerateMessage}
                    disabled={isGenerating || !reason || !recipient}
                    className="flex items-center px-4 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition duration-150"
                >
                    {isGenerating ? 
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        : '✨'}
                    <span className="ml-1">Suggest Message</span>
                </button>
            </div>
             <p className="text-sm text-gray-500 mt-1">Provide a reason and we'll help draft a message with AI!</p>
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">3. Write your message</label>
          <textarea
            id="message"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your recognition message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">4. Add Extras (Optional)</h3>
            
            <div>
                <label className="block font-medium text-gray-700">Award Points</label>
                <div className="flex items-center mt-2">
                    <input type="range" min="0" max="500" step="10" value={points} onChange={(e) => setPoints(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    <span className="ml-4 font-semibold text-blue-600 w-16 text-center">{points} pts</span>
                </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">Award a Badge</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {BADGES.map(badge => (
                  <button type="button" key={badge.id} onClick={() => setSelectedBadge(badge.id === selectedBadge?.id ? null : badge)} className={`p-4 border rounded-lg text-center cursor-pointer transition-all duration-200 ${selectedBadge?.id === badge.id ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}>
                    <badge.icon className="w-10 h-10 mx-auto text-blue-500" />
                    <p className="mt-2 font-semibold text-sm">{badge.name}</p>
                    <p className="text-xs text-gray-500">{badge.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">Attach an eCard</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ECARDS.map(ecard => (
                  <button type="button" key={ecard.id} onClick={() => setSelectedECard(ecard.id === selectedECard?.id ? null : ecard)} className={`relative rounded-lg overflow-hidden border-4 ${selectedECard?.id === ecard.id ? 'border-blue-500 ring-2 ring-blue-500' : 'border-transparent'}`}>
                    <img src={ecard.imageUrl} alt={ecard.name} className="w-full h-24 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="text-white font-bold">{ecard.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
        </div>

        <div className="text-right">
          <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">
            Send Recognition
          </button>
        </div>
      </form>
    </div>
  );
};
