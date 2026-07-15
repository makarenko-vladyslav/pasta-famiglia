"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { WheatIcon, FireIcon, FamilyIcon, ClockIcon } from './Icons';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('advantages.items') as Array<{ icon: string, title: string, desc: string }>;

  const getIcon = (name: string) => {
    switch(name) {
      case 'wheat': return <WheatIcon className="w-8 h-8" />;
      case 'fire': return <FireIcon className="w-8 h-8" />;
      case 'family': return <FamilyIcon className="w-8 h-8" />;
      case 'clock': return <ClockIcon className="w-8 h-8" />;
      default: return <WheatIcon className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          badge={t('advantages.badge') as string}
          title={t('advantages.title') as string}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-bg-light border border-transparent hover:border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}