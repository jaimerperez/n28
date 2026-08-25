/**
 * Construye una URL respetando el `base` del sitio.
 *
 * El mismo build se sirve en dos rutas distintas según el destino:
 *   - dominio propio     -> BASE_URL = '/'              -> url('/contacto') = '/contacto'
 *   - página de proyecto -> BASE_URL = '/videobook-web' -> url('/contacto') = '/videobook-web/contacto'
 *
 * Astro no prefija los `href` escritos a mano, así que todo enlace interno
 * y todo recurso de `public/` debe pasar por aquí.
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}

/** True si `path` es la página que se está renderizando. */
export function isCurrent(pathname: string, path: string): boolean {
  const strip = (value: string) => value.replace(/\/+$/, '') || '/';
  return strip(pathname) === strip(url(path));
}
