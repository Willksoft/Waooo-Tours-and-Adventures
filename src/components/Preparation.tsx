import { motion } from 'motion/react';
import { SunMedium, Droplets, Wallet, Shirt, Battery, Backpack, Info } from 'lucide-react';
import WaveDivider from './WaveDivider';

const items = [
  { name: 'Traje de baño', icon: Droplets },
  { name: 'Toalla', icon: Backpack },
  { name: 'Protector solar', icon: SunMedium },
  { name: 'Lentes de sol', icon: SunMedium },
  { name: 'Dinero extra', icon: Wallet },
  { name: 'Ropa cómoda', icon: Shirt },
  { name: 'Batería para celular', icon: Battery },
  { name: 'Funda impermeable', icon: Backpack },
];

export default function Preparation() {
  return (
    <motion.section 
      id="preparacion"
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8 }} 
      className="py-24 pb-32 bg-sand relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-80 h-80 bg-turquoise/10 rounded-full blur-[80px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tight mb-4">
            Prepárate para tu aventura
          </h2>
          <p className="text-md md:text-lg text-gray-500 max-w-2xl mx-auto">
            Recomendaciones esenciales para que disfrutes al máximo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-1.125rem)] max-w-[200px] bg-white p-6 rounded-3xl flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-turquoise/30 transition-all group"
              >
                <div className="w-14 h-14 bg-sand group-hover:bg-turquoise/10 rounded-full flex items-center justify-center mb-4 text-turquoise transition-colors">
                  <Icon strokeWidth={1.5} className="w-7 h-7" />
                </div>
                <span className="font-semibold text-gray-800 text-lg">{item.name}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-primary-dark p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
        >
          <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center flex-shrink-0 shadow-lg text-primary-dark">
            <Info strokeWidth={2} className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-2xl text-white mb-2">Tip Waooo</h4>
            <p className="text-lg text-turquoise/90 font-medium">
              Llega listo para mojarte, caminar y disfrutar desde el primer minuto en la playa. ¡No olvides tu mejor sonrisa!
            </p>
          </div>
        </motion.div>
      </div>

      <WaveDivider position="bottom" color="text-white" />
    </motion.section>
  );
}
