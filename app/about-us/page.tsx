import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-background">
        {/* Hero Section */}
        <div className="relative h-96 flex items-center justify-center text-white">
          <img src="/placeholder-landscape.jpg" alt="Japanese landscape" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative text-center">
            <h1 className="text-5xl font-bold font-japanese">私たちについて</h1>
            <p className="text-2xl mt-2">About Us</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 space-y-20">
          {/* Our Story Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary font-japanese">私たちの物語</h2>
              <p className="text-xl mt-2 text-secondary/80">Our Story</p>
              <p className="mt-6 text-lg text-secondary">
                Founded on a dream to bring the serene beauty of a Japanese village to the heart of the city, Sakura Café began its journey in 2023. We wanted to create a space where time slows down, and every cup of tea tells a story.
              </p>
            </div>
            <img src="/placeholder-cafe-exterior.jpg" alt="Cafe Exterior" className="rounded-lg shadow-lg" />
          </section>

          {/* Philosophy Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/placeholder-omotenashi.jpg" alt="Omotenashi - Japanese hospitality" className="rounded-lg shadow-lg" />
            <div className="text-right">
              <h2 className="text-4xl font-bold text-secondary font-japanese">おもてなし</h2>
              <p className="text-xl mt-2 text-secondary/80">Our Philosophy of Omotenashi</p>
              <p className="mt-6 text-lg text-secondary">
                "Omotenashi" is the cornerstone of our philosophy. It's the Japanese art of selfless hospitality—a deep, genuine desire to take care of our guests. From the moment you step in, we want you to feel welcomed, cared for, and at peace.
              </p>
            </div>
          </section>

          {/* Chef Profile Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-secondary font-japanese">シェフ紹介</h2>
            <p className="text-xl mt-2 text-secondary/80">Meet Our Chef</p>
            <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
              <img src="/placeholder-chef.jpg" alt="Chef" className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto" />
              <div className="md:col-span-2 text-left">
                <p className="text-lg text-secondary">
                  Our head chef, Tanaka-san, trained for over 15 years in Kyoto, mastering the delicate art of traditional Japanese cuisine. His passion is to blend authentic flavors with a touch of modern creativity, creating dishes that are both familiar and surprising.
                </p>
              </div>
            </div>
          </section>

          {/* Cultural Mission Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-secondary font-japanese">文化的な使命</h2>
            <p className="text-xl mt-2 text-secondary/80">Our Cultural Mission</p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-secondary">
              We are more than just a café. We are a cultural bridge, aiming to share the tranquility and rich heritage of Japan with our community. Through our food, décor, and service, we hope to offer a small escape to a world of peaceful contemplation.
            </p>
          </section>
        </div>
      </div>
  );
};

export default AboutUsPage;
