import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Rocket, Gauge } from "lucide-react";

const AnimatedCounter = ({
  end,
  suffix = "",
  decimals = 0,
  duration = 2000,
}) => {
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
      { threshold: 0.3 }
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

      const currentCount = progress * end;
      setCount(
        decimals > 0 ? currentCount.toFixed(decimals) : Math.floor(currentCount)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, decimals]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

const ProofOfConcept = () => {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent top-0"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-rose-100 border border-orange-200 text-orange-700 text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" /> Caso de Éxito Real
            </div>
            <h2 className="text-4xl font-display font-bold tracking-tight text-stone-900 mb-6">
              Rendimiento <span className="gradient-text">demostrado</span>.
            </h2>
            <p className="text-lg text-stone-600 mb-4 leading-relaxed">
              He llevado el rendimiento al límite en{" "}
              <strong className="text-stone-900">SaltySoulTrips</strong>. No es
              solo una web bonita, es una máquina de conversión optimizada.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Esa misma arquitectura y metodología es la que implemento en cada
              proyecto de restaurante.{" "}
              <strong>Resultados reales, medibles</strong>.
            </p>

            <a
              href="https://www.saltysoultrips.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 font-medium border-b-2 border-orange-600 pb-1 hover:text-orange-700 hover:border-orange-700 transition-all"
            >
              Auditar velocidad en SaltySoulTrips.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-stone-50 to-white p-8 ring-1 ring-stone-200 shadow-xl">
              {/* Performance Metrics */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-stone-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-rose-500 flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">
                    PageSpeed Insights
                  </h3>
                  <p className="text-sm text-stone-600">Google Performance</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-stone-700">
                      LCP (Largest Contentful Paint)
                    </span>
                    <span className="text-sm font-bold text-emerald-600">
                      <AnimatedCounter end={0.8} suffix="s" decimals={1} />
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-[95%] h-full rounded-full animate-[slideIn_1.5s_ease-out]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-stone-700">
                      FID (First Input Delay)
                    </span>
                    <span className="text-sm font-bold text-emerald-600">
                      <AnimatedCounter end={12} suffix="ms" />
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-[98%] h-full rounded-full animate-[slideIn_1.7s_ease-out]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-stone-700">
                      CLS (Cumulative Layout Shift)
                    </span>
                    <span className="text-sm font-bold text-emerald-600">
                      <AnimatedCounter end={0} suffix=".00" />
                    </span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-[100%] h-full rounded-full animate-[slideIn_1.9s_ease-out]"></div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200">
                  <div className="text-center">
                    <div className="text-5xl font-bold gradient-text font-display">
                      <AnimatedCounter end={99} />
                    </div>
                    <div className="text-sm text-stone-600 mt-1">
                      Performance Score
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;
