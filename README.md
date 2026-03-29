# STRTWEAR – Landing Page

Landing page de moda streetwear premium, construída com React + Vite + Tailwind CSS.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Lucide React** (ícones)
- **Inter** (tipografia)

## Estrutura de Componentes

```
src/
├── components/
│   ├── Navbar.jsx     # Cabeçalho fixo com backdrop-blur, logo centralizada, menu mobile
│   ├── Hero.jsx       # Banner full-screen com CTA
│   ├── Products.jsx   # Grid responsivo com produtos mockados e hover effects
│   └── Footer.jsx     # Newsletter, links institucionais e redes sociais
├── App.jsx            # Layout principal + banner marquee
├── index.css          # Importação do Tailwind CSS e fontes
└── main.jsx           # Entry point
```

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
