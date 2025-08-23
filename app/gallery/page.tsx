'use client';

import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import GalleryImage from '@/components/GalleryImage';

const allImages = [
  // Interior Ambiance
  { src: '/gallery/interior-1.jpg', alt: 'Modern-traditional fusion decor', category: 'Interior Ambiance' },
  { src: '/gallery/interior-2.jpg', alt: 'Cozy seating area', category: 'Interior Ambiance' },
  { src: '/gallery/interior-3.jpg', alt: 'Bar counter with Japanese lanterns', category: 'Interior Ambiance' },

  // Food Photography
  { src: '/gallery/food-1.jpg', alt: 'Artfully plated sushi', category: 'Food Photography' },
  { src: '/gallery/food-2.jpg', alt: 'Steaming bowl of ramen', category: 'Food Photography' },
  { src: '/gallery/food-3.jpg', alt: 'Delicate matcha dessert', category: 'Food Photography' },

  // Cultural Elements
  { src: '/gallery/culture-1.jpg', alt: 'Japanese calligraphy art', category: 'Cultural Elements' },
  { src: '/gallery/culture-2.jpg', alt: 'Ikebana flower arrangement', category: 'Cultural Elements' },

  // Anime Corner
  { src: '/gallery/anime-1.jpg', alt: 'Spirited Away poster', category: 'Anime Corner' },
  { src: '/gallery/anime-2.jpg', alt: 'Your Name poster', category: 'Anime Corner' },
  { src: '/gallery/anime-3.jpg', alt: 'Princess Mononoke poster', category: 'Anime Corner' },
];

const categories = ['All', 'Interior Ambiance', 'Food Photography', 'Cultural Elements', 'Anime Corner'];

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');

  // Using placeholder images for now
  const placeholderImages = allImages.map(img => ({...img, src: `https://via.placeholder.com/400x300.png?text=${encodeURIComponent(img.alt)}`}))
  const filteredPlaceholderImages = filter === 'All' ? placeholderImages : placeholderImages.filter(img => img.category === filter);


  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center text-secondary font-japanese mb-4">ギャラリー</h1>
        <p className="text-2xl text-center text-secondary/80 mb-12">Gallery</p>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === category ? 'bg-primary text-white' : 'bg-surface text-secondary hover:bg-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPlaceholderImages.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default GalleryPage;
