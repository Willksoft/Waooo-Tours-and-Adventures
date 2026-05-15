import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '../data/faq';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import WaveDivider from './WaveDivider';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} id="faq" className="py-24 pb-32 bg-sand relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tighter mb-4">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-turquoise flex-shrink-0" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-primary-dark flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 bg-white text-gray-600 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
      
      <WaveDivider position="bottom" color="text-dark" />
    </motion.section>
  );
}
