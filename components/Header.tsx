"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { LogoMark } from './Icons';
import Link from 'next/link';

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: t('nav.menu') },
    { href: '#about', label: t('nav.about') },
    { href: '#delivery', label: t('nav.delivery') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#contacts', label: t('nav.contacts') },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-light/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-2 group ${scrolled ? 'text-primary' : 'text-white'}`}>
          <div className="p-1.5 bg-accent/10 rounded-lg text-accent group-hover:scale-105 transition-transform">
            <LogoMark className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">Pasta Famiglia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}
            >
              {link.label as string}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href="#contacts"
            className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all
              ${scrolled 
                ? 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary'
              }`}
          >
            {t('nav.book') as string}
          </a>
          
          <button 
            className={`lg:hidden p-2 -mr-2 ${scrolled ? 'text-primary' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-light border-b border-black/5 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-lg font-medium text-primary py-2 border-b border-black/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label as string}
                </Link>
              ))}
              <a 
                href="#contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-accent text-white text-center py-3 rounded-xl font-medium"
              >
                {t('nav.book') as string}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}