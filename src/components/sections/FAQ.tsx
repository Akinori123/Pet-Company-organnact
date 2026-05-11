import React from "react";
import { APP_DATA } from "@/src/lib/mockData";
import { Accordion } from "../ui/Accordion";
import { motion } from "motion/react";

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-wide text-sm uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-100/50 p-4 md:p-8 rounded-3xl"
        >
          {APP_DATA.faqs.map((faq, idx) => (
             <Accordion key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};
