import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';
import WaveDivider from './WaveDivider';

const zones = [
  'Bávaro',
  'Punta Cana',
  'Uvero Alto',
  'Cap Cana',
  'Cabeza de Toro',
  'Bayahíbe',
  'Otro',
];

export default function HotelSelector() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const whatsappUrl = `https://wa.me/18294312369?text=${encodeURIComponent(`Hola Waooo Tours, quiero confirmar horario de recogida en: ${selectedZone}`)}`;

  return (
      <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8 }} 
      className="py-24 pb-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-turquoise/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tight mb-4">
            Selecciona tu hotel o zona
          </h2>
          <p className="text-md md:text-lg text-gray-500 max-w-2xl mx-auto">
            Elige dónde te hospedas para conocer la disponibilidad de recogida en tu área.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-auto min-w-[200px] group flex items-center p-4 rounded-2xl transition-all duration-300 font-medium text-lg border border-transparent ${
                selectedZone === zone
                  ? 'bg-turquoise text-primary-dark shadow-lg shadow-turquoise/30 scale-105'
                  : 'bg-sand text-gray-600 hover:border-turquoise/30 hover:bg-turquoise/5 hover:text-primary-dark hover:shadow-md'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-colors ${
                selectedZone === zone ? 'bg-white/30' : 'bg-white shadow-sm group-hover:bg-turquoise/20'
              }`}>
                <MapPin className={`w-5 h-5 ${selectedZone === zone ? 'text-primary-dark' : 'text-turquoise'}`} />
              </div>
              <span className="flex-1 text-left">{zone}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selectedZone && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: 10 }}
              className="bg-primary-dark text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-bold font-heading mb-2 flex items-center gap-2">
                  <span className="text-turquoise">✓</span> Zona confirmada
                </h3>
                <p className="text-gray-300 font-medium text-lg">
                  Coordinamos recogida en <strong className="text-white">{selectedZone}</strong>. Escríbenos para confirmar el horario exacto de tu tour.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-8 py-4 bg-turquoise hover:bg-turquoise/80 text-primary-dark font-bold rounded-full transition-transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Confirmar recogida
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <WaveDivider position="bottom" color="text-primary-dark" />
    </motion.section>
  );
}
