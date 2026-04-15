import React, { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '@/lib/constants';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '95vh', minHeight: '700px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop"
          className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${
            loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(139,111,71,0.9) 0%, rgba(139,111,71,0.7) 40%, rgba(139,111,71,0.4) 70%, rgba(139,111,71,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-body text-sm font-medium tracking-wider uppercase transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                backgroundColor: 'rgba(201,169,97,0.2)',
                color: '#C9A961',
                border: '1px solid rgba(201,169,97,0.3)',
              }}
            >
              ✨ Begin Your Good Deed
            </div>

            {/* Heading */}
            <h1
              className={`font-heading font-bold leading-[1.08] mb-6 transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                color: '#FFFFFF',
                transitionDelay: '200ms',
              }}
            >
              Every Good Deed
              <br />
              Starts with a{' '}
              <span style={{ color: '#C9A961' }}>First Step</span>
            </h1>

            {/* Subheading */}
            <p
              className={`font-body text-xl md:text-2xl leading-relaxed mb-10 max-w-lg transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                color: 'rgba(255,255,255,0.85)',
                transitionDelay: '400ms',
              }}
            >
              Join thousands of donors making real impact through sadaqah and waqaf.
            </p>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#8B6F47',
                borderRadius: '50px',
                transitionDelay: '600ms',
              }}
            >
              Contact via WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;