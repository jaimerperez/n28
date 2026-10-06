/**
 * Punto único de configuración del sitio.
 * Cambiar la marca, el contacto o las redes se hace solo aquí.
 */
export const siteConfig = {
  name: 'N28 Project',
  legalName: 'N28 Project',
  tagline: 'Videobooks y piezas audiovisuales para actores',
  description:
    'Estudio audiovisual en Madrid: videobooks, self-tapes, videoclips y dirección creativa para actores, artistas y marcas.',
  locale: 'es-ES',
  email: 'info@n28project.com',
  city: 'Madrid',
  social: {
    instagram: { label: '@n28project', href: 'https://instagram.com/n28project' },
  },
  team: ['Jorge Yumar', 'Selene Rodríguez'],
  /** Clave de acceso de Web3Forms. Se inyecta en build desde un secreto del repositorio. */
  contactFormKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;
