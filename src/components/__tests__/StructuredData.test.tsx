import { render } from '@testing-library/react'
import StructuredData from '../StructuredData'

// Mock Next.js Script component
jest.mock('next/script', () => {
  return function MockScript({ children, dangerouslySetInnerHTML, ...props }: any) {
    if (dangerouslySetInnerHTML) {
      return <script {...props} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
    }
    return <script {...props}>{children}</script>
  }
})

describe('StructuredData', () => {
  it('renders structured data script', () => {
    const { container } = render(<StructuredData />)
    const script = container.querySelector('script[type="application/ld+json"]')
    
    expect(script).toBeInTheDocument()
    expect(script?.innerHTML).toContain('"@context":"https://schema.org"')
    expect(script?.innerHTML).toContain('"@type":"Game"')
    expect(script?.innerHTML).toContain('"name":"Trivia Game - Juego de Preguntas y Respuestas"')
  })

  it('includes correct game properties', () => {
    const { container } = render(<StructuredData />)
    const script = container.querySelector('script[type="application/ld+json"]')
    const structuredData = JSON.parse(script?.innerHTML || '{}')
    
    expect(structuredData['@type']).toBe('Game')
    expect(structuredData.genre).toContain('Educational')
    expect(structuredData.genre).toContain('Quiz')
    expect(structuredData.genre).toContain('Trivia')
    expect(structuredData.numberOfPlayers).toBe('1')
    expect(structuredData.isAccessibleForFree).toBe(true)
    expect(structuredData.inLanguage).toBe('es')
  })

  it('includes offer information', () => {
    const { container } = render(<StructuredData />)
    const script = container.querySelector('script[type="application/ld+json"]')
    const structuredData = JSON.parse(script?.innerHTML || '{}')
    
    expect(structuredData.offers).toBeDefined()
    expect(structuredData.offers.price).toBe('0')
    expect(structuredData.offers.priceCurrency).toBe('USD')
    expect(structuredData.offers.availability).toBe('https://schema.org/InStock')
  })
})