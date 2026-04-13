import React from 'react';
import { trustItems } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const trustIcons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  report: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  globe: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  lock: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  ),
};

const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 font-body text-sm font-medium tracking-wider uppercase"
            style={{
              backgroundColor: 'rgba(201,169,97,0.1)',
              color: '#C9A961',
            }}
          >
            Why Choose Us
          </div>
          <h2
            className="font-heading font-bold text-4xl lg:text-5xl mb-5 leading-tight"
            style={{ color: '#2C2C2C' }}
          >
            Built on Trust & Transparency
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#6B6B6B' }}
          >
            We are committed to ensuring every contribution is handled with the utmost care, integrity, and accountability.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className={`text-center p-8 rounded-3xl transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 120}ms` : '0ms',
                backgroundColor: '#F5EDE4',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'rgba(201,169,97,0.12)' }}
              >
                {trustIcons[item.icon]}
              </div>
              <h3
                className="font-heading font-semibold text-xl mb-3"
                style={{ color: '#2C2C2C' }}
              >
                {item.title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: '#6B6B6B' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
