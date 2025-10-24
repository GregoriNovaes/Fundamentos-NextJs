import type { Metadata } from "next";
import { LandingPage } from "@/templates/landing-page";

export const metada: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliados em um único lugar.',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliados em um único lugar.',
    url: 'Imagem fica aqui',
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: 'Site.Set'
      }
    ]
  }
}

export default function HomePage() {
  return <LandingPage />
}