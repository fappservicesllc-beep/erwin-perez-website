import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SobreMiModal } from './SobreMiModal';
export function Hero() {
  const [isSobreMiOpen, setIsSobreMiOpen] = useState(false);
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-0 md:pb-0 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-navy/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-silver/40"></div>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-silver/70">
                Periodismo · Relaciones Públicas
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6 text-balance">
              La Voz de las{' '}
              <span className="italic text-brand-silver/90">Estrellas</span> en
              Miami
            </h1>

            <p className="font-sans text-lg md:text-xl text-brand-silver/80 max-w-2xl leading-relaxed font-light mb-10">
              Periodista de El Nuevo Herald | Host de 'La Trastienda' en
              Latinísima | Estratega de Relaciones Públicas
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsSobreMiOpen(true);
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-sans text-sm tracking-widest uppercase font-medium hover:bg-white/5 transition-colors cursor-pointer bg-transparent">
                
                Sobre Mí
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.4
            }}
            className="relative w-full max-w-md aspect-[3/4]">
            
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-brand-navyLight/30 translate-x-4 translate-y-4 z-0"></div>

            <div className="relative z-10 w-full h-full overflow-hidden bg-brand-dark">
              <img
                src="/Hero_Image.png"
                alt="Erwin Pérez"
                className="w-full h-full object-cover object-top grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-700" />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <SobreMiModal
        isOpen={isSobreMiOpen}
        onClose={() => setIsSobreMiOpen(false)} />
      
    </section>);

}