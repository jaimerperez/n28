import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import n28project from '../assets/n28project.jpg';
import hermanas from '../assets/hermanas.jpg';
import laPulsion from '../assets/la-pulsion-de-la-muerte.jpg';

// Los vídeos NO se versionan: GitHub Pages limita a 1 GB por repositorio.
// Cada trabajo referencia un vídeo de Vimeo o YouTube y se incrusta solo al pulsar
// "reproducir", así no se carga nada de terceros hasta que el visitante lo pide.
// Las miniaturas son las de Vimeo, descargadas a src/assets/.

export interface Video {
  provider: 'vimeo' | 'youtube';
  /** Id del vídeo: vimeo.com/<id> o youtube.com/watch?v=<id>. Vacío = "Próximamente". */
  id: string;
}

export interface Work {
  title: string;
  category: Record<Lang, string>;
  video: Video;
  poster?: ImageMetadata;
  /** `contain` para miniaturas que son un cartel o logo y no deben recortarse. */
  posterFit?: 'cover' | 'contain';
}

export const works: Work[] = [
  {
    title: 'N28Project',
    category: { es: 'Showreel', en: 'Showreel' },
    video: { provider: 'vimeo', id: '1182737117' },
    poster: n28project,
    posterFit: 'contain',
  },
  {
    title: 'Hermanas',
    category: { es: 'Pieza narrativa', en: 'Narrative piece' },
    video: { provider: 'vimeo', id: '1182730898' },
    poster: hermanas,
  },
  {
    title: 'La pulsión de la muerte',
    category: { es: 'Pieza narrativa', en: 'Narrative piece' },
    video: { provider: 'vimeo', id: '1210176229' },
    poster: laPulsion,
  },
];

export function embedUrl({ provider, id }: Video): string | null {
  if (!id) return null;
  return provider === 'vimeo'
    ? `https://player.vimeo.com/video/${id}?dnt=1&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
}
