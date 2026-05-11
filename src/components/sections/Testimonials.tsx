import React from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    author: "Marina S.",
    role: "Tutora do Max",
    content: "O melhor cuidado que o Max já teve! O centro estético é excelente e as veterinárias são muito atenciosas.",
    rating: 5,
  },
  {
    author: "Rafael C.",
    role: "Tutor da Luna",
    content: "Levo a Luna para tomar banho toda semana. O serviço de leva e traz facilita muito minha rotina. Estão de parabéns!",
    rating: 5,
  },
  {
    author: "Juliana R.",
    role: "Tutora do Thor",
    content: "Achei a clínica super completa, com equipamentos modernos e um ambiente maravilhoso pra os pets.",
    rating: 5,
  },
  {
    author: "Pedro A.",
    role: "Tutor da Belinha",
    content: "Atendimento veterinário nota 10. Salvaram a vida da minha cachorrinha. Sou eternamente grato à Organnact.",
    rating: 5,
  },
  {
    author: "Camila M.",
    role: "Tutora do Simba",
    content: "As roupinhas e acessórios da loja são lindos e de muita qualidade. Sempre encontro novidades incriveis para o Simba.",
    rating: 5,
  },
  {
    author: "Lucas T.",
    role: "Tutor da Kiara",
    content: "A pediatria deles é impecável, acompanharam minha filhote desde o primeiro dia. Recomendo de olhos fechados.",
    rating: 5,
  },
];

// We double the payload so the infinite scroll is seamless
const SCROLL_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-white overflow-hidden relative border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight">
          O que dizem sobre nós
        </h2>
        <p className="mt-4 text-lg text-brand-900/60 max-w-2xl mx-auto">
          Faça como centenas de tutores e garanta o melhor cuidado para quem você mais ama.
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Gradient overlays to smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 whitespace-nowrap pl-6 pointer-events-auto hover:[animation-play-state:paused]">
          {SCROLL_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="inline-flex flex-col flex-shrink-0 w-80 sm:w-96 whitespace-normal bg-brand-100 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex text-gold-500 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-brand-900/80 mb-6 italic min-h-[5rem]">
                "{item.content}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-brand-900">{item.author}</p>
                <p className="text-sm text-brand-900/50">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
