import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-96 w-full flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/7a/b8/5b/7ab85b6a716c507c3d2595d0339a66d1.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-white tracking-wider leading-tight">
          A Tale of Two Cities
        </h2>
        <p className="mt-4 text-lg md:text-xl text-stone-200 max-w-3xl mx-auto">
          Discover the distinct colonial architectural legacies of Hanoi and Saigon, where history, culture, and climate created unique urban identities.
        </p>
      </div>
    </div>
  );
};