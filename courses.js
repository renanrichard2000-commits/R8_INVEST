/* ============================================================
   ✏️ EDITE ESTE ARQUIVO para trocar/adicionar seus cursos
   ============================================================ */
/* ============================================================
   ✏️ EDITE AQUI: seus cursos, módulos e aulas
   Para adicionar um curso, copie um bloco inteiro { ... }
   category: "online" | "vendas" | "servicos"
   ============================================================ */
const COURSES = [
  {
    id: "curso-online",
    title: "Renda Extra Online: Freelas e Afiliados",
    description: "Curso genérico de exemplo: aprenda a conseguir seus primeiros trabalhos online como freelancer e a vender como afiliado, do zero.",
    icon: "💻", thumb: "c1", category: "online", categoryLabel: "💻 Online", level: "Iniciante", rating: "4,9",
    modules: [
      { title: "Módulo 1 — Começando do zero", lessons: [
        { title: "Boas-vindas e como o curso funciona", duration: "05:32", desc: "Visão geral do curso, como aproveitar as aulas e o plano de ação para sua primeira renda extra." },
        { title: "As 5 formas mais rápidas de ganhar online", duration: "12:10", desc: "Panorama das principais fontes de renda online e como escolher a ideal para o seu perfil." },
        { title: "Mentalidade e organização da sua rotina", duration: "09:45", desc: "Como reservar tempo, definir metas realistas e não desistir nas primeiras semanas." },
      ]},
      { title: "Módulo 2 — Freelancer na prática", lessons: [
        { title: "Criando seu perfil nas plataformas de freela", duration: "14:20", desc: "Passo a passo para montar um perfil que chama atenção de clientes, mesmo sem experiência." },
        { title: "Como conseguir o primeiro cliente", duration: "11:05", desc: "Modelos de proposta prontos e estratégias para vencer a concorrência no início." },
        { title: "Precificando seu trabalho sem medo", duration: "08:37", desc: "Quanto cobrar, como aumentar o preço com o tempo e evitar clientes que não pagam." },
      ]},
      { title: "Módulo 3 — Marketing de afiliados", lessons: [
        { title: "O que é e como funciona o mercado de afiliados", duration: "10:12", desc: "Entenda Hotmart, Kiwify e outras plataformas e como as comissões são pagas." },
        { title: "Escolhendo produtos que vendem", duration: "13:48", desc: "Critérios para escolher produtos lucrativos e evitar ciladas." },
        { title: "Sua primeira venda: estratégia completa", duration: "16:30", desc: "Do conteúdo à oferta: o roteiro passo a passo para fazer a primeira venda como afiliado." },
      ]},
    ]
  },
  {
    id: "curso-vendas",
    title: "Vendas e Revenda Lucrativa",
    description: "Curso genérico de exemplo: aprenda a comprar bem, anunciar e vender produtos com lucro em marketplaces e redes sociais.",
    icon: "🛒", thumb: "c2", category: "vendas", categoryLabel: "🛒 Vendas", level: "Iniciante", rating: "4,8",
    modules: [
      { title: "Módulo 1 — Fundamentos da revenda", lessons: [
        { title: "Como funciona o negócio de revenda", duration: "07:15", desc: "O modelo de negócio, margens de lucro e os erros que fazem iniciantes perderem dinheiro." },
        { title: "Encontrando fornecedores confiáveis", duration: "12:44", desc: "Onde comprar barato com segurança: distribuidores, atacados e importação." },
        { title: "Definindo seu nicho e produto ideal", duration: "09:58", desc: "Como escolher o que vender analisando demanda, concorrência e margem." },
      ]},
      { title: "Módulo 2 — Anúncios que vendem", lessons: [
        { title: "Criando anúncios irresistíveis", duration: "15:21", desc: "Título, fotos e descrição: a fórmula de anúncios que convertem em qualquer marketplace." },
        { title: "Fotos de produto com o celular", duration: "10:33", desc: "Técnicas simples de iluminação e enquadramento para fotos profissionais sem gastar nada." },
        { title: "Vendendo pelo WhatsApp e Instagram", duration: "13:07", desc: "Como transformar seguidores em clientes e fechar vendas no direct e no status." },
      ]},
      { title: "Módulo 3 — Escala e organização", lessons: [
        { title: "Controlando estoque e finanças", duration: "11:52", desc: "Planilha simples para saber exatamente quanto você lucra em cada venda." },
        { title: "Atendimento que fideliza clientes", duration: "08:26", desc: "Scripts de atendimento e pós-venda para o cliente comprar de novo e indicar você." },
        { title: "Do extra ao negócio: próximos passos", duration: "12:40", desc: "Quando formalizar (MEI), como reinvestir o lucro e escalar suas vendas." },
      ]},
    ]
  }
];
