
import React from 'react';
import { useAppContext } from '../context/AppContext';
import type { Milestone } from '../types';

const MilestoneCard: React.FC<{ milestone: Milestone }> = ({ milestone }) => {
    const { user, type, date, years } = milestone;
    const eventDate = new Date(date);
    const isUpcoming = eventDate > new Date();
    
    const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

    return (
        <div className={`p-5 rounded-lg flex items-center space-x-4 ${isUpcoming ? 'bg-green-50 border-l-4 border-green-500' : 'bg-gray-50'}`}>
            <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full" />
            <div>
                <p className="font-bold text-lg text-gray-800">{user.name}</p>
                <p className="text-gray-600">
                    {type === 'Anniversary' 
                        ? `Celebrated ${years} years with the company`
                        : `Celebrated a birthday`
                    }
                </p>
                <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
            {isUpcoming && <span className="ml-auto text-xs font-semibold uppercase px-2 py-1 bg-green-200 text-green-800 rounded-full">Upcoming</span>}
        </div>
    );
};

export const Milestones: React.FC = () => {
    const { state } = useAppContext();
    
    const sortedMilestones = [...state.milestones].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const upcomingMilestones = sortedMilestones.filter(m => new Date(m.date) > new Date());
    const pastMilestones = sortedMilestones.filter(m => new Date(m.date) <= new Date());

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Milestones</h1>
            
            {upcomingMilestones.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-green-500">Upcoming Celebrations</h2>
                    <div className="space-y-4">
                        {upcomingMilestones.map(m => <MilestoneCard key={m.id} milestone={m} />)}
                    </div>
                </div>
            )}
            
            {pastMilestones.length > 0 && (
                 <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">Past Milestones</h2>
                    <div className="space-y-4">
                        {pastMilestones.map(m => <MilestoneCard key={m.id} milestone={m} />)}
                    </div>
                </div>
            )}
        </div>
    );
};
