import { motion } from 'motion/react';
import { 
  Ship, 
  Waves, 
  Fish, 
  Sun 
} from 'lucide-react';
import WaveDivider from './WaveDivider';

const experiences = [
  {
    title: 'Lancha rápida',
    description: 'Siente la adrenalina del mar Caribe con un transporte rápido, divertido y seguro.',
    icon: Ship,
    color: 'text-green-tropical',
    bgLight: 'bg-green-tropical/10'
  },
  {
    title: 'Piscina natural',
    description: 'Disfruta aguas cristalinas poco profundas, estrellas de mar y fotos increíbles.',
    icon: Waves,
    color: 'text-primary',
    bgLight: 'bg-primary/10'
  },
  {
    title: 'Snorkeling',
    description: 'Explora el agua turquesa y vive una experiencia submarina diferente y fascinantte.',
    icon: Fish,
    color: 'text-turquoise',
    bgLight: 'bg-turquoise/10'
  },
  {
    title: 'Playa paradisíaca',
    description: 'Relájate en una de las playas más hermosas de la República Dominicana.',
    icon: Sun,
    color: 'text-highlight',
    bgLight: 'bg-highlight/20'
  }
];

export default function ExperienceCards() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} id="experiences" className="py-24 pb-32 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-turquoise/5 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-green-tropical/5 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tighter mb-4"
          >
            Una experiencia completa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            No es solo un tour. Es un día completo de playa, aventura, comida, bebidas, música, paisajes y momentos para recordar.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl ${exp.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-10 h-10 ${exp.color}`} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">{exp.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <WaveDivider position="bottom" color="text-sand" />
    </motion.section>
  );
}
