import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 mt-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Hanoi & Saigon Architectural Explorer. All rights reserved.</p>
        <p className="mt-1">Generated with AI for a richer cultural experience.</p>
      </div>
    </footer>
  );
};