# Documentación del Proyecto — Bravo Studio

## 1. Introducción del Proyecto

- Nombre del sitio web: Bravo Studio
- Tipo de sitio: Institucional (ficticio)
- Objetivo: Mostrar una web institucional responsive con identidad visual y buenas prácticas HTML/SASS/SEO.
- Público objetivo: Profesionales y pequeñas empresas que buscan servicios digitales.

Breve descripción: Bravo Studio es un sitio de ejemplo creado para la Evaluación Final del curso. Contiene 5 páginas HTML, sistema de estilos en SASS y recursos listos para publicar.

## 2. Estructura HTML

Archivos principales:
- `index.html`
- `about.html`
- `services.html`
- `portfolio.html`
- `contact.html`

Estructura de navegación: la `nav` está presente en cada página y permite acceder a las 5 páginas desde cualquier vista.

Ejemplo (extracto de `index.html`):

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="index.html">Bravo Studio</a>
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
      <li class="nav-item"><a class="nav-link" href="about.html">Nosotros</a></li>
      <!-- ... -->
    </ul>
  </div>
</nav>
```

Breve explicación: Se usa HTML5 semántico (`header`, `main`, `article`, `footer`) y etiquetas `h1..h3` con descripciones accesibles. Las rutas a los recursos son relativas para permitir despliegue estático.

## 3. Estilos CSS / SASS

Estructura de carpetas:

- `assets/scss/_variables.scss` — variables de color y breakpoints
- `assets/scss/_mixins.scss` — mixins (transitions, respond-to)
- `assets/scss/_base.scss` — reset y base typografía
- `assets/scss/_layout.scss` — layout y header/hero
- `assets/scss/_components.scss` — botones, formulario
- `assets/scss/main.scss` — archivo principal que importa partials

Uso de SASS: variables (`$primary`), nesting (ej. `.project-card { figcaption { ... } }`), mixins (`@mixin transition`) y `@extend` con un placeholder `%card-base`.

Fragmento de `main.scss`:

```scss
@import 'variables';
@import 'mixins';
@import 'base';
@import 'layout';
@import 'components';

%card-base{...}
.card{ @extend %card-base; }
```

## 4. Responsive Design y Estilos Avanzados

Se implementaron media queries mediante el mixin `respond-to` y uso de Grid/Flexbox con Bootstrap para garantizar adaptabilidad.

Animaciones: se incluyen animaciones ligeras con AOS (data-aos en elementos) y transiciones en botones.

Capturas recomendadas (añadir en el PDF/Slides):
- Vista Desktop: mostrar `index.html` completo
- Vista Tablet: mostrar `index.html` con menú colapsado o layout intermedio
- Vista Mobile: mostrar formulario de contacto y navegación mobile

## 5. Repositorio de GitHub

Repositorio: https://github.com/CNBRAVOCUENCA/Desarrolloweb-final-BravoCarolina

Incluir en la entrega PDF/Slides capturas del repositorio y del historial de commits para evidenciar versionado.

## 6. Demo del Sitio Web

Publicación sugerida: Vercel o Netlify. Instrucciones rápidas:

Vercel:
1. Conectar repositorio GitHub.
2. Seleccionar rama `main`.
3. Deploy automático — preset `Static`.

Netlify (opción con build SASS):
- Build command: `sass assets/scss/main.scss:assets/css/style.css`
- Publish directory: `/`

## 7. Reflexión final

Breve (1-2 párrafos):

El proyecto consolidó prácticas vistas en el curso: estructura semántica, SASS modular y responsive design. Las principales dificultades fueron ajustar la identidad visual y asegurar rendimiento; se resolvieron optimizando assets y limitando animaciones.

---
Nota: Para la entrega final en PDF/Slides, añadir capturas de pantalla reales del código (editores) y las vistas Desktop/Tablet/Mobile. Este archivo documenta la estructura, pero la evaluación requiere capturas insertadas en el PDF/Slides.
