import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Radio, Newspaper } from 'lucide-react';
export function SocialProof() {
  const brands = [
  {
    name: 'El Nuevo Herald',
    icon: <Newspaper className="w-5 h-5" />
  },
  {
    name: 'Latinísima Radio',
    icon: <Radio className="w-5 h-5" />
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5" />
  },
  {
    name: 'TikTok',
    icon:
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>

  }];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center font-sans text-xs tracking-[0.2em] uppercase text-brand-silver/50 mb-8">
          Presencia en medios destacados
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) =>
          <motion.div
            key={brand.name}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="flex items-center space-x-3 text-brand-silver hover:text-white transition-colors">
            
              {brand.icon}
              <span className="font-serif text-lg md:text-xl tracking-wide">
                {brand.name}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}