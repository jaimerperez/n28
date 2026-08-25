/**
 * Punto único de configuración del sitio.
 * Cambiar la marca, el contacto o las redes se hace solo aquí.
 */
export const siteConfig = {
  name: 'NOMBRE_EMPRESA',
  legalName: 'NOMBRE_EMPRESA S.L.',
  tagline: 'Videobooks y grabaciones para actores',
  description:
    'Producimos videobooks, self-tapes y material audiovisual para actores y actrices. Grabación, dirección de actores y postproducción en un mismo estudio.',
  locale: 'es-ES',
  email: 'hola@example.com',
  phone: '+34 600 000 000',
  city: 'Madrid',
  social: {
    instagram: 'https://instagram.com/',
    vimeo: 'https://vimeo.com/',
  },
  /** ID del formulario de Web3Forms. Se inyecta en build desde un secreto. */
  contactFormKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/trabajos', label: 'Trabajos' },
  { href: '/precios', label: 'Precios' },
  { href: '/contacto', label: 'Contacto' },
] as const;
