import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="pt-32 lg:pt-40 pb-24"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Image */}
          <div className="relative group">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)]"
              style={{ border: '3px solid rgba(201,169,97,0.2)' }}
            >
              <img
                src="/img/image_1.jpg"
                alt="Community gathering"
                className="w-full h-auto object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-105"
                style={{ maxHeight: '580px' }}
              />
            </div>

            {/* Decorative */}
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
              <span style={{ color: '#6B4A34' }}>Who </span>
              <span style={{ color: '#D9A07B' }}>We Are</span>
            </h2>

            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: '#000000' }}>
              Inaayah SG is a Singapore-based online donation platform that connects people with meaningful sadaqah opportunities around the world.
            </p>

            <p className="font-body text-lg leading-relaxed" style={{ color: '#000000' }}>
              Inaayah SG provides an accessible and trustworthy platform for those who wish to partake in meaningful sadaqah programmes and initiatives. Our sadaqah platforms and initiatives are designed to make participation simple, clear and transparent for everyone.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;