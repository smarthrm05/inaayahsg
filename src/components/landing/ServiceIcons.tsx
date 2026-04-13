import React from 'react';

const iconMap: Record<string, React.ReactNode> = {
  quran: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M12 6v7" />
      <path d="M9 9h6" />
    </svg>
  ),
  water: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  korban: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  education: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  madrasah: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <path d="M12 3v4" />
    </svg>
  ),
  masjid: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L4 9v12h16V9L12 3z" />
      <path d="M12 3v6" />
      <path d="M9 21v-6h6v6" />
      <circle cx="12" cy="12" r="1" fill="#8B6F47" />
    </svg>
  ),
  iftar: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  braille: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M12 3v18" />
      <circle cx="9" cy="8" r="1" fill="#8B6F47" />
      <circle cx="9" cy="11" r="1" fill="#8B6F47" />
      <circle cx="9" cy="14" r="1" fill="#8B6F47" />
      <circle cx="15" cy="8" r="1" fill="#8B6F47" />
      <circle cx="15" cy="11" r="1" fill="#8B6F47" />
      <circle cx="15" cy="14" r="1" fill="#8B6F47" />
    </svg>
  ),
  haji: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M6 21V10l6-4 6 4v11" />
      <path d="M10 21v-5h4v5" />
      <path d="M12 6v3" />
    </svg>
  ),
};

export const ServiceIcon: React.FC<{ name: string }> = ({ name }) => {
  return <>{iconMap[name] || iconMap.quran}</>;
};