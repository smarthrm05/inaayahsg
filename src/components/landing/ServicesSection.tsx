import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ServiceIcon } from './ServiceIcons';

const services = [
  {
    icon: 'quran',
    title: 'Quran Services',
    description: 'Distribution & Teaching of the Holy Quran',
  },
  {
    icon: 'water',
    title: 'Waqaf Water Well',
    description: 'Clean Water Wells for Villages',
  },
  {
    icon: 'korban',
    title: 'Korban / Qurban',
    description: 'Annual Qurban Program',
  },
  {
    icon: 'education',
    title: 'Hafiz Education',
    description: 'Supporting Quran Memorizers',
  },
  {
    icon: 'madrasah',
    title: 'Waqaf Madrasah',
    description: 'Islamic School Development',
  },
  {
    icon: 'masjid',
    title: 'Waqaf Masjid',
    description: 'Mosque Construction & Renovation',
  },
  {
    icon: 'iftar',
    title: 'Iftar Programs',
    description: 'Ramadan Iftar for Those in Need',
  },
  {
    icon: 'braille',
    title: 'Braille Quran',
    description: 'Quran for Visually Impaired',
  },
  {
    icon: 'haji',
    title: 'Badal Haji & Umrah',
    description: 'Proxy Pilgrimage Services',
  },
];

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Wave Divider - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: '120px' }}>
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,0 L0,0 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Wave Divider - Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ height: '120px' }}>
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* ✅ BADGE */}
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 font-body text-sm font-medium tracking-wider uppercase"
            style={{
              backgroundColor: 'rgba(139,111,71,0.08)',
              color: '#8B6F47',
            }}
          >
            Our Services
          </div>

          {/* Title */}
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 leading-tight">
              <span style={{ color: '#6B4A34' }}>Built on</span>
              <span style={{ color: '#D9A07B' }}> Faith and Care</span>
            </h2>

          {/* Subtitle */}
          <p
            className="font-body text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Meaningful sadaqah opportunities for everyone
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-white rounded-3xl p-8 transition-all duration-500 ease-out cursor-pointer text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 80}ms` : '0ms',
                boxShadow:
                  hoveredCard === i
                    ? '0 20px 60px rgba(139,111,71,0.15)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                transform:
                  hoveredCard === i
                    ? 'translateY(-12px) scale(1.02)'
                    : 'translateY(0) scale(1)',
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-500"
                style={{
                  backgroundColor: hoveredCard === i ? '#8B6F47' : '#F5EDE4',
                  transform:
                    hoveredCard === i
                      ? 'scale(1.1) rotate(5deg)'
                      : 'scale(1)',
                }}
              >
                <div
                  style={{
                    filter:
                      hoveredCard === i ? 'brightness(0) invert(1)' : 'none',
                  }}
                >
                  <ServiceIcon name={service.icon} />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-lg mb-1 text-[#2C2C2C]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-[#888888]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;