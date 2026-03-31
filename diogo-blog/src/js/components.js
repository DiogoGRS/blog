/**
 * components.js — Carregamento de componentes HTML
 *
 * Como funciona:
 * 1. Busca todos os elementos com o atributo data-component na página
 * 2. Faz fetch do arquivo HTML correspondente em /components/
 * 3. Substitui o placeholder pelo HTML do componente
 * 4. Após carregar todos os componentes, aplica o idioma inicial (i18n)
 *    e atualiza o ícone do botão de tema
 *
 * ATENÇÃO: fetch() não funciona via protocolo file://.
 * Use um servidor local para desenvolver (ex: Live Server no VS Code).
 *
 * Estrutura esperada nas páginas:
 *   <div data-component="header"></div>
 *   <div data-component="footer"></div>
 */

async function loadComponents() {
  const placeholders = document.querySelectorAll('[data-component]');

  // Carrega todos os componentes em paralelo para melhor performance
  const promises = Array.from(placeholders).map(async function (placeholder) {
    const name = placeholder.getAttribute('data-component');

    try {
      const response = await fetch('../components/' + name + '.html');
      if (!response.ok) throw new Error('Falha ao carregar componente: ' + name);
      const html = await response.text();

      // Cria um elemento temporário para converter a string HTML em DOM
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // Substitui o placeholder pelo conteúdo real do componente
      placeholder.replaceWith(...temp.childNodes);
    } catch (err) {
      console.warn('[components.js]', err.message);
    }
  });

  await Promise.all(promises);

  // Após todos os componentes carregarem, aplica idioma e tema
  if (window.setLanguage && window._initialLang) {
    window.setLanguage(window._initialLang);
  }

  // Sincroniza o ícone do botão de tema com o tema atual
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeBtn = document.getElementById('btn-theme');
  if (themeBtn) {
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }
}

// Inicia o carregamento assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadComponents);
