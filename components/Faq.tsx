"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Faq() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{ q: string, a: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          badge={t('faq.badge') as string}
          title={t('faq.title') as string}
          centered
        />

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`bg-white rounded-2xl border transition-colors ${openIndex === i ? 'border-accent/30 shadow-md' : 'border-black/5 hover:border-black/10'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-primary pr-4">{item.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'border-accent text-accent rotate-45' : 'border-black/10 text-text-muted'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-text-muted">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}