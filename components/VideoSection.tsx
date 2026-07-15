"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const posterUrl = t('video.posterUrl') as string;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeading 
          badge={t('video.badge') as string}
          title={t('video.title') as string}
          centered
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mt-12 bg-primary group"
        >
          {!isPlaying ? (
            <>
              <img 
                src={posterUrl} 
                alt="Restaurant atmosphere" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center pl-1 shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>
              </div>
            </>
          ) : (
            <video 
              autoPlay 
              controls 
              className="w-full h-full"
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder
            >
              Your browser does not support HTML video.
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
}