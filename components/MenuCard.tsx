'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MenuCard = ({ item }: { item: any }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    let rotation = { y: 0 };

    const onMouseEnter = () => {
      gsap.to(rotation, {
        y: 180,
        duration: 0.7,
        ease: 'power3.inOut',
        onUpdate: () => {
          gsap.set(card, { rotationY: rotation.y });
        }
      });
    };

    const onMouseLeave = () => {
      gsap.to(rotation, {
        y: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        onUpdate: () => {
          gsap.set(card, { rotationY: rotation.y });
        }
      });
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, { scope: cardRef });

  return (
    <div className="[perspective:1000px]">
      <div ref={cardRef} className="relative w-full h-96 [transform-style:preserve-3d]">
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-surface rounded-lg shadow-lg overflow-hidden [backface-visibility:hidden]">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-secondary">{item.name}</h3>
            <p className="text-accent font-semibold mt-2">{item.price}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full bg-surface rounded-lg shadow-lg overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex flex-col justify-center items-center text-center">
          <h4 className="text-lg font-bold text-secondary">Ingredients</h4>
          <p className="text-secondary/80 mt-2 text-sm">{item.description}</p>
          <p className="text-secondary/80 mt-4 text-xs">Dietary Info: Gluten-free available</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
