import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { APP_DATA } from "@/src/lib/mockData";
import { LocationSelectModal } from "../ui/LocationSelectModal";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-brand-900 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2000&q=80" 
          alt="Cão feliz na clínica veterinária" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-brand-900/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-500 text-sm font-medium tracking-wide border border-gold-500/30 mb-6">
            CLÍNICA VETERINÁRIA & PET SHOP PREMIUM
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            {APP_DATA.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-brand-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {APP_DATA.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto gap-2 font-semibold"
            >
              Agendar Consulta <ArrowRight className="h-5 w-5" />
            </Button>
            <a href="#servicos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
                Conheça nossos serviços
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <LocationSelectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
