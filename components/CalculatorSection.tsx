"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';
import SectionHeading from './SectionHeading';

export default function CalculatorSection() {
  const { t } = useLocale();
  const [guests, setGuests] = useState<number>(15);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    // Simple calculation logic based on JSON
    const base = pricingData.basePricePerGuest * guests;
    setTotal(base);
  }, [guests]);

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/5 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-black/5 relative overflow-hidden">
          {/* Card Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

          <SectionHeading 
            badge={t('calculator.badge') as string}
            title={t('calculator.title') as string}
            subtitle={t('calculator.subtitle') as string}
            centered
          />

          <div className="mt-12 max-w-2xl mx-auto space-y-10">
            {/* Slider */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-primary font-bold text-lg">{t('calculator.sliderLabel') as string}</label>
                <span className="text-3xl font-display font-bold text-accent">{guests}</span>
              </div>
              <input 
                type="range" 
                min={pricingData.minGuests} 
                max={pricingData.maxGuests} 
                step={pricingData.step}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2 bg-bg-light rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>{pricingData.minGuests}</span>
                <span>{pricingData.maxGuests}</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="bg-bg-light p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-text-muted font-medium mb-1">{t('calculator.totalLabel') as string}</p>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                  ~ {total.toLocaleString('uk-UA')} {pricingData.currency}
                </div>
              </div>
              <a 
                href="#contacts"
                className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-bold transition-all text-center shadow-lg shadow-accent/20"
              >
                {t('calculator.cta') as string}
              </a>
            </div>

            <p className="text-sm text-text-muted text-center max-w-xl mx-auto italic">
              {t('calculator.note') as string}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}