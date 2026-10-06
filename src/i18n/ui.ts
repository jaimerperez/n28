import { url } from '../lib/url';

/**
 * Textos de la home en los dos idiomas. Español en `/`, inglés en `/en/`.
 * Las anclas de sección son las mismas en ambos idiomas.
 */
export const languages = { es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;

export const sections = ['inicio', 'equipo', 'trabajos', 'contacto'] as const;
export type Section = (typeof sections)[number];

export function homePath(lang: Lang): string {
  return url(lang === 'es' ? '/' : '/en/');
}

const es = {
  htmlLang: 'es',
  ogLocale: 'es_ES',
  description:
    'Estudio audiovisual en Madrid: videobooks, self-tapes, videoclips y dirección creativa para actores, artistas y marcas.',
  skip: 'Saltar al contenido',
  navLabel: 'Secciones',
  nav: {
    inicio: 'Inicio',
    equipo: 'Equipo',
    trabajos: 'Trabajos',
    contacto: 'Contacto',
  } satisfies Record<Section, string>,
  hero: {
    tagline: 'Damos forma a lo que todavía no se ve',
    cta: 'Empieza tu proyecto',
  },
  team: {
    heading: 'Construimos mundos visuales',
    story: [
      'N28Project nació de una idea sencilla:',
      'crear el estudio que siempre quisimos encontrar.',
      'Uno que trata cada historia como si fuera nuestra.',
    ],
    role: 'Dirección creativa · Cofundación',
  },
  selected: {
    label: 'Trabajos seleccionados',
    categories: [
      'Videobooks de actor',
      'Campañas visuales',
      'Videoclips',
      'Dirección creativa',
      'Piezas narrativas',
    ],
    statement:
      'Creamos piezas audiovisuales que emocionan a través de la imagen, la atmósfera y la identidad narrativa',
  },
  work: {
    title: 'Trabajos',
    play: 'Reproducir',
    soon: 'Próximamente',
    prev: 'Trabajo anterior',
    next: 'Trabajo siguiente',
  },
  story: 'Contemos tu historia',
  contact: {
    label: 'Contacto',
    cityNote: '/ trabajando internacionalmente',
    follow: 'Síguenos',
    formTitle: 'Cuéntanos tu proyecto',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    privacyPrefix: 'He leído y acepto la',
    privacyLink: 'política de privacidad',
    submit: 'Enviar',
  },
  footer: { prices: 'Tarifas', notice: 'Aviso legal', privacy: 'Privacidad' },
};

type Dictionary = typeof es;

const en: Dictionary = {
  htmlLang: 'en',
  ogLocale: 'en_GB',
  description:
    'Audiovisual studio in Madrid: actor reels, self-tapes, music videos and creative direction for actors, artists and brands.',
  skip: 'Skip to content',
  navLabel: 'Sections',
  nav: {
    inicio: 'Home',
    equipo: 'Team',
    trabajos: 'Work',
    contacto: 'Contact',
  },
  hero: {
    tagline: 'We shape what isn’t visible yet',
    cta: 'Start your project',
  },
  team: {
    heading: 'We build visual worlds',
    story: [
      'N28Project was born from a simple idea:',
      'to create the kind of studio we always wished we could find.',
      'One that treats every story as if it were our own.',
    ],
    role: 'Creative Director & Co-Founder',
  },
  selected: {
    label: 'Selected work',
    categories: [
      'Actor reels',
      'Visual campaigns',
      'Music videos',
      'Creative direction',
      'Narrative pieces',
    ],
    statement:
      'We create emotionally driven audiovisual pieces through image, atmosphere and narrative identity',
  },
  work: {
    title: 'Work',
    play: 'Play',
    soon: 'Coming soon',
    prev: 'Previous work',
    next: 'Next work',
  },
  story: 'Let’s tell your story',
  contact: {
    label: 'Contact',
    cityNote: '/ working internationally',
    follow: 'Follow us',
    formTitle: 'Tell us about your project',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    privacyPrefix: 'I have read and accept the',
    privacyLink: 'privacy policy',
    submit: 'Send',
  },
  footer: { prices: 'Rates', notice: 'Legal notice', privacy: 'Privacy' },
};

export const ui: Record<Lang, Dictionary> = { es, en };
