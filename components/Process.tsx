"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{ title: string, desc: string }>;

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative texture/glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading 
          badge={t('process.badge') as string}
          title={t('process.title') as string}
          light
        />

        {/* Horizontal Timeline */}
        <div className="mt-20 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-white/20" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center md:text-left"
              >
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-display font-bold text-xl mx-auto md:mx-0 mb-6 relative z-10 shadow-[0_0_20px_rgba(235,87,35,0.4)]">
                  {i + 1}
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}