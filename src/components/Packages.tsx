import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { ClockIcon } from '@heroicons/react/24/solid';
import WaveDivider from './WaveDivider';

export default function Packages() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} id="packages" className="py-24 pb-32 bg-sand relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-turquoise/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tight mb-4">
            Nuestros Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora las opciones de excursiones y elige tu próxima aventura. ¡Haz clic para ver detalles!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 lg:gap-14">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-1.25rem)] max-w-lg"
            >
              <Link to={`/tour/${pkg.id}`} className="block h-full bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col">
                {/* Image Container */}
                <div className="h-64 sm:h-72 relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-md text-white uppercase tracking-wider
                        ${pkg.badge === 'VIP' ? 'bg-primary-dark' : 'bg-turquoise text-primary-dark'}`}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                  
                  <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-heading font-bold text-white transition-transform group-hover:-translate-y-1">
                    {pkg.title}
                  </h3>
                </div>

                {/* Card Meta */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {pkg.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-primary-dark font-medium opacity-80">
                      <ClockIcon className="w-5 h-5 mr-2" />
                      <span className="text-sm">{pkg.horario}</span>
                    </div>
                    
                    <span className="text-turquoise font-bold uppercase tracking-wide text-sm flex items-center group-hover:underline">
                      Ver Detalles →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <WaveDivider position="bottom" color="text-white" />
    </motion.section>
  );
}
