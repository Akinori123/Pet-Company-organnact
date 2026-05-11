import React from "react";
import { APP_DATA } from "@/src/lib/mockData";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const Mission = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-6 text-gold-600 font-semibold tracking-wide text-sm uppercase">
              <Heart className="h-5 w-5 fill-gold-600" /> Nossa Essência
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8 leading-tight tracking-tight">
              {APP_DATA.mission.title}
            </h2>
            <p className="text-lg text-brand-800/80 leading-relaxed">
              {APP_DATA.mission.description}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80" 
                 alt="Veterinária examinando um cachorro com carinho" 
                 className="w-full h-full object-cover"
               />
             </div>
             {/* Decorator */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
               <p className="text-brand-900 font-medium italic">
                 "Aqui, tratamos a saúde do seu pet com a mesma seriedade e amor com que cuidaríamos dos nossos."
               </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
