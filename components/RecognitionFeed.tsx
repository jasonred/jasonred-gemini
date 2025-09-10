
import React from 'react';
import { useAppContext } from '../context/AppContext';
import type { Recognition, User, Badge, ECard } from '../types';

const RecognitionCard: React.FC<{ recognition: Recognition }> = ({ recognition }) => {
    const { fromUser, toUser, message, points, badge, eCard, timestamp } = recognition;

    const timeAgo = (date: string) => {
        const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        return Math.floor(seconds) + " seconds ago";
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-transform hover:scale-105 duration-300 ease-in-out">
            {eCard && (
                <img src={eCard.imageUrl} alt={eCard.name} className="rounded-t-lg w-full h-48 object-cover mb-4" />
            )}
            <div className="flex items-start">
                <img src={fromUser.avatarUrl} alt={fromUser.name} className="w-12 h-12 rounded-full mr-4" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-800">
                            <span className="font-bold">{fromUser.name}</span> recognized <span className="font-bold">{toUser.name}</span>
                        </p>
                        <span className="text-sm text-gray-500">{timeAgo(timestamp)}</span>
                    </div>
                    <p className="mt-2 text-lg text-gray-700 italic">"{message}"</p>
                    <div className="flex items-center mt-4 space-x-4">
                        {points && (
                            <div className="flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10.5a1.5 1.5 0 013 0v1.5a1.5 1.5 0 01-3 0v-1.5z" clipRule="evenodd" /><path d="M5 12a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 00-1-1H5z" /></svg>
                                {points} Points
                            </div>
                        )}
                        {badge && (
                            <div className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                                <badge.icon className="h-5 w-5 mr-1" />
                                {badge.name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export const RecognitionFeed: React.FC = () => {
    const { state } = useAppContext();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Recognition Feed</h1>
            {state.recognitions.map(rec => (
                <RecognitionCard key={rec.id} recognition={rec} />
            ))}
        </div>
    );
};
