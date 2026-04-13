import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Ahmad Bin Ismail',
    role: 'Regular Donor',
    text: 'INAAYAH SG has made it so easy for me to fulfil my sadaqah obligations. The transparency and regular updates give me complete confidence that my contributions are making a real difference.',
    initials: 'AI',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Waqaf Contributor',
    text: 'I have been contributing to the Waqaf Water Well project for over a year now. Knowing that communities now have access to clean water because of our collective efforts is truly humbling.',
    initials: 'SN',
  },
  {
    name: 'Muhammad Faris',
    role: 'Korban Participant',
    text: 'The Korban service was seamless and well-organised. I received detailed photos and reports of the distribution. It felt like I was there in person. JazakAllahu Khairan to the team.',
    initials: 'MF',
  },
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

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
            Testimonials
          </div>
          <h2
            className="font-heading font-bold text-4xl lg:text-5xl mb-5 leading-tight"
            style={{ color: '#2C2C2C' }}
          >
            Words from Our Community
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#6B6B6B' }}
          >
            Hear from donors who have experienced the impact of giving through INAAYAH SG.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                activeIndex === i ? 'shadow-xl' : 'shadow-sm hover:shadow-md'
              }`}
              style={{
                backgroundColor: activeIndex === i ? '#F5EDE4' : '#FAFAFA',
                border: activeIndex === i ? '2px solid rgba(201,169,97,0.3)' : '2px solid transparent',
                transitionDelay: isVisible ? `${i * 100}ms` : '0ms',
              }}
              onClick={() => setActiveIndex(i)}
            >
              {/* Quote icon */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-6"
                style={{ opacity: 0.2 }}
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                  fill="#8B6F47"
                />
                <path
                  d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="#8B6F47"
                />
              </svg>

              {/* Text */}
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: '#2C2C2C' }}>
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-semibold text-sm"
                  style={{ backgroundColor: '#8B6F47', color: '#FFFFFF' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-base" style={{ color: '#2C2C2C' }}>
                    {t.name}
                  </p>
                  <p className="font-body text-sm" style={{ color: '#6B6B6B' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeIndex === i ? '#8B6F47' : 'rgba(139,111,71,0.2)',
                transform: activeIndex === i ? 'scale(1.3)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
