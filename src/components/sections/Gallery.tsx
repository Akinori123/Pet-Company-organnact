import React from "react";
import { APP_DATA } from "@/src/lib/mockData";
import { motion } from "motion/react";

export const Gallery = () => {
  return (
    <section id="estrutura" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wide text-sm uppercase mb-4 block">
            Nossa Infraestrutura
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 tracking-tight leading-tight">
            Ambiente Seguro e Confortável.
          </h2>
          <p className="text-lg text-brand-900/70">
            Nossa clínica veterinária possui uma infraestrutura completa e moderna, pensada exclusivamente para a saúde e o conforto do seu pet. Um ambiente seguro, higienizado e acolhedor, projetado para o melhor atendimento veterinário.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {APP_DATA.gallery.map((img, idx) => {
            // Apply different span sizes to create a masonry-like grid
            const isLarge = idx === 0 || idx === 3;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${isLarge ? 'col-span-2 aspect-[4/3]' : 'col-span-1 lg:col-span-2 aspect-square md:aspect-[4/3]'} `}
              >
                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={img} 
                  alt={`Instalação da Organnact ${idx + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
