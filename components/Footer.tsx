"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { LogoMark } from './Icons';

export default function Footer() {
  const { t } = useLocale();
  const footer = t('footer') as any;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-8">
          
          <div>
            <div className="flex items-center gap-2 text-white mb-6">
              <LogoMark className="w-8 h-8 text-accent" />
              <span className="font-display font-bold text-2xl">Pasta Famiglia</span>
            </div>
            <p className="text-sm max-w-xs">{footer.desc}</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Навігація</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#menu" className="hover:text-accent transition-colors">Меню</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Про нас</a></li>
              <li><a href="#delivery" className="hover:text-accent transition-colors">Доставка</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Відгуки</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Соціальні мережі</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-white">
                FB
              </a>
            </div>
          </div>

        </div>

        <div className="text-sm text-center">
          © {year} Pasta Famiglia. {footer.rights}
        </div>
      </div>
    </footer>
  );
}