# Diogo's Blog — Arquitetura e Boas Práticas

## Visão Geral

Blog pessoal estático (HTML/CSS/JS puro), sem backend, sem build tools.
Deploy no Vercel via GitHub.

---

## Estrutura de Pastas

```
diogo-blog/src/
├── components/       ← Fragmentos HTML reutilizáveis (header, footer)
├── js/               ← Scripts de comportamento
├── pages/            ← Páginas HTML do site
├── articles/         ← Artigos em Markdown (fonte do conteúdo)
└── styles/           ← CSS organizado em camadas
```

---

## CSS — Design Tokens

**Regra:** Nenhum valor fixo (hex, px, rem) deve aparecer em `style.css`.
Todos os valores vivem em `styles/tokens.css` como custom properties CSS (`--nome`).

### Camadas de CSS
1. `tokens.css` — Fonte da verdade: cores, fontes, espaçamentos, tamanhos
2. `style.css`  — Layout e estilos que consomem os tokens via `var(--...)`

### Dark / Light Mode
- O atributo `data-theme="dark"` ou `data-theme="light"` é aplicado na tag `<html>`
- `tokens.css` define as variáveis padrão (light) em `:root` e sobrescreve em `[data-theme="dark"]`
- A preferência é salva no `localStorage` (chave: `theme`)
- Se não houver preferência salva, usa `prefers-color-scheme` do sistema operacional

---

## JavaScript

### `js/theme.js`
Responsável exclusivamente pelo toggle dark/light.
- Inicializa o tema ao carregar a página (antes do render para evitar flash)
- Expõe `window.toggleTheme()` chamado pelo botão no header

### `js/i18n.js`
Responsável pela internacionalização PT/EN.
- Elementos traduzíveis têm o atributo `data-i18n="chave"` no HTML
- O objeto `translations` contém todas as strings indexadas por idioma e chave
- `window.setLanguage(lang)` percorre todos os `[data-i18n]` e substitui o texto
- A preferência é salva no `localStorage` (chave: `lang`)
- Padrão: `pt`

### `js/components.js`
Responsável por carregar e injetar os componentes HTML (header e footer).
- Busca todos os elementos com `data-component="nome"` na página
- Faz `fetch('../components/nome.html')` e substitui o elemento pelo HTML retornado
- **Atenção:** `fetch()` não funciona via protocolo `file://`. Use um servidor local para desenvolvimento (ex: extensão Live Server do VS Code).

---

## Componentes

Apenas o que é reutilizado em **todas** as páginas vira componente:
- `components/header.html` — header + nav + botão de tema + seletor de idioma
- `components/footer.html` — rodapé

Páginas individuais (`index`, `posts`, `about-me`, `portfolio`) **não** são componentes — são arquivos HTML completos.

---

## Internacionalização (i18n)

- Idiomas suportados: `pt` (padrão) e `en`
- Strings ficam em `js/i18n.js` no objeto `translations`
- Para adicionar uma nova string traduzível:
  1. Adicione `data-i18n="minha_chave"` ao elemento HTML
  2. Adicione a chave em `translations.pt` e `translations.en`

---

## Deploy (Vercel)

1. Push para o branch `main` no GitHub
2. Vercel detecta automaticamente como site estático
3. Configurar o diretório raiz como `diogo-blog/src` (ou adicionar `vercel.json`)
4. Sem variáveis de ambiente necessárias

---

## Adicionando um Novo Artigo

1. Escreva o conteúdo em `articles/nome-do-artigo.md`
2. Crie uma página HTML em `pages/` baseada no template de artigo
3. Adicione um item na lista em `pages/posts.html`
