import React from "react";
import { MessageCircle } from "lucide-react";
import { APP_DATA } from "../../lib/mockData";

import imgRacao from "../../assets/images/alimentação.png";
import imgBrinquedo from "../../assets/images/acessorio.png";
import imgCaminha from "../../assets/images/caminha.png";
import imgColeira from "../../assets/images/coleira.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Rações Super Premium",
    description: "Nutrição completa para cães de todas as raças. Fale com a gente no WhatsApp para saber as opções disponíveis!",
    image: imgRacao,
    category: "Alimentação"
  },
  {
    id: 2,
    name: "Brinquedos Interativos",
    description: "Os melhores brinquedos para o bem-estar do pet. Mande um WhatsApp e agende sua visita à nossa loja física.",
    image: imgBrinquedo,
    category: "Acessórios"
  },
  {
    id: 3,
    name: "Caminha Ortopédica",
    description: "Conforto máximo para um sono reparador. Chame nossa equipe no WhatsApp para checar modelos e tamanhos.",
    image: imgCaminha,
    category: "Conforto"
  },
  {
    id: 4,
    name: "Coleira Premium",
    description: "Segurança e estilo durante os passeios. Entre em contato para ver as cores exclusivas diretamente conosco.",
    image: imgColeira,
    category: "Passeio"
  }
];

export const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12 text-center max-w-3xl mx-auto">
          <span className="text-gold-600 font-semibold tracking-wide text-sm uppercase mb-4 block">
            Destaques da Boutique
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 tracking-tight leading-tight mb-4">
            A Loja perfeita para o seu Pet
          </h2>
          <p className="text-lg text-brand-900/70">
            Trabalhamos com produtos das melhores marcas do mercado, sempre com foco em saúde, estilo e qualidade de vida. Venha nos visitar ou tire suas dúvidas online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => {
            const whatsappMessage = encodeURIComponent(`Olá! Gostaria de uma informação sobre o produto: *${product.name}*`);
            const productLink = `https://wa.me/${APP_DATA.phoneRaw}?text=${whatsappMessage}`;

            return (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-brand-900 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-brand-900 text-lg mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-brand-900/60 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-brand-100/50 flex flex-col gap-2">
                  <a 
                    href={productLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors font-medium text-sm"
                  >
                    Peça já o seu!
                    <MessageCircle className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
