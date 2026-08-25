/**
 * Punto único de configuración del sitio.
 * Cambiar la marca, el contacto o las redes se hace solo aquí.
 */
export const siteConfig = {
  name: 'n28',
  legalName: 'n28',
  tagline: 'Videobooks y grabaciones para actores',
  description:
    'Estudio especializado en videobooks, self-tapes y material audiovisual para actores y actrices. Grabación, dirección de actores y postproducción bajo un mismo techo.',
  locale: 'es-ES',
  email: 'hola@n28.es',
  phone: '+34 600 000 000',
  city: 'Madrid',
  social: {
    instagram: 'https://instagram.com/',
    vimeo: 'https://vimeo.com/',
  },
  /** Clave de acceso de Web3Forms. Se inyecta en build desde un secreto del repositorio. */
  contactFormKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/trabajos', label: 'Trabajos' },
  { href: '/precios', label: 'Precios' },
  { href: '/contacto', label: 'Contacto' },
] as const;
