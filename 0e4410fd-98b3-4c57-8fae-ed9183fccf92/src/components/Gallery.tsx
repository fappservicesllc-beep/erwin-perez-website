import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
export function Gallery() {
  const items = [
  {
    id: 1,
    type: 'El Nuevo Herald',
    title: 'Artículo · Pitbull',
    image: "/multimedia_image_1.png",

    href: 'https://www.elnuevoherald.com/entretenimiento/musica/article314833784.html',
    isVideo: false,
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    type: 'La Trastienda',
    title: 'Detrás de escena',
    image: "/La_Trastienda.png",

    href: 'https://youtube.com/@ErwinPérez',
    isVideo: true,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    type: 'Entretenimiento',
    title: 'Entrevistas VIP',
    image: "/entrevistas_VIP.png",

    href: 'https://www.youtube.com/playlist?list=PLCdBbhIthFsGw5E-R1sbJwgOSWhG1Z-AO',
    isVideo: true,
    span: 'col-span-1 row-span-1'
  }];

  return (
    <section id="portfolio" className="py-24 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-silver/50 block mb-4">
              Multimedia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Momentos{' '}
              <span className="italic text-brand-silver/80">Destacados</span>
            </h2>
          </motion.div>

          <motion.a
            href="https://youtube.com/@ErwinPérez"
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="font-sans text-xs tracking-widest uppercase text-brand-silver hover:text-white pb-1 border-b border-brand-silver/30 hover:border-white transition-colors">
            
            Ver todo el contenido
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {items.map((item, index) =>
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className={`relative group overflow-hidden bg-brand-dark cursor-pointer ${item.span}`}>
            
              <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[30%]" />
            

              {item.isVideo &&
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/20">
                    <Play
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor" />
                
                  </div>
                </div>
            }

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brand-silver/70 block mb-2">
                  {item.type}
                </span>
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}