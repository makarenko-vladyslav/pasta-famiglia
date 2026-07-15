"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { CheckIcon } from './Icons';

export default function TrustSection() {
  const { t } = useLocale();
  const points = t('trust.points') as Array<{ title: string, desc: string }>;

  return (
    <section id="about" className="py-24 bg-bg-light overflow-hidden relative">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={t('trust.image') as string} 
                alt="Open Kitchen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-black/5">
              <div className="text-4xl font-display font-bold text-accent mb-2">100%</div>
              <p className="font-medium text-primary text-sm">Ручна робота. Ми не використовуємо машинну нарізку.</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <div>
            <SectionHeading 
              badge={t('trust.badge') as string}
              title={t('trust.title') as string}
              subtitle={t('trust.subtitle') as string}
            />

            <div className="space-y-8 mt-10">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-accent">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary mb-2">{point.title}</h3>
                    <p className="text-text-muted">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}