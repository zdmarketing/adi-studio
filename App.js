
import React from 'react';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet";

export default function StudioAdi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7f8] via-[#f3fbf3] to-[#ffffff] text-gray-800 font-sans bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] bg-repeat bg-contain" dir="rtl">
      <Helmet>
        <title>סטודיו עדי | צילום אירועים אומנותי</title>
        <meta name="description" content="סטודיו עדי מתמחה בצילום אירועים לקהל הדתי – בעדשה טבעית, רגישה ואישית." />
        <meta name="keywords" content="צילום אירועים, צלמת דתית, סטודיו עדי, צילום חתונה, צילומי טבע, עדי צלמת" />
      </Helmet>

      <header className="p-6 text-center border-b border-pink-200 bg-[#fef7f8]">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-pink-300 overflow-hidden">
            <img src="/images/adi-logo.png" alt="לוגו סטודיו עדי" className="object-cover w-full h-full" />
          </div>
        </div>
        <h1 className="text-3xl font-serif mb-2 text-green-700">סטודיו עדי</h1>
        <p className="text-sm text-pink-700">צילום אמנותי. נגיעה אישית. זיכרון שנשאר.</p>
      </header>

      <nav className="flex justify-center gap-4 py-4 border-b text-sm text-pink-700 bg-[#fefefe]">
        <a href="#home">דף הבית</a>
        <a href="#about">אודות</a>
        <a href="#gallery">גלריה</a>
        <a href="#testimonials">המלצות</a>
        <a href="#faq">שאלות נפוצות</a>
        <a href="#portfolio">תיק עבודות</a>
      </nav>

      <section id="about" className="p-6 max-w-3xl mx-auto">
        <div className="border border-pink-300 rounded-xl p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-green-800">עליי בקצרה</h2>
          <p className="mb-0 text-gray-700">
            אני עדי, צלמת אירועים עם ניסיון של מעל 5 שנים.
            אני מאמינה ביופי הטבעי, ברגש האמיתי ובכבוד לכל רגע – במיוחד כשמדובר באירועים מהעולם הדתי.
            במהלך השנים ליוויתי משפחות, זוגות וקהילות ברגעים הכי משמעותיים בחיים – בצילום אישי, אומנותי, ורגיש.
            מעבר לאירועים, אני אוהבת לצאת אל הטבע ולתעד את השקט, האור, והחיים – כמו שהם, דרך העדשה.
          </p>
        </div>
      </section>

      <section id="gallery" className="p-6 max-w-4xl mx-auto">
        <div className="border border-pink-300 rounded-xl p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-800">גלריה</h2>
          <div className="overflow-x-auto whitespace-nowrap space-x-4 scrollbar-hide animate-scroll">
            <img src="https://source.unsplash.com/600x400/?nature,forest" alt="טבע 1" className="inline-block rounded-xl" />
            <img src="https://source.unsplash.com/600x400/?nature,water" alt="טבע 2" className="inline-block rounded-xl" />
            <img src="https://source.unsplash.com/600x400/?nature,flowers" alt="טבע 3" className="inline-block rounded-xl" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="p-6 max-w-3xl mx-auto">
        <div className="border border-pink-300 rounded-xl p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-800">המלצות</h2>
          <div className="overflow-x-auto whitespace-nowrap space-x-4 scrollbar-hide animate-scroll">
            <Card className="inline-block w-72 mr-4">
              <CardContent className="p-4">
                "עדי צילמה את החתונה שלנו ברגישות ובאהבה. התמונות מרגשות ומדויקות, בדיוק כמו שחלמנו!"
              </CardContent>
            </Card>
            <Card className="inline-block w-72 mr-4">
              <CardContent className="p-4">
                "תודה על סבלנות, הקשבה, וכישרון אמיתי. הצלחת לתפוס רגעים שלא ראינו בעצמנו."
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-green-800">שאלות נפוצות</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>האם אפשר להזמין צילומים לנשים בלבד?</strong> כן, עם רגישות והתאמה מלאה לציבור הדתי.</li>
          <li><strong>תוך כמה זמן מקבלים את התמונות?</strong> עד 14 ימי עסקים.</li>
          <li><strong>האם מקבלים גם קבצים גולמיים?</strong> לא, אלא רק את התמונות הערוכות באיכות גבוהה.</li>
          <li><strong>אפשר לשלב צילומי זוגיות/משפחה באותו יום?</strong> כן, בתיאום מראש.</li>
          <li><strong>איך מתאמים?</strong> דרך וואטסאפ, טלפון או טופס באתר.</li>
          <li><strong>יש אפשרות לצילומים בטבע?</strong> בהחלט, אני מצלמת גם צילומי חוץ.</li>
        </ul>
      </section>

      <section id="portfolio" className="p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mt-8 mb-2 text-green-800">תיק עבודות</h2>
        <a href="#" className="text-pink-600 underline">לצפייה בתיק העבודות המלא בגוגל דרייב</a>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        &copy; 2025 סטודיו עדי | נבנה באהבה.
      </footer>
    </div>
  );
}

