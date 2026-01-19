import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

const StickyBottomNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 md:hidden animate-fadeIn">
      <div className="flex gap-4 p-2 bg-white/90 backdrop-blur-md rounded-2xl border border-orange-100 shadow-2xl">
        <a
          href="https://wa.me/3465782903"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-lg shadow-green-200 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <a
          href="tel:+3465782903"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-rose-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-orange-200 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          Llamar
        </a>
      </div>
    </div>
  );
};

export default StickyBottomNav;
