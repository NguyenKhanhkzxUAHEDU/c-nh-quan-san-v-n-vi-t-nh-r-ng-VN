
import React, { useState } from 'react';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { SchoolDetails } from './SchoolDetails';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { ChevronUpIcon } from './icons/ChevronUpIcon';
import { ArchitecturalFeatures } from './ArchitecturalFeatures';
import { SaigonLandmarks } from './SaigonLandmarks';
import { PrivateResidences } from './PrivateResidences';

interface DescriptionProps {
  hanoiText: string;
  saigonText: string;
  isLoading: boolean;
  error: string | null;
}

export const Description: React.FC<DescriptionProps> = ({ hanoiText, saigonText, isLoading, error }) => {
  const [isHanoiExpanded, setIsHanoiExpanded] = useState(false);
  const [isSaigonFeaturesExpanded, setIsSaigonFeaturesExpanded] = useState(false);
  const [isSaigonLandmarksExpanded, setIsSaigonLandmarksExpanded] = useState(false);
  const [isResidencesExpanded, setIsResidencesExpanded] = useState(false);

  const formatText = (inputText: string): React.ReactElement[] => {
    return inputText.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return <br key={index} />;
      const parts = paragraph.split('**').map((part, partIndex) => {
        return partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part;
      });
      return <p key={index} className="mb-4 leading-relaxed">{parts}</p>;
    });
  };

  const toggleHanoiExpanded = () => setIsHanoiExpanded(!isHanoiExpanded);
  const toggleSaigonFeaturesExpanded = () => setIsSaigonFeaturesExpanded(!isSaigonFeaturesExpanded);
  const toggleSaigonLandmarksExpanded = () => setIsSaigonLandmarksExpanded(!isSaigonLandmarksExpanded);
  const toggleResidencesExpanded = () => setIsResidencesExpanded(!isResidencesExpanded);


  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-16">
      <h3 className="text-3xl font-serif font-bold text-center text-stone-800 mb-8">Architectural Heritage</h3>
      <div className="max-w-7xl mx-auto text-stone-700">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-48">
            <SpinnerIcon />
            <p className="mt-4 text-lg text-stone-600">Generating insights into Vietnam's architectural heritage...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-600 bg-red-50 p-4 rounded-md">
            <p className="font-bold">An Error Occurred</p>
            <p>{error}</p>
          </div>
        )}
        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
              {/* Hanoi Column */}
              <div className="mb-12 lg:mb-0">
                <h4 className="text-2xl font-serif font-bold text-stone-800 mb-4 border-b-2 border-emerald-700 pb-2">Hanoi</h4>
                <article className="prose prose-lg max-w-none prose-stone">
                  {formatText(hanoiText)}
                </article>
                <div className="mt-6 text-center">
                  <button
                    onClick={toggleHanoiExpanded}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
                    aria-expanded={isHanoiExpanded}
                  >
                    {isHanoiExpanded ? 'Read Less' : 'Explore Hanoi Schools'}
                    {isHanoiExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isHanoiExpanded ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t pt-6">
                    <SchoolDetails />
                  </div>
                </div>
              </div>

              {/* Saigon Column */}
              <div>
                <h4 className="text-2xl font-serif font-bold text-stone-800 mb-4 border-b-2 border-amber-700 pb-2">Saigon</h4>
                <article className="prose prose-lg max-w-none prose-stone">
                  {formatText(saigonText)}
                </article>
                <div className="mt-6 text-center space-y-4 md:space-y-0 md:space-x-4">
                  <button
                    onClick={toggleSaigonFeaturesExpanded}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-900 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300"
                    aria-expanded={isSaigonFeaturesExpanded}
                  >
                    {isSaigonFeaturesExpanded ? 'Hide Details' : 'Architectural Characteristics'}
                    {isSaigonFeaturesExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
                  <button
                    onClick={toggleSaigonLandmarksExpanded}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-900 bg-amber-100 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-300"
                    aria-expanded={isSaigonLandmarksExpanded}
                  >
                    {isSaigonLandmarksExpanded ? 'Hide Landmarks' : 'Explore Saigon Landmarks'}
                    {isSaigonLandmarksExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isSaigonFeaturesExpanded ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t pt-6">
                    <ArchitecturalFeatures />
                  </div>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isSaigonLandmarksExpanded ? 'max-h-[15000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t pt-6">
                    <SaigonLandmarks />
                  </div>
                </div>
              </div>
            </div>
            {/* New Private Residences Section */}
            <div className="mt-12 border-t-2 border-stone-200 pt-8">
               <div className="text-center">
                 <button
                    onClick={toggleResidencesExpanded}
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-900 bg-stone-200 hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors duration-300"
                    aria-expanded={isResidencesExpanded}
                  >
                    {isResidencesExpanded ? 'Hide Private Residences' : 'Explore Private Residences'}
                    {isResidencesExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
               </div>
               <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isResidencesExpanded ? 'max-h-[20000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                  <PrivateResidences />
               </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};