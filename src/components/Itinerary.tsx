import { motion } from 'motion/react';
import WaveDivider from './WaveDivider';

const schedule = [
  { time: '7:00 AM', title: 'Recogida en hotel', desc: 'Pasamos por ti según la zona y horario coordinado.' },
  { time: '9:00 AM', title: 'Salida hacia la aventura', desc: 'Inicio del recorrido hacia Isla Saona.' },
  { time: '10:30 AM', title: 'Lancha rápida y piscina natural', desc: 'Parada para disfrutar aguas cristalinas y fotos increíbles.' },
  { time: '12:30 PM', title: 'Almuerzo buffet', desc: 'Comida incluida frente al ambiente caribeño.' },
  { time: '2:00 PM', title: 'Playa y descanso', desc: 'Tiempo libre para bañarte, caminar y disfrutar.' },
  { time: '4:00 PM', title: 'Regreso', desc: 'Retorno con música, ambiente y buena energía.' },
  { time: '6:00 PM', title: 'Llegada aproximada', desc: 'Fin de la experiencia.' },
];

export default function Itinerary() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} id="itinerary" className="py-24 pb-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tighter mb-4">
            Así será tu día
          </h2>
          <p className="text-xl text-gray-600">
            Descubre paso a paso todo lo que haremos en esta increíble aventura.
          </p>
        </motion.div>

        <div className="relative border-l-4 border-turquoise ml-4 md:ml-0 md:pl-0 max-w-3xl mx-auto">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              {/* Dot */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1 w-6 h-6 rounded-full bg-turquoise border-4 border-white shadow-sm" />
              
              <div className="bg-sand p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-turquoise font-bold font-heading text-xl mb-1 block">
                  {item.time}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-sand/50 border border-yellow-200 p-6 rounded-xl text-center max-w-3xl mx-auto">
          <p className="text-gray-700 italic font-medium">
            * Los horarios pueden variar según la ubicación del hotel, clima y coordinación del operador.
          </p>
        </div>
      </div>

      <WaveDivider position="bottom" color="text-sand" />
    </motion.section>
  );
}
