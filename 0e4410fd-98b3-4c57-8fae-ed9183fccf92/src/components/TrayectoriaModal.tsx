import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface TrayectoriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const images = [
// Top row — horizontal
{
  src: "/tayectoria_6.png",
  caption: 'Celia Cruz · Entrevista exclusiva'
},
{
  src: "/trayectoria_1.png",
  caption: 'Enrique Iglesias'
},
{
  src: "/trayectoria_4.png",
  caption: 'Ricky Martin'
},
// Bottom row — vertical
{
  src: "/trayectoria_2.png",
  caption: 'José Luis Rodríguez "El Puma"'
},
{
  src: "/trayectoria_3.png",
  caption: 'Carlos Vives'
},
{
  src: "/trayectoria_5.png",
  caption: 'Detrás de cámaras'
}];

export function TrayectoriaModal({ isOpen, onClose }: TrayectoriaModalProps) {
  // Close on ESC + lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.3
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:py-16 bg-black/85 backdrop-blur-md"
        onClick={onClose}>
        
          <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.98
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-white/10">
          
            {/* Close button */}
            <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-brand-silver hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300">
            
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 md:p-14">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="h-[1px] w-12 bg-brand-silver/30"></div>
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-silver/60">
                    Trayectoria
                  </span>
                  <div className="h-[1px] w-12 bg-brand-silver/30"></div>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl text-white text-balance">
                  Una vida entre{' '}
                  <span className="italic text-brand-silver/80">leyendas</span>
                </h2>
                <p className="font-sans text-brand-silver/60 mt-4 max-w-2xl mx-auto font-light">
                  Momentos capturados a lo largo de décadas cubriendo a las
                  figuras más icónicas del entretenimiento latino.
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                {images.map((img, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.08
                }}
                className="group relative overflow-hidden bg-brand-dark border border-white/5">
                
                    <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out grayscale-[15%] group-hover:grayscale-0" />
                
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brand-silver/80 block">
                        {img.caption}
                      </span>
                    </div>
                  </motion.div>
              )}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <a
                href="https://www.youtube.com/@ErwinP%C3%A9rez/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-dark font-sans text-sm tracking-widest uppercase font-medium hover:bg-brand-silver hover:scale-105 transition-all duration-300">
                
                  Haz clic aquí para más
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}