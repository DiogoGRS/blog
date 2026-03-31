/**
 * theme.js — Dark / Light Mode
 *
 * Como funciona:
 * 1. Aplica o tema ANTES de renderizar o conteúdo (script no <head>)
 *    para evitar o flash de tela branca antes do tema escuro carregar.
 * 2. Prioridade: localStorage > prefers-color-scheme do sistema
 * 3. O tema é aplicado via atributo data-theme="dark|light" na tag <html>
 * 4. O CSS em tokens.css escuta esse atributo e troca as variáveis de cor.
 */

(function () {
  const STORAGE_KEY = 'theme';

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;

    // Sem preferência salva: respeita a configuração do sistema operacional
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Atualiza o ícone do botão de tema, se já estiver no DOM
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Expõe toggleTheme globalmente para o botão no header chamar via onclick
  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  // Inicializa imediatamente (script no <head>)
  applyTheme(getInitialTheme());
})();
