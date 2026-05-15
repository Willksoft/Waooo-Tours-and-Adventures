import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import WaveDivider from './WaveDivider';

const destinations = [
  {
    id: 1,
    title: 'El Canto de la Playa',
    image: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867156/5e794a571d9709785a3618208a2c738b55393c67407a5ca264b49700e99603bc_ozllla.avif',
    thumb: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867156/5e794a571d9709785a3618208a2c738b55393c67407a5ca264b49700e99603bc_ozllla.avif',
  },
  {
    id: 2,
    title: 'Mano Juan',
    image: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867197/mano-juan-6_syx0fk.jpg',
    thumb: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867197/mano-juan-6_syx0fk.jpg',
  },
  {
    id: 3,
    title: 'Playa el Toro',
    image: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867258/playa-el-toro-isla-saona-2-1024x767_re0fet.webp',
    thumb: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867258/playa-el-toro-isla-saona-2-1024x767_re0fet.webp',
  },
  {
    id: 4,
    title: 'Los Manglares',
    image: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867289/b2b5e8_aa8018bfbafd4705ab01913886bbf11a_mv2_eugucs.avif',
    thumb: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867289/b2b5e8_aa8018bfbafd4705ab01913886bbf11a_mv2_eugucs.avif',
  },
  {
    id: 5,
    title: 'Playa de Arena Blanca',
    image: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778866954/Playa_de_arena_blanca_en_Isla_Saona_con_AndalCaribe_RD_0b8b5393-fcd5-468a-8c49-1cc4dca0ffb3_g3kvza.webp',
    thumb: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778866954/Playa_de_arena_blanca_en_Isla_Saona_con_AndalCaribe_RD_0b8b5393-fcd5-468a-8c49-1cc4dca0ffb3_g3kvza.webp',
  },
  {
    id: 6,
    title: 'Piscina Natural',
    image: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867013/86_iezkkq.jpg',
    thumb: 'https://res.cloudinary.com/dap38hi9l/image/upload/v1778867013/86_iezkkq.jpg',
  }
];

export default function DestinationsGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % destinations.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + destinations.length) % destinations.length);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8 }} 
      id="destinos" 
      className="py-24 pb-32 bg-sand relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-turquoise/10 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tight mb-4">
            Destinos que Visitarás
          </h2>
          <p className="text-md md:text-lg text-gray-500 max-w-2xl mx-auto">
            Explora los hermosos lugares y atractivos que conocerás en tu viaje. Haz clic para ver las fotos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg cursor-pointer max-w-sm mx-auto"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={dest.thumb} 
                alt={dest.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-0 right-0 px-6 text-center">
                <h3 className="font-decorative text-3xl md:text-4xl text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  {dest.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider position="bottom" color="text-white" />

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur-md transition-all z-10"
              onClick={() => setSelectedImageIndex(null)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-4 rounded-full backdrop-blur-md transition-all z-10"
              onClick={handlePrev}
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <button 
              className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-black/30 hover:bg-black/50 p-4 rounded-full backdrop-blur-md transition-all z-10"
              onClick={handleNext}
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={destinations[selectedImageIndex].image} 
                alt={destinations[selectedImageIndex].title} 
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 text-center bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                <h3 className="text-3xl font-heading font-bold text-white">
                  {destinations[selectedImageIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
