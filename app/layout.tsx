import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Saihajvir Singh - Software Developer',
  description: 'Portfolio of Saihajvir Singh, a Computer Engineering student specializing in AI, Web Development, and Software Engineering.',
  generator: 'Saihajvir Singh',
  icons: {
    icon: [
      {
        url: 'public/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'public/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'public/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: 'public/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
