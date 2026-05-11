import React from "react";
import { Link } from "react-router-dom";
import { APP_DATA } from "@/src/lib/mockData";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: About */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-white mb-6">
              {APP_DATA.logoMark}
            </span>
            <p className="text-brand-100/70 text-sm leading-relaxed mb-6">
              Clínica veterinária e pet shop referência no Paraná. Mais de 15 anos oferecendo cuidado com excelência e carinho para o seu melhor amigo.
            </p>
            <div className="flex space-x-4">
              <a href={APP_DATA.instagramLink} target="_blank" rel="noreferrer" className="text-brand-100/50 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hidden text-brand-100/50 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-100/70 hover:text-gold-500 transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-brand-100/70 hover:text-gold-500 transition-colors text-sm">Nossa História</a></li>
              <li><a href="#servicos" className="text-brand-100/70 hover:text-gold-500 transition-colors text-sm">Serviços e Soluções</a></li>
              <li><a href="#equipe" className="text-brand-100/70 hover:text-gold-500 transition-colors text-sm">Corpo Clínico</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <a href={`tel:${APP_DATA.phoneRaw}`} className="text-brand-100/70 hover:text-gold-500 transition-colors text-sm mt-0.5">
                  {APP_DATA.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <div className="flex flex-col space-y-3">
                  {APP_DATA.locations.map((loc, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-brand-100/70 text-sm font-medium leading-relaxed">
                        {loc.name}
                      </span>
                      <a href={`https://wa.me/${loc.phoneRaw}`} target="_blank" rel="noreferrer" className="text-brand-100/50 hover:text-gold-500 transition-colors text-sm flex items-center mt-1">
                        <Phone className="h-3.5 w-3.5 mr-1" />
                        {loc.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                <span className="text-brand-100/70 text-sm mt-0.5 leading-relaxed">
                  {APP_DATA.workingHours}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Maps Actions */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-6">Como Chegar</h4>
            <div className="space-y-3">
              <a href={APP_DATA.mapsLink} target="_blank" rel="noreferrer" className="block w-full">
                <Button 
                  className="w-full text-white justify-start pl-[20px] pr-5 text-[15px] font-semibold border-none hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#68bb70' }}
                >
                  <svg className="w-5 h-5 mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2C8.13,2,5,5.13,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z"/>
                  </svg>
                  Traçar rota no Google Maps
                </Button>
              </a>
              <a href={APP_DATA.wazeLink} target="_blank" rel="noreferrer" className="block w-full">
                <Button 
                  className="w-full text-white justify-start pl-[20px] pr-5 text-[15px] font-semibold border-none hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#4d8ebc' }}
                >
                  <svg className="w-5 h-5 mr-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.96,4C7.03,4,3,7.66,3,12.2c0,1.3,0.36,2.54,0.99,3.64l-1.63,3.31c-0.19,0.39,0.1,0.85,0.53,0.85h3.69c1.58,0.85,3.41,1.35,5.38,1.35c4.93,0,8.96-3.66,8.96-8.2S16.89,4,11.96,4z M8.5,10.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S9.33,10.5,8.5,10.5z M15.5,10.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S16.33,10.5,15.5,10.5z M15.5,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S16.33,13.5,15.5,13.5z"/>
                  </svg>
                  Traçar rota no Waze
                </Button>
              </a>
            </div>
            {/* Embedded Google Map */}
            <div className="mt-6 h-48 bg-brand-800 rounded-lg overflow-hidden border border-brand-100/10 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1778419429815!6m8!1m7!1sZ2OUpuBCLlcAMreP4EygYg!2m2!1d-25.11226527383854!2d-50.1573830740828!3f202.9088339812121!4f-0.6419528800948058!5f1.9892358256188598" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-brand-100/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-brand-100/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Organnact. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/termos-de-uso" className="text-brand-100/50 hover:text-white transition-colors">Termos de Uso</Link>
            <Link to="/politica-de-privacidade" className="text-brand-100/50 hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
