import React from 'react';

const galleryItems = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hanoi_Opera_House_-_exterior_2.jpg/1280px-Hanoi_Opera_House_-_exterior_2.jpg", alt: "The magnificent Hanoi Opera House, a prime example of French colonial architecture in the city's French Quarter." },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Saigon_Central_Post_Office_2018.jpg/1280px-Saigon_Central_Post_Office_2018.jpg", alt: "The interior of the Saigon Central Post Office, with its grand arched ceiling and historic maps." },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Presidential_Palace_in_Hanoi%2C_Vietnam_2.jpg/1280px-Presidential_Palace_in_Hanoi%2C_Vietnam_2.jpg", alt: "The elegant Presidential Palace in Hanoi, a mustard-yellow building surrounded by lush gardens." },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Notre-Dame_Cathedral_in_Saigon%2C_Vietnam_2.jpg/1024px-Notre-Dame_Cathedral_in_Saigon%2C_Vietnam_2.jpg", alt: "The twin bell towers of the Notre-Dame Cathedral Basilica of Saigon against a clear blue sky." },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nha_tho_Lon_Ha_Noi_2017.jpg/1024px-Nha_tho_Lon_Ha_Noi_2017.jpg", alt: "St. Joseph's Cathedral in Hanoi, a neo-gothic church that serves as a historic landmark." },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Saigon_Opera_House%2C_Ho_Chi_Minh_City%2C_Vietnam.jpg/1280px-Saigon_Opera_House%2C_Ho_Chi_Minh_City%2C_Vietnam.jpg", alt: "The ornate facade of the Saigon Opera House, beautifully illuminated at dusk." },
];

export const Gallery: React.FC = () => {
  return (
    <section className="mt-16">
      <h3 className="text-3xl font-serif font-bold text-center text-stone-800 mb-2">Visual Journey</h3>
      <p className="text-center text-stone-600 mb-8 max-w-3xl mx-auto">Step into the worlds of Hanoi and Saigon's colonial architecture through a collection of evocative images that capture their unique charm and diverse styles.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={item.src} 
              alt={item.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};