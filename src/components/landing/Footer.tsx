import React from 'react';
import { navLinks } from '@/lib/constants';

const Footer: React.FC = () => {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Quranic Projects', href: '#focusarea' },
    { label: 'Khatamul Quran', href: '#focusarea' },
    { label: 'Waqaf Projects', href: '#focusarea' },
    { label: 'Madrasah and Masjid Developments', href: '#focusarea' },
  ];

  return (
    <footer style={{ backgroundColor: '#FCE8DD' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/img/logo.png"
                alt="Inaayah Logo"
                className="w-10 h-10 object-contain shrink-0"
              />
              <span className="font-heading text-xl font-bold text-[#6B4A34] tracking-wide leading-none">
                INAAYAH SG
              </span>
            </div>

            <p className="font-body text-base leading-relaxed mb-6 text-black/70">
              A trusted Singapore-based sadaqah and waqaf platform empowering Muslims to give with confidence and make a lasting impact.
            </p>

            {/* WhatsApp Buttons */}
            <div className="flex flex-col gap-3 mt-4">

              {/* WhatsApp Button 1 */}
              <a
                href="https://wa.me/6590620969"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: '#8B5E3C' }}
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16.04 2C8.29 2 2 8.29 2 16.04c0 2.83.84 5.47 2.29 7.69L2 30l6.44-2.27a13.94 13.94 0 007.6 2.21h.01c7.75 0 14.04-6.29 14.04-14.04C30.09 8.29 23.8 2 16.04 2zm0 25.53h-.01a11.45 11.45 0 01-5.84-1.6l-.42-.25-3.82 1.35 1.36-3.72-.27-.43a11.48 11.48 0 01-1.77-6.12c0-6.34 5.16-11.5 11.5-11.5 3.07 0 5.96 1.2 8.13 3.37a11.44 11.44 0 013.37 8.13c0 6.34-5.16 11.5-11.5 11.5zm6.32-8.63c-.35-.18-2.07-1.02-2.39-1.13-.32-.12-.55-.18-.78.18-.23.35-.89 1.13-1.09 1.36-.2.23-.4.26-.75.09-.35-.18-1.49-.55-2.83-1.75-1.04-.93-1.74-2.07-1.95-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.18-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.92.43-.32.35-1.21 1.18-1.21 2.87 0 1.69 1.24 3.32 1.41 3.55.18.23 2.44 3.72 5.91 5.21.83.36 1.47.57 1.97.73.83.26 1.58.22 2.18.13.67-.1 2.07-.85 2.36-1.68.29-.83.29-1.54.2-1.68-.08-.14-.31-.23-.66-.41z"/>
              </svg>
                +65 9062 0969
              </a>

              {/* WhatsApp Button 2 */}
              <a
                href="https://wa.me/6592426981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-5 py-3 rounded-full font-medium border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: '#8B5E3C',
                  color: '#8B5E3C',
                  backgroundColor: 'transparent'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16.04 2C8.29 2 2 8.29 2 16.04c0 2.83.84 5.47 2.29 7.69L2 30l6.44-2.27a13.94 13.94 0 007.6 2.21h.01c7.75 0 14.04-6.29 14.04-14.04C30.09 8.29 23.8 2 16.04 2zm0 25.53h-.01a11.45 11.45 0 01-5.84-1.6l-.42-.25-3.82 1.35 1.36-3.72-.27-.43a11.48 11.48 0 01-1.77-6.12c0-6.34 5.16-11.5 11.5-11.5 3.07 0 5.96 1.2 8.13 3.37a11.44 11.44 0 013.37 8.13c0 6.34-5.16 11.5-11.5 11.5zm6.32-8.63c-.35-.18-2.07-1.02-2.39-1.13-.32-.12-.55-.18-.78.18-.23.35-.89 1.13-1.09 1.36-.2.23-.4.26-.75.09-.35-.18-1.49-.55-2.83-1.75-1.04-.93-1.74-2.07-1.95-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.18-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.18-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.92.43-.32.35-1.21 1.18-1.21 2.87 0 1.69 1.24 3.32 1.41 3.55.18.23 2.44 3.72 5.91 5.21.83.36 1.47.57 1.97.73.83.26 1.58.22 2.18.13.67-.1 2.07-.85 2.36-1.68.29-.83.29-1.54.2-1.68-.08-.14-.31-.23-.66-.41z"/>
              </svg>
                +65 9242 6981
              </a>

            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-heading font-semibold text-base text-[#6B4A34] mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-base transition-colors duration-300 hover:text-[#6B4A34] text-black/70"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-heading font-semibold text-base text-[#6B4A34] mb-5 uppercase tracking-wider">
              Focus Area
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-base transition-colors duration-300 hover:text-[#6B4A34] text-black/70"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-heading font-semibold text-base text-[#6B4A34] mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@inaayahsg.com" className="text-black/70 hover:text-[#6B4A34]">
                  info@inaayahsg.com
                </a>
              </li>
              <li>
                <span className="text-black/70">
                  +65 9062 0969 / +65 9242 6981
                </span>
              </li>
              <li>
                <span className="text-black/70">Singapore</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/50">
            &copy; {new Date().getFullYear()} INAAYAH SG. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-black/50 hover:text-[#6B4A34]">
              Privacy Policy
            </button>
            <button className="text-sm text-black/50 hover:text-[#6B4A34]">
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;