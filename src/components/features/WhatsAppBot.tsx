import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone } from "lucide-react";
import { APP_DATA } from "@/src/lib/mockData";

export const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-brand-900/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 flex items-center justify-between text-white shadow-md z-1 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold shadow-sm">
                  ORG
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Fale Conosco</h4>
                  <span className="text-xs text-emerald-100 font-medium">Escolha uma unidade</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white p-1 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-slate-50 p-4 flex flex-col gap-3 w-full">
               <p className="text-sm border-b pb-3 mb-1 text-slate-600 font-medium text-center">Como podemos lhe ajudar hoje?</p>
               {APP_DATA.locations.map((loc, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${loc.phoneRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between bg-white border border-slate-200 hover:border-[#25D366] text-slate-700 hover:bg-[#F2FBF5] p-3 rounded-xl transition-all shadow-sm group"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-sm group-hover:text-[#075E54]">{loc.name}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{loc.phone}</span>
                    </div>
                    <div className="bg-[#25D366] text-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                  </a>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white ml-auto relative"
      >
        {!isOpen && (
          <>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-sonar-1 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-sonar-2 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-sonar-3 pointer-events-none"></div>
          </>
        )}
        <span className="relative z-10">
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </span>
      </motion.button>

    </div>
  );
};
