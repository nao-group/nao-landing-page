import React from "react"
import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
// @ts-ignore: global stylesheet import is handled by Next.js
import './globals.css'
import './nao.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'NAO Group | Persiapan CSCA dengan Caramu',
  description: 'NAO Group membantu calon mahasiswa Indonesia mempersiapkan CSCA melalui les online StudyNAO dan platform latihan mandiri ThinkNAO.',
  icons: {
    icon: '/logo/nao_icon_dark.png',
    shortcut: '/logo/nao_icon_dark.png',
    apple: '/logo/nao_icon_dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}