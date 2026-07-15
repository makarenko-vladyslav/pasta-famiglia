"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { t } = useLocale();
  const contact = t('contact') as any;
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section id="contacts" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading 
          badge={contact.badge}
          title={contact.title}
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          
          {/* Info & Map */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                <div className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center text-accent mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h4 className="font-bold text-primary mb-1">Адреса</h4>
                <p className="text-text-muted text-sm">{contact.address}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                <div className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center text-accent mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h4 className="font-bold text-primary mb-1">Години роботи</h4>
                <p className="text-text-muted text-sm">{contact.hours}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 sm:col-span-2 flex justify-between items-center flex-wrap gap-4">
                <div>
                  <h4 className="font-bold text-primary mb-1">Зв'язатися</h4>
                  <p className="text-text-muted text-sm mb-1">{contact.email}</p>
                </div>
                <a href={`tel:${contact.phone}`} className="text-2xl font-display font-bold text-accent hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Simple Map Embed Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative">
              <iframe 
                src="https://www.google.com/maps?q=Khreshchatyk+Street,+Kyiv&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-black/5 p-8 md:p-10">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{contact.form.success}</h3>
                <button onClick={() => setStatus('idle')} className="text-accent underline mt-4">Надіслати ще одну</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">{contact.form.name}</label>
                  <input required type="text" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-transparent focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">{contact.form.phone}</label>
                  <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-bg-light border border-transparent focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{contact.form.guests}</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-bg-light border border-transparent focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all">
                      {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-2">{contact.form.time}</label>
                    <input type="time" required className="w-full px-5 py-4 rounded-xl bg-bg-light border border-transparent focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : contact.form.submit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}