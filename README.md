# 💰 RendaExtra Academy

Plataforma de cursos online com o tema **ganhar dinheiro extra** — catálogo de cursos, área de aulas com player, controle de progresso do aluno e design responsivo (funciona no celular e no computador).

![HTML5](https://img.shields.io/badge/HTML5-orange) ![CSS3](https://img.shields.io/badge/CSS3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

## ✨ Funcionalidades

- 📚 **Catálogo de cursos** com busca e filtro por categoria (Online, Vendas, Serviços)
- 🎬 **Área de aulas** com módulos, lista de aulas e espaço para o vídeo
- ✅ **Marcar aula como concluída** — o progresso fica salvo no navegador (localStorage)
- 📈 **Página "Meu Progresso"** com estatísticas do aluno
- 📱 **Responsivo** — funciona em celular, tablet e computador
- ⚙️ Aba **"Como Editar"** dentro do próprio site com orientações

## 📁 Estrutura do projeto

```
renda-extra-academy/
├── index.html          → página principal do site
├── css/
│   └── style.css       → todos os estilos (cores, layout)
├── js/
│   ├── courses.js      → ✏️ EDITE AQUI: seus cursos, módulos e aulas
│   └── app.js          → funcionamento do site (não precisa mexer)
├── assets/             → coloque aqui suas imagens e logo
├── README.md           → este arquivo
└── .gitignore
```

## 🚀 Como publicar no GitHub (grátis, com GitHub Pages)

### Opção 1 — Pelo site do GitHub (sem instalar nada)

1. Entre em [github.com](https://github.com) e clique em **New repository**
2. Dê um nome, ex: `renda-extra-academy`, deixe **Public** e clique em **Create repository**
3. Clique em **uploading an existing file**
4. Arraste **todos os arquivos e pastas** deste projeto (index.html, css/, js/, assets/, README.md)
5. Clique em **Commit changes**
6. Vá em **Settings → Pages** (menu lateral)
7. Em **Branch**, selecione `main` e pasta `/ (root)`, clique em **Save**
8. Em ~1 minuto seu site estará no ar em:
   `https://SEU-USUARIO.github.io/renda-extra-academy/`

### Opção 2 — Pelo Git (terminal)

```bash
git init
git add .
git commit -m "Meu site de cursos de renda extra"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/renda-extra-academy.git
git push -u origin main
```

Depois ative o **GitHub Pages** em Settings → Pages (passos 6–8 acima).

## 🎓 Como trocar os cursos de exemplo pelos seus

1. Abra o arquivo **`js/courses.js`** em qualquer editor de texto
2. Lá estão os 2 cursos genéricos de exemplo — altere:
   - `title` → nome do curso
   - `description` → descrição
   - `modules` e `lessons` → seus módulos e aulas (título, duração e descrição)
3. Para **adicionar um curso novo**, copie um bloco inteiro `{ ... }` e mude o conteúdo (não esqueça de mudar o `id`)
4. Categorias disponíveis: `"online"` 💻 | `"vendas"` 🛒 | `"servicos"` 🛠️

## 🎬 Como colocar os vídeos das aulas

1. No YouTube/Vimeo, clique em **Compartilhar → Incorporar** e copie o código
2. No `index.html`, substitua a área `<div class="video-screen">...</div>` pelo código copiado

> 💡 Alternativa profissional: hospede o curso na Hotmart/Kiwify e use este site como página oficial/vitrine.

## 🎨 Como mudar cores e nome

- **Nome da plataforma:** procure por `RendaExtra` no `index.html`
- **Cores:** abra `css/style.css` e altere as variáveis no início (`--green`, `--bg`, etc.)

## 🛠️ Tecnologias

HTML5 • CSS3 • JavaScript puro (sem dependências — é só subir e funciona)

## 📄 Licença

Livre para uso pessoal e comercial no seu próprio curso.
