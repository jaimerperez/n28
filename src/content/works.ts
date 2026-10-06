import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import diego from '../assets/diego.jpg';

// Los vídeos NO se versionan: GitHub Pages limita a 1 GB por repositorio.
// Cada trabajo referencia un vídeo de Vimeo o YouTube y se incrusta solo al pulsar
// "reproducir", así no se carga nada de terceros hasta que el visitante lo pide.

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
}

// TODO(n28): pegar los ids reales de Vimeo/YouTube y añadir miniaturas en src/assets/.
export const works: Work[] = [
  {
    title: 'Diego',
    category: { es: 'Videobook', en: 'Actor reel' },
    video: { provider: 'vimeo', id: '' },
    poster: diego,
  },
  {
    title: 'Hermanas',
    category: { es: 'Pieza narrativa', en: 'Narrative piece' },
    video: { provider: 'vimeo', id: '' },
  },
  {
    title: 'Metro',
    category: { es: 'Videobook', en: 'Actor reel' },
    video: { provider: 'vimeo', id: '' },
  },
];

export function embedUrl({ provider, id }: Video): string | null {
  if (!id) return null;
  return provider === 'vimeo'
    ? `https://player.vimeo.com/video/${id}?dnt=1&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
}
