import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';
import { ContactModal } from './ContactModal';
// TikTok icon (not in lucide-react)
const TikTokIcon = ({ className }: {className?: string;}) =>
<svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>;

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const socials = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/@ErwinPérez',
    icon: <Youtube className="w-5 h-5 stroke-[1.5]" />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/erwin_perezok/',
    icon: <Instagram className="w-5 h-5 stroke-[1.5]" />
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@erwinperezok',
    icon: <TikTokIcon className="w-5 h-5" />
  }];

  return (
    <footer
      id="contacto"
      className="relative py-32 overflow-hidden border-t border-white/5">
      
      {/* Background subtle glow */}
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-brand-navyLight/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-silver/50 block mb-6">
            Contacto Directo
          </span>

          <h2 className="font-serif text-5xl md:text-7xl text-white mb-12 text-balance">
            ¿Listo para{' '}
            <span className="italic text-brand-silver/70">elevar</span> tu
            marca?
          </h2>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsContactOpen(true);
            }}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-dark font-sans text-sm tracking-widest uppercase font-medium hover:bg-brand-silver hover:scale-105 transition-all duration-300 cursor-pointer border-0">
            
            Contáctame
          </button>
        </motion.div>
      </div>

      {/* Sígueme Section */}
      <div className="max-w-4xl mx-auto px-6 mt-32 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="flex flex-col items-center">
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-brand-silver/30"></div>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-silver/60">
              Sígueme
            </span>
            <div className="h-[1px] w-12 bg-brand-silver/30"></div>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-white mb-10 text-balance text-center">
            Mantente{' '}
            <span className="italic text-brand-silver/70">conectado</span>
          </h3>

          <div className="flex items-center gap-6">
            {socials.map((social, index) =>
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
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
                duration: 0.4,
                delay: index * 0.1
              }}
              className="group relative w-14 h-14 rounded-full border border-white/15 flex items-center justify-center text-brand-silver/80 hover:text-white hover:border-brand-navyLight hover:bg-brand-navy/20 transition-all duration-300">
              
                {social.icon}
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brand-silver/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-serif text-xl tracking-wide text-white">
          ERWIN PÉREZ
        </div>
        <div className="font-sans text-xs tracking-widest uppercase text-brand-silver/50">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)} />
      
    </footer>);

}