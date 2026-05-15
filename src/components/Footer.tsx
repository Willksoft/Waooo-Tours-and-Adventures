import { motion } from 'motion/react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/18294312369?text=Hola%20Waooo%20Tours%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20tour%20a%20Isla%20Saona";

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="font-heading font-bold text-3xl tracking-tighter block mb-4">
              WAOOO<span className="text-accent">★</span>
            </span>
            <p className="text-gray-400 max-w-sm mb-6">
              Tours, aventuras y experiencias inolvidables en el Caribe. Tu viaje a Isla Saona empieza aquí.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Menú Rápido</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#itinerary" className="text-gray-400 hover:text-white transition-colors">Itinerario</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Preguntas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (829) 431-2369</li>
              <li>Punta Cana, República Dominicana</li>
            </ul>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-turquoise/20 hover:bg-turquoise hover:text-primary-dark rounded-lg text-turquoise font-bold transition-colors text-sm"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Waooo Tours and Adventures. Todos los derechos reservados.</p>
        </div>
      </motion.div>
    </footer>
  );
}
