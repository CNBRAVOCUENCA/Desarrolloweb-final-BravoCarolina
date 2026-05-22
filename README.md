# Bravo Studio — Proyecto Final (Sitio Estático)

Este repositorio contiene un sitio estático de ejemplo para la Evaluación Final: 5 páginas HTML, sistema de estilos construido con SASS (partials, mixins, variables, nesting, extend) y recursos listos para publicar.

Contenido principal:
- `index.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`
- `assets/scss/` SASS partials y `main.scss`
- `assets/css/style.css` archivo CSS compilado
- `assets/js/main.js`

Cómo usar localmente:
1. Abrir `index.html` en un navegador moderno.
2. Para editar SASS: compilar `assets/scss/main.scss` a `assets/css/style.css` con la herramienta de tu preferencia (dart-sass, node-sass, etc.). Ejemplo con dart-sass:

```bash
sass assets/scss/main.scss:assets/css/style.css --style=compressed
```

Cómo preparar commits para GitHub (ejemplo):
```bash
git init
git add .
git commit -m "Inicial: estructura del proyecto y páginas HTML"
git branch -M main
git remote add origin https://github.com/CNBRAVOCUENCA/Desarrolloweb-final-BravoCarolina.git
git push -u origin main
```

Deploy a Vercel o Netlify:
- En Vercel: conectar el repositorio y seleccionar la rama `main`. Framework Preset: "Other" o "Static". Ruta de publicación: raíz del proyecto.
- En Netlify: arrastrar la carpeta al panel o conectar el repo; Build command si compilas SASS: `sass assets/scss/main.scss:assets/css/style.css` y Publish directory: `/`.
