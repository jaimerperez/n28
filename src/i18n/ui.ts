import { url } from '../lib/url';

/**
 * Textos de la home en los dos idiomas. Español en `/`, inglés en `/en/`.
 * Las anclas de sección son las mismas en ambos idiomas.
 */
export const languages = { es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;

export const sections = ['inicio', 'nosotros', 'proyectos', 'servicios', 'contacto'] as const;
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
    nosotros: 'Sobre nosotros',
    proyectos: 'Proyectos',
    servicios: 'Servicios',
    contacto: 'Contacto',
  } satisfies Record<Section, string>,
  hero: {
    title: ['Haz', 'ruido'],
    tagline: 'Proyectamos lo que todavía no se ve',
    cta: 'Crea tu proyecto',
  },
  about: {
    statement:
      'N28Project impulsa la identidad visual de artistas y marcas a través de piezas audiovisuales con narrativa, estilo y dirección cinematográfica.',
    heading: 'Construimos mundos visuales',
    story: [
      'N28Project nació de una idea sencilla:',
      'crear el estudio que siempre quisimos encontrar.',
      'Uno que trata cada historia como si fuera nuestra.',
    ],
    role: 'Dirección creativa · Cofundación',
  },
  work: {
    title: 'Proyectos',
    intro:
      'Creamos piezas audiovisuales que emocionan a través de la imagen, la atmósfera y la identidad narrativa.',
    categories: [
      'Videobooks',
      'Selftapes',
      'Imagen audiovisual',
      'Videoclips',
      'Piezas publicitarias',
      'Dirección creativa audiovisual',
    ],
    play: 'Reproducir',
    soon: 'Próximamente',
    prev: 'Proyecto anterior',
    next: 'Proyecto siguiente',
  },
  services: {
    title: ['Servi', 'cios'],
    full: 'Servicios',
    list: [
      'Videobooks',
      'Selftapes',
      'Imagen audiovisual',
      'Videoclips',
      'Piezas publicitarias',
      'Dirección creativa audiovisual',
    ],
    prices: 'Ver tarifas',
  },
  contact: {
    title: '¿Creamos algo juntos?',
    emailLabel: 'Escríbenos',
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
  legal: { notice: 'Aviso legal', privacy: 'Privacidad' },
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
    nosotros: 'About',
    proyectos: 'Work',
    servicios: 'Services',
    contacto: 'Contact',
  },
  hero: {
    title: ['Make', 'noise'],
    tagline: 'We shape what isn’t visible yet',
    cta: 'Start your project',
  },
  about: {
    statement:
      'N28Project drives the visual identity of artists and brands through audiovisual pieces with narrative, style and cinematic direction.',
    heading: 'We build visual worlds',
    story: [
      'N28Project was born from a simple idea:',
      'to create the kind of studio we always wished we could find.',
      'One that treats every story as if it were our own.',
    ],
    role: 'Creative Director & Co-Founder',
  },
  work: {
    title: 'Work',
    intro:
      'We create emotionally driven audiovisual pieces through image, atmosphere and narrative identity.',
    categories: [
      'Actor reels',
      'Visual campaigns',
      'Music videos',
      'Creative direction',
      'Narrative pieces',
    ],
    play: 'Play',
    soon: 'Coming soon',
    prev: 'Previous project',
    next: 'Next project',
  },
  services: {
    title: ['Servi', 'ces'],
    full: 'Services',
    list: [
      'Actor reels',
      'Self-tapes',
      'Audiovisual image',
      'Music videos',
      'Commercials',
      'Audiovisual creative direction',
    ],
    prices: 'See rates',
  },
  contact: {
    title: 'Let’s tell your story',
    emailLabel: 'Contact',
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
  legal: { notice: 'Legal notice', privacy: 'Privacy' },
};

export const ui: Record<Lang, Dictionary> = { es, en };
