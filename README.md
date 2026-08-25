# videobook-web

Sitio web corporativo de **NOMBRE_EMPRESA**, estudio de videobooks y grabaciones para actores.

Sitio estático construido con Astro y desplegado en GitHub Pages mediante una cadena
completa de CI/CD. El repositorio se usa también como banco de pruebas de prácticas
DevOps: cada fase del proyecto introduce una herramienta o práctica nueva.

## Stack

| Capa | Tecnología |
|---|---|
| Generador | Astro 7 (salida estática, cero JS por defecto) |
| Estilos | Tailwind CSS 4 |
| Runtime de build | Node 22 (fijado en `.nvmrc`) |
| Hosting | GitHub Pages |

## Desarrollo local

Requiere [nvm](https://github.com/nvm-sh/nvm).

```bash
nvm use            # lee .nvmrc -> Node 22.16.0
npm ci
npm run dev        # servidor de desarrollo en http://localhost:4321
```

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Build de producción a `dist/` |
| `npm run preview` | Sirve `dist/` localmente |

## Configuración de build

`astro.config.mjs` lee dos variables de entorno para soportar los dos escenarios
de despliegue de GitHub Pages:

| Variable | Dominio propio | Página de proyecto |
|---|---|---|
| `SITE_URL` | `https://ejemplo.com` | `https://usuario.github.io` |
| `BASE_PATH` | `/` | `/videobook-web` |

## Decisiones de arquitectura

- **Los vídeos no se versionan.** GitHub Pages limita a 1 GB por repositorio y
  100 GB/mes de tráfico. Los videobooks se sirven embebidos desde Vimeo; en el
  repositorio solo viven las miniaturas optimizadas.
- **Sin backend.** El formulario de contacto se resuelve con un servicio externo
  de reenvío a email, sin servidor propio que mantener.
- **Cero JavaScript por defecto.** Astro no envía JS al cliente salvo que un
  componente lo pida explícitamente.

## Hoja de ruta DevOps

- [x] **Fase 0** — Base del repositorio: Git, `.nvmrc`, EditorConfig, Conventional Commits
- [ ] **Fase 1** — Calidad local: ESLint, Stylelint, Prettier, hooks de pre-commit
- [ ] **Fase 2** — CI en GitHub Actions: build, caché, artefactos, checks obligatorios
- [ ] **Fase 3** — Tests: Playwright E2E, axe (accesibilidad), Lighthouse CI con presupuestos
- [ ] **Fase 4** — Contenedores: Dockerfile multi-stage sobre nginx, publicación en GHCR
- [ ] **Fase 5** — Seguridad: Dependabot, CodeQL, Trivy, gitleaks, SBOM, cabeceras CSP
- [ ] **Fase 6** — IaC: Terraform gestionando DNS y cabeceras en Cloudflare
- [ ] **Fase 7** — Kubernetes: manifests, chart de Helm, cluster local con k3d
- [ ] **Fase 8** — Observabilidad: uptime, Core Web Vitals, Sentry, alertas
- [ ] **Fase 9** — Documentación: ADRs, diagrama de arquitectura, runbook

## Convenciones de commits

Se sigue [Conventional Commits](https://www.conventionalcommits.org/):
`feat:`, `fix:`, `chore:`, `ci:`, `docs:`, `refactor:`, `test:`, `build:`.
