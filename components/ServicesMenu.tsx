"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { ArrowRightIcon } from './Icons';

// Pattern 6: Editorial Asymmetric
export default function ServicesMenu() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{ title: string, desc: string, image: string, price: string }>;

  if (!items || items.length < 4) return null;

  const featured = items[0];
  const listItems = items.slice(1, 4);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <SectionHeading 
          badge={t('services.badge') as string}
          title={t('services.title') as string}
          subtitle={t('services.subtitle') as string}
          centered
        />

        <div className="grid lg:grid-cols-12 gap-8 mt-16">
          
          {/* Featured Item (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex justify-between items-start gap-4 pr-4">
              <div>
                <h3 className="text-3xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{featured.title}</h3>
                <p className="text-text-muted text-lg">{featured.desc}</p>
              </div>
              <div className="bg-bg-light px-4 py-2 rounded-lg text-primary font-bold whitespace-nowrap">
                {featured.price}
              </div>
            </div>
          </motion.div>

          {/* List Items (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {listItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-bg-light transition-colors"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-text-muted text-sm line-clamp-2 mb-2">{item.desc}</p>
                  <span className="font-bold text-accent text-sm">{item.price}</span>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4 pt-6 border-t border-black/5"
            >
              <a href="#delivery" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
                Завантажити повне меню PDF
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}