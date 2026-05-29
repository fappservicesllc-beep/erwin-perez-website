import React, { useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const RECIPIENT = 'erwinperezok@gmail.com';
const MESSAGE_MAX = 300;
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
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
  // Reset form a moment after closing
  useEffect(() => {
    if (!isOpen && submitted) {
      const t = setTimeout(() => {
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
        setSubmitted(false);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen, submitted]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone}`,
    '',
    'Mensaje:',
    message].
    join('\n');
    const mailtoUrl = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject || 'Contacto desde el sitio web')}&body=${encodeURIComponent(body)}`;
    // Open the user's email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };
  const isValid =
  name.trim() &&
  email.trim() &&
  subject.trim() &&
  message.trim() &&
  message.length <= MESSAGE_MAX;
  const inputClass =
  'w-full bg-transparent border-0 border-b border-white/15 px-0 py-3 font-sans text-base text-white placeholder:text-brand-silver/30 focus:outline-none focus:border-white transition-colors';
  const labelClass =
  'font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-silver/60 block mb-2';
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
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-white/10">
          
            {/* Close */}
            <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-brand-silver hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300 bg-[#1a1a1a]/80 backdrop-blur">
            
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-10">
                <div className="flex items-center space-x-4 mb-5">
                  <div className="h-[1px] w-10 bg-brand-silver/40"></div>
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-silver/60">
                    Contacto Directo
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white text-balance leading-tight">
                  Cuéntame de tu{' '}
                  <span className="italic text-brand-silver/80">proyecto</span>
                </h2>
                <p className="font-sans text-brand-silver/60 mt-3 text-sm font-light">
                  Envíame un mensaje y te responderé personalmente.
                </p>
              </div>

              {submitted ?
            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4
              }}
              className="py-10 text-center">
              
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-white/30 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    Mensaje listo para enviar
                  </h3>
                  <p className="font-sans text-brand-silver/60 text-sm font-light max-w-md mx-auto leading-relaxed">
                    Se abrió tu cliente de correo con el mensaje preparado. Solo
                    haz clic en enviar.
                  </p>
                  <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-sans text-xs tracking-widest uppercase hover:bg-white/5 transition-colors">
                
                    Cerrar
                  </button>
                </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Nombre
                      </label>
                      <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className={inputClass} />
                  
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className={inputClass} />
                  
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Teléfono
                      </label>
                      <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (305) 000-0000"
                    className={inputClass} />
                  
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Asunto
                      </label>
                      <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Motivo del contacto"
                    className={inputClass} />
                  
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <label htmlFor="message" className={labelClass + ' mb-0'}>
                        Mensaje
                      </label>
                      <span
                    className={`font-sans text-[0.65rem] tracking-widest ${message.length > MESSAGE_MAX ? 'text-red-400' : 'text-brand-silver/40'}`}>
                    
                        {message.length} / {MESSAGE_MAX}
                      </span>
                    </div>
                    <textarea
                  id="message"
                  required
                  rows={4}
                  maxLength={MESSAGE_MAX}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntame brevemente en qué te puedo ayudar."
                  className={`${inputClass} resize-none`} />
                
                  </div>

                  <div className="pt-4">
                    <button
                  type="submit"
                  disabled={!isValid}
                  className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-white text-brand-dark font-sans text-xs tracking-[0.2em] uppercase font-medium hover:bg-brand-silver transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white">
                  
                      Enviar Mensaje
                    </button>
                    <p className="font-sans text-[0.65rem] tracking-widest uppercase text-brand-silver/40 mt-4">
                      Tu mensaje se enviará a {RECIPIENT}
                    </p>
                  </div>
                </form>
            }
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}