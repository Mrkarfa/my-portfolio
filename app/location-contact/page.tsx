import React from 'react';

const LocationContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center text-secondary font-japanese mb-4">場所・お問い合わせ</h1>
        <p className="text-2xl text-center text-secondary/80 mb-16">Location & Contact</p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Map and Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-secondary font-japanese mb-4">私たちの場所</h2>
              <p className="text-lg text-secondary/80 mb-6">Our Location</p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                {/* Placeholder for interactive map */}
                <img src="/placeholder-map.jpg" alt="Map to Sakura Cafe" className="w-full h-full object-cover" />
              </div>
              <p className="text-secondary mt-4">123 Sakura Lane, Metropolis, 10001</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary font-japanese mb-4">営業時間</h2>
              <p className="text-lg text-secondary/80 mb-6">Opening Hours</p>
              <ul className="text-secondary space-y-2">
                <li>月曜日〜金曜日 (Mon-Fri): 午前9時 - 午後8時 (9:00 AM - 8:00 PM)</li>
                <li>土曜日・日曜日 (Sat-Sun): 午前8時 - 午後9時 (8:00 AM - 9:00 PM)</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact and Reservations */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-secondary font-japanese mb-4">お問い合わせ</h2>
              <p className="text-lg text-secondary/80 mb-6">Contact Us</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-secondary font-semibold mb-2">お名前 (Name)</label>
                  <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-surface border border-neutral-medium focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-secondary font-semibold mb-2">メールアドレス (Email)</label>
                  <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-surface border border-neutral-medium focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-secondary font-semibold mb-2">メッセージ (Message)</label>
                  <textarea id="message" name="message" rows={5} className="w-full p-3 rounded-lg bg-surface border border-neutral-medium focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                  送信 (Send Message)
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary font-japanese mb-4">ご予約</h2>
              <p className="text-lg text-secondary/80 mb-6">Reservations</p>
              <p className="text-secondary">
                For reservations, please call us at (123) 456-7890 or use our upcoming online reservation system.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LocationContactPage;
