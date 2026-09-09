import React from "react"
import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
// @ts-ignore: global stylesheet import is handled by Next.js
import './globals.css'

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
  title: 'ThinkNAO - CSCA Exam Prep',
  description: 'The bilingual AI-powered exam prep platform built for Indonesian students conquering the CSCA — Maths, Physics, Chemistry, and Academic Chinese, all in one place.',
  generator: 'v0.app',
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
    <html lang="en">
      <body className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
