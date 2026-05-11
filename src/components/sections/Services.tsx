import React, { useState } from "react";
import { APP_DATA } from "@/src/lib/mockData";
import { motion } from "motion/react";
import { Card } from "../ui/Card";
import { Stethoscope, ShoppingBag, Scissors, ArrowRight } from "lucide-react";
import { LocationSelectModal } from "../ui/LocationSelectModal";

// Helper map to convert string from APP_DATA to Actual Icon Component
const IconMap: Record<string, React.ElementType> = {
  Stethoscope,
  ShoppingBag,
  Scissors
};

export const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wide text-sm uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-[45px] font-bold text-brand-900 mb-6 tracking-tight leading-tight">
            Cuidado 360º para a vida do seu pet.
          </h2>
          <p className="text-lg text-brand-900/70">
            Da prevenção médica de alta complexidade aos mimos do dia a dia. Reunimos tudo o que ele precisa em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APP_DATA.services.map((service, idx) => {
            const Icon = IconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-8 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h3 className="text-2xl font-bold text-brand-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-brand-900/70 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenModal(service.title);
                    }}
                    className="inline-flex items-center text-sm font-semibold text-brand-900 hover:text-gold-600 transition-colors mt-auto text-left"
                  >
                    Agendar via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
      
      <LocationSelectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={selectedService}
      />
    </section>
  );
};
