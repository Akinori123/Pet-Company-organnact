const foto1 = "/images/foto1.png";
const foto2 = "/images/foto2.png";
const foto3 = "/images/foto3.png";
const foto4 = "/images/foto4.png";

/**
 * Mock data structured for the application.
 */
export const APP_DATA = {
  companyName: "Organnact",
  logoMark: "Organnact",
  phone: "(42) 3028-3342",
  phoneRaw: "554230283342",
  instagramLink: "https://www.instagram.com/pet.companypg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  locations: [
    { name: "Unidade Ronda", phone: "42 99976-0107", phoneRaw: "5542999760107" },
    { name: "Unidade Centro", phone: "42 99929-0118", phoneRaw: "5542999290118" },
    { name: "Unidade Olarias", phone: "42 99929-0115", phoneRaw: "5542999290115" }
  ],
  address: "Av. Visc. de Mauá, 406 - Oficinas, Ponta Grossa - PR, 84040-290",
  mapsLink: "https://maps.google.com/?q=Av.+Visc.+de+Mauá,+406+-+Oficinas,+Ponta+Grossa+-+PR,+84040-290",
  wazeLink: "https://waze.com/ul?q=Av.+Visc.+de+Mauá,+406+-+Oficinas,+Ponta+Grossa+-+PR,+84040-290",
  workingHours: "Seg-Sex: 08:00 - 18:00 | Sáb: 08:00 - 12:00",
  hero: {
    title: "Excelência e Afeto em Cada Cuidado.",
    subtitle: "A clínica onde seu pet é tratado como membro da família. Mais de 15 anos transformando a saúde e estética animal em Ponta Grossa com profissionais de extrema confiança.",
  },
  impactNumbers: [
    { value: "+15", label: "Anos de Tradição" },
    { value: "+10k", label: "Pets Atendidos" },
    { value: "4.9", label: "Avaliação Média dos Tutores (Google)" },
    { value: "100%", label: "Amor em Cada Detalhe" },
  ],
  mission: {
    title: "Muito Além de uma Clínica, um Porto Seguro.",
    description: "Acreditamos que a relação entre tutores e pets é um dos laços mais puros que existem. Por isso, nossa missão na Organnact é elevar o padrão de cuidado veterinário no Paraná, entregando medicina de excelência sem jamais perder a calorosidade, a transparência e a paixão genuína por animais."
  },
  services: [
    {
      id: "clinica",
      title: "Clínica Veterinária",
      description: "Infraestrutura de ponta e cuidado humanizado. Medicina preventiva, diagnósticos precisos e suporte médico avançado focados na longevidade e qualidade de vida do seu filho de quatro patas.",
      icon: "Stethoscope"
    },
    {
      id: "petshop",
      title: "Boutique Pet Shop",
      description: "Curadoria exclusiva com os melhores produtos do mercado. Nutrição premium, brinquedos enriquecedores, farmácia completa e acessórios desenhados para máximo conforto e estilo.",
      icon: "ShoppingBag"
    },
    {
      id: "banho-tosa",
      title: "Spa Banho & Tosa",
      description: "Estética animal de alto padrão que respeita os limites do seu pet. Produtos hipoalergênicos premium, tosa especializada e um ambiente de cromoterapia para combater o estresse.",
      icon: "Scissors"
    }
  ],
  team: [
    {
      role: "Diretora Clínica & Especialidade Médica",
      name: "Dra. Carolina Mendes",
      crmv: "CRMV-PR 12345",
      specialties: [
        "Clínica Médica de Felinos",
        "Medicina Preventiva Avançada",
        "Longevidade Animal"
      ],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
    },
    {
      role: "Coordenador de Cirurgia",
      name: "Dr. Rafael Costa",
      crmv: "CRMV-PR 54321",
      specialties: [
        "Cirurgia Geral e Ortopedia",
        "Diagnóstico por Imagem",
        "Emergências Complexas"
      ],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    foto1,
    foto2,
    foto3,
    foto4
  ],
  faqs: [
    {
      question: "Como funciona o agendamento para banho e tosa?",
      answer: "Para manter nosso ambiente calmo e exclusivo, atendemos com horário marcado. Você pode agendar facilmente pelo nosso WhatsApp. Recomendamos agendar com pelo menos 2 dias de antecedência para garantir a melhor experiência."
    },
    {
      question: "A clínica atende especialidades?",
      answer: "Sim! Além do atendimento clínico geral em cães e gatos, contamos com parceiros nas áreas de cardiologia, ortopedia e oftalmologia."
    },
    {
      question: "Vocês possuem estacionamento?",
      answer: "Com certeza. Temos estacionamento próprio e gratuito para garantir sua comodidade e segurança na hora de trazer ou buscar seu melhor amigo."
    }
  ]
};
