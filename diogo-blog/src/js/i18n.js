/**
 * i18n.js — Internacionalização PT / EN
 *
 * Como funciona:
 * 1. Elementos HTML com data-i18n="chave" são detectados automaticamente
 * 2. setLanguage(lang) troca o texto de todos esses elementos
 * 3. A preferência é salva no localStorage
 * 4. Os botões PT/EN no header chamam setLanguage via onclick
 *
 * Para adicionar uma nova string traduzível:
 *   - Adicione data-i18n="minha_chave" ao elemento no HTML
 *   - Adicione a chave em translations.pt e translations.en abaixo
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
    posts_title:   'Artigos',

    // About
    about_title:          'Sobre Mim',
    about_who_title:      'Quem sou',
    about_who_text:       'Me chamo Diogo, tenho 26 anos e moro no Brasil.',
    about_what_title:     'O que faço',
    about_what_text1:     'Trabalho como desenvolvedor de software em uma empresa de contabilidade, usando Vue.js e NestJS.',
    about_what_text2:     'Tenho experiência com cloud, SSR, gestão de blogs e campanhas de marketing multicanal.',
    about_learning_title: 'Minha jornada',
    about_learning_text1: 'Estou aprimorando minhas bases de desenvolvimento frontend e backend.',
    about_learning_text2: 'Construí este blog começando apenas com HTML, adicionando CSS, JavaScript, e eventualmente bibliotecas e frameworks.',

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
    posts_title:   'Posts',

    // About
    about_title:          'About Me',
    about_who_title:      'Who I am',
    about_who_text:       'My name is Diogo. I live in Brazil and I\'m 26 years old.',
    about_what_title:     'What I do',
    about_what_text1:     'I work as a software developer at an accounting company, using Vue.js and NestJS.',
    about_what_text2:     'I also have experience in clouds, SSR, blog management, and multi-channel marketing campaigns.',
    about_learning_title: 'My learning journey',
    about_learning_text1: 'I\'m currently improving my frontend and backend development foundations.',
    about_learning_text2: 'I built this blog expanding from HTML only, then adding CSS, JavaScript, and eventually libraries and frameworks.',

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
