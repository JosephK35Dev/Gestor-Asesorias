# Gestor Asesorías

Aplicación Vite + React para las asesorías de inglés.

## Desarrollo local

Instala dependencias con npm ci y arranca el servidor con npm run dev.

## Publicar en GitHub Pages

El flujo de GitHub Actions en .github/workflows/deploy.yml compila la app y publica dist cuando se actualiza main o master.

En GitHub, abre Settings → Pages y selecciona GitHub Actions como fuente de publicación. Después de subir estos cambios, revisa Actions para confirmar que el flujo terminó. La URL publicada aparece en el entorno github-pages.

Vite está configurado para el sitio de proyecto /Gestor-Asesorias/. Si cambias el nombre del repositorio, actualiza base en vite.config.ts.
