import React, { useEffect } from 'react';
import { WHATSAPP_LINK } from '@/lib/constants';

const HeroSection: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translate3d(0, 40px, 0); filter: blur(4px); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
        }

        @keyframes bgParallax {
          0% { transform: scale(1.12) translate3d(0, 8px, 0); opacity: 0.8; }
          100% { transform: scale(1) translate3d(0, 0, 0); opacity: 1; }
        }

        .animate-fade-up {
          animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity, filter;
        }

        .animate-bg-parallax {
          animation: bgParallax 1.4s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up,
          .animate-bg-parallax {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{ height: '95vh', minHeight: '700px' }}
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/img/charity.png"
            alt="Charity"
            className="w-full h-full object-cover animate-bg-parallax"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(15,15,15,0.75) 0%, rgba(15,15,15,0.45) 35%, rgba(15,15,15,0.12) 70%, rgba(15,15,15,0.03) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-2xl">

              {/* Badge */}
              <div
                className="animate-fade-up inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
                style={{
                  backgroundColor: 'rgba(201,169,97,0.18)',
                  color: '#F5EDE4',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  animationDelay: '100ms',
                }}
              >
                ✨ Compassion in Action
              </div>

              {/* Heading */}
              <div className="overflow-hidden">
                <h1
                  className="animate-fade-up font-heading font-bold leading-[1.05]"
                  style={{
                    fontSize: 'clamp(2.7rem, 5.5vw, 4.5rem)',
                    color: '#FFFFFF',
                    textShadow: '0 8px 30px rgba(0,0,0,0.4)',
                    animationDelay: '250ms',
                  }}
                >
                  One Small Act
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1
                  className="animate-fade-up font-heading font-bold leading-[1.05] mb-6"
                  style={{
                    fontSize: 'clamp(2.7rem, 5.5vw, 4.5rem)',
                    color: '#FFFFFF',
                    textShadow: '0 8px 30px rgba(0,0,0,0.4)',
                    animationDelay: '400ms',
                  }}
                >
                  <span style={{ color: '#C9A961' }}> Can Change a Life</span>
                </h1>
              </div>

              {/* Subheading */}
              <p
                className="animate-fade-up font-body text-xl md:text-2xl leading-relaxed mb-10 max-w-xl"
                style={{
                  color: 'rgba(255,255,255,0.94)',
                  animationDelay: '550ms',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                }}
              >
                Your generosity brings comfort, dignity, and hope to those who need it most.
              </p>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-up inline-flex items-center gap-3 px-8 py-4 font-body font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                style={{
                  backgroundColor: '#8B6F47',
                  color: '#ffff',
                  borderRadius: '50px',
                  animationDelay: '700ms',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)',
                }}
              >
               Connect With Us
                {/* 🔥 Arrow Icon */}
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" className="w-full block">
            <path
              d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;