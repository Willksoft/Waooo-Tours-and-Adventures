import { motion } from 'motion/react';
import { Utensils, Croissant, CupSoda } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function IncludesSection() {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} id="includes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 tracking-tighter mb-4">
            Todo esto está incluido
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preparado para que no te falte nada durante el tour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-[#f8fafc] rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition-all overflow-hidden flex flex-col mt-8"
          >
             <div className="relative h-56 w-full flex-shrink-0">
               <img src="https://res.cloudinary.com/dap38hi9l/image/upload/v1778868295/Gemini_Generated_Image_fxx9gcfxx9gcfxx9_h4cjil.png" alt="Almuerzo Buffet" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/10"></div>
             </div>
             <div className="p-8 pt-14 relative flex-grow">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#0E3F35] rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc]">
                  <Utensils strokeWidth={1.5} className="w-10 h-10 text-[#00FFEF]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-center text-[#0E3F35] mb-6">Almuerzo Buffet</h3>
               <ul className="space-y-4">
                 {['Arroz', 'Moro', 'Pescado', 'Pastas', 'Tostones', 'Ensaladas', 'Pollo'].map((item, i) => (
                   <li key={i} className="flex items-center text-gray-700 font-medium">
                     <div className="w-2 h-2 bg-[#00FFEF] rounded-full mr-3 flex-shrink-0"></div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-full bg-[#f8fafc] rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition-all overflow-hidden flex flex-col mt-8"
          >
             <div className="relative h-56 w-full flex-shrink-0">
               <img src="https://res.cloudinary.com/dap38hi9l/image/upload/v1778868513/Gemini_Generated_Image_gs6s7wgs6s7wgs6s_wwbjf3.png" alt="Snacks Incluidos" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/10"></div>
             </div>
             <div className="p-8 pt-14 relative flex-grow">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#0E3F35] rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc]">
                  <Croissant strokeWidth={1.5} className="w-10 h-10 text-[#00FFEF]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-center text-[#0E3F35] mb-6">Snacks Incluidos</h3>
               <ul className="space-y-4">
                 {['Jamón', 'Queso', 'Nachos', 'Cheetos', 'Doritos'].map((item, i) => (
                   <li key={i} className="flex items-center text-gray-700 font-medium">
                     <div className="w-2 h-2 bg-[#00FFEF] rounded-full mr-3 flex-shrink-0"></div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full bg-[#f8fafc] rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-md transition-all overflow-hidden flex flex-col mt-8"
          >
             <div className="relative h-56 w-full flex-shrink-0">
               <img src="https://res.cloudinary.com/dap38hi9l/image/upload/v1778868595/Gemini_Generated_Image_2jl4w52jl4w52jl4_hrwrlh.png" alt="Bebidas Incluidas" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/10"></div>
             </div>
             <div className="p-8 pt-14 relative flex-grow">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#0E3F35] rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc]">
                  <CupSoda strokeWidth={1.5} className="w-10 h-10 text-[#00FFEF]" />
               </div>
               <h3 className="text-2xl font-bold font-heading text-center text-[#0E3F35] mb-6">Bebidas Incluidas</h3>
               <ul className="space-y-4">
                 {['Agua', 'Ron añejo', 'Sprite', 'Coca-Cola', 'Jugo de naranja', 'Cerveza'].map((item, i) => (
                   <li key={i} className="flex items-center text-gray-700 font-medium">
                     <div className="w-2 h-2 bg-[#00FFEF] rounded-full mr-3 flex-shrink-0"></div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
