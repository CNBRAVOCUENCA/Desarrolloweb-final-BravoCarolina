# Documentación del Proyecto — Bravo Studio

Este documento reúne la evidencia y la explicación del proyecto para la entrega final. Contiene las secciones solicitadas: Introducción, Estructura HTML, Estilos SASS/CSS, Responsive y Estilos Avanzados, Repositorio y Demo, y Reflexión final.

---

1) Introducción del Proyecto

- Nombre del sitio web: Bravo Studio
- Tipo de sitio: Institucional (estudio ficticio de diseño y desarrollo)
- Objetivo: Mostrar una presencia institucional con información sobre servicios, portfolio y contacto. Está pensado para demostrar habilidades en HTML semántico, SASS, responsive y optimización básica.
- Público objetivo: Estudiantes o clientes pequeños que buscan un primer sitio institucional.
- Temática: Identidad digital y servicios de diseño/desarrollo.

Breve descripción: Bravo Studio es un sitio estático de ejemplo creado para la evaluación final. Incluye 5 páginas HTML, sistema de estilos en SASS con partials, variables, mixins, extend y nesting, además de animaciones ligeras con AOS y adaptaciones de Bootstrap a la paleta del proyecto.

---

2) Estructura HTML

Archivos principales:

- `index.html` — página principal con hero y secciones de servicios.
- `about.html` — información del equipo y misión.
- `services.html` — lista de servicios ofrecidos.
- `portfolio.html` — galería con proyectos (placeholders).
- `contact.html` — formulario accesible para contacto.

Puntos importantes del código:

- Uso de etiquetas semánticas: `header`, `main`, `section`, `article`, `footer`, `figure` y `figcaption`.
- Navegación consistente en la barra `nav` presente en todas las páginas, garantizando acceso a las 5 páginas desde cualquier vista.
- Metadatos SEO básicos: `meta description`, `meta viewport`, `lang="es"` y `link rel="canonical"` en `index.html`.

Explicación de la estructura: Cada página comparte una cabecera con la navegación y un pie de página. El contenido principal está dentro de `main` y dividido en secciones relevantes según la temática de la página.

Capturas de código: tomar pantallazos de los archivos `index.html`, `about.html`, `services.html`, `portfolio.html` y `contact.html` mostrando el uso de etiquetas semánticas y la nav.

---

3) Estilos CSS / SASS

Estructura de carpetas:

- `assets/scss/` — partials y `main.scss`.
- `assets/css/style.css` — CSS compilado (producido desde SASS).

Archivos SASS principales:

- `_variables.scss` — definición de colores, tipografías y breakpoints.
- `_mixins.scss` — mixins para `transition` y `respond-to`.
- `_base.scss` — estilos base y tipografía.
- `_layout.scss` — reglas de layout específicas como `.hero` y `.site-header`.
- `_components.scss` — componentes reutilizables como botones y formularios.
- `main.scss` — importa los partials y define `@extend`, `nesting` y reglas responsivas.

Uso de SASS:

- Variables para paleta (`$primary`, `$accent`), fuente y breakpoints.
- Mixins para transiciones y media-queries (`@mixin respond-to`).
- Nesting y `@extend` para evitar duplicación y mantener consistencia visual.

Capturas: tomar pantallazos de los archivos SASS mostrando variables, mixins y ejemplos de nesting.

Decisiones de diseño: se eligió una paleta sobria azul-anaranjada para contraste; Bootstrap se mantiene para grid y comportamiento, pero los estilos principales se personalizan vía SASS para no dejar la apariencia "bootstrap por defecto".

---

4) Responsive Design y Estilos Avanzados

Adaptación a dispositivos:

- Se usan breakpoints definidos en variables y el mixin `respond-to` para ajustar paddings y disposición.
- El layout utiliza el grid de Bootstrap y media queries para adaptar columnas en `portfolio` y `features`.

Animaciones y transiciones:

- Se integra AOS (Animate On Scroll) para animaciones ligeras (`data-aos` en elementos) y un mixin de transición para botones.
- Efectos CSS: `transition` en botones, `box-shadow` y transformaciones ligeras en tarjetas de proyecto.

Capturas: mostrar vistas Desktop / Tablet / Mobile (400–1024–1366 px) con las mismas páginas.

---

5) Repositorio de GitHub

- URL del repositorio: `https://github.com/CNBRAVOCUENCA/Desarrolloweb-final-BravoCarolina`
- Historial de commits: se recomienda tomar capturas del historial en GitHub mostrando commits claros (ej.: "Inicial: estructura del proyecto y páginas HTML", "Add documentation").

Evidencia de versionado: confirmar que los commits están presentes en la rama `main` del remoto.

---

6) Demo del Sitio Web

Publicación recomendada:

- Vercel: conectar el repositorio y desplegar como sitio estático. Si usas compilación de SASS en el servidor, configurar build command: `sass assets/scss/main.scss:assets/css/style.css`.
- Netlify: conectar repo y definir build command similar, o subir el sitio estático si ya está compilado.

Capturas: tomar vistas Desktop / Tablet / Mobile de la URL pública.

---

Reflexión final

Breve explicación de la temática elegida y dificultades (1–2 párrafos):

"Elegí crear un sitio institucional (Bravo Studio) para mostrar un flujo real de trabajo: estructura semántica, uso de SASS y despliegue. Las principales dificultades fueron conciliar la personalización visual con la estructura de Bootstrap y asegurar que las rutas y assets cargaran correctamente en el despliegue. También hubo que resolver el merge con el repositorio remoto al integrarlo por primera vez."

---

Instrucciones para generar el PDF/Google Slides de entrega:

1. Abrir el repositorio local y el sitio publicado.
2. Tomar capturas de pantalla del código (HTML y SASS), del repositorio GitHub (commits) y del sitio en Desktop/Tablet/Mobile.
3. Insertar las capturas dentro de Google Slides o un documento PDF organizado en bloques: Código, Repositorio, Demo y Reflexión final.
4. Exportar a PDF o compartir el enlace de Google Slides.

---

Comandos útiles

Compilar SASS localmente con dart-sass:

```bash
sass assets/scss/main.scss:assets/css/style.css --style=compressed
```

Comandos para subir al remoto (ejemplo):

```bash
git add .
git commit -m "Add documentation"
git pull origin main --allow-unrelated-histories
git push origin main
```

---

Si querés, puedo:

- Generar automáticamente las capturas de pantalla básicas (si me indicas una URL pública o abro el HTML localmente y tomo screenshots desde aquí). 
- Completar el README/DOCUMENTATION con imágenes si subes las capturas al repositorio.

Fin de la documentación.
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
