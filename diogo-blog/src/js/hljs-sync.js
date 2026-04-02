/**
 * hljs-sync.js — Inicialização e sincronização do highlight.js
 *
 * Responsabilidades:
 * 1. Roda o highlighting em todos os blocos <pre><code> da página
 * 2. Sincroniza o tema do hljs (github / github-dark) com o tema do blog
 *    via MutationObserver no atributo data-theme do <html>
 *
 * ATENÇÃO: o tema inicial é definido inline no <head> de cada página
 * para evitar flash. Este script cuida apenas da troca após o carregamento.
 */

var HLJS_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/';

function syncHljsTheme() {
  var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  var themeLink = document.getElementById('hljs-theme');
  if (themeLink) {
    themeLink.href = HLJS_BASE + (isDark ? 'github-dark' : 'github') + '.min.css';
  }
}

hljs.highlightAll();

new MutationObserver(syncHljsTheme).observe(
  document.documentElement,
  { attributes: true, attributeFilter: ['data-theme'] }
);
