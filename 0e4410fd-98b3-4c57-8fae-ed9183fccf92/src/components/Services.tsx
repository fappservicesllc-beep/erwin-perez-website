import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Mic, Sparkles } from 'lucide-react';
export function Services() {
  const services = [
  {
    title: 'Prensa Escrita',
    icon: <Newspaper className="w-8 h-8 stroke-[1.5]" />,
    detail:
    'Columnista estrella en El Nuevo Herald, aportando análisis y exclusivas del mundo del entretenimiento.',
    delay: 0.1
  },
  {
    title: 'Plataformas Digitales',
    icon: <Mic className="w-8 h-8 stroke-[1.5]" />,
    detail:
    "Host del exitoso programa 'La Trastienda' en Latinísima, conectando con la audiencia hispana a través de medios digitales.",
    delay: 0.2
  },
  {
    title: 'Public Relations',
    icon: <Sparkles className="w-8 h-8 stroke-[1.5]" />,
    detail:
    'Estratega de imagen de alto nivel para celebridades, artistas y figuras públicas en el mercado latino.',
    delay: 0.3
  }];

  return (
    <section id="trayectoria" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
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
            }}>
            
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-silver/50 block mb-4">
              Áreas de Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              El Poder de la{' '}
              <span className="italic text-brand-silver/80">Comunicación</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={index}
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
              duration: 0.8,
              delay: service.delay
            }}
            className="group relative p-10 border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500">
            
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-brand-navyLight group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="text-brand-silver/60 group-hover:text-white transition-colors duration-500 mb-8">
                {service.icon}
              </div>

              <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">
                {service.title}
              </h3>

              <p className="font-sans text-brand-silver/70 leading-relaxed font-light">
                {service.detail}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}