
import type React from 'react';
import type { User, Badge, ECard, Recognition, Milestone } from './types';

// SVG Icons as React Components
export const FeedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V7.125c0-.621.504-1.125 1.125-1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V7.5z" /></svg>
);
export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
);
export const MilestoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75h.008v.008H12v-.008z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9a.75.75 0 00-.75.75v1.5.75H12a.75.75 0 00.75-.75v-1.5A.75.75 0 0012 9z" /></svg>
);
export const WebhookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
);
export const TeamPlayerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023.995-2.132 1.254-3.336A3 3 0 0010.5 5.514a3 3 0 00-3.232-2.585 3 3 0 00-3.232 2.585 3 3 0 001.254 3.336L6 18.72m12 0a9.094 9.094 0 01-3.741-.479 3 3 0 01-4.682-2.72M6 18.72V21a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-2.28m-4.5 0A3.75 3.75 0 006 15h12a3.75 3.75 0 003.75 3.72M6 18.72A3.75 3.75 0 012.25 15m13.5 0a3.75 3.75 0 00-3.75-3.72m-9.75 0A3.75 3.75 0 016 11.25v-1.5a3.75 3.75 0 00-3.75-3.75v1.5a3.75 3.75 0 013.75 3.75m6 0v-1.5a3.75 3.75 0 00-3.75-3.75v1.5a3.75 3.75 0 013.75 3.75m-3.75 0h.008v.008h-.008v-.008z" /></svg>
);
export const InnovatorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311l-3.75 0m3.75-7.478c.097-.512.186-1.03.27-1.566l.092-.549m-2.269 3.003a6.003 6.003 0 00-1.5-1.5l-.549-.092a5.99 5.99 0 00-1.566-.27m1.566.27a5.99 5.99 0 011.566.27m0 0a6.003 6.003 0 011.5 1.5l.549.092a5.99 5.99 0 01.27 1.566m-1.566-.27a5.99 5.99 0 00-1.566-.27m0 0a6.003 6.003 0 00-1.5-1.5l-.549-.092a5.99 5.99 0 00-1.566.27" /></svg>
);
export const MentorIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-3.33-3.33A59.902 59.902 0 0112 3.493a59.902 59.902 0 0113.12 3.32l-3.33 3.33" /></svg>
);
export const ProblemSolverIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 13.5z" /></svg>
);

// Mock Data
export const USERS: User[] = [
  { id: 'u1', name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/id/1011/100/100', points: 1250 },
  { id: 'u2', name: 'Bob Williams', avatarUrl: 'https://picsum.photos/id/1005/100/100', points: 800 },
  { id: 'u3', name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/id/1025/100/100', points: 1500 },
  { id: 'u4', name: 'Diana Miller', avatarUrl: 'https://picsum.photos/id/1027/100/100', points: 950 },
  { id: 'u5', name: 'Ethan Davis', avatarUrl: 'https://picsum.photos/id/237/100/100', points: 2100 },
];

export const CURRENT_USER = USERS[0];

export const BADGES: Badge[] = [
  { id: 'b1', name: 'Team Player', description: 'For exceptional collaboration.', icon: TeamPlayerIcon },
  { id: 'b2', name: 'Innovator', description: 'For creative and new ideas.', icon: InnovatorIcon },
  { id: 'b3', name: 'Mentor', description: 'For guiding and helping others grow.', icon: MentorIcon },
  { id: 'b4', name: 'Problem Solver', description: 'For tackling tough challenges.', icon: ProblemSolverIcon },
];

export const ECARDS: ECard[] = [
  { id: 'ec1', name: 'Thank You', imageUrl: 'https://picsum.photos/seed/ecard1/400/250' },
  { id: 'ec2', name: 'Congrats', imageUrl: 'https://picsum.photos/seed/ecard2/400/250' },
  { id: 'ec3', name: 'Great Job', imageUrl: 'https://picsum.photos/seed/ecard3/400/250' },
  { id: 'ec4', name: 'High Five', imageUrl: 'https://picsum.photos/seed/ecard4/400/250' },
];

export const INITIAL_RECOGNITIONS: Recognition[] = [
  {
    id: 'r1',
    fromUser: USERS[2],
    toUser: USERS[4],
    message: 'Ethan, your work on the new deployment script was phenomenal. You saved the team hours of work!',
    points: 100,
    badge: BADGES[3],
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'r2',
    fromUser: USERS[1],
    toUser: USERS[3],
    message: 'Thanks for always being so responsive and helpful on Slack, Diana. It makes a huge difference.',
    eCard: ECARDS[0],
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'r3',
    fromUser: USERS[3],
    toUser: USERS[0],
    message: 'Alice, your presentation to the stakeholders was incredibly clear and professional. You nailed it!',
    points: 50,
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const INITIAL_MILESTONES: Milestone[] = [
    { id: 'm1', user: USERS[2], type: 'Anniversary', date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(), years: 5 },
    { id: 'm2', user: USERS[4], type: 'Birthday', date: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString() },
    { id: 'm3', user: USERS[1], type: 'Anniversary', date: new Date(new Date().setDate(new Date().getDate() - 365 * 2)).toISOString(), years: 2 },
];
