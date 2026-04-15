import React from 'react';
import { aboutImage } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const focusAreas = [
  {
    desc: 'Printing, distribution & teaching',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M12 6v7" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
  {
    title: 'Khatamul Quran',
    desc: 'Complete Quran recitation programs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Waqaf Projects',
    desc: 'Sustainable endowment initiatives',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Madrasah & Masjid',
    desc: 'Islamic institution development',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="about" 
      className="pt-32 lg:pt-40 pb-24"
      style={{ 
        backgroundColor: '#FFFFFF',
      }}
    >
      <div 
        ref={ref} 
        className="max-w-7xl mx-auto px-6 lg:px-10"
      >
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Left: Image */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: '3px solid rgba(201,169,97,0.2)' }}
            >
              <img
                src={aboutImage}
                alt="Hands giving in charity"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '580px' }}
              />
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl -z-10"
              style={{ backgroundColor: 'rgba(201,169,97,0.15)' }}
            />
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10"
              style={{ backgroundColor: 'rgba(139,111,71,0.1)' }}
            />
          </div>

          {/* Right: Content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 font-body text-sm font-medium tracking-wider uppercase"
              style={{
                backgroundColor: 'rgba(139,111,71,0.08)',
                color: '#8B6F47',
              }}
            >
              About Us
            </div>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 leading-tight">
              <span style={{ color: '#C9A961' }}>Who We </span>
              <span style={{ color: '#2C2C2C' }}>Are</span>
            </h2>

            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
              Inaayah SG is a Singapore-based online donation platform that connects people with meaningful sadaqah opportunities around the world.
            </p>

            <p className="font-body text-lg leading-relaxed mb-10" style={{ color: '#6B6B6B' }}>
              Inaayah SG provides an accessible and trustworthy platform for those who wish to partake in meaningful sadaqah programmes and initiatives. Our sadaqah platforms and initiatives are designed to make participation simple, clear and transparent for everyone.
            </p>

            {/* Focus Areas */}
            <div className="grid sm:grid-cols-2 gap-5">
              {focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: '#F5EDE4' }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(139,111,71,0.1)' }}
                  >
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-base mb-0.5" style={{ color: '#2C2C2C' }}>
                      {area.title}
                    </h4>
                    <p className="font-body text-sm" style={{ color: '#6B6B6B' }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;