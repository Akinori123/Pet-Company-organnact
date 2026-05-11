import React from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../ui/Card";
import { Input, Textarea } from "../ui/Input";
import { Button } from "../ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      // Configuração para utilizar o Formspree.
      // Crie uma conta em https://formspree.io e crie um novo formulário.
      // Eles vão te dar uma URL (endpoint) parecida com: https://formspree.io/f/xqkkgowv
      const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;
      
      if (!formspreeUrl) {
        console.warn("URL do Formspree não configurada. Simulando envio...");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Dados do formulário:", data);
        reset();
        return;
      }

      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Assunto do E-mail": `Novo contato vindo do site de ${data.name}`,
          "Nome": data.name,
          "E-mail": data.email,
          "WhatsApp": data.phone,
          "Mensagem": data.message,
        }),
      });

      if (response.ok) {
        reset();
      } else {
        console.error("Erro ao enviar formulário para o Formspree.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contato" className="py-24 bg-brand-100 relative">
      <div className="absolute inset-0 bg-gold-500/5 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-gold-600 font-semibold tracking-wide text-sm uppercase mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6 tracking-tight leading-tight">
            Pronto para transformar a vida do seu pet?
          </h2>
          <p className="text-lg text-brand-900/70">
            Deixe seus dados e nossa equipe entrará em contato em menos de 10 minutos para tirar suas dúvidas ou realizar um agendamento.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Card className="p-6 md:p-10 shadow-2xl bg-white border-0">
             <AnimatePresence mode="wait">
               {isSubmitSuccessful ? (
                 <motion.div
                   key="success"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   className="flex flex-col items-center justify-center py-16 text-center"
                 >
                   <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <CheckCircle2 className="h-10 w-10" />
                   </div>
                   <h3 className="text-3xl font-bold text-brand-900 mb-4">Mensagem Enviada!</h3>
                   <p className="text-brand-900/70 text-lg">
                     Nossa equipe já recebeu suas informações e entrará em contato em breve.
                   </p>
                 </motion.div>
               ) : (
                 <motion.form 
                   key="form"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   onSubmit={handleSubmit(onSubmit)} 
                   className="space-y-6"
                 >
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <Input 
                       id="name"
                       label="Nome Completo"
                       placeholder="Ex: João da Silva"
                       {...register("name", { required: "Nome é obrigatório" })}
                       error={errors.name?.message}
                     />
                     <Input 
                       id="phone"
                       label="Telefone (WhatsApp)"
                       placeholder="(XX) XXXXX-XXXX"
                       {...register("phone", { required: "WhatsApp é obrigatório" })}
                       error={errors.phone?.message}
                     />
                   </div>
                   <Input 
                     id="email"
                     type="email"
                     label="E-mail"
                     placeholder="joao@email.com"
                     {...register("email", { 
                       required: "E-mail é obrigatório",
                       pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" }
                     })}
                     error={errors.email?.message}
                   />
                   <Textarea 
                     id="message"
                     label="Qual é a sua dúvida ou necessidade?"
                     placeholder="Escreva aqui..."
                     {...register("message", { required: "A mensagem é obrigatória" })}
                     error={errors.message?.message}
                   />
                   
                   <div className="pt-4">
                     <Button 
                       type="submit" 
                       size="lg" 
                       className="w-full text-lg gap-2"
                       disabled={isSubmitting}
                     >
                       {isSubmitting ? "Enviando..." : (
                         <>Enviar Mensagem <Send className="h-5 w-5" /></>
                       )}
                     </Button>
                   </div>
                 </motion.form>
               )}
             </AnimatePresence>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};
