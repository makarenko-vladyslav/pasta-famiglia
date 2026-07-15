"use client";

import React from 'react';

export const WheatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5" />
    <path d="M12 17c-2-2-4-2-4-5 0-3 2-4 4-4s4 1 4 4c0 3-2 3-4 5z" />
    <path d="M12 8c-1.5-1.5-3-1.5-3-4 0-2 1.5-3 3-3s3 1 3 3c0 2.5-1.5 2.5-3 4z" />
    <path d="M8 12c-2-1.5-4-1.5-4-4 0-2 2-3 4-3" />
    <path d="M16 12c2-1.5 4-1.5 4-4 0-2-2-3-4-3" />
  </svg>
);

export const FireIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-4.5 3-4.5 7.5A4.5 4.5 0 0 0 12 14a4.5 4.5 0 0 0 4.5-4.5C16.5 5 12 2 12 2z" />
    <path d="M8.5 12.5C7 13.5 6 15 6 17a6 6 0 0 0 12 0c0-2-1-3.5-2.5-4.5" />
  </svg>
);

export const ClockIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const FamilyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="18" cy="11" r="3" />
    <path d="M21 21v-2a3 3 0 0 0-3-3h-1" />
  </svg>
);

export const CheckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const QuoteIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none" opacity="0.2">
    <path d="M10 11h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4v8zm11 0h-4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4v8z" />
    <path d="M6 11s0 4 4 4v2a6 6 0 0 1-6-6v-1h2zm11 0s0 4 4 4v2a6 6 0 0 1-6-6v-1h2z" />
  </svg>
);

export const ArrowRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Fork */}
    <path d="M16 4v14" />
    <path d="M10 4v6a6 6 0 0 0 12 0V4" />
    <path d="M16 18v10" />
    {/* Pasta swirl */}
    <path d="M8 14c-2 2-2 6 2 8s8-2 10 2 2 6-2 8" strokeWidth="1.5" className="text-accent" />
  </svg>
);