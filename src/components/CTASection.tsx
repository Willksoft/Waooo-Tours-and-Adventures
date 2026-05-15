import { motion } from 'motion/react';

export default function CTASection() {
  const whatsappUrl = "https://wa.me/18294312369?text=Hola%20Waooo%20Tours%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20tour%20a%20Isla%20Saona";

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=2600&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-6"
        >
          ¿Listo para vivir Isla Saona?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-medium mb-10 text-blue-100"
        >
          Escríbenos ahora y reserva tu cupo para la próxima salida.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <a
            href="#reservar"
            className="inline-block px-10 py-5 bg-turquoise hover:bg-turquoise/80 text-primary-dark font-bold rounded-full transition-transform hover:scale-105 shadow-2xl text-xl"
          >
            Reservar Ahora
          </a>
        </motion.div>
        
        <p className="mt-8 text-sm text-white/70">
          Cupos limitados por salida. Reserva hoy.
        </p>
      </div>
    </motion.section>
  );
}
