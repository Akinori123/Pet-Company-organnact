import React from "react";
import { APP_DATA } from "@/src/lib/mockData";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export const ImpactNumbers = () => {
  return (
    <section className="bg-white/90 backdrop-blur-xl py-12 relative z-20 -mt-16 mx-4 sm:mx-8 lg:mx-auto max-w-5xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60">
      <div className="relative px-6 sm:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {APP_DATA.impactNumbers.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-2 gap-3"
            >
              <span className={cn(
                "text-4xl md:text-5xl font-bold tracking-tighter",
                idx === 0 ? "text-blue-600" :
                idx === 1 ? "text-yellow-500" :
                idx === 2 ? "text-yellow-500" :
                idx === 3 ? "text-emerald-500" :
                "text-brand-900"
              )}>
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-brand-900/50 font-semibold uppercase tracking-widest max-w-[160px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
