import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const links = [
  { name: 'Inicio', href: '/#hero' },
  { name: 'Tours', href: '/#packages' },
  { name: 'Itinerario', href: '/#itinerary' },
  { name: 'Preparación', href: '/#preparacion' },
  { name: 'Preguntas', href: '/#faq' },
  { name: 'Reservar', href: '/#reservar' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/18294312369?text=Hola%20Waooo%20Tours%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20tour%20a%20Isla%20Saona";

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#00FFEF] shadow-md py-3' : 'bg-[#00FFEF] shadow-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex flex-col items-start justify-center">
                <span className="font-heading font-black text-3xl tracking-tighter text-[#EA580C] leading-none mb-1">WAOOO<span className="text-xl align-top ml-0.5">★</span></span>
                <span className="text-[0.6rem] font-bold text-black uppercase tracking-wider leading-none mb-0.5">Tours and Adventures</span>
                <span className="text-[0.6rem] font-bold text-black uppercase tracking-wider leading-none">Punta Cana</span>
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8 text-[15px]">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-semibold hover:text-white transition-colors text-[#0E3F35]`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded text-sm font-bold transition-transform hover:scale-105 shadow-sm bg-[#0E3F35] text-white`}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className={'text-[#0E3F35]'}
              >
                <Bars3Icon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 max-w-sm w-full bg-white z-50 flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-8">
                <a href="#" className="flex flex-col items-start justify-center" onClick={() => setIsOpen(false)}>
                  <span className="font-heading font-black text-3xl tracking-tighter text-[#EA580C] leading-none mb-1">WAOOO<span className="text-xl align-top ml-0.5">★</span></span>
                  <span className="text-[0.6rem] font-bold text-black uppercase tracking-wider leading-none mb-0.5">Tours and Adventures</span>
                  <span className="text-[0.6rem] font-bold text-black uppercase tracking-wider leading-none">Punta Cana</span>
                </a>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 -mt-1 -mr-1">
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>
              
              <div className="flex flex-col space-y-6 text-lg font-medium">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 hover:text-primary transition-colors border-b border-gray-100 pb-2"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-turquoise text-primary-dark py-4 rounded-xl font-bold text-lg hover:bg-turquoise/80 transition-colors shadow-lg shadow-turquoise/30"
                >
                  Reservar por WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
