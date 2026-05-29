import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrayectoriaModal } from './TrayectoriaModal';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTrayectoriaOpen, setIsTrayectoriaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);
  const navLinks = [
  {
    name: 'Inicio',
    href: '#inicio'
  },
  {
    name: 'Trayectoria',
    href: '#trayectoria',
    isModal: true
  },
  {
    name: 'Portfolio',
    href: '#portfolio'
  },
  {
    name: 'Contacto',
    href: '#contacto'
  }];

  const handleTrayectoriaClick = () => {
    setIsMobileOpen(false);
    setIsTrayectoriaOpen(true);
  };
  return (
    <>
      <motion.nav
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || isMobileOpen ? 'bg-[#1a1a1a]/95 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-white">
              ERWIN PÉREZ
            </span>
            <span className="font-sans text-[0.65rem] tracking-[0.3em] text-brand-silver/70 uppercase mt-0.5">
              Public Relations
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            link.isModal ?
            <button
              key={link.name}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsTrayectoriaOpen(true);
              }}
              className="font-sans text-sm tracking-widest uppercase text-brand-silver/80 hover:text-white transition-colors relative group cursor-pointer bg-transparent border-0 p-0">
              
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-navyLight transition-all duration-300 group-hover:w-full"></span>
                </button> :

            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm tracking-widest uppercase text-brand-silver/80 hover:text-white transition-colors relative group">
              
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-navyLight transition-all duration-300 group-hover:w-full"></span>
                </a>

            )}
          </div>

          {/* Mobile Menu Button — animated hamburger -> X */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-brand-silver hover:text-white transition-colors bg-transparent border-0 cursor-pointer z-[60]">
            
            <span className="sr-only">
              {isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            </span>
            <span className="relative block w-6 h-[14px]">
              <motion.span
                animate={
                isMobileOpen ?
                {
                  rotate: 45,
                  y: 6
                } :
                {
                  rotate: 0,
                  y: 0
                }
                }
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute left-0 top-0 w-6 h-[1.5px] bg-current" />
              
              <motion.span
                animate={
                isMobileOpen ?
                {
                  rotate: -45,
                  y: -6
                } :
                {
                  rotate: 0,
                  y: 12
                }
                }
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute left-0 top-0 w-6 h-[1.5px] bg-current" />
              
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileOpen &&
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
          className="md:hidden fixed inset-0 z-40 bg-[#1a1a1a]/98 backdrop-blur-xl pt-24 pb-12 px-6 overflow-y-auto">
          
            <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 10
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="flex flex-col h-full">
            
              {/* Eyebrow */}
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-[1px] w-10 bg-brand-silver/30"></div>
                <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/50">
                  Menú
                </span>
              </div>

              {/* Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, i) =>
              <motion.div
                key={link.name}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.08
                }}
                className="border-b border-white/10">
                
                    {link.isModal ?
                <button
                  type="button"
                  onClick={handleTrayectoriaClick}
                  className="w-full text-left py-6 font-serif text-3xl text-white hover:text-brand-silver transition-colors flex items-center justify-between bg-transparent border-0">
                  
                        <span>{link.name}</span>
                        <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/40">
                          0{i + 1}
                        </span>
                      </button> :

                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-6 font-serif text-3xl text-white hover:text-brand-silver transition-colors flex items-center justify-between">
                  
                        <span>{link.name}</span>
                        <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/40">
                          0{i + 1}
                        </span>
                      </a>
                }
                  </motion.div>
              )}
              </nav>

              {/* Footer of mobile menu */}
              <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.4,
                delay: 0.5
              }}
              className="mt-auto pt-12">
              
                <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/40 block mb-3">
                  Miami · Buenos Aires
                </span>
                <p className="font-serif italic text-brand-silver/60 text-sm">
                  La voz de las estrellas
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      <TrayectoriaModal
        isOpen={isTrayectoriaOpen}
        onClose={() => setIsTrayectoriaOpen(false)} />
      
    </>);

}