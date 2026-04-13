import React, { useEffect, useRef, useState } from 'react';
import { heroImages, WHATSAPP_LINK } from '@/lib/constants';

const HeroSection: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Small delay for entrance animation
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let animId: number;
    let pos1 = 0;
    let pos2 = 0;
    const speed1 = 0.4;
    const speed2 = 0.28;

    const animate = () => {
      pos1 -= speed1;
      pos2 += speed2;

      if (row1Ref.current) {
        const totalW = row1Ref.current.scrollWidth / 3;
        if (Math.abs(pos1) >= totalW) pos1 += totalW;
        row1Ref.current.style.transform = `translateX(${pos1}px)`;
      }
      if (row2Ref.current) {
        const totalW = row2Ref.current.scrollWidth / 3;
        if (pos2 >= totalW) pos2 -= totalW;
        row2Ref.current.style.transform = `translateX(${pos2 - totalW}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const topImages = [...heroImages.slice(0, 3), ...heroImages.slice(0, 3), ...heroImages.slice(0, 3)];
  const bottomImages = [...heroImages.slice(3), ...heroImages.slice(3), ...heroImages.slice(3)];

  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: '90vh', minHeight: '650px' }}>
      {/* Scrolling image collage background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-5 py-12">
        {/* Row 1 - scrolls left */}
        <div className="overflow-hidden">
          <div ref={row1Ref} className="flex gap-5 will-change-transform" style={{ width: 'max-content' }}>
            {topImages.map((src, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: '340px',
                  height: '240px',
                  borderRadius: '24px',
                  border: '2px solid rgba(156,175,136,0.6)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                }}
              >
                <img
                  src={src}
                  alt="Charity work"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 - scrolls right */}
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex gap-5 will-change-transform" style={{ width: 'max-content' }}>
            {bottomImages.map((src, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 overflow-hidden"
                style={{
                  width: '300px',
                  height: '210px',
                  borderRadius: '24px',
                  border: '2px solid rgba(156,175,136,0.6)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                }}
              >
                <img
                  src={src}
                  alt="Charity work"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlay - stronger on mobile for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(139,111,71,0.95) 0%, rgba(139,111,71,0.82) 35%, rgba(139,111,71,0.45) 65%, rgba(139,111,71,0.15) 100%)
          `,
        }}
      />
      {/* Additional mobile overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: 'rgba(139,111,71,0.3)',
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
                transitionDelay: '200ms',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Begin Your Good Deed
            </div>

            {/* Heading */}
            <h1
              className={`font-heading font-bold leading-[1.08] mb-6 transition-all duration-1000 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                color: '#FFFFFF',
                transitionDelay: '400ms',
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
              style={{ color: 'rgba(255,255,255,0.85)', transitionDelay: '600ms' }}
            >
              Join thousands of donors making real impact through sadaqah and waqaf.
            </p>

            {/* CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#8B6F47',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                borderRadius: '50px',
                transitionDelay: loaded ? '800ms' : '0ms',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div 
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        style={{ 
          lineHeight: 0,
          marginBottom: '-1px',
        }}
      >
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full block"
          style={{ 
            display: 'block',
            border: 'none',
            outline: 'none',
          }}
        >
          <path 
            d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z" 
            fill="#FFFFFF"
            stroke="none"
            style={{ border: 'none', outline: 'none' }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;