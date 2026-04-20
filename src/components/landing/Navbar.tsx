import React, { useState, useEffect } from 'react';
import { navLinks, WHATSAPP_LINK } from '@/lib/constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/img/logo.png"
            alt="INAAYAH SG Logo"
            className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          />

          <span
            className="font-heading text-xl font-bold tracking-wide transition-colors duration-300"
            style={{ color: scrolled ? '#8B6F47' : '#FFFFFF' }}
          >
            INAAYAH SG
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-body text-[17px] font-medium transition-colors duration-300 hover:opacity-80"
              style={{ color: scrolled ? '#2C2C2C' : '#FFFFFF' }}
            >
              {link.label}
            </button>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{ backgroundColor: scrolled ? '#2C2C2C' : '#FFFFFF' }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
            style={{ backgroundColor: scrolled ? '#2C2C2C' : '#FFFFFF' }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{ backgroundColor: scrolled ? '#2C2C2C' : '#FFFFFF' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white/98 backdrop-blur-md ${
          mobileOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-body text-lg font-medium text-left py-2 transition-colors"
              style={{ color: '#2C2C2C' }}
            >
              {link.label}
            </button>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body font-semibold text-white mt-2 transition-all duration-300"
            style={{ backgroundColor: '#25D366' }}
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;