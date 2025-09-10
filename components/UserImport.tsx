
import React, { useState, useRef } from 'react';

export const UserImport: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [toast, setToast] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleProcessFile = () => {
        if (!selectedFile) return;
        // Simulate processing
        setToast(`Simulating import for ${selectedFile.name}...`);
        setTimeout(() => {
            setToast('User data processed successfully!');
            setSelectedFile(null);
            if(fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }, 2000);
        setTimeout(() => setToast(''), 5000);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {toast && (
                <div className="fixed top-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
                    {toast}
                </div>
            )}
            <h2 className="text-xl font-semibold mb-4">Import Users</h2>
            <p className="text-gray-600 mb-4">Upload a CSV file to bulk add or update users. The file should contain the headers: <code>id</code>, <code>name</code>, <code>email</code>, <code>avatarUrl</code>, <code>points</code>.</p>
            
            <div className="flex items-center space-x-4">
                <label className="w-full flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-sm tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V9h2v2z" />
                    </svg>
                    <span className="text-sm font-semibold truncate">{selectedFile ? selectedFile.name : 'Select a file...'}</span>
                    <input type='file' ref={fileInputRef} className="hidden" accept=".csv,text/csv" onChange={handleFileChange} />
                </label>
                <button 
                    onClick={handleProcessFile} 
                    disabled={!selectedFile}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Process File
                </button>
            </div>
        </div>
    );
};
