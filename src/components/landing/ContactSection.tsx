import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const contactInfo = [
    {
      label: 'EMAIL',
      value: 'inaayahsg@gmail.com',
      href: 'mailto:inaayahsg@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <polyline points="3,7 12,13 21,7"/>
        </svg>
      ),
    },
    {
      label: 'PHONE',
      value: ['+65 9062 0969', '+65 9242 6981'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.4 1.77.82 2.57a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 6 6l1.5-1.33a2 2 0 0 1 2.11-.45c.8.42 1.67.7 2.57.82A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: 'LOCATION',
      value: 'Singapore',
      href: null,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 text-sm font-medium uppercase tracking-widest bg-[rgba(139,111,71,0.08)] text-[#8B6F47]">
            Get in Touch
          </div>

          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 leading-tight">
            <span style={{ color: '#6B4A34' }}>Contact </span>
            <span style={{ color: '#D9A07B' }}>Us</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-[#6B6B6B]">
            Have questions or ready to start your giving journey? Reach out to us anytime.
          </p>
        </div>

        {/* Content */}
        <div className={`grid lg:grid-cols-[0.7fr_1.2fr] gap-6 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* LEFT */}
          <div className="flex flex-col gap-10 max-w-sm mx-auto lg:mx-0">
            {contactInfo.map((info, i) => (
              <div key={i} className="grid grid-cols-[64px_1fr] items-center gap-3">

                {/* ICON */}
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#F5EDE4]">
                    {info.icon}
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1 text-[#8B6F47]">
                    {info.label}
                  </p>

                  {/* HANDLE MULTIPLE PHONE */}
                  {Array.isArray(info.value) ? (
                    <p className="text-lg font-medium text-[#2C2C2C]">
                      {info.value.map((val, idx) => (
                        <span key={idx}>
                          <a
                            href={`tel:${val.replace(/\s/g, '')}`}
                            className="hover:opacity-80"
                          >
                            {val}
                          </a>
                          {idx !== info.value.length - 1 && (
                            <span className="mx-1 text-gray-400">/</span>
                          )}
                        </span>
                      ))}
                    </p>
                  ) : info.href ? (
                    <a
                      href={info.href}
                      className="text-lg font-medium text-[#2C2C2C] hover:opacity-80"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-[#2C2C2C]">
                      {info.value}
                    </p>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT - MAP */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Singapore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;