import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { generateDescriptions } from './services/geminiService';

interface Descriptions {
  hanoi: string;
  saigon: string;
}

const App: React.FC = () => {
  const [descriptions, setDescriptions] = useState<Descriptions | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDescriptions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const texts = await generateDescriptions();
        setDescriptions(texts);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to generate descriptions: ${err.message}. Please check your network connection and try again.`);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDescriptions();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Description 
            hanoiText={descriptions?.hanoi || ''}
            saigonText={descriptions?.saigon || ''}
            isLoading={isLoading} 
            error={error} 
          />
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;