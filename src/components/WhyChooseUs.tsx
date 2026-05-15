import { motion } from 'motion/react';
import { ClipboardCheck, MessageCircle, ShieldCheck, Smile, Users, Camera } from 'lucide-react';
import WaveDivider from './WaveDivider';

const reasons = [
  { title: 'Experiencia organizada', desc: 'Equipo preparado para ayudarte antes y durante el tour.', icon: ClipboardCheck },
  { title: 'Reservas rápidas', desc: 'Atención directa por WhatsApp, sin complicaciones.', icon: MessageCircle },
  { title: 'Servicio confiable', desc: 'Transporte, guía y coordinación 100% garantizados.', icon: ShieldCheck },
  { title: 'Diversión asegurada', desc: 'Un ambiente pensado para disfrutar de principio a fin.', icon: Smile },
  { title: 'Ideal para grupos', desc: 'Perfecto para parejas, familias, amigos y excursiones.', icon: Users },
  { title: 'Fotos memorables', desc: 'Paisajes perfectos para crear contenido y recuerdos.', icon: Camera },
];

export default function WhyChooseUs() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="py-24 pb-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tighter mb-4">
            ¿Por qué reservar con Waooo?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-sand transition-colors"
              >
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-xl">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <WaveDivider position="bottom" color="text-sand" />
    </motion.section>
  );
}
