import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    fecha: '',
    personas: '',
    hotel: '',
    tour: 'Isla Saona Todo Incluido',
    comentario: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppLink = () => {
    const text = `¡Hola Waooo Tours! Quiero hacer una reservación.%0A%0A*Nombre:* ${formData.nombre}%0A*WhatsApp:* ${formData.whatsapp}%0A*Fecha:* ${formData.fecha}%0A*Cantidad de personas:* ${formData.personas}%0A*Hotel/Zona:* ${formData.hotel}%0A*Tour:* ${formData.tour}%0A*Comentarios:* ${formData.comentario || 'Ninguno'}`;
    return `https://wa.me/18294312369?text=${text}`;
  };

  return (
    <motion.section 
      id="reservar"
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8 }} 
      className="py-24 pb-32 bg-sand relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white -skew-x-12 translate-x-32 hidden lg:block pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tight mb-4">
            Reserva tu aventura
          </h2>
          <p className="text-md md:text-lg text-gray-500 max-w-2xl mx-auto">
            Completa tus datos y envíanos tu solicitud por WhatsApp para confirmar tu espacio.
          </p>
        </div>

        <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 max-w-4xl mx-auto relative cursor-default">
          {/* Subtle decoration */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-turquoise/20 rounded-full blur-[40px] pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo</label>
              <input 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none shadow-sm"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Número de WhatsApp</label>
               <input 
                type="tel" 
                name="whatsapp" 
                value={formData.whatsapp} 
                onChange={handleChange} 
                className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none shadow-sm"
                placeholder="+1 234 567 890"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Fecha deseada</label>
              <input 
                type="date" 
                name="fecha" 
                value={formData.fecha} 
                onChange={handleChange} 
                className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none shadow-sm text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Personas</label>
              <input 
                type="number" 
                min="1"
                name="personas" 
                value={formData.personas} 
                onChange={handleChange} 
                className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none shadow-sm"
                placeholder="2"
              />
            </div>
             <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Hotel o Zona</label>
               <input 
                type="text" 
                name="hotel" 
                value={formData.hotel} 
                onChange={handleChange} 
                className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none shadow-sm"
                placeholder="Ej. Bávaro"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">Paquete deseado</label>
            <select 
              name="tour" 
              value={formData.tour} 
              onChange={handleChange} 
              className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none shadow-sm font-medium text-gray-800"
            >
              <option value="Isla Saona Todo Incluido">Isla Saona Todo Incluido</option>
              <option value="Isla Saona VIP Plus">Isla Saona VIP Plus</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-2">Comentarios adicionales</label>
            <textarea 
              name="comentario" 
              value={formData.comentario} 
              onChange={handleChange} 
              rows={3}
              className="w-full px-5 py-4 rounded-2xl border-none bg-gray-50 focus:ring-2 focus:ring-turquoise transition-all outline-none resize-none shadow-sm"
              placeholder="¿Algo más que debamos saber?"
            ></textarea>
          </div>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary-dark hover:bg-primary text-white font-bold rounded-2xl transition-all shadow-xl text-lg group"
          >
            Enviar y reservar por WhatsApp
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

        </form>
      </div>

      <WaveDivider position="bottom" color="text-white" />
    </motion.section>
  );
}
