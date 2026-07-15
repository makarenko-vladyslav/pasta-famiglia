"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { ClockIcon, ArrowRightIcon } from './Icons';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={t('hero.image') as string}
          alt="Fresh pasta preparation"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-sm font-medium tracking-wide">{t('hero.badge') as string}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight text-balance"
          >
            {t('hero.title') as string}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 max-w-2xl mb-10 text-balance leading-relaxed"
          >
            {t('hero.subtitle') as string}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#contacts"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-light hover:text-accent text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              {t('hero.ctaPrimary') as string}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-medium text-lg transition-all text-center"
            >
              {t('hero.ctaSecondary') as string}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Guarantee Badge (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
        className="absolute bottom-8 right-8 hidden md:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-2xl z-20 max-w-xs"
      >
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
          <ClockIcon className="w-6 h-6" />
        </div>
        <div>
          <p className="font-bold text-primary text-sm leading-tight">{t('hero.guarantee') as string}</p>
        </div>
      </motion.div>
    </section>
  );
}