import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  userImageUrl: string;
  onBackClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, userImageUrl, onBackClick }) => {
  return (
    <header className="relative flex items-center w-full h-11 px-4 pt-2">
      {/* Back Button */}
      <button 
        onClick={onBackClick} 
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors z-10 bg-transparent border-0 p-0"
        style={{ background: 'transparent' }}
        aria-label="Go back"
      >
        <ChevronLeft size={24} />
        <span className="text-lg ml-1">Back</span>
      </button>

      {/* Page Title */}
      <h1 className="font-semibold text-gray-900 absolute left-1/2 -translate-x-1/2 z-0" style={{ fontSize: '15pt' }}>
        {title}
      </h1>

      {/* User Avatar */}
      <div className="w-10 h-10 ml-auto z-10">
        <img
          src={userImageUrl}
          alt="User Avatar"
          className="w-full h-full rounded-full object-cover"
          onError={(e) => {
            // Fallback in case the image fails to load
            e.currentTarget.src = 'https://placehold.co/40x40/E2E8F0/4A5568?text=U';
          }}
        />
      </div>
    </header>
  );
};

export default Header;

