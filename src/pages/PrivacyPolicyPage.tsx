import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function PrivacyPolicyPage() {
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
               {/* Privacidade */}
               <section>
                   <h1 className="text-3xl font-bold text-brand-900 mb-6">Política de Privacidade – Organnact</h1>
                   <p className="text-brand-900/80 mb-6">
                       A privacidade e a segurança dos nossos clientes e de seus pets são prioridades para a Organnact. Esta Política de Privacidade descreve como lidamos com as informações de quem visita nosso site institucional, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                   </p>

                   <div className="space-y-6">
                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">1. Coleta de Dados</h2>
                           <p className="text-brand-900/80">Nosso site tem caráter puramente institucional e informativo. Não exigimos a criação de contas, senhas ou o preenchimento de formulários complexos. As interações ocorrem da seguinte forma:</p>
                           <ul className="list-disc pl-6 text-brand-900/80 mt-2 space-y-2">
                               <li><strong className="font-semibold text-brand-900">Dados de Navegação (Cookies):</strong> Podemos coletar dados anônimos de navegação (como endereço IP, tipo de navegador, tempo de permanência e páginas visitadas) para entender como você utiliza nosso site e melhorar sua experiência.</li>
                               <li><strong className="font-semibold text-brand-900">Contato via WhatsApp:</strong> Ao clicar no botão de atendimento do nosso site, você será redirecionado para o aplicativo WhatsApp. A partir desse momento, você nos fornecerá voluntariamente seu número de telefone e as informações que decidir compartilhar no chat para que possamos realizar o atendimento.</li>
                           </ul>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">2. Uso das Informações</h2>
                           <p className="text-brand-900/80">As informações fornecidas voluntariamente por você através do WhatsApp serão utilizadas exclusivamente para:</p>
                           <ul className="list-disc pl-6 text-brand-900/80 mt-2 space-y-2">
                               <li>Prestar atendimento, tirar dúvidas sobre serviços e produtos.</li>
                               <li>Realizar orçamentos e agendamentos.</li>
                               <li>Enviar informações solicitadas por você.</li>
                           </ul>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">3. Compartilhamento de Dados</h2>
                           <p className="text-brand-900/80">A Organnact não vende, aluga ou compartilha seus dados pessoais com terceiros. Suas informações de contato ficam restritas à nossa equipe de atendimento para fins de relacionamento com o cliente.</p>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">4. Seus Direitos</h2>
                           <p className="text-brand-900/80">Você tem o direito de solicitar a qualquer momento a exclusão do seu contato de nossa base de clientes do WhatsApp. Para isso, basta enviar uma mensagem no próprio chat solicitando a remoção.</p>
                       </div>

                       <div>
                           <h2 className="text-xl font-bold text-brand-900 mb-2">5. Alterações nesta Política</h2>
                           <p className="text-brand-900/80">Podemos atualizar esta política periodicamente. Recomendamos que você a revise sempre que possível.</p>
                       </div>
                   </div>
               </section>
           </div>
       </div>
    </div>
  );
}
