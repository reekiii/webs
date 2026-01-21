import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  ChefHat,
  Wallet,
  MousePointerClick,
} from "lucide-react";

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
      { threshold: 0.5 },
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
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
      className="relative overflow-hidden bg-pattern min-h-screen flex items-center justify-center pt-24 pb-12 px-4"
      id="inicio"
    >
      {/* Decorative Blobs with Float Animation */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 to-rose-400/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/20 to-orange-300/20 rounded-full blur-[100px] animate-float-delayed"></div>

      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full glass-card px-5 py-2.5 text-sm font-semibold text-orange-700 mb-8 shadow-sm animate-fadeIn hover:scale-105 transition-transform cursor-default">
          <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
          <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
            Tu Propio Sistema de Reservas y Pedidos
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-6xl lg:text-9xl font-display font-extrabold tracking-tight text-stone-900 mb-6 sm:mb-8 leading-[1.1] animate-fadeIn px-2 sm:px-0"
          style={{ animationDelay: "0.1s" }}
        >
          Basta de Pagar
          <br />
          <span className="gradient-text relative inline-block">
            Comisiones
            {/* Underline decoration */}
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-orange-400/30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="mt-6 text-xl sm:text-2xl text-stone-600 max-w-3xl mx-auto font-medium px-4 animate-fadeIn leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Tu web, tus clientes,{" "}
          <strong className="text-stone-900">tus beneficios íntegros</strong>.
          Creo la presencia digital que elimina intermediarios y fideliza a tus
          comensales.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#tarifas"
            className="group relative w-full sm:w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 to-rose-600 px-10 py-5 text-lg font-bold text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 animate-shine"></div>
            <span className="relative flex items-center justify-center gap-2">
              Ver Tarifas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#sobre-mi"
            className="w-full sm:w-auto rounded-2xl px-10 py-5 text-lg font-semibold text-stone-700 hover:text-orange-600 bg-white/80 backdrop-blur-sm border border-stone-200 hover:border-orange-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300"
          >
            Cómo Funciona
          </a>
        </div>

        {/* Stats / Trust Indicators */}
        <div
          className="mt-20 pt-10 border-t border-stone-200/50 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Wallet, value: "0", label: "Comisiones", suffix: "€" },
            {
              icon: MousePointerClick,
              value: "100",
              label: "Tus Clientes",
              suffix: "%",
            },
            {
              icon: ChefHat,
              value: "24",
              label: "Abierto Online",
              suffix: "/7",
            },
            { icon: Sparkles, value: "99", label: "PageSpeed", suffix: "/100" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-3 p-3 rounded-2xl bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-stone-900 font-display">
                {stat.value === "0" ? (
                  "0"
                ) : (
                  <AnimatedCounter
                    end={parseInt(stat.value)}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-sm font-medium text-stone-500 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
