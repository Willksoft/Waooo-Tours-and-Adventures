import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title1: "ISLA SAONA",
    title2: "VIP PLUS",
    subtitle: "Triple experiencia caribeña con transporte, snorkeling, piscina natural, buffet y bebidas incluidas.",
    desc: "Vive uno de los tours más completos desde Punta Cana con Waooo Tours and Adventures. Reserva fácil por WhatsApp y prepárate para un día inolvidable."
  },
  {
    title1: "AVENTURA EN",
    title2: "CATAMARÁN",
    subtitle: "Diversión asegurada",
    desc: "Disfruta del sol, la brisa del Caribe y open bar mientras navegamos por aguas cristalinas hacia el paraíso."
  },
  {
    title1: "PISCINA",
    title2: "NATURAL",
    subtitle: "Un oasis en el mar",
    desc: "Báñate en aguas poco profundas, encuentra estrellas de mar y tómate las mejores fotos de tus vacaciones."
  }
];

export default function Hero() {
  const whatsappUrl = "https://wa.me/18294312369?text=Hola%20Waooo%20Tours%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20tour%20a%20Isla%20Saona";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[600px] md:min-h-[565px] h-auto flex items-center overflow-hidden py-24 md:py-0">
      {/* Background Video with Left Gradient */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="https://res.cloudinary.com/dap38hi9l/video/upload/v1778861460/Isla_Saona_e3zf9z.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 top-0 w-full lg:w-3/4 xl:w-2/3 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        {/* Decorative lighting effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/20 blur-[100px] pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white pt-20">
          <div className="min-h-[340px] sm:min-h-[260px] md:min-h-[240px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-4 tracking-tight">
                  <span className="text-white">{slides[currentSlide].title1}</span> <br />
                  <span className="text-white">{slides[currentSlide].title2}</span>
                </h1>
                <p className="text-base md:text-lg font-medium mb-4 text-white/90 max-w-2xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-sm md:text-base mb-4 text-white/90 max-w-xl font-light">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-2"
          >

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 md:px-8 md:py-4 bg-[#00FFEF] hover:bg-[#00FFEF]/90 text-[#0E3F35] font-bold rounded-full text-center transition-all shadow-lg shadow-[#00FFEF]/30 text-base md:text-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Reservar por WhatsApp
            </a>
            <a
              href="#packages"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold rounded-full text-center transition-all border border-white/30 shadow-lg text-lg flex items-center justify-center"
            >
              Explorar Tours
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating elements removed */}

    </section>
  );
}
