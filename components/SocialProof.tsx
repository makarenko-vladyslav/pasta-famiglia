"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('socialProof.stats') as Array<{ value: string, label: string }>;

  return (
    <section className="py-12 bg-white border-b border-black/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">
              {t('socialProof.trusted') as string}
            </p>
            {/* Fake brand logos representing Italian ingredient suppliers */}
            <div className="flex gap-6 items-center opacity-60 grayscale">
              <span className="font-display font-bold text-xl tracking-widest">CAPUTO</span>
              <span className="font-display font-bold text-xl tracking-widest italic">Mutti</span>
              <span className="font-display font-bold text-xl tracking-widest uppercase">Lavazza</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}