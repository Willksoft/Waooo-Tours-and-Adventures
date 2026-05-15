import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { packages } from '../data/packages';
import { CheckCircleIcon, ClockIcon, ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function TourDetails() {
  const { id } = useParams();
  const pkg = packages.find(p => p.id === Number(id));
  const whatsappBaseUrl = "https://wa.me/18294312369?text=";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!pkg) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Tour no encontrado</h2>
        <Link to="/" className="text-turquoise font-bold hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="bg-sand min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-dark hover:text-turquoise font-medium transition-colors">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver a inicio
          </Link>
        </div>

        {/* Hero Image Section */}
        <div className="mb-12 relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => setSelectedImage(pkg.image)}>
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
        </div>

        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl p-8 md:p-12 mb-12">
          {/* Details */}
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="mb-6">
                {pkg.badge && (
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm uppercase tracking-wider
                    ${pkg.badge === 'VIP' ? 'bg-primary-dark text-white' : 'bg-turquoise text-primary-dark'}`}
                  >
                    {pkg.badge}
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4 tracking-tight">
                  {pkg.title}
                </h1>
              </div>

              <div className="flex items-center text-gray-600 mb-8 bg-sand p-4 rounded-xl border border-turquoise/20 w-fit">
                <ClockIcon className="w-6 h-6 mr-3 text-turquoise" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Horario estimado</p>
                  <p className="font-semibold text-primary-dark text-lg">{pkg.horario}</p>
                </div>
              </div>

              {/* Extended Description */}
              <div className="prose prose-lg text-gray-700 mb-10">
                <p className="text-xl font-medium border-l-4 border-turquoise pl-5 mb-6 text-gray-800">
                  {pkg.shortDescription}
                </p>
                <p className="whitespace-pre-line text-base leading-relaxed">
                  {pkg.longDescription || pkg.shortDescription}
                </p>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                ¿Qué incluye esta experiencia?
              </h4>
              
              <ul className="space-y-4 mb-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {pkg.includes.map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-turquoise mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Sidebar CTA */}
            <div className="md:w-1/3">
              <div className="bg-sand rounded-2xl p-6 sticky top-28 border border-turquoise/10 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Reserva tu aventura</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Asegura tu lugar hoy mismo. Te responderemos en breve para confirmar la disponibilidad.
                </p>
                <a
                  href={`${whatsappBaseUrl}${encodeURIComponent(`Hola Waooo Tours, quiero consultar o reservar el tour: ${pkg.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-center text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-md bg-primary-dark text-white hover:bg-primary"
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Subsection */}
        {pkg.gallery && pkg.gallery.length > 0 && (
          <div className="mb-12">
             <h3 className="text-3xl font-heading font-bold text-primary-dark mb-8">Galería de fotos</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pkg.gallery.map((imgUrl, idx) => (
                  <div 
                    key={idx} 
                    className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                    onClick={() => setSelectedImage(imgUrl)}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Gallery ${idx}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-semibold drop-shadow-md">Ampliar</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-turquoise transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Tour Ampliado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
