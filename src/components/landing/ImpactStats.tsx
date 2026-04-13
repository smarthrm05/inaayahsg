import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 15000, suffix: '+', label: 'Donors Worldwide' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '', label: 'Countries Reached' },
  { value: 100, suffix: '%', label: 'Transparent Reporting' },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return count;
}

const StatCard: React.FC<{ stat: StatItem; isVisible: boolean; delay: number }> = ({ stat, isVisible, delay }) => {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div
      className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="font-heading font-bold text-5xl lg:text-6xl mb-2" style={{ color: '#C9A961' }}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="font-body text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {stat.label}
      </p>
    </div>
  );
};

const ImpactStats: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2C2C2C 0%, #3a3a3a 50%, #2C2C2C 100%)',
      }}
    >
      {/* Subtle decorative */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 font-body text-sm font-medium tracking-wider uppercase"
            style={{
              backgroundColor: 'rgba(201,169,97,0.15)',
              color: '#C9A961',
              border: '1px solid rgba(201,169,97,0.2)',
            }}
          >
            Our Impact
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl leading-tight text-white">
            Making a <span style={{ color: '#C9A961' }}>Real Difference</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
