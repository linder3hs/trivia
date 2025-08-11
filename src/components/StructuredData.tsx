import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: 'Trivia Game - Juego de Preguntas y Respuestas',
    description: 'Pon a prueba tus conocimientos con nuestro juego de trivia interactivo. Categorías de ciencia, geografía, historia, música, cine, deportes y más.',
    url: 'https://trivia-game.vercel.app',
    genre: ['Educational', 'Quiz', 'Trivia'],
    gameItem: {
      '@type': 'Thing',
      name: 'Preguntas de Trivia'
    },
    numberOfPlayers: '1',
    gamePlatform: 'Web Browser',
    operatingSystem: 'Any',
    applicationCategory: 'Game',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    author: {
      '@type': 'Organization',
      name: 'Trivia Game'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trivia Game'
    },
    inLanguage: 'es',
    isAccessibleForFree: true,
    educationalUse: 'Knowledge Testing',
    learningResourceType: 'Interactive Quiz',
    audience: {
      '@type': 'Audience',
      audienceType: 'General Public'
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}