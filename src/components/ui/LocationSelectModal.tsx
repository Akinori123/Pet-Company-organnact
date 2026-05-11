import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin } from "lucide-react";
import { APP_DATA } from "@/src/lib/mockData";

interface LocationSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export function LocationSelectModal({ isOpen, onClose, serviceTitle }: LocationSelectModalProps) {
  const handleLocationClick = (location: typeof APP_DATA.locations[0]) => {
    let message = `Olá! Gostaria de falar com a ${location.name}.`;
    if (serviceTitle) {
      message = `Olá! Gostaria de saber mais sobre *${serviceTitle}* na ${location.name}.`;
    }
    
    const waUrl = `https://wa.me/${location.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-900/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-brand-100">
                <h3 className="text-xl font-bold text-brand-900">
                  Selecione a Unidade
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-brand-900/50 hover:text-brand-900 hover:bg-brand-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-brand-900/70 mb-6">
                  {serviceTitle ? (
                    <>Para agendar ou saber mais sobre <strong className="text-brand-900">{serviceTitle}</strong>, por favor escolha a unidade mais próxima de você:</>
                  ) : (
                    "Escolha com qual de nossas unidades você deseja falar:"
                  )}
                </p>

                <div className="space-y-3">
                  {APP_DATA.locations.map((loc) => (
                    <button
                      key={loc.name}
                      onClick={() => handleLocationClick(loc)}
                      className="w-full flex items-center p-4 border border-brand-100 rounded-xl hover:border-gold-500 hover:bg-brand-100/50 transition-all text-left group"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-gold-600 mr-4 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-900 group-hover:text-gold-600 transition-colors">
                          {loc.name}
                        </div>
                        <div className="text-sm text-brand-900/60">
                          WhatsApp: {loc.phone}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
