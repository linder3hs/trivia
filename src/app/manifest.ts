import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trivia Game - Juego de Preguntas y Respuestas',
    short_name: 'Trivia Game',
    description: 'Pon a prueba tus conocimientos con nuestro juego de trivia interactivo. Categorías de ciencia, geografía, historia, música, cine, deportes y más.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['games', 'education', 'entertainment'],
    lang: 'es',
  }
}