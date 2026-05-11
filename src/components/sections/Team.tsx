import React from "react";
import { APP_DATA } from "@/src/lib/mockData";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Card } from "../ui/Card";

export const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 font-semibold tracking-wide text-sm uppercase mb-4 block">
              Corpo Clínico
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 tracking-tight leading-tight">
              Especialistas Movidos pela Paixão.
            </h2>
            <p className="text-lg text-brand-900/70">
              Profissionais de elite dedicados a oferecer a vanguarda da medicina veterinária com um tratamento profundamente humano.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {APP_DATA.team.map((member, idx) => (
             <motion.div
               key={member.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.2, duration: 0.6 }}
             >
                <Card className="flex flex-col sm:flex-row gap-6 lg:gap-8 overflow-hidden p-0 border-0 shadow-lg">
                  <div className="sm:w-2/5 aspect-[4/5] sm:aspect-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                    <span className="text-gold-600 font-medium text-sm mb-2">{member.role}</span>
                    <h3 className="text-2xl font-bold text-brand-900 mb-2">{member.name}</h3>
                    <span className="text-brand-900/50 text-sm font-mono mb-6 pb-6 border-b border-brand-900/10 block w-full">{member.crmv}</span>
                    
                    <ul className="space-y-3">
                      {member.specialties.map((spec) => (
                         <li key={spec} className="flex items-start text-brand-900/80">
                           <CheckCircle2 className="h-5 w-5 text-gold-500 mr-3 shrink-0 mt-0.5" />
                           <span className="font-medium text-sm">{spec}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                </Card>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
