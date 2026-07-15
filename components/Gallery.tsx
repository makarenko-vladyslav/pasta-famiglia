"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as Array<{ url: string, alt: string }>;

  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          badge={t('gallery.badge') as string}
          title={t('gallery.title') as string}
          centered
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-12 space-y-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-md group relative cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => { 
                  e.currentTarget.style.display='none'; 
                  e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-accent/20', 'to-accent/5', 'min-h-[200px]');
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}