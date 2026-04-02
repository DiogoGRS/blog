/**
 * i18n.js — Internacionalização PT / EN
 *
 * Como funciona:
 * 1. Elementos HTML com data-i18n="chave" são detectados automaticamente
 * 2. setLanguage(lang) troca o texto de todos esses elementos
 * 3. Elementos com data-lang="pt/en" e classe lang-block são exibidos/ocultados
 * 4. A preferência é salva no localStorage
 *
 * Para adicionar uma nova string traduzível:
 *   - Adicione data-i18n="minha_chave" ao elemento no HTML
 *   - Adicione a chave em translations.pt e translations.en abaixo
 *
 * Para blocos de conteúdo por idioma (artigos):
 *   - Adicione class="lang-block lang-active" data-lang="pt" (ou "en")
 *   - O setLanguage alterna a classe lang-active automaticamente
 */

const translations = {
  pt: {
    // Navegação
    nav_home:      'Início',
    nav_posts:     'Artigos',
    nav_about:     'Sobre Mim',
    nav_portfolio: 'Portfólio',

    // Index
    home_title:    'Blog do Diogo',
    hero_subtitle: 'Desenvolvimento · Design · Aprendizado',
    home_subtitle: 'Aqui você encontra dicas de tecnologia e pode conferir meu portfólio.',

    // Posts
    posts_title:        'Artigos',
    posts_subtitle:     'Artigos sobre desenvolvimento, JavaScript e o ecossistema web.',
    posts_read_more:    'Ler mais \u2192',
    post_regex_excerpt:   'Um resumo sobre expressões regulares e onde usá-las no seu código JS.',
    post_search_excerpt:  'Métodos nativos para consultar dados em strings, JSONs etc.',
    post_strings_excerpt: 'O JavaScript tem vários métodos úteis disponíveis em qualquer string do código.',
    post_sort_excerpt:    'Como sort() e toSorted() funcionam por baixo dos panos — e por que 10 vem antes do 2.',
    post_strmanip_excerpt: 'trim(), replace() com regex, normalize() e Intl.Collator: as ferramentas essenciais de manipulação de strings.',

    // Artigos — metadados compartilhados
    read_time_min: 'min de leitura',

    // About
    about_title:          'Sobre Mim',
    about_who_text:       'Sou Diogo Gonçalves Rosa, desenvolvedor Full Stack com mais de 3 anos de experiência construindo aplicações web robustas, do banco de dados ao frontend. Moro em São Paulo e sou formado em Ciência da Computação pela UENP.',
    about_what_title:     'O que faço',
    about_what_text1:     'Trabalho como desenvolvedor de software pleno na EXT Contabilidade, onde desenvolvo aplicações web completas usando NestJS, Vue.js, Nuxt.js e TypeScript com MongoDB. Projeto e mantenho APIs RESTful, implemento autenticação com Firebase e construo pipelines automatizados para otimizar fluxos contábeis.',
    about_what_text2:     'Antes disso, atuei como freelancer entregando projetos web customizados, landing pages dinâmicas e templates de e-mail, integrando APIs de terceiros e automatizando fluxos de comunicação.',
    about_stack_title:    'Stack e ferramentas',
    about_skill_lang:     'Linguagens',
    about_skill_db:       'Bancos de dados',
    about_skill_test:     'Testes',
    about_skill_tools:    'Ferramentas',
    about_highlights_title: 'Destaques',
    about_highlight_1:    'Automatizei a emissão de notas fiscais e cálculos tributários de ponta a ponta, eliminando 100% do trabalho manual nessas tarefas.',
    about_highlight_2:    'Implementei arquitetura SSR com Nuxt para melhorar performance de SEO e indexação em motores de busca.',
    about_highlight_3:    'Refatorei fluxos de onboarding, redesenhando landing pages e simplificando processos de criação e migração de empresas.',
    about_highlight_4:    'Implementei suítes abrangentes de testes unitários e de integração garantindo confiabilidade em toda a stack.',
    about_education_title: 'Formação',
    about_education_text: 'Bacharel em Ciência da Computação — UENP (Universidade Estadual do Norte do Paraná), 2018–2023.',

    // Portfolio
    portfolio_title: 'Confira alguns dos meus projetos',

    // Footer
    footer_text: 'Obrigado por visitar o Blog do Diogo',
  },

  en: {
    // Navigation
    nav_home:      'Home',
    nav_posts:     'Posts',
    nav_about:     'About Me',
    nav_portfolio: 'Portfolio',

    // Index
    home_title:    "Diogo's Blog",
    hero_subtitle: 'Development · Design · Learning',
    home_subtitle: 'Here you can check a few tech tips and browse my portfolio.',

    // Posts
    posts_title:        'Posts',
    posts_subtitle:     'Articles on development, JavaScript and the web ecosystem.',
    posts_read_more:    'Read more \u2192',
    post_regex_excerpt:   'A summary on regular expressions and where it can be used in your JS code.',
    post_search_excerpt:  'Native methods to query data in strings, JSONs etc.',
    post_strings_excerpt: 'JavaScript has quite a few useful methods that can be used in every string throughout the code.',
    post_sort_excerpt:    'How sort() and toSorted() work under the hood — and why 10 comes before 2.',
    post_strmanip_excerpt: 'trim(), replace() with regex, normalize() and Intl.Collator: the essential string manipulation toolkit.',

    // Articles — shared metadata
    read_time_min: 'min read',

    // About
    about_title:          'About Me',
    about_who_text:       'I\'m Diogo Gonçalves Rosa, a Full Stack Developer with 3+ years of experience building robust web applications from database to frontend. Based in São Paulo, I hold a Bachelor\'s degree in Computer Science from UENP.',
    about_what_title:     'What I do',
    about_what_text1:     'I work as a mid-level software developer at EXT Contabilidade, where I build complete web applications using NestJS, Vue.js, Nuxt.js, and TypeScript with MongoDB. I design and maintain RESTful APIs, implement Firebase authentication, and build automated pipelines to optimize accounting workflows.',
    about_what_text2:     'Previously, I worked as a freelancer delivering custom web projects, dynamic landing pages, and email templates, integrating third-party APIs and automating communication workflows.',
    about_stack_title:    'Stack & tools',
    about_skill_lang:     'Languages',
    about_skill_db:       'Databases',
    about_skill_test:     'Testing',
    about_skill_tools:    'Tools',
    about_highlights_title: 'Highlights',
    about_highlight_1:    'Engineered end-to-end automation for invoice issuance and tax calculations, eliminating 100% of manual work on these tasks.',
    about_highlight_2:    'Implemented SSR architecture with Nuxt to improve SEO performance and search engine indexing.',
    about_highlight_3:    'Refactored onboarding flows, redesigning landing pages and streamlining company creation and migration processes.',
    about_highlight_4:    'Implemented comprehensive unit and integration test suites ensuring reliability across the full application stack.',
    about_education_title: 'Education',
    about_education_text: 'Bachelor\'s Degree in Computer Science — UENP (State University of Northern Paraná), 2018–2023.',

    // Portfolio
    portfolio_title: 'Check out a few of my projects',

    // Footer
    footer_text: "Thank you for visiting Diogo's Blog",
  },
};

const STORAGE_KEY = 'lang';
const DEFAULT_LANG = 'pt';

function setLanguage(lang) {
  if (!translations[lang]) return;

  // Troca o texto de todos os elementos marcados com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Alterna blocos de conteúdo por idioma (artigos)
  document.querySelectorAll('.lang-block').forEach(function (el) {
    el.classList.toggle('lang-active', el.getAttribute('data-lang') === lang);
  });

  // Atualiza o atributo lang da página (bom para acessibilidade e SEO)
  document.documentElement.setAttribute('lang', lang);

  // Salva a preferência
  localStorage.setItem(STORAGE_KEY, lang);

  // Destaca o botão do idioma ativo
  document.querySelectorAll('.btn-lang').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Expõe globalmente para os botões no header chamarem via onclick
window.setLanguage = setLanguage;

// Inicializa com o idioma salvo ou o padrão
const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
// A inicialização real acontece depois que os componentes carregarem (em components.js)
window._initialLang = savedLang;
