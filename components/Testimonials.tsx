"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { StarIcon, QuoteIcon } from './Icons';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<any>;

  return (
    <section id="reviews" className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          badge={t('testimonials.badge') as string}
          title={t('testimonials.title') as string}
          centered
        />

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-16 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-0 snap-center bg-white p-8 rounded-3xl shadow-sm border border-black/5 relative"
            >
              <div className="absolute top-6 right-6 text-black/5">
                <QuoteIcon className="w-10 h-10" />
              </div>
              
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} className={`w-4 h-4 ${j < Math.floor(item.rating) ? 'opacity-100' : 'opacity-30'}`} />
                ))}
              </div>

              <p className="text-text-main italic mb-8 relative z-10 line-clamp-4">"{item.quote}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover bg-bg-light"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-primary">{item.name}</div>
                  <div className="text-sm text-text-muted">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}