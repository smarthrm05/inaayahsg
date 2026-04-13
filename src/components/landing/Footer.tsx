import React from 'react';
import { navLinks, WHATSAPP_LINK } from '@/lib/constants';

const Footer: React.FC = () => {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Quran Services', href: '#services' },
    { label: 'Waqaf Projects', href: '#services' },
    { label: 'Korban / Qurban', href: '#services' },
    { label: 'Hafiz Education', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <footer style={{ backgroundColor: '#8B6F47' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-wide">
                INAAYAH SG
              </span>
            </div>
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
              A trusted Singapore-based sadaqah and waqaf platform empowering Muslims to give with confidence and make a lasting impact.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#25D366' }}
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-base text-white mb-5 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-base transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-semibold text-base text-white mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-base transition-colors duration-300 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base text-white mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@inaayahsg.com"
                  className="font-body text-base transition-colors duration-300 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  info@inaayahsg.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6590620969"
                  className="font-body text-base transition-colors duration-300 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  +65 9062 0969
                </a>
              </li>
              <li>
                <span className="font-body text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Singapore
                </span>
              </li>
              <li>
                <span className="font-body text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Mon – Fri, 9 AM – 6 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              &copy; {new Date().getFullYear()} INAAYAH SG. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNav('#home')}
                className="font-body text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNav('#home')}
                className="font-body text-sm transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
