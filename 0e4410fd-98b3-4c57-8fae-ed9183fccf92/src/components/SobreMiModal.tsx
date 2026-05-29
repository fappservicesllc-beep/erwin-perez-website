import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface SobreMiModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const stats = [
{
  value: '25+',
  label: 'Años de trayectoria'
},
{
  value: '2005',
  label: 'Fundación agencia PR'
},
{
  value: '∞',
  label: 'Voces representadas'
}];

const clients = ['Joaquín Sabina', 'Paco de Lucía', 'Oscar D\u2019León'];
export function SobreMiModal({ isOpen, onClose }: SobreMiModalProps) {
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
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-white/10">
          
            {/* Close button */}
            <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-brand-silver hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 bg-[#1a1a1a]/80 backdrop-blur">
            
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Portrait column */}
              <div className="md:col-span-5 relative bg-[#0f0f0f] min-h-[300px] md:min-h-full">
                <img
                src="/sobre_mi.png"
                alt="Erwin Pérez"
                className="w-full h-full object-cover object-top grayscale-[20%] contrast-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent opacity-70"></div>

                {/* Byline overlay */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/70 block mb-2">
                    Erwin Pérez
                  </span>
                  <span className="font-serif italic text-brand-silver text-sm">
                    Miami · Buenos Aires
                  </span>
                </div>
              </div>

              {/* Text column */}
              <div className="md:col-span-7 p-8 md:p-12 lg:p-14">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="h-[1px] w-10 bg-brand-silver/40"></div>
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-silver/60">
                      Sobre Mí
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white text-balance leading-[1.15]">
                    Una pluma{' '}
                    <span className="italic text-brand-silver/80">
                      influyente
                    </span>{' '}
                    en el mundo hispano
                  </h2>
                </div>

                {/* Bio */}
                <div className="space-y-5 font-sans text-brand-silver/80 font-light leading-relaxed">
                  <p>
                    Periodista y estratega de comunicaciones con más de{' '}
                    <span className="text-white font-medium">
                      25 años de trayectoria
                    </span>{' '}
                    en el mercado hispano de Estados Unidos. Licenciado en
                    Periodismo por la Universidad Nacional de Lomas de Zamora.
                  </p>
                  <p>
                    Su carrera lo ha llevado de Buenos Aires a Miami,
                    consolidándose como una de las plumas más influyentes de{' '}
                    <span className="text-white font-medium">
                      El Nuevo Herald
                    </span>{' '}
                    y una voz referente en la radio de Florida.
                  </p>
                  <p>
                    Desde <span className="text-white font-medium">2005</span>{' '}
                    dirige su propia agencia de relaciones públicas,
                    representando a leyendas de la cultura latina. Productor
                    detrás del éxito de{' '}
                    <span className="italic text-white">“Bayly”</span> (Mega TV)
                    y conductor de sus propios espacios de entrevistas con las
                    personalidades más relevantes del entretenimiento.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
                  {stats.map((stat) =>
                <div key={stat.label}>
                      <div className="font-serif text-3xl md:text-4xl text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brand-silver/50 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                )}
                </div>

                {/* Clients */}
                <div className="mt-10">
                  <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/50 block mb-4">
                    Algunos clientes representados
                  </span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-base md:text-lg text-white">
                    {clients.map((client, i) =>
                  <span key={client} className="flex items-center gap-x-6">
                        {client}
                        {i < clients.length - 1 &&
                    <span className="text-brand-silver/30">·</span>
                    }
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}