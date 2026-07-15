"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function CtaBanner() {
  const { t } = useLocale();
  const cta = t('ctaBanner') as any;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {cta.title}
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              {cta.subtitle}
            </p>
            <a 
              href="#contacts"
              className="inline-block px-10 py-5 bg-accent hover:bg-accent-light hover:text-accent text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(235,87,35,0.3)] hover:scale-105"
            >
              {cta.btnText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}