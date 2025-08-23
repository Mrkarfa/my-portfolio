import React from 'react';
import PageLayout from '@/components/PageLayout';
import MenuCard from '@/components/MenuCard';

const menuData = [
  {
    category: '伝統料理 (Traditional Dishes)',
    items: [
      { name: 'Classic Tonkotsu Ramen', price: '¥1,200', description: 'Rich pork broth, chashu pork, soft-boiled egg, and noodles.', image: '/placeholder-ramen.jpg' },
      { name: 'Assorted Sushi Platter', price: '¥2,500', description: 'A selection of fresh nigiri and maki rolls.', image: '/placeholder-sushi.jpg' },
      { name: 'Crispy Tempura', price: '¥1,500', description: 'Lightly battered and fried shrimp and vegetables.', image: '/placeholder-tempura.jpg' },
      { name: 'Savory Donburi Bowl', price: '¥1,300', description: 'Your choice of protein served over a bed of rice.', image: '/placeholder-donburi.jpg' },
    ],
  },
  {
    category: '飲み物 (Beverages)',
    items: [
      { name: 'Ceremonial Grade Matcha', price: '¥800', description: 'High-quality, finely ground green tea.', image: '/placeholder-matcha-tea.jpg' },
      { name: 'Sencha Green Tea', price: '¥600', description: 'A classic Japanese steamed green tea.', image: '/placeholder-sencha.jpg' },
      { name: 'Artisan Drip Coffee', price: '¥700', description: 'Single-origin beans, carefully brewed.', image: '/placeholder-coffee.jpg' },
      { name: 'Junmai Sake', price: '¥1,000', description: 'A premium, pure rice sake.', image: '/placeholder-sake.jpg' },
    ],
  },
  {
    category: 'デザート (Desserts)',
    items: [
      { name: 'Mochi Ice Cream', price: '¥600', description: 'Sweet glutinous rice cake filled with ice cream.', image: '/placeholder-mochi.jpg' },
      { name: 'Dorayaki Pancake', price: '¥500', description: 'Red bean paste sandwiched between two castella pancakes.', image: '/placeholder-dorayaki.jpg' },
      { name: 'Matcha Parfait', price: '¥900', description: 'Layers of matcha ice cream, cream, and red bean.', image: '/placeholder-parfait.jpg' },
      { name: 'Taiyaki', price: '¥400', description: 'Fish-shaped cake with a sweet red bean filling.', image: '/placeholder-taiyaki.jpg' },
    ],
  },
];

const MenuPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center text-secondary font-japanese mb-4">メニュー</h1>
        <p className="text-2xl text-center text-secondary/80 mb-16">Our Menu</p>

        <div className="space-y-16">
          {menuData.map((category, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-secondary font-japanese mb-8 border-b-2 border-primary pb-2">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item, itemIndex) => (
                  <MenuCard key={itemIndex} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default MenuPage;
