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

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#6B4A34">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4A34" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/6590620969"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207z"/>
                </svg>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/6592426981"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475z"/>
                </svg>
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