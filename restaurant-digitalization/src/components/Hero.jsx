import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-pattern min-h-screen flex items-center justify-center pt-20 px-4"
      id="inicio"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-br from-orange-200 to-rose-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-orange-100 to-amber-100 rounded-full blur-3xl opacity-40"></div>

      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 relative z-10 text-center py-12 sm:py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-rose-100 border border-orange-200 px-4 py-2 text-xs sm:text-sm font-semibold text-orange-700 mb-6 sm:mb-8 shadow-sm animate-[fadeIn_0.5s_ease-in]">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          Diseño Web Especializado en Restauración
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-extrabold tracking-tight text-stone-900 mb-6 sm:mb-8 leading-[1.1] px-4 animate-[fadeIn_0.8s_ease-in]">
          Tu Restaurante.
          <br />
          <span className="gradient-text">Online. Ya.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl leading-relaxed text-stone-600 max-w-3xl mx-auto font-medium px-4 animate-[fadeIn_1s_ease-in]">
          Sin web bonita, pierdes clientes. Sin información clara, pierdes
          reservas.{" "}
          <span className="text-stone-900 font-bold">
            Te creo la presencia digital que tu restaurante merece
          </span>
          .
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 animate-[fadeIn_1.2s_ease-in]">
          <a
            href="#tarifas"
            className="group w-full sm:w-auto rounded-xl bg-gradient-to-r from-orange-600 to-rose-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Ver Tarifas
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sobre-mi"
            className="w-full sm:w-auto rounded-xl px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-stone-700 hover:text-stone-900 transition-colors border-2 border-stone-300 hover:border-orange-600 bg-white hover:bg-orange-50"
          >
            Conocer Más
          </a>
        </div>

        {/* Trust Indicators with Animated Counters */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-stone-200 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-12 items-center px-4">
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 font-display">
              <AnimatedCounter end={99} suffix="/100" />
            </div>
            <div className="text-xs sm:text-sm text-stone-600 mt-1">
              Google PageSpeed
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 font-display">
              &lt;
              <AnimatedCounter end={2} suffix="s" />
            </div>
            <div className="text-xs sm:text-sm text-stone-600 mt-1">
              Tiempo de Carga
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 font-display">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-stone-600 mt-1">
              Mobile Responsive
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 font-display">
              SEO+
            </div>
            <div className="text-xs sm:text-sm text-stone-600 mt-1">
              Optimización Total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
