import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function TermsOfUsePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-100 text-brand-900 flex flex-col items-center py-20 px-4 sm:px-6">
       <div className="w-full max-w-4xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl prose prose-brand max-w-none">
           <Link to="/" className="text-gold-500 font-medium hover:text-gold-600 transition-colors mb-8 inline-flex items-center gap-2 no-underline">
              <span>&larr;</span> Voltar para o início
           </Link>

           <div className="space-y-12">
               {/* Termos de Uso */}
               <section>
                   <h1 className="text-3xl font-bold text-brand-900 mb-6">Termos de Uso – Organnact</h1>
                   <p className="text-brand-900/80 mb-6">
                       Bem-vindo ao site da Organnact. Ao acessar e navegar em nosso site institucional, você concorda com os termos e condições descritos abaixo.
                   </p>

                   <div className="space-y-6">
                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">1. Objetivo do Site</h2>
                           <p className="text-brand-900/80">Este site tem o propósito de apresentar a Organnact, nossa infraestrutura, diferenciais e os serviços de pet shop que oferecemos. Ele funciona como um catálogo digital e um canal de direcionamento para o nosso atendimento oficial.</p>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">2. Atendimento e Contratação de Serviços</h2>
                           <ul className="list-disc pl-6 text-brand-900/80 mt-2 space-y-2">
                               <li><strong className="font-semibold text-brand-900">Canal Oficial:</strong> Todo agendamento, confirmação de valores, verificação de disponibilidade de produtos e contratação de serviços é realizado exclusivamente através do nosso WhatsApp oficial, acessível pelos botões do site.</li>
                               <li><strong className="font-semibold text-brand-900">Valores e Informações:</strong> Nos esforçamos para manter todas as informações do site atualizadas. No entanto, preços, promoções e a disponibilidade de serviços/produtos podem sofrer alterações sem aviso prévio. Os valores válidos serão sempre os confirmados pela nossa equipe no momento do atendimento via WhatsApp.</li>
                           </ul>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">3. Propriedade Intelectual</h2>
                           <p className="text-brand-900/80">Todo o conteúdo presente neste site, incluindo logotipos, textos, fotografias do espaço, imagens e identidade visual, é de propriedade exclusiva da Organnact. É estritamente proibida a cópia, reprodução, distribuição ou uso desses materiais para fins comerciais sem nossa autorização prévia.</p>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">4. Responsabilidade do Usuário</h2>
                           <p className="text-brand-900/80">Ao utilizar nosso direcionamento para o WhatsApp, o usuário se compromete a utilizar uma linguagem respeitosa e a não enviar conteúdos ilícitos, correntes ou spans (mensagens em massa) para nossa equipe de atendimento.</p>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">5. Contato</h2>
                           <p className="text-brand-900/80">Caso tenha dúvidas sobre estes termos, nossos serviços ou qualquer outra questão, estamos à disposição em nosso canal de atendimento via WhatsApp indicado neste site.</p>
                       </div>
                   </div>
               </section>
           </div>
       </div>
    </div>
  );
}
