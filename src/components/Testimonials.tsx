import { motion } from 'motion/react';
import { StarIcon } from '@heroicons/react/24/solid';
import WaveDivider from './WaveDivider';

const testimonials = [
  { name: 'María G.', country: 'Colombia', text: 'Una experiencia hermosa. La piscina natural fue lo mejor del viaje.', rating: 5 },
  { name: 'Luis R.', country: 'Puerto Rico', text: 'Muy buena organización, comida rica y ambiente excelente.', rating: 5 },
  { name: 'Camila S.', country: 'Chile', text: 'Perfecto para ir en grupo. Las fotos quedaron increíbles.', rating: 5 },
];

export default function Testimonials() {
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
            Viajeros que ya vivieron la experiencia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-sand p-8 rounded-3xl shadow-sm border border-gray-100/50"
            >
              <div className="flex mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-highlight" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{test.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{test.name}</p>
                <p className="text-sm text-gray-500">{test.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <WaveDivider position="bottom" color="text-sand" />
    </motion.section>
  );
}
