import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-emerald-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M8.25 21V7.5h7.5V21h-7.5zM12 15.75a.75.75 0 01-.75-.75V13.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z" />
            </svg>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-stone-800">
              Kiến Trúc Đông Dương: Hà Nội & Sài Gòn
            </h1>
          </div>
          <p className="hidden md:block text-sm text-stone-600">A Tale of Two Cities</p>
        </div>
      </div>
    </header>
  );
};