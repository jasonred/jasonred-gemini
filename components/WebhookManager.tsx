
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export const WebhookManager: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const [newWebhookUrl, setNewWebhookUrl] = useState('');
    const [error, setError] = useState('');
    const [toast, setToast] = useState('');


    const handleAddWebhook = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newWebhookUrl) {
            setError('URL cannot be empty.');
            return;
        }
        try {
            new URL(newWebhookUrl); // Validate URL format
        } catch (_) {
            setError('Please enter a valid URL.');
            return;
        }

        dispatch({
            type: 'ADD_WEBHOOK',
            payload: {
                id: `wh_${Date.now()}`,
                url: newWebhookUrl,
            }
        });
        setNewWebhookUrl('');
        setError('');
        setToast('Webhook added successfully!');
        setTimeout(() => setToast(''), 3000);
    };

    const handleDeleteWebhook = (id: string) => {
        dispatch({
            type: 'DELETE_WEBHOOK',
            payload: id,
        });
        setToast('Webhook removed.');
        setTimeout(() => setToast(''), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto">
             {toast && (
                <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
                {toast}
                </div>
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Webhook Integrations</h1>
            <p className="text-gray-600 mb-6">Connect Kudos to other services. We'll send a POST request with the recognition data to your configured URLs.</p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Add New Webhook</h2>
                <form onSubmit={handleAddWebhook} className="flex items-start space-x-2">
                    <div className="flex-grow">
                        <input 
                            type="text" 
                            value={newWebhookUrl}
                            onChange={(e) => setNewWebhookUrl(e.target.value)}
                            placeholder="https://your-service.com/webhook/..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700">
                        Add
                    </button>
                </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Configured Webhooks</h2>
                <div className="space-y-3">
                    {state.webhooks.length > 0 ? (
                        state.webhooks.map(webhook => (
                            <div key={webhook.id} className="flex items-center justify-between p-4 border rounded-md bg-gray-50">
                                <p className="font-mono text-gray-700 truncate mr-4">{webhook.url}</p>
                                <button onClick={() => handleDeleteWebhook(webhook.id)} className="text-red-500 hover:text-red-700 font-semibold">
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-4">No webhooks configured yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
